import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { STAT_DEFAULT, STAT_INPUT_MIN, STAT_INPUT_MAX, STAT_KEYS } from "./constants";
import type { StatKey, StatWithCalcFields, CharacterData, Stat, DieResult, RolledStatResult, StatAssignments } from "@/components/BookContainer/types";
import { DiceRoll } from '@dice-roller/rpg-dice-roller';


/**
 * Fills out the default state for each stat. 
 * @param id The stat to compute the default state of. 
 * @param label String used to refer to the stat. 
 * 
 * @returns The calculated default state for the stat. 
 */
function makeDefaultStat(id: StatKey, label: string): Stat {
    return {
        id,
        base: STAT_DEFAULT,
        racialBonus: { value: 0, source: "" },
        label, 
        isProficient: false,
    };
};


/**
 * Handles the user's input for the `base` stat value, if an empty string or not number, sets to the {@link STAT_DEFAULT}. 
 * @param rawStatValue String representing the user's inputted data for the stat. 
 * @returns The parsed numerical value for the `base` stat value. 
 */
function handleStatBaseInput(rawStatValue: string): number {
    const trimmedInput = rawStatValue.trim();
    if (trimmedInput === "") 
        return STAT_DEFAULT
    
    const statValue = Number(trimmedInput);
    if (Number.isNaN(statValue)) 
        return STAT_DEFAULT
    
    const flooredStatValue = Math.floor(statValue);
    return Math.min(STAT_INPUT_MAX, Math.max(STAT_INPUT_MIN, flooredStatValue));
};


/**
 * Computes the final value for a stat, after adding the base value and racial bonus. 
 * @param stat the stat object to compute the value for. 
 * @returns The calculated final value for the stat.  
 */
function getValueForStat(stat: Stat): number {
    const base = stat.base === "" ? STAT_DEFAULT : stat.base;
    return (base + stat.racialBonus.value);
}


/**
 * Computes the calculated value of the Stat's modifier. 
 * @param statValue the value of the stat to compute the modifier for. 
 * @returns The calculated modifier for the stat.
 */
function getModForStat(statValue: number): number {
    return Math.floor( (statValue - 10) / 2 );
};

/**
 * Sets the default state for all items in the `rolledStatValues` state, 
 * creating a number of items equal to the number of {@link STAT_KEYS}.
 * 
 * @returns The default state for all `rolledStatValues`, determined by {@link makeDefaultRolledValue}'s return for each item.
 */
function makeDefaultRolledValues(): RolledStatResult[] {
    const defaultValues: RolledStatResult[] = [];

    for (let i = 0; i < STAT_KEYS.length; i++) {
        defaultValues.push(makeDefaultRolledValue());
    }

    return defaultValues;
}

/**
 * Sets the default state for one single item in the `rolledStatValues` state, 
 * which prepares the state to hold the total rolled amount, along with each die rolled & if it is dropped. 
 * 
 * @returns The default state for one single `rolledStatValues` state item, which contains the total rolled value & fields for each dice roll.
 */
function makeDefaultRolledValue(): RolledStatResult {
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
 * Sets the default state for the `rolledStatAssignments` state, 
 * which represents user's stat assignments for their rolled values. 
 * 
 * @returns The default state for `rolledStatAssignments`, which contains the `--` default value for an amount of options equal to the size of {@link STAT_KEYS}.
 */
function makeDefaultStatAssignments(): StatAssignments[] {
    const defaultStatAssignments: StatAssignments[] = []; 

    for (let i = 0; i < STAT_KEYS.length; i++) {
        defaultStatAssignments.push("--");
    }

    return defaultStatAssignments;
}


/**
 * Runs a `DiceRoll` for a single stat item, according to the rules of the rollNotation.  
 * 
 * @param rollNotation String that defines the rules for the `DiceRoll` object.  
 * 
 * @returns the result of {@link formatRolledStat}'s formatting of the `DiceRoll` 
 */
function rollStat(rollNotation: string): RolledStatResult {
    return formatRolledStat( new DiceRoll(rollNotation) );
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
function formatRolledStat(diceRollResult: DiceRoll): RolledStatResult {
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





/**
 * Handles the assembly of the data for a new character across the NewCharacterPages. 
 * 
 * @returns an object containing the following:
 * - `name`: The name of the user's character. 
 * - `alignment`: The alignment of the character,
 * - `stats`: The 6 ability scores of the character: str, dex, con, int, wis, & cha.
 * - `setName`: handler function to adjust the name. 
 * - `setAlignment`: handler function to adjust the alignment. 
 * - `setStat`: handler function to adjust a stat's value. 
 * - `validateStat`: handler function to validate the stat's value after the user exits the input field for the stat.
 */
function useNewCharacterDataState() {
    // State Value for Character Creation 
    const [newCharacterData, setNewCharacterData] = useState<CharacterData>({
        name: "",
        alignment: "",
        stats: {
            str: makeDefaultStat("str", "Strength"),
            dex: makeDefaultStat("dex", "Dexterity"),
            con: makeDefaultStat("con", "Constitution"),
            int: makeDefaultStat("int", "Intelligence"),
            wis: makeDefaultStat("wis", "Wisdom"),
            cha: makeDefaultStat("cha", "Charisma"),
        },
    });

    // States for Rolled Stat Selection 
    const [rolledStatValues, setRolledStatValues] = useState<RolledStatResult[]>(
        makeDefaultRolledValues
    );
    const [rolledStatAssignments, setRolledStatAssignments] = useState<StatAssignments[]>(
        makeDefaultStatAssignments
    );



    


    /**
     * Iterates over the stats and computes calculted values for each; the modifier and final vlaue. 
     * 
     * @returns Every stat with its calculated values 
     */
    function buildStatsWithCalculatedVals(): Record<StatKey, StatWithCalcFields> {
        return Object.fromEntries(
            STAT_KEYS.map(key => {
                const stat = newCharacterData.stats[key];
                const value = getValueForStat(stat);
                
                return [key, { ...stat, value, mod: getModForStat(value) }];
            })
        ) as Record<StatKey, StatWithCalcFields>
    };

    const stats = useMemo( buildStatsWithCalculatedVals, [newCharacterData.stats])





    /**
     * Sets the `base` value for a stat, 
     * 
     * @param statKey The stat to set the `base` value for. 
     * @param base The new value for the stat's base value.  
     */
    function setStatBase(statKey: StatKey, base: number | "") {
        setNewCharacterData(prev => {
            if (prev.stats[statKey].base === base) return prev;
            return {
                ...prev,
                stats: {
                    ...prev.stats,
                    [statKey]: { ...prev.stats[statKey], base },
                },
            };
        });
    }






   /**
     * Sets the `racialBonus`'s `value` for a stat, 
     * 
     * @param statKey The stat to set the `bonus` value for. 
     * @param bonus The new value for the stat's `racialBonus` `value`. 
     * @param source The name of the race which provides the `racialBonus`. 
     */
    function setStatRacialBonus(statKey: StatKey, bonus: number, source: string) {
        setNewCharacterData(prev => {
            const stat = prev.stats[statKey];

            if (stat.racialBonus.value === bonus) 
                return prev;
            
            return {
                ...prev,
                stats: {
                    ...prev.stats,
                    [statKey]: { 
                        ...stat,
                        racialBonus: { ...stat.racialBonus, value: bonus, source: source },
                    },
                },
            };
        });
    }





    /**
     * Handler function for the `onChange` event in the manual stat input. 
     * @param statKey The stat which is being modified. 
     * @param rawStatValue The raw string value the user inputs. 
     */
    function handleStatOnChange(statKey: StatKey, rawStatValue: string) {
        setStatBase(statKey, handleStatBaseInput(rawStatValue));
    };





    /**
     * Handler function for the `onBlur` event in the manual stat input. 
     * @param statKey The stat which is being modified. 
     */
    function handleStatOnBlur(statKey: StatKey) {
        setNewCharacterData(prev => {
            if (prev.stats[statKey].base !== "") 
                return prev;    
            
            return {
                ...prev,
                stats: {
                    ...prev.stats,
                    [statKey]: { ...prev.stats[statKey], base: STAT_DEFAULT },
                },
            };
        });
    };





    /**
     * Handler function for the `onClick` event, for rolling character stats in character creation.  
     * After a number of rolled values, determined by `numOfStatRolls`, is completed, sets the rolled values to the `rolledStatValues` state.  
     * 
     * @param numOfStatRolls The number of stats to roll for. 
     */
    function handleRollStatsOnClick(numOfStatRolls: number) {
        const rolledResults: RolledStatResult[] = [];

        for (let i = 0; i < numOfStatRolls; i++) {  
            // roll 4d6 drop 1 lowest
            rolledResults.push( rollStat('4d6dl1') );     
        };

        setRolledStatValues(rolledResults);
    };





    /**
     * Handler function for the `onChange` event of the `<select>` for each rolled stat.
     * Assigns the rolled total at `index` to the chosen stat, if prevoiusly assigned, releases that stat, 
     * & updates the `rolledStatAssignments` state to reflect the choice of which stats have already been assigned. 
     * 
     * @remarks The UI handles the uniqueness of assignments through disabling already selected stat fields. 
     * 
     * @param index The position of the roll, & its `<select>`, in the `rolledStatValues` & `rolledStatAssignments` states.
     * @param selection The stat the rolled value is being assigned to, or `"--"` to unassign that stat. 
     */
    function handleRollStatAssignmentOnChange(index: number, selection: StatAssignments) {
        // return if selecting same thing
        const previousSelection = rolledStatAssignments[index];
        if (previousSelection === selection) 
            return;

        // return on default value of 0 (unrolled)  
        const rolledTotal = rolledStatValues[index].dieTotal;
        if (rolledTotal === 0)
            return; 

        if (previousSelection !== "--") 
            setStatBase(previousSelection, STAT_DEFAULT);
        
        if (selection !== "--") 
            setStatBase(selection, rolledTotal)
        
        const updatedAssignments = [...rolledStatAssignments];
        updatedAssignments[index] = selection;

        setRolledStatAssignments(updatedAssignments);
    }





    /** 
     * Sets all `stats.base` values in the `newCharacterData` state to the {@link STAT_DEFAULT}. 
     */
    function setAllStatBaseToDefault () {
        for (let i = 0; i < STAT_KEYS.length; i++) {
            setStatBase(STAT_KEYS[i], STAT_DEFAULT);
        };
    };


    /** Resests all manual stat selection states & fields to their default state. */
    function resetManualSelection() {
        setAllStatBaseToDefault();
    }


    /** Resets all rolled stat selection states & fields to their default state. */
    function resetRolledSelection() {
        setRolledStatValues( makeDefaultRolledValues() );
        setAllStatBaseToDefault();
    }







    return {
        name: newCharacterData.name,
        alignment: newCharacterData.alignment,
        stats: stats,
        rolledStats: rolledStatValues,
        rolledStatAssignments,
        
        setName: (value: string) => setNewCharacterData(
            prev => ({ ...prev, name: value })
        ),
        setAlignment: (value: string) => setNewCharacterData(
            prev => ({ ...prev, alignment: value })
        ),
        setStatRacialBonus,
        handleStatOnChange,
        handleStatOnBlur, 
        handleRollStatsOnClick,
        handleRollStatAssignmentOnChange,
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