import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { ABILITY_INPUT_MIN, ABILITY_INPUT_MAX, LEVEL_MIN, } from "./constants";
import {
    ABILITY_KEYS, ABILITY_LABELS, 
    ABILITY_DEFAULT_VALUE, ABILITY_DEFAULT_MAX_VALUE, ABILITY_ABSOLUTE_MAX_VALUE, ABILITY_ABSOLUTE_MIN_VALUE, 
    getAbilityModifier, getAbilityScore,  
} from "@/data/dnd5e_2014/abilities"
import type { AbilityKey } from "@/data/dnd5e_2014/abilities";
import type { AbilitiesWithCalcFields, CharacterData, Abilities, DieResult, RolledAbilityResult, AbilityAssignments, BackgroundChoiceKey, SpellListKey, InventoryItem, ClassWealth } from "@/components/BookContainer/types";

import { getClass, type ClassName } from "@/data/dnd5e_2014/classes";
import {
    addClassEntry, changeClassInClasses, getTotalLevel, removeClassInClasses, 
    setClassLevelInClasses, setClassSubclass,
    toggleClassProficiency, // toggleClassProficiency
} from "./Class/classHelpers"

import { DiceRoll } from '@dice-roller/rpg-dice-roller';
import type { BackgroundName } from "@/data/dnd5e_2014/backgrounds";
import { makeDefaultBackgroundSelection, toggleChoicePick } from "./Background/backgroundHelpers";
import type { RaceName } from "@/data/dnd5e_2014/races";
import { applyRaceTraitChoice, applySubrace, getRacialAbilityBonus, getRacialHpBonusPerLevel, makeDefaultRaceSelection } from "./Race/raceHelpers";
import { toggleClassSpellPick } from "./Spells/spellHelpers";
import { addItem, getEquippedItems, getFullInventory, removeItem, setEquippedCount, type InventoryStack } from "./Equipment/equipmentHelpers";
import { getCharacterProficiencies } from "./proficiencyHelpers";
import { getStartingItems, selectStartingOption, toggleStartingItem } from "./choiceHelpers";
import type { Coins } from "@/data/dnd5e_2014/inventory/currency";
import { getPurse } from "./wealthHelpers";
import { calculateArmorClass, type ArmorClassResult } from "./armorClassHelpers";

//#region ABILITIES
/**
 * Fills out the default state for each ability. 
 * @param id The ability to compute the default state of. 
 * 
 * @returns The calculated default state for the ability. 
 */
function makeDefaultAbility(id: AbilityKey): Abilities {
    return {
        id,
        base: ABILITY_DEFAULT_VALUE,
        racialBonus: { 
            value: 0, 
            source: "" 
        },
        label: ABILITY_LABELS[id],
        isProficient: false,
        max: ABILITY_DEFAULT_MAX_VALUE,
        check: {
            roll: {
                min: null,
                max: null,
                bonus: "",
                proficency: 0,
            }
        }, 
        save: {
            roll: {
                min: null,
                max: null,
                bonus: "",
                proficency: 0,
            }
        },
    };
};


/**
 * Handles the user's input for the `base` ability value, if an empty string or not number, sets to the {@link ABILITY_DEFAULT_VALUE}. 
 * @param rawAbilityValue String representing the user's inputted data for the ability. 
 * @returns The parsed numerical value for the `base` ability value. 
 */
function handleAbilityBaseInput(rawAbilityValue: string): number {
    const trimmedInput = rawAbilityValue.trim();
    if (trimmedInput === "") 
        return ABILITY_DEFAULT_VALUE
    
    const abilityValue = Number(trimmedInput);
    if (Number.isNaN(abilityValue)) 
        return ABILITY_DEFAULT_VALUE
    
    const flooredAbilityValue = Math.floor(abilityValue);
    return Math.min(ABILITY_INPUT_MAX, Math.max(ABILITY_INPUT_MIN, flooredAbilityValue));
};


/**
 * Computes the final value for an ability field, after adding the base value and racial bonus. 
 * 
 * @param ability the ability object to compute the value for. 
 * 
 * @returns The calculated final value for the ability.  
 */
function getValueForAbility(ability: Abilities): number {
    const base = ability.base === "" ? ABILITY_DEFAULT_VALUE : ability.base;
    
    return getAbilityScore(base, ability.racialBonus.value, ability.max);
};


// /**
//  * Computes the calculated value of the Ability's modifier. 
//  * 
//  * @param abilityValue the value of the ability to compute the modifier for. 
//  * 
//  * @returns The calculated modifier for the ability.
//  */
// function getModForAbility(abilityValue: number): number {
//     return Math.floor( (abilityValue - 10) / 2 );
// };

/**
 * Sets the default state for all items in the `rolledAbilityValues` state, 
 * creating a number of items equal to the number of {@link ABILITY_KEYS}.
 * 
 * @returns The default state for all `rolledAbilityValues`, determined by {@link makeDefaultRolledValue}'s return for each item.
 */
function makeDefaultRolledValues(): RolledAbilityResult[] {
    const defaultValues: RolledAbilityResult[] = [];

    for (let i = 0; i < ABILITY_KEYS.length; i++) {
        defaultValues.push(makeDefaultRolledValue());
    }

    return defaultValues;
}

/**
 * Sets the default state for one single item in the `rolledAbilityValues` state, 
 * which prepares the state to hold the total rolled amount, along with each die rolled & if it is dropped. 
 * 
 * @returns The default state for one single `rolledAbilityValues` state item, which contains the total rolled value & fields for each dice roll.
 */
function makeDefaultRolledValue(): RolledAbilityResult {
    return {
        dieTotal: 0,
        dieRolls: [  
            { "value": 0, "isDropped": false }, 
            { "value": 0, "isDropped": false }, 
            { "value": 0, "isDropped": false }, 
            { "value": 0, "isDropped": false } 
        ],
    };
}


/**
 * Sets the default state for the `rolledAbilityAssignments` state, 
 * which represents user's ability assignments for their rolled values. 
 * 
 * @returns The default state for `rolledAbilityAssignments`, which contains the `"--"` default value for an amount of options equal to the size of {@link ABILITY_KEYS}.
 */
function makeDefaultRolledAbilityAssignments(): AbilityAssignments[] {
    const defaultAbilityAssignments: AbilityAssignments[] = []; 

    for (let i = 0; i < ABILITY_KEYS.length; i++) {
        defaultAbilityAssignments.push("--");
    }

    return defaultAbilityAssignments;
}


/**
 * Runs a `DiceRoll` for a single ability item, according to the rules of the rollNotation.  
 * 
 * @param rollNotation String that defines the rules for the `DiceRoll` object.  
 * 
 * @returns the result of {@link formatRolledAbility}'s formatting of the `DiceRoll` 
 */
function rollAbility(rollNotation: string): RolledAbilityResult {
    return formatRolledAbility( new DiceRoll(rollNotation) );
};


/**
 * Organizes the result of a `DiceRoll` object, unpacks the result, and returns it in a format easier to manage. 
 * 
 * @remarks When applying properties to `DiceRoll`, it adds a string next to the numerical value. 
 *          Ex. A notation of `2d8dl1` (2d8 drop 1 lowest value), it formats every othe result as a number but the dropped one as `1d`. 
 *          This is technically true about the result of the dice but annoying to manage directly as is, easier to format first.  
 * 
 * @param diceRollResult the result of the `DiceRoll` object to be formatted. 
 * 
 * @returns The formatted result of an individual `DiceRoll`, with the total value and each roll in the total described in an object. 
 */
function formatRolledAbility(diceRollResult: DiceRoll): RolledAbilityResult {
    const dieTotal = diceRollResult.total;
    
    const groupRolls = diceRollResult.rolls[0];
    if ( typeof groupRolls !== 'object' || !('rolls' in groupRolls) ) {
        throw new Error('Unexpected Roll Format');
    }

    const dieRolls: DieResult[] = groupRolls.rolls.map((die) => {
        if (typeof die === 'number') 
            return { value: die, isDropped: false };
        else 
            return { value: die.value, isDropped: !die.useInTotal };
    });
    
    return { dieTotal, dieRolls };
}; 

//#endregion ABILITIES



//#region ATTRIBUTES

/**
 * Calculates the proficiency bonus for a character level.
 *
 * @remarks A character who has a {@link totalSelectedLevel} below the {@link LEVEL_MIN} treats their level as the min. 
 * A character who has not selected a class yet ({@link totalSelectedLevel} = 0) gets the level 1 bonus.
 *
 * @param level the character's total level.
 * 
 * @returns the proficiency bonus, from +2 at level 1 to +6 at level 20.
 */
function getProficiencyBonusFromLevel(level: number): number {
    const clampedLevel = Math.max(LEVEL_MIN, level);

    return Math.ceil(clampedLevel / 4) + 1;
}

//#endregion ATTRIBUTES 



/**
 * Handles the assembly of the data for a new character across the NewCharacterPages. 
 * 
 * @returns an object containing the following:
 * - `name`: The name of the user's character. 
 * - `alignment`: The alignment of the character,
 * - `abilities`: The 6 ability scores of the character: str, dex, con, int, wis, & cha.
 * - `setName`: handler function to adjust the name. 
 * - `setAlignment`: handler function to adjust the alignment. 
 * - `setAbility`: handler function to adjust a ability's value. 
 * - `validateAbility`: handler function to validate the ability's value after the user exits the input field for the ability.
 */
function useNewCharacterDataState() {
    // State Value for Character Creation 
    const [newCharacterData, setNewCharacterData] = useState<CharacterData>({
        name: "",
        classes: [],
        alignment: "",
        abilities: {
            str: makeDefaultAbility("str"),
            dex: makeDefaultAbility("dex"),
            con: makeDefaultAbility("con"),
            int: makeDefaultAbility("int"),
            wis: makeDefaultAbility("wis"),
            cha: makeDefaultAbility("cha"),
        },
        attributes: {
            proficiencyBonus: 2,
        },
        background: null,
        race: null,
        inventory: [],
        equippedCounts: {},
        startingPicks: {},
        classWealth: { 
            mode: "equipment", 
            goldRoll: null 
        },
        copperAdjustment: 0,
    });
    

    /** Values from newCharacterData used for useMemos. */
    const { classes, race, background, startingPicks, inventory, equippedCounts, classWealth, copperAdjustment } = newCharacterData;
    
    /**
     * Adds a class at level 1. 
     * 
     * @param name The class to add. 
     */
    function addClass(name: ClassName) {
        setNewCharacterData(function update(prev) {
            return { ...prev, classes: addClassEntry(prev.classes, name)};
        })
    }


    /**
     * Switches a chosen class to another. Resets subclass and prof. choices. Level is kept. 
     * 
     * @param current the class to change.
     * @param name the new class. 
     */
    function setClassName(index: number, name: ClassName) {
        setNewCharacterData(function update(prev) {
            return { ...prev, classes: changeClassInClasses(prev.classes, index, name) };
        });
    }


    /**
     * Sets a Class' level, ensured that it does not pass the level cap. 
     * 
     * @param index the class to change the level of. 
     * @param level The requested class' level. 
     */
    function setClassLevel(index: number, level: number) {
        setNewCharacterData(function update(prev) {
            return { ...prev, classes: setClassLevelInClasses(prev.classes, index, level) };
        });
    }


    /**
     * Removes a class from the selected classes. 
     * 
     * @param classIdx The class to remove.
     */
    function removeClass(classIdx: number) {
        setNewCharacterData(function update(prev) {
            return { ...prev, classes: removeClassInClasses(prev.classes, classIdx) };
        });
    }



    /**
     * Sets or clears a chosen class' subclass. 
     * 
     * @param classIdx the class to change the subclass of. 
     * @param subclassId The subclass' id, or null. 
     */
    function setSubclass(classIdx: number, subclassId: string | null) {
        setNewCharacterData(function update(prev) {
            return { ...prev, classes: setClassSubclass(prev.classes, classIdx, subclassId) };
        });
    }



    // /**
    //  * Toggles a choice for a class' proficency choices. 
    //  * 
    //  * @param index the class to change the prof. choices of. 
    //  * @param choiceIndex Which prof. choice to adjust. 
    //  * @param proficencyId The proficency being chosen. 
    //  */
    // function toggleEntryProficiencyChoice(index: number, choiceIndex: number, proficencyId: string) {
    //     setNewCharacterData(function update(prev) {
    //         return { ...prev, classes: toggleEntryProficiency(prev.classes, index, choiceIndex, proficencyId) };
    //     });
    // }


    // States for Rolled Ability Selection 
    const [rolledAbilityValues, setRolledAbilityValues] = useState<RolledAbilityResult[]>(
        makeDefaultRolledValues
    );
    const [rolledAbilityAssignments, setRolledAbilityAssignments] = useState<AbilityAssignments[]>(
        makeDefaultRolledAbilityAssignments
    );



    


    /** Sum of the user's selected levels in every class. @remarks Value of 0 signifies that no class is chosen on the character. */
    const totalSelectedLevel = getTotalLevel(newCharacterData.classes);

    /**
     * Computes the racial ability bonuses from the race selection. 
     * 
     * @returns A bonus for each ability.  
     */
    function calculateRacialBonuses() {
        return getRacialAbilityBonus(newCharacterData.race);
    }

    const racialBonuses = useMemo(calculateRacialBonuses, [newCharacterData.race]);
    
    

    
    /**
     * Retrieves every prof. the character has from their classes/race/background.
     * 
     * @returns The set of prof. indexes.  
     */
    function computeProficiencies(): Set<string> {
        return getCharacterProficiencies({ classes, race, background });
    }

    const proficiencies = useMemo(computeProficiencies, [classes, race, background]);

    
    /**
     * Builds a pair for one ability: its calculated value and modifier, using the calculated racial bonus.
     * 
     * @param abilityKey The ability to build the pair for. 
     * 
     * @returns a [key, ability] pair for Object.fromEntries, that includes calculated fields. 
     */
    function buildAbilityPair(abilityKey: AbilityKey): [AbilityKey, AbilitiesWithCalcFields] {
        const stored = newCharacterData.abilities[abilityKey];
        const isProficient = proficiencies.has(`saving-throw-${abilityKey}`);

        const ability: Abilities = {
            ...stored,
            racialBonus: racialBonuses[abilityKey],
            isProficient,
            save: {
                ...stored.save,
                roll: { 
                    ...stored.save.roll, 
                    proficency: isProficient ? getProficiencyBonusFromLevel(totalSelectedLevel) : 0 
                },
            },
        };
        const value = getValueForAbility(ability);

        return [abilityKey, { ...ability, value, mod: getAbilityModifier(value) }];
    }

    /**
     * Iterates over the abilities and computes calculted values for each; the modifier and final vlaue. 
     * 
     * @returns Every ability with its calculated values 
     */
    function buildAbilitiesWithCalculatedFields(): Record<AbilityKey, AbilitiesWithCalcFields> {
        return Object.fromEntries(
            ABILITY_KEYS.map(buildAbilityPair)
        ) as Record<AbilityKey, AbilitiesWithCalcFields>
    };

    const abilitiesWithCalculatedFields = useMemo( 
        buildAbilitiesWithCalculatedFields, 
        [newCharacterData.abilities, racialBonuses, proficiencies, totalSelectedLevel] 
    );



    function computeHpBonusPerLevel(): number {
        return getRacialHpBonusPerLevel(newCharacterData.race);   
        // NOTE: add feat hpPerLevel function calls + other sources later
    }

    const hpBonusPerLevel = useMemo(computeHpBonusPerLevel, [newCharacterData.race]);



    /**
     * Sets the `base` value for a ability, 
     * 
     * @param abilityKey The ability to set the `base` value for. 
     * @param base The new value for the ability's base value.  
     */
    function setAbilityBase(abilityKey: AbilityKey, base: number | "") {
        setNewCharacterData(prev => {
            if (prev.abilities[abilityKey].base === base) 
                return prev;
            
            return {
                ...prev,
                abilities: {
                    ...prev.abilities,
                    [abilityKey]: { ...prev.abilities[abilityKey], base },
                },
            };
        });
    }





    function updateAbility(key: AbilityKey, update: (ability: Abilities) => Abilities) {
        setNewCharacterData(prev => {
            const current = prev.abilities[key];
            const next = update(current);

            if (next === current)
                return prev;

            return {
                ...prev,
                abilities: { ...prev.abilities, [key]: next },
            };
        });
    }




//    /**
//      * Sets the `racialBonus`'s `value` for a ability, along with the source of the bonus. 
//      * 
//      * @param abilityKey The ability to set the `bonus` value for. 
//      * @param bonus The new value for the ability's `racialBonus` `value`. 
//      * @param source The name of the race which provides the `racialBonus`. 
//      */
    // function setAbilityRacialBonus(abilityKey: AbilityKey, bonus: number, source: string) {
    //     updateAbility(abilityKey, ability => {
    //         if (ability.racialBonus.value === bonus) 
    //             return ability; 

    //         return {
    //             ...ability,
    //             racialBonus: { ...ability.racialBonus, value: bonus, source },
    //         };
    //     });
    // }

    function setAbilityMax(abilityKey: AbilityKey, newMax: number) {
        const max = Math.min(ABILITY_ABSOLUTE_MAX_VALUE, Math.max(ABILITY_ABSOLUTE_MIN_VALUE, newMax));

        updateAbility(abilityKey, ability =>
            ability.max === max ? ability : { ...ability, max }
        );
    }





    /**
     * Handler function for the `onChange` event in the manual ability input. 
     * @param abilityKey The ability which is being modified. 
     * @param rawAbilityValue The raw string value the user inputs. 
     */
    function handleOnChangeManualAbility(abilityKey: AbilityKey, rawAbilityValue: string) {
        setAbilityBase(abilityKey, handleAbilityBaseInput(rawAbilityValue));
    };





    /**
     * Handler function for the `onBlur` event in the manual ability input. 
     * @param abilityKey The ability which is being modified. 
     */
    function handleOnBlurManualAbility(abilityKey: AbilityKey) {
        setNewCharacterData(prev => {
            if (prev.abilities[abilityKey].base !== "") 
                return prev;    
            
            return {
                ...prev,
                abilities: {
                    ...prev.abilities,
                    [abilityKey]: { ...prev.abilities[abilityKey], base: ABILITY_DEFAULT_VALUE },
                },
            };
        });
    };





    /**
     * Handler function for the `onClick` event, for rolling character abilities in character creation.  
     * After a number of rolled values, determined by `numOfAbilityRolls`, is completed, sets the rolled values to the `rolledAbilityValues` state.  
     * 
     * @param numOfAbilityRolls The number of abilities to roll for. 
     */
    function handleOnClickRollAbilities(numOfAbilityRolls: number) {
        const rolledResults: RolledAbilityResult[] = [];

        for (let i = 0; i < numOfAbilityRolls; i++) {  
            // roll 4d6 drop 1 lowest
            rolledResults.push( rollAbility('4d6dl1') );     
        };

        setRolledAbilityValues(rolledResults);
    };





    /**
     * Handler function for the `onChange` event of the `<select>` for each rolled ability.
     * Assigns the rolled total at `index` to the chosen ability, if prevoiusly assigned, releases that ability, 
     * & updates the `rolledAbilityAssignments` state to reflect the choice of which abilities have already been assigned. 
     * 
     * @remarks The UI handles the uniqueness of assignments through disabling already selected ability fields. 
     * 
     * @param index The position of the roll, & its `<select>`, in the `rolledAbilityValues` & `rolledAbilityAssignments` states.
     * @param selection The ability the rolled value is being assigned to, or `"--"` to unassign that ability. 
     */
    function handleOnChangeRollAbilityAssignment(index: number, selection: AbilityAssignments) {
        // return if selecting same thing
        const previousSelection = rolledAbilityAssignments[index];
        if (previousSelection === selection) 
            return;

        // return on default value of 0 (unrolled)  
        const rolledTotal = rolledAbilityValues[index].dieTotal;
        if (rolledTotal === 0)
            return; 

        if (previousSelection !== "--") 
            setAbilityBase(previousSelection, ABILITY_DEFAULT_VALUE);
        
        if (selection !== "--") 
            setAbilityBase(selection, rolledTotal)
        
        const updatedAssignments = [...rolledAbilityAssignments];
        updatedAssignments[index] = selection;

        setRolledAbilityAssignments(updatedAssignments);
    }





    /** 
     * Sets all `abilities.base` values in the `newCharacterData` state to the {@link ABILITY_DEFAULT_VALUE}. 
     */
    function setAllAbilityBasesToDefault () {
        for (let i = 0; i < ABILITY_KEYS.length; i++) {
            setAbilityBase(ABILITY_KEYS[i], ABILITY_DEFAULT_VALUE);
        };
    };


    /** Resests all manual ability selection states & fields to their default state. */
    function resetManualSelection() {
        setAllAbilityBasesToDefault();
        setRolledAbilityAssignments(makeDefaultRolledAbilityAssignments);
    }


    /** Resets all rolled ability selection states & fields to their default state. */
    function resetRolledSelection() {
        setRolledAbilityValues( makeDefaultRolledValues() );
        setAllAbilityBasesToDefault();
    }



    //#region STATE BACKGROUND

    /**
     * Sets the character's selected background, or erases the selection with null. 
     * Choosing a different background erases the previous background's choices. 
     * Choosing the same background returns the previous background choices. 
     *  
     * @param backgroundName The background to select. Null when erasing the selection. 
     */
    function setBackground(backgroundName: BackgroundName | null) {
        setNewCharacterData(function update(prev) {
            if (prev.background?.name === backgroundName) 
                return prev;
            
            return { ...prev, background: backgroundName === null ? null : makeDefaultBackgroundSelection(backgroundName) }
        });
    }


    function toggleBackgroundChoice(choiceKey: BackgroundChoiceKey, text: string) {
        setNewCharacterData(function update(prev) {
            if (prev.background === null)
                return prev;

            const background = toggleChoicePick(prev.background, choiceKey, text);

            return background === prev.background ? prev : { ...prev, background };
        });
    }

    //#endregion


    //#region STATE RACE 

    /**
     * Sets the character's selected background, or erases the selection with null. 
     * Choosing a different background erases the previous background's choices. 
     * Choosing the same background returns the previous background choices. 
     *  
     * @param raceName The background to select. Null when erasing the selection. 
     */
    function setRace(raceName: RaceName | null) {
        setNewCharacterData(function update(prev) {
            if (prev.race?.name === raceName) 
                return prev;
            
            return { ...prev, race: raceName === null ? null : makeDefaultRaceSelection(raceName) }
        });
    }


    /**
     * Sets or clears the chosen subrace. Automatically discards choices that belonged to the old subrace's traits.
     * 
     * @param subraceId The subrace id to set, or null to erase the selected subrace. 
     */
    function setSubrace(subraceId: string | null) {
        setNewCharacterData(function update(prev) {
            if (prev.race === null)
                return prev;

            const updatedRace = applySubrace(prev.race, subraceId);

            if (updatedRace === prev.race)
                return prev;
            else 
                return { ...prev, race: updatedRace };
        });
    }

    /**
     * Checks or unchecks one option of a race's choice.
     * 
     * @param choiceKey The choice's key. 
     * 
     * @param value The option's value.  
     */
    function toggleRaceChoice(choiceKey: string, value: string) {
        setNewCharacterData(function update(prev) {
            if (prev.race === null)
                return prev;

            const updatedRace = applyRaceTraitChoice(prev.race, choiceKey, value);

            if (updatedRace === prev.race)
                return prev;
            else 
                return { ...prev, race: updatedRace };
        })
    }

    //#endregion


    //#region STATE SPELLS 

    function toggleSpellChoice(classIdx: number, listKey: SpellListKey, spellIdx: string) {
        setNewCharacterData(function update(prev) {
            const selectedClass = prev.classes[classIdx];
            const ability = selectedClass ? (getClass(selectedClass.name).spellcasting?.ability) : (undefined);

            if (!ability) 
                return prev;

            const mod = abilitiesWithCalculatedFields[ability].mod;
            const classes = toggleClassSpellPick(prev.classes, classIdx, listKey, spellIdx, mod);

            if (classes === prev.classes) 
                return prev;
            else 
                return { ...prev, classes };
        })
    }

    //#endregion


    //#region STATE GOLD 

    function computeCoinPurse(): Coins {
        return getPurse({ classes, background, classWealth, copperAdjustment })
    }

    const coinPurse = useMemo(
        computeCoinPurse,  
        [classes, background, classWealth, copperAdjustment]
    );


    /**
    * Chooses between the first class's starting equipment and its starting gold.
    *
    * @param mode "equipment" or "gold".
    */
    function chooseClassWealthMode(mode: ClassWealth["mode"]) {
        setNewCharacterData(function update(prev) {
            if (prev.classWealth.mode === mode) 
                return prev;

            return { 
                ...prev, 
                classWealth: { ...prev.classWealth, mode } 
            };
        });
    }



    /**
    * Sets the dice total rolled for starting gold, or clears it to use the average.
    *
    * @param goldRoll the rolled dice total, or null.
    */
    function setGoldRoll(goldRoll: number | null) {
        setNewCharacterData(function update(prev) {
            if (goldRoll !== null && !Number.isInteger(goldRoll)) 
                return prev;

            return { 
                ...prev, 
                classWealth: { ...prev.classWealth, goldRoll } 
            };
        });
    }

    //#endregion

    //#region STATE INVENTORY 

    /**
     * Add items to the character inventory. The "pack" item type are broken into their parts and added. 
     * 
     * @param itemIndex The item's index.  
     * @param quantity How many to add. 
     */
    function addInventoryItem(itemIndex: string, quantity: number = 1) {
        setNewCharacterData(function update(prev) {
            const inventory = addItem(prev.inventory, itemIndex, quantity);

            if (inventory === prev.inventory)
                return prev;
            else 
                return { ...prev, inventory };
        });
    }


    /**
     * Removes items from the character inventory. 
     * 
     * @param itemIndex The item's index.  
     * @param quantity Quantity to remove. 
     */
    function removeInventoryItem(itemIndex: string, quantity: number = 1) {
        setNewCharacterData(function update(prev) {
            const inventory = removeItem(prev.inventory, itemIndex, quantity);

            if (inventory === prev.inventory) 
                return prev;
            else 
                return { ...prev, inventory };
        });
    }
    
    
    /**
     * Retrieves the character's full inventory, from starting items and added items. 
     * 
     * @returns One InventoryStack for each distinct item.  
    */
   function calculateFullInventory(): InventoryStack[] {
       const startingItems = getStartingItems({ classes, background, startingPicks, classWealth }, proficiencies);

       return getFullInventory(startingItems, inventory, equippedCounts);
    }
    
    const fullInventory = useMemo(
        calculateFullInventory, 
        [classes, background, startingPicks, inventory, equippedCounts, proficiencies]
    );
    
    
    /**
     * Sets the number of pieces of a stack are equipped. 
     * 
     * @param itemIndex The item's index.  
     * @param count How many of the item to be equipped. 
     */
    function setItemEquipped(itemIndex: string, count: number) {
        setNewCharacterData(function update(prev) {
            const startingItems = getStartingItems( prev, getCharacterProficiencies(prev) );
            const inventoryStacks = getFullInventory( startingItems, prev.inventory, prev.equippedCounts );
            const equippedCounts = setEquippedCount(prev.equippedCounts, inventoryStacks, itemIndex, count);

            if (equippedCounts === prev.equippedCounts) 
                return prev;
            else 
                return { ...prev, equippedCounts };
        });
    }


    /**
     * Takes one option of a starting equipment choice. 
     * 
     * @param key The choice's key.  
     * @param opionIndex The option to take. 
     */
    function chooseStartingOption(key: string, optionIndex: number) {
        setNewCharacterData(function update(prev) {
            const startingPicks = selectStartingOption(prev, key, optionIndex);

            if (startingPicks === prev.startingPicks) 
                return prev
            else 
                return { ...prev, startingPicks };
        });
    }


    function toggleStartingPick(key: string, partIndex: number, itemIndex: string) {
        setNewCharacterData(function update(prev) {
            const startingPicks = toggleStartingItem(prev, key, partIndex, itemIndex);

            if (startingPicks === prev.startingPicks) 
                return prev;
            else 
                return { ...prev, startingPicks };
        });
    }

    //#endregion


    //#region STATE PROFS. 

    /**
     * Checks or unchecks one proficiency choice in a characterClass's proficiency choice.
     *
     * @param classIdx the class entry to change.
     * @param choiceIndex which of the class's proficiency choices.
     * @param proficiencyId the proficiency's index.
     */
    function toggleProficiencyChoice(classIdx: number, choiceIndex: number, proficiencyId: string) {
        setNewCharacterData(function update(prev) {
            const classes = toggleClassProficiency(prev.classes, classIdx, choiceIndex, proficiencyId);

            return classes === prev.classes ? prev : { ...prev, classes };
        });
    }

    //#region 

    //#region STATE ATTRIBUTES 

    
    function computeArmorClass(): ArmorClassResult {
        return calculateArmorClass( getEquippedItems(fullInventory), abilitiesWithCalculatedFields, classes, proficiencies );
    }

    const armorClass = useMemo(
        computeArmorClass,
        [fullInventory, abilitiesWithCalculatedFields, classes, proficiencies]
    );


    function computeProfBonus() {
        return getProficiencyBonusFromLevel(totalSelectedLevel);
    };

    const profBonus = useMemo(
        computeProfBonus,
        [totalSelectedLevel]
    );


    interface CalculatedAttributes {
        proficiencyBonus: number;
        armorClass: ArmorClassResult;
    };

    function computeCalculatedAttributes(): CalculatedAttributes {
        return {
            proficiencyBonus: profBonus,
            armorClass: armorClass
        }
    };


    const calculatedAttributes = useMemo(
        computeCalculatedAttributes,
        [profBonus, armorClass]
    );
    
    //#endregion






    return {
        name: newCharacterData.name,
        classes: newCharacterData.classes, 
        totalLevel: totalSelectedLevel,
        alignment: newCharacterData.alignment,
        abilities: abilitiesWithCalculatedFields,  
        attributes: calculatedAttributes,
        rolledAbilityValues,
        rolledAbilityAssignments,
        background: newCharacterData.background,
        race: newCharacterData.race,
        hpBonusPerLevel, 
        proficiencies,
        fullInventory, 
        startingPicks, 
        coinPurse,
        classWealth, 

        setClassName, 
        setClassLevel, 
        addClass, 
        removeClass, 
        setSubclass,
        
        setName: (value: string) => setNewCharacterData(
            prev => ({ ...prev, name: value })
        ),
        setTotalLevel: (value: number) => setNewCharacterData(
            prev => ({ ...prev, totalLevel: value })
        ),
        setAlignment: (value: string) => setNewCharacterData(
            prev => ({ ...prev, alignment: value })
        ),
        // setAbilityRacialBonus,
        setAbilityMax,
        handleOnChangeManualAbility,
        handleOnBlurManualAbility, 
        handleOnClickRollAbilities,
        handleOnChangeRollAbilityAssignment,
        resetManualSelection, 
        resetRolledSelection,

        setBackground,
        toggleBackgroundChoice,

        setRace,
        setSubrace,
        toggleRaceChoice,

        toggleSpellChoice,

        addInventoryItem, 
        removeInventoryItem, 
        setItemEquipped,

        chooseClassWealthMode,
        setGoldRoll,

        chooseStartingOption,
        toggleStartingPick,
        toggleProficiencyChoice,
    }
}


/** Defines the rules for `NewCharacterContext`. */
type NewCharacterContextValue = ReturnType<typeof useNewCharacterDataState>;

/** React context holding the character data the user is building. */
const NewCharacterContext = createContext<NewCharacterContextValue | null>(null);


/**
 * Provides a single shared copy of the `newCharacterData` state to every `Page` in `NewCharacterPages`.  
 * @remarks Without a Context, each `Page` that calls `useNewCharacterData` would get different versions of the data. 
 * 
 * @param children the components that are granted access to the `newCharacterData` state.  
 * 
 * @returns the children, wrapped in the ContextProvider
 */
export function NewCharacterProvider({ children }: { children: ReactNode }) {
    const value = useNewCharacterDataState();

    return (
        <NewCharacterContext value={value}>
            {children}
        </NewCharacterContext>
    );
}


/**
 * Accesses the shared `newCharacterData` state from `NewCharacterProvider`. 
 * 
 * @returns The context object for {@link useNewCharacterDataState}.
 */
export function useNewCharacterData() {
    const ctx = useContext(NewCharacterContext);

    if (!ctx) {
        throw new Error(`useNewCharacterData must be used inside <NewCharacterProvider>`);
    }
    return ctx;
}