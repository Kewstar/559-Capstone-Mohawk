import { LANGUAGE_INDEXES, LANGUAGES } from "./languages";
import type { LanguageIndex } from "./languages";
import type { LanguageDetails } from "./types";

export * from "./types";
export { LANGUAGE_INDEXES, LANGUAGES } from "./languages";
export type { LanguageIndex } from "./languages";

/**
 * Looks up a language.
 *
 * @param index the language's index.
 *
 * @returns the language's details.
 */
export function getLanguage(index: LanguageIndex): LanguageDetails {
    return LANGUAGES[index];
}

/** Every language, alphabetical. Used for dropdowns and lists. */
export const LANGUAGE_LIST: LanguageDetails[] = LANGUAGE_INDEXES.map(getLanguage);


/**
 * Type guard for language indexes.
 *
 * @param value the string to test.
 *
 * @returns true if it is a LanguageIndex.
 */
export function isLanguageIndex(value: string): value is LanguageIndex {
    return (LANGUAGE_INDEXES as readonly string[]).includes(value);
}