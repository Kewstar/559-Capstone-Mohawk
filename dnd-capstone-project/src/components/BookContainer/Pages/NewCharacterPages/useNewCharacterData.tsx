import { createContext, useContext, useState, type ReactNode } from "react";
import { STAT_DEFAULT, STAT_INPUT_MIN, STAT_INPUT_MAX } from "./constants";
import type { StatKey, StatWithMod, CharacterData } from "@/components/BookContainer/types";

/**
 * handles the assembly of a new character across the NewCharacterPages. 
 * 
 * @returns an object containing the following:
 * - `name`: the name of the user's character. 
 * - `setName`: handler function to adjust the name. 
 */

function useNewCharacterDataState() {
    const [newCharacterData, setNewCharacterData] = useState<CharacterData>({
        name: "",
        alignment: "",
        stats: {
            str: {
                id: "str",
                value: STAT_DEFAULT,
                label: "Strength",
                isProficient: false,
            },
            dex: {
                id: "dex",
                value: STAT_DEFAULT,
                label: "Dexterity",
                isProficient: false,
            },
            con: {
                id: "con",
                value: STAT_DEFAULT,
                label: "Constitution",
                isProficient: false,
            },
            int: {
                id: "int",
                value: STAT_DEFAULT,
                label: "Intelligence",
                isProficient: false,
            },
            wis: {
                id: "wis",
                value: STAT_DEFAULT,
                label: "Wisdom",
                isProficient: false,
            },
            cha: {
                id: "cha",
                value: STAT_DEFAULT,
                label: "Charisma",
                isProficient: false,
            },
        }
    });


    function getModForStat(statValue: number | ""): number {
        if (statValue === "")  
            return 0
        else 
            return Math.floor( (statValue - 10) / 2 );
    }

    const stats = Object.fromEntries(
        Object.values(newCharacterData.stats).map(stat => [
            stat.id,
            { ...stat, mod: getModForStat(stat.value) },
        ])
    ) as Record<StatKey, StatWithMod>;



    function handleStatInput(rawStatValue: string): number | "" {
        if (rawStatValue === "") 
            return ""

        const statValue = Number(rawStatValue);
        if (Number.isNaN(statValue)) 
            return ""
        
        const flooredStatValue = Math.floor(statValue);

        return Math.min(STAT_INPUT_MAX, Math.max(STAT_INPUT_MIN, flooredStatValue));
    }







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
        setStat: (statKey: StatKey, value: string) => setNewCharacterData(
            prev => ({
                ...prev,
                stats: {
                    ...prev.stats,
                    [statKey]: {
                        ...prev.stats[statKey],
                        value: handleStatInput(value)
                    },
                },
            })
        ),
        validateStat: (statKey: StatKey) => setNewCharacterData(
            prev => {
                if (prev.stats[statKey].value !== "") 
                    return prev;
                return {
                    ...prev,
                    stats: {
                        ...prev.stats,
                        [statKey]: { ...prev.stats[statKey], value: STAT_DEFAULT },
                    },
                };
            }
        ),

        
    }
}

type NewCharacterContextValue = ReturnType<typeof useNewCharacterDataState>;

const NewCharacterContext = createContext<NewCharacterContextValue | null>(null);

export function NewCharacterProvider({ children }: { children: ReactNode }) {
    const value = useNewCharacterDataState();

    return (
        <NewCharacterContext value={value}>
            {children}
        </NewCharacterContext>
    );
}

export function useNewCharacterData() {
    const ctx = useContext(NewCharacterContext);

    if (!ctx) {
        throw new Error(`useNewCharacterData must be used inside <NewCharacterProvider>`);
    }
    return ctx;
}