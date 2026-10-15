import { useState } from "react";

type StatKey = "str" | "dex" | "con" | "int" | "wis" | "cha";

/**
 * handles the assembly of a new character across the NewCharacterPages. 
 * 
 * @returns an object containing the following:
 * - `name`: the name of the user's character. 
 * - `setName`: handler function to adjust the name. 
 */
export function useNewCharacterData() {
    const [newCharacterData, setNewCharacterData] = useState({
        name: "",
        alignment: "",
        stats: {
            str: 10,
            dex: 10,
            con: 10,
            int: 10,
            wis: 10,
            cha: 10,
        }
    });





    return {
        name: newCharacterData.name,
        alignment: newCharacterData.alignment,
        str: newCharacterData.stats.str,
        dex: newCharacterData.stats.dex,
        con: newCharacterData.stats.con,
        int: newCharacterData.stats.int,
        wis: newCharacterData.stats.wis,
        cha: newCharacterData.stats.cha,
        
        setName: (value: string) => setNewCharacterData(
            prev => ({ ...prev, name: value })
        ),
        setAlignment: (value: string) => setNewCharacterData(
            prev => ({ ...prev, alignment: value })
        ),
        setStat: (stat: StatKey, value: string) => setNewCharacterData(
            prev => ({
                ...prev,
                stats: { ...prev.stats, [stat]: Number(value) }
            })
        ),
        
    }
}