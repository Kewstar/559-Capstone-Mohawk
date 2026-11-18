export const ALIGNMENT_NAMES = [
    "chaotic-neutral",
    "chaotic-evil",
    "chaotic-good",
    "lawful-neutral",
    "lawful-evil",
    "lawful-good",
    "neutral",
    "neutral-evil",
    "neutral-good",
] as const;

export type AlignmentName = (typeof ALIGNMENT_NAMES)[number];


export interface AlignmentDetails {
    name: string,
    label: string,
    abbreviation: string,
    description: string,
}