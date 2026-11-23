import type { ClassName } from "./types";


/** How a class chooses its spells. */
export type SpellStyle = "none" | "known" | "prepared" | "spellbook";


export const SPELL_STYLE: Record<ClassName, SpellStyle> = {
    barbarian: "none",
    bard: "known",
    cleric: "prepared",
    druid: "prepared",
    fighter: "none",
    monk: "none",
    paladin: "prepared",
    ranger: "known",
    rogue: "none",
    sorcerer: "known",
    warlock: "known",
    wizard: "spellbook",
};


/** Prepared spells = ability modifier + (class level / divisor, rounded down). Classes not listed use 1. */
export const PREPARED_LEVEL_DIVISOR: Partial<Record<ClassName, number>> = { paladin: 2 };


/** A wizard's spellbook starts with 6 spells and gains 2 per level after the first. */
export const SPELLBOOK_STARTING_SPELLS = 6;
export const SPELLBOOK_SPELLS_PER_LEVEL = 2;