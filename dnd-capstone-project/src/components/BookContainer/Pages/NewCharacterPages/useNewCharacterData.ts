import { useState } from "react";
import type { StatKey, StatWithMod, CharacterData } from "@/components/BookContainer/types";

/**
 * handles the assembly of a new character across the NewCharacterPages. 
 * 
 * @returns an object containing the following:
 * - `name`: the name of the user's character. 
 * - `setName`: handler function to adjust the name. 
 */

export function useNewCharacterData() {
    const [newCharacterData, setNewCharacterData] = useState<CharacterData>({
        name: "",
        alignment: "",
        stats: {
            str: {
                id: "str",
                value: 10,
                label: "Strength"
            },
            dex: {
                id: "dex",
                value: 10,
                label: "Dexterity"
            },
            con: {
                id: "con",
                value: 10,
                label: "Constitution"
            },
            int: {
                id: "int",
                value: 10,
                label: "Intelligence"
            },
            wis: {
                id: "wis",
                value: 10,
                label: "Wisdom"
            },
            cha: {
                id: "cha",
                value: 10,
                label: "Charisma"
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
        
        const MIN_VALUE = 1;
        const MAX_VALUE = 18;
        const flooredStatValue = Math.floor(statValue);

        return Math.min(MAX_VALUE, Math.max(MIN_VALUE, flooredStatValue));
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
                        [statKey]: { ...prev.stats[statKey], value: 10 },
                    },
                };
            }
        ),

        
    }
}