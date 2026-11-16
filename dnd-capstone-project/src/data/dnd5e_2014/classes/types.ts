import type { AbilityKey } from "../abilities";

export const CLASS_NAMES = [
    "barbarian", "bard", "cleric", "druid", "fighter", "monk",
    "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"
] as const;
export type ClassName = (typeof CLASS_NAMES)[number];

/** Any value that can appear in parsed JSON; used for loosely typed per-class data. */
export type JsonValue =
    | string
    | number
    | boolean
    | null
    | JsonValue[]
    | { [key: string]: JsonValue };

/** The API's stand-in for "no limit" in use counts (e.g. Barbarian rage at level 20). */
export const UNLIMITED_USES = 9999;

// ---------- Features ----------

/** When a limited-use feature recovers its uses. */
export type FeatureRefresh = "short" | "long" | "shortOrLong" | "dawn" | "other";

/** How a feature's maximum number of uses is determined. */
export type FeatureUsesMax =
    /** A constant number of uses. */
    | { type: "fixed"; value: number }
    /** Read from the current level's `classSpecific` record (e.g. `rageCount`). */
    | { type: "classSpecific"; key: string }
    /** Equal to an ability modifier, optionally with a minimum (e.g. Bardic Inspiration). */
    | { type: "abilityModifier"; ability: AbilityKey; minimum?: number }
    /** Equal to the character's proficiency bonus. */
    | { type: "proficiencyBonus" };

/** Limited-use data for a feature. How many uses are spent lives in character state, not here. */
export interface FeatureUses {
    max: FeatureUsesMax;
    refresh: FeatureRefresh;
}

/** A class or subclass feature. Its text lives in `ClassDetails.featureDescriptions`. */
export interface ClassFeature {
    /** The API's feature index; key into `features` and `featureDescriptions`. */
    id: string;
    name: string;
    level: number;
    /** Set only for subclass features: the owning `Subclass.id`. */
    subclassId?: string;
    /** Set only for limited-use features (hand-written in the generator overrides). */
    uses?: FeatureUses;
}

// ---------- Spellcasting ----------

/** A spell reference; full spell data will live in a separate dataset, looked up by name. */
export interface SpellReference {
    index: string;
    name: string;
    level: number;
}

/** Spellcasting progression at one class level. */
export interface SpellcastingLevel {
    cantripsKnown?: number;
    spellsKnown?: number;
    /** Length 9; `spellSlots[0]` is the number of 1st-level slots. */
    spellSlots: number[];
}

/** A class's spellcasting rules. Absent from `ClassDetails` for non-casters. */
export interface Spellcasting {
    ability: AbilityKey;
    /** The class level at which spellcasting begins. */
    startLevel: number;
    /** Rules text sections ("Cantrips", "Spellbook", ...). */
    info: { name: string; desc: string[] }[];
    spellList: SpellReference[];
}

// ---------- Class table ----------

/** One row per class level, following the API's per-level shape. */
export interface ClassTable {
    level: number;
    /** Cumulative total of ability score improvements gained up to this level. */
    abilityScoreBonuses: number;
    /** Ids of the features gained at exactly this level; resolve via `ClassDetails.features`. */
    featureIds: string[];
    /** Per-class numbers (rage count, ki points, ...). Typed at the point of use. */
    classSpecific: Record<string, JsonValue>;
    spellcasting?: SpellcastingLevel;
}

// ---------- Proficiencies ----------

/** A proficiency as the API describes it; consumers filter by `type`. */
export interface ProficiencyRef {
    index: string;
    name: string;
    type: string;
}

/** One selectable entry in a proficiency choice: a single proficiency, or a nested choice. */
export type ProficiencyChoiceOption =
    | { kind: "reference"; proficiency: ProficiencyRef }
    | { kind: "choice"; choice: ProficiencyChoice };

/** "Choose N from these options"; options can themselves be choices (e.g. Monk's tools or instrument). */
export interface ProficiencyChoice {
    choose: number;
    desc?: string;
    options: ProficiencyChoiceOption[];
}

// ---------- Multiclassing ----------

/** A minimum ability score required to multiclass into a class. */
export interface MulticlassPrerequisite {
    ability: AbilityKey;
    minimum: number;
}

/** Requirements and benefits of multiclassing into a class. */
export interface Multiclassing {
    /** Requirements that must all be met. */
    prerequisites: MulticlassPrerequisite[];
    /** "Choose N of these" requirement (e.g. Fighter: STR 13 or DEX 13). */
    prerequisiteChoice?: { choose: number; options: MulticlassPrerequisite[] };
    proficiencies: ProficiencyRef[];
    proficiencyChoices: ProficiencyChoice[];
}

// ---------- Starting equipment ----------

/** A fixed piece of starting equipment. */
export interface StartingEquipmentItem {
    index: string;
    name: string;
    quantity: number;
    /** From the API type name, e.g. "Pack", "Weapon". */
    category: string;
}

/** A "choose N" for starting gear; only the readable description is kept. */
export interface StartingEquipmentChoice {
    choose: number;
    desc: string;
}

export interface StartingEquipment {
    items: StartingEquipmentItem[];
    choices: StartingEquipmentChoice[];
}

// ---------- Subclasses ----------

/** A subclass's progression at one level. */
export interface SubclassLevel {
    level: number;
    /** Resolve via `ClassDetails.features`. */
    featureIds: string[];
    /** Subclass numbers (aura range, additional magical secrets, ...). */
    subclassSpecific: Record<string, JsonValue>;
}

/** What must be true for a subclass spell to be granted: a class level reached, or a feature gained. */
export type SubclassSpellPrerequisite =
    | { kind: "level"; level: number }
    | { kind: "feature"; index: string };

/** A spell a subclass grants (e.g. domain spells). */
export interface SubclassSpell {
    spell: SpellReference;
    prerequisites: SubclassSpellPrerequisite[];
}

/** A subclass. `id` is a plain string so more subclasses can be added later. */
export interface Subclass {
    id: string;
    name: string;
    /** What the class calls its subclass (e.g. "Primal Path"). */
    flavor: string;
    description: string[];
    levels: SubclassLevel[];
    spells: SubclassSpell[];
}

// ---------- Class ----------

export interface ClassDetails {
    name: ClassName;
    label: string;
    hitDie: 6 | 8 | 10 | 12;
    primaryAbilities: AbilityKey[];
    savingThrows: [AbilityKey, AbilityKey];
    /** Non-saving-throw proficiencies (armor, weapons, tools). */
    proficiencies: ProficiencyRef[];
    proficiencyChoices: ProficiencyChoice[];
    startingEquipment: StartingEquipment;
    classTable: ClassTable[];
    /** Class and subclass features, keyed by id. */
    features: Record<string, ClassFeature>;
    /** Description paragraphs per feature id. */
    featureDescriptions: Record<string, string[]>;
    /** Absent for non-casters. */
    spellcasting?: Spellcasting;
    multiclassing: Multiclassing;
    subclasses: Subclass[];
}



export type HitDiceGroup = {
    className: ClassName;
    size: number;   
    count: number; 
};

export interface FeatureView {
    feature: ClassFeature;
    paragraphs: string[];       // from details.featureDescriptions
    subclassName: string | null;
}

export interface LevelFeatures {
    level: number;
    features: FeatureView[];
}