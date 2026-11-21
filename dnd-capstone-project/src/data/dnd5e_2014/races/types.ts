import type { AbilityKey } from "../abilities";
import type { FeatureUses, ProficiencyChoice, ProficiencyRef, SpellReference } from "../classes/types";
import type { LanguageIndex } from "../languages/";

export const RACE_NAMES = [
    "dragonborn", 
    "dwarf", 
    "elf", 
    "gnome", 
    "half-elf",
    "half-orc", 
    "halfling", 
    "human", 
    "tiefling",
] as const;
export type RaceName = (typeof RACE_NAMES)[number];

export type RaceSize = "Small" | "Medium";

/** A fixed or optional bonus to one ability score. */
export interface RaceAbilityBonus {
    ability: AbilityKey;
    bonus: number;
}

/** "Choose N of these bonuses" (the half-elf's two +1s). */
export interface AbilityBonusChoice {
    choose: number;
    options: RaceAbilityBonus[];
}

/** "Choose N of these languages". The list already excludes languages the race speaks. */
export interface LanguageChoice {
    choose: number;
    options: LanguageIndex[];
}

/** Breath weapon details; the dice and area shape stay in the trait's description. */
export interface BreathWeapon {
    damageType: string;
    saveAbility: AbilityKey;
    saveSuccess: string;
}

/** A racial trait. Its text lives in `RaceDetails.traitDescriptions`. */
export interface RaceTrait {
    id: string;
    name: string;
    /** Set for traits that belong to a subrace. */
    subraceId?: string;
    /** Set for traits that are options of another trait. */
    parentId?: string;
    proficiencies: ProficiencyRef[];
    proficiencyChoice?: ProficiencyChoice;
    languageChoice?: LanguageChoice;
    /** Trait ids to pick from. */
    subtraitChoice?: { choose: number; optionIds: string[] };
    spellChoice?: { choose: number; options: SpellReference[] };
    /** Damage type of an ancestry option. */
    damageType?: string;
    breathWeapon?: BreathWeapon;
    /** Hand-written in the generator overrides, for limited-use traits. */
    uses?: FeatureUses;
}

/** A subrace. `id` is a plain string so more can be added later. */
export interface SubraceDetails {
    id: string;
    name: string;
    description: string;
    abilityBonuses: RaceAbilityBonus[];
    traitIds: string[];
}

export interface RaceDetails {
    name: RaceName;
    label: string;
    speed: number;
    size: RaceSize;
    sizeDescription: string;
    age: string;
    alignment: string;
    languageDescription: string;
    /** Range in feet; hand-written in the generator overrides. */
    darkvision?: number;
    abilityBonuses: RaceAbilityBonus[];
    abilityBonusChoice?: AbilityBonusChoice;
    languages: LanguageIndex[];
    languageChoice?: LanguageChoice;
    /** Ids of the race's own traits, in order; subrace and option traits are listed elsewhere. */
    traitIds: string[];
    subraces: SubraceDetails[];
    /** Every trait (race, subrace and option traits), keyed by id. */
    traits: Record<string, RaceTrait>;
    traitDescriptions: Record<string, string[]>;
}