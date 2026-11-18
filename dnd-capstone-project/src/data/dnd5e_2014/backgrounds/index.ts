// src/data/dnd5e_2014/backgrounds/index.ts
import { BACKGROUND_NAMES } from "./types";
import type { BackgroundDetails, BackgroundName } from "./types"

import { acolyte } from "./background_data/acolyte";

export * from "./types";

/** Every background, keyed by name. */
export const BACKGROUNDS: Record<BackgroundName, BackgroundDetails> = {
    acolyte
};

/**
 * Retrieves a background's BackgroundDetails.
 * 
 * @param name the background to get the details of.
 * 
 * @returns the BackgroundDetails data for that background.
 */
export function getBackground(name: BackgroundName): BackgroundDetails {
    return BACKGROUNDS[name];
}

/** Every background in BACKGROUND_NAMES. Used for dropdowns and lists. */
export const BACKGROUND_LIST: BackgroundDetails[] = BACKGROUND_NAMES.map(getBackground);


/**
 * Type guard for the background names.
 * 
 * @param value the string to test, e.g. a select element's value.
 * 
 * @returns true if it is a BackgroundName.
 */

export function isBackgroundName(value: string): value is BackgroundName {
    return (BACKGROUND_NAMES as readonly string[]).includes(value);
}