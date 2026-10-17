import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { STAT_DEFAULT, STAT_INPUT_MIN, STAT_INPUT_MAX, STAT_KEYS } from "./constants";
import type { StatKey, StatWithCalcFields, CharacterData, Stat } from "@/components/BookContainer/types";


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
     * Handler function for the onChange event in the manual stat input. 
     * @param statKey The stat which is being modified. 
     * @param rawStatValue The raw string value the user inputs. 
     */
    function handleStatOnChange(statKey: StatKey, rawStatValue: string) {
        setStatBase(statKey, handleStatBaseInput(rawStatValue));
    };


    /**
     * Handler function for the onBlur event in the manual stat input. 
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







    return {
        name: newCharacterData.name,
        alignment: newCharacterData.alignment,
        stats: stats,
        
        setName: (value: string) => setNewCharacterData(
            prev => ({ ...prev, name: value })
        ),
        setAlignment: (value: string) => setNewCharacterData(
            prev => ({ ...prev, alignment: value })
        ),
        setStatRacialBonus,
        handleStatOnChange,
        handleStatOnBlur, 
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
 * @returns The context object for `useNewCharacterData.tsx`
 */
export function useNewCharacterData() {
    const ctx = useContext(NewCharacterContext);

    if (!ctx) {
        throw new Error(`useNewCharacterData must be used inside <NewCharacterProvider>`);
    }
    return ctx;
}