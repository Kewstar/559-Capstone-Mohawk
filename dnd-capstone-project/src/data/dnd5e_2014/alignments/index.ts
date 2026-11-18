// src/data/dnd5e_2014/alignments/index.ts
import { ALIGNMENT_NAMES } from "./types";
import type { AlignmentName, AlignmentDetails } from "./types";
import { chaotic_neutral, chaotic_evil, chaotic_good, lawful_neutral, lawful_evil, lawful_good, neutral, neutral_good, neutral_evil } from "./alignments";

export * from "./types";


/** Every alignment, keyed by name. */
export const ALIGNMENTS: Record<AlignmentName, AlignmentDetails> = {
    "chaotic-neutral": chaotic_neutral,
    "chaotic-evil": chaotic_evil,
    "chaotic-good": chaotic_good,
    "lawful-neutral": lawful_neutral,
    "lawful-evil": lawful_evil,
    "lawful-good": lawful_good,
    "neutral": neutral,
    "neutral-evil": neutral_evil,
    "neutral-good": neutral_good
};



/**
 * Retrieves a alignment's AlignmentDetails.
 * 
 * @param name the alignment to get the details of.
 * 
 * @returns the AlignmentDetails data for that class.
 */
export function getAlignment(name: AlignmentName): AlignmentDetails {
    return ALIGNMENTS[name];
}

/** Every alignment in ALIGNMENT_NAMES. Used for dropdowns and lists. */
export const ALIGNMENT_LIST: AlignmentDetails[] = ALIGNMENT_NAMES.map(getAlignment);