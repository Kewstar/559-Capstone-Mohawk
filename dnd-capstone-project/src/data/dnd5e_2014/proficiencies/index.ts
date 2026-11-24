import { PROFICIENCY_INDEXES, PROFICIENCIES } from "./proficiencies";
import type { ProficiencyIndex } from "./proficiencies";
import type { ProficiencyData } from "./types";

export * from "./types";
export { PROFICIENCY_INDEXES, PROFICIENCIES } from "./proficiencies";
export type { ProficiencyIndex } from "./proficiencies";


/**
 * Type guard for proficiency indexes.
 *
 * @param value the string to test.
 *
 * @returns true if it is a ProficiencyIndex.
 */
export function isProficiencyIndex(value: string): value is ProficiencyIndex {
    return (PROFICIENCY_INDEXES as readonly string[]).includes(value);
}


/**
 * Looks up a proficiency by a plain string index, as stored in saved data and picks.
 *
 * @param index the proficiency's index.
 *
 * @returns the proficiency, or null if there is none with that index.
 */
export function findProficiency(index: string): ProficiencyData | null {
    return isProficiencyIndex(index) ? PROFICIENCIES[index] : null;
}


/** Every proficiency, grouped by type then name. */
export const PROFICIENCY_LIST: ProficiencyData[] = PROFICIENCY_INDEXES.map(function get(index) {
    return PROFICIENCIES[index];
});