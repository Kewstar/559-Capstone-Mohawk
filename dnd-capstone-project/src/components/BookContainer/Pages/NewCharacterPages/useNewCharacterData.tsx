import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { ABILITY_DEFAULT_VALUE, ABILITY_INPUT_MIN, ABILITY_INPUT_MAX, ABILITY_KEYS, ABILITY_ABSOLUTE_MIN_VALUE, LEVEL_MIN, ABILITY_DEFAULT_MAX_VALUE, ABILITY_ABSOLUTE_MAX_VALUE } from "./constants";
import type { AbilityKey, AbilitiesWithCalcFields, CharacterData, Abilities, DieResult, RolledAbilityResult, AbilityAssignments } from "@/components/BookContainer/types";
import { DiceRoll } from '@dice-roller/rpg-dice-roller';

//#region CLASS

/**
 * 
 * @param level 
 * @returns 
 */
function getProficiencyBonusFromLevel(level: number) {
    return Math.ceil(level / 4) + 1;
};
//#endregion CLASS

//#region ABILITIES
/**
 * Fills out the default state for each ability. 
 * @param id The ability to compute the default state of. 
 * @param label String used to refer to the ability. 
 * 
 * @returns The calculated default state for the ability. 
 */
function makeDefaultAbility(id: AbilityKey, label: string): Abilities {
    return {
        id,
        base: ABILITY_DEFAULT_VALUE,
        racialBonus: { 
            value: 0, 
            source: "" 
        },
        label, 
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
    const finalValue = (base + ability.racialBonus.value);

    // ensure final value is between the absolute min and max 
    return Math.min(ability.max, Math.max(ABILITY_ABSOLUTE_MIN_VALUE, finalValue));
};


/**
 * Computes the calculated value of the Ability's modifier. 
 * 
 * @param abilityValue the value of the ability to compute the modifier for. 
 * 
 * @returns The calculated modifier for the ability.
 */
function getModForAbility(abilityValue: number): number {
    return Math.floor( (abilityValue - 10) / 2 );
};

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
        totalLevel: LEVEL_MIN,
        alignment: "",
        abilities: {
            str: makeDefaultAbility("str", "Strength"),
            dex: makeDefaultAbility("dex", "Dexterity"),
            con: makeDefaultAbility("con", "Constitution"),
            int: makeDefaultAbility("int", "Intelligence"),
            wis: makeDefaultAbility("wis", "Wisdom"),
            cha: makeDefaultAbility("cha", "Charisma"),
        },
        attributes: {
            proficiencyBonus: 2,
        },
    });

    // States for Character Class
    // const [totalLevel, setTotalLevel] = useState(LEVEL_MIN); 

    // States for Rolled Ability Selection 
    const [rolledAbilityValues, setRolledAbilityValues] = useState<RolledAbilityResult[]>(
        makeDefaultRolledValues
    );
    const [rolledAbilityAssignments, setRolledAbilityAssignments] = useState<AbilityAssignments[]>(
        makeDefaultRolledAbilityAssignments
    );



    


    /**
     * Iterates over the abilities and computes calculted values for each; the modifier and final vlaue. 
     * 
     * @returns Every ability with its calculated values 
     */
    function buildAbilitiesWithCalculatedFields(): Record<AbilityKey, AbilitiesWithCalcFields> {
        return Object.fromEntries(
            ABILITY_KEYS.map(key => {
                const ability = newCharacterData.abilities[key];
                const value = getValueForAbility(ability);
                
                return [key, { ...ability, value, mod: getModForAbility(value) }];
            })
        ) as Record<AbilityKey, AbilitiesWithCalcFields>
    };

    const abilitiesWithCalculatedFields = useMemo( buildAbilitiesWithCalculatedFields, [newCharacterData.abilities]);





    const buildCalculatedAttributes = useMemo(() => ({
        proficiencyBonus: getProficiencyBonusFromLevel(newCharacterData.totalLevel),
    }), [newCharacterData.totalLevel]);





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




   /**
     * Sets the `racialBonus`'s `value` for a ability, 
     * 
     * @param abilityKey The ability to set the `bonus` value for. 
     * @param bonus The new value for the ability's `racialBonus` `value`. 
     * @param source The name of the race which provides the `racialBonus`. 
     */
    function setAbilityRacialBonus(abilityKey: AbilityKey, bonus: number, source: string) {
        updateAbility(abilityKey, ability => {
            if (ability.racialBonus.value === bonus) 
                return ability; 

            return {
                ...ability,
                racialBonus: { ...ability.racialBonus, value: bonus, source },
            };
        });
    }

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
    }


    /** Resets all rolled ability selection states & fields to their default state. */
    function resetRolledSelection() {
        setRolledAbilityValues( makeDefaultRolledValues() );
        setAllAbilityBasesToDefault();
    }







    return {
        name: newCharacterData.name,
        totalLevel: newCharacterData.totalLevel,
        alignment: newCharacterData.alignment,
        abilities: abilitiesWithCalculatedFields,  
        attributes: buildCalculatedAttributes,
        rolledAbilityValues,
        rolledAbilityAssignments,
        
        setName: (value: string) => setNewCharacterData(
            prev => ({ ...prev, name: value })
        ),
        setTotalLevel: (value: number) => setNewCharacterData(
            prev => ({ ...prev, totalLevel: value })
        ),
        setAlignment: (value: string) => setNewCharacterData(
            prev => ({ ...prev, alignment: value })
        ),
        setAbilityRacialBonus,
        setAbilityMax,
        handleOnChangeManualAbility,
        handleOnBlurManualAbility, 
        handleOnClickRollAbilities,
        handleOnChangeRollAbilityAssignment,
        resetManualSelection, 
        resetRolledSelection,
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