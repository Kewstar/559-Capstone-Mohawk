import { SPELL_INDEXES, SPELLS } from "./spells";
import type { SpellIndex } from "./spells";
import type { SpellDetails, SpellSchool } from "./types";

export * from "./types";
export { SPELL_INDEXES, SPELLS } from "./spells";
export type { SpellIndex } from "./spells";


/** Every spell, ordered by level then name. Used for lists and pickers. */
export const SPELL_LIST: SpellDetails[] = SPELL_INDEXES.map(getSpell);


/**
 * Looks up a spell by index.
 *
 * @param index the spell's index.
 *
 * @returns the spell's details.
 */
export function getSpell(index: SpellIndex): SpellDetails {
    return SPELLS[index];
}


/**
 * Type guard for spell indexes.
 *
 * @param value the string to test.
 *
 * @returns true if it is a SpellIndex.
 */
export function isSpellIndex(value: string): value is SpellIndex {
    return (SPELL_INDEXES as readonly string[]).includes(value);
}



/**
 * Finds a spell by name. Ignores case.
 *
 * @param name the spell's name to find.
 *
 * @returns the SpellDetails, or null if no spell has that name.
 */
export function getSpellByName(name: string): SpellDetails | null {
    const wanted = name.toLowerCase();

    for (const spell of SPELL_LIST) {
        if (spell.name.toLowerCase() === wanted) 
            return spell;
    }

    return null;
}


/**
 * Retrieves a spell by a provided index. 
 * 
 * @param spellIndex The spell index to retrieve. 
 * 
 * @returns The SpellDetails data for the spell, or null if there is no spell with that index. 
 */
export function findSpell(spellIndex: string): SpellDetails | null {
    if ( isSpellIndex(spellIndex) ) 
        return getSpell(spellIndex);
    else 
        return null;
}


/**
 * Formats a spell school for rendering, by capitalizing the first letter. 
 * 
 * @param spellSchool The SpellSchool to format.  
 * 
 * @returns The formatted SpellSchool.  
 */
export function formatSpellSchool(spellSchool: SpellSchool): string {
    return spellSchool.charAt(0).toUpperCase() + spellSchool.slice(1);
}


/**
 * Formats a spell's level for display. 
 * 
 * @param spellLevel The spell's level. A level of 0 represents a cantrip.  
 * 
 * @returns "Cantrip" for 0, or "Level X" otherwise. 
 */
export function formatSpellLevel(spellLevel: number): string {
    if (spellLevel === 0) 
        return "Cantrip";
    else 
        return `Level ${spellLevel}`
}