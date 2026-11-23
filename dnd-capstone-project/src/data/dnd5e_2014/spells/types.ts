import type { AbilityKey } from "../abilities";

export const SPELL_SCHOOLS = [
    "abjuration", 
    "conjuration", 
    "divination", 
    "enchantment",
    "evocation", 
    "illusion", 
    "necromancy", 
    "transmutation",
] as const;
export type SpellSchool = (typeof SPELL_SCHOOLS)[number];

export type SpellComponent = "V" | "S" | "M";

/** A value at a given level: a slot level or a character level. The value is dice text such as "8d6". */
export interface LevelValue {
    level: number;
    value: string;
}

export interface SpellDamage {
    damageType?: string;
    atSlotLevel: LevelValue[];
    atCharacterLevel: LevelValue[];
}

export interface SpellSave {
    ability: AbilityKey;
    /** What a successful save does, e.g. "half" or "none". */
    success: string;
    description?: string;
}

export interface SpellDetails {
    index: string;
    name: string;
    /** 0 for cantrips. */
    level: number;
    school: SpellSchool;
    castingTime: string;
    range: string;
    duration: string;
    components: SpellComponent[];
    material?: string;
    concentration: boolean;
    ritual: boolean;
    description: string[];
    higherLevel?: string[];
    attackType?: string;
    areaOfEffect?: { type: string; size: number };
    save?: SpellSave;
    damage: SpellDamage[];
    healAtSlotLevel: LevelValue[];
}