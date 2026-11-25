// types.ts 
import type { AbilityKey } from "@/data/dnd5e_2014/abilities";
import type { ReactNode } from "react";
import type { ClassName } from "@/data/dnd5e_2014/classes";
import type { BackgroundName } from "@/data/dnd5e_2014/backgrounds";
import type { RaceName, RaceTrait } from "@/data/dnd5e_2014/races";


export type BookMode = 
    'newCharacter'  |
    'loadCharacter' |
    'userSettings'  |
    'gmTools'; 

export type PageProps = {
    /** Content rendered inside the `Page`. */
    children: ReactNode;
    /** Additional class names appended to the `Page`'s root `div`. */
    className?: string;
};


/** Defines rules for the `HTMLFLipBook`'s orientation. Can only ever be `landscape` or `portrait`. */
export type OrientationType = 'landscape' | 'portrait';


export interface PageFlipStateEvent {
    data: {
        page: number;
        mode: 'portrait' | 'landscape';
    }
    object: unknown;
}

export interface PageFlipInitEvent {
    data: PageFlipStateEvent ;
}

export interface OrientationChangeEvent {
    data: 'portrait' | 'landscape';
    object: unknown;
}


/** Defines rules for content created for sets of Page objects. */
export type PageSection = {
    /** Unique string used to identify each `PageSection` */
    key: string;
    /** String that is rendered to the user. Linked to {@link NavigationSection}'s `label` field */
    label: string;
    /**
     * Each {@link PageSection} defines the content for two `blocks` to be rendered. 
     * In two-page mode, `blocks` content is rendered in the left and right Page. 
     * In single-page mode, the `blocks` content is rendered in one page stacked together. 
     */
    blocks: [
        left: React.ReactNode, 
        right: React.ReactNode
    ]; 
};


/** Defines rules for navigation content used in the NavBar */
export type NavigationSection = { 
    /** Unique string used to identify each `NavigationSection` */
    key: string; 
    /** String that is rendered to the user. Linked to {@link PageSection}'s `label` field */
    label: string; 
    /** Unique 0-based index used to navigate to the {@link PageSection} `Page`(s) for each `NavigationSection` item. */
    pgIndex: number; 
};


/** Defines rules for the data held containing the user's information. */
export type UserData = {
    id: string;
    username: string;
    email: string;
    role: 'player' | 'dm';
}

/** Defines the rules for the Ability Scores */
export interface Abilities {
    id: AbilityKey;
    /** Base value inputted by the user. */
    base: number | "";
    /** Races can provide a bonus to an ability score. */
    racialBonus: { 
        /** The numerical bonus the race applies to the score. */
        value: number, 
        /** String that represents the race that applies the bonus. */
        source: string 
    };
    label: string;
    isProficient: boolean;
    max: number,
    check: AbilityCheckAndSave, 
    save: AbilityCheckAndSave,
};

interface AbilityCheckAndSave {
    /** Defines the rules when rolling an ability check or save. */
    roll: {
        /** Optional. The minimum value that can be rolled. */
        min: number | null,
        /** Optional. The maximum value that can be rolled. */
        max: number | null,
        /** Bonus modifiers applied to a check or save's roll. String as bonus dice can be applied. Defaults to empty string. */
        bonus: string,
        /** Determines the level of proficency for an ability check / saving throw. */
        proficency: number,
    }
}

/** Defines a Ability object with calculated fields. */
export type AbilitiesWithCalcFields = Abilities & { 
    value: number;
    mod: number;
    /** Total from ASIs chosen by the character, already included in `value`. */
    ASIBonus: number;
};


/** Defines rules for sub details on a Character */
export interface Attributes {
    proficiencyBonus: number
};

/** Defines the rules for a Character */
export interface CharacterData {
    name: string;
    identity: CharacterIdentity;
    classes: CharacterClass[],
    alignment: string; 
    abilities: Record<AbilityKey, Abilities>;
    attributes: Attributes;
    background: CharacterBackground | null;
    race: CharacterRace | null;
    startingPicks: Record<string, StartingPick>;
    /** Items the character added by hand. Starting equipment is derived, not stored here. */
    inventory: InventoryItem[];
    /** How many pieces of each item are equipped, for every item the character has, whatever its source. */
    equippedCounts: Record<string, number>;
    classWealth: ClassWealth;
    /** Copper gained (positive) or spent (negative) after the starting wealth, for purchases and loot. */
    copperAdjustment: number;
    journal: CharacterJournal;
}


export const IDENTITY_FIELDS = ["playerName", "pronouns", "deity", "age", "height", "weight", "eyes", "hair", "skin"] as const;
export type IdentityField = (typeof IDENTITY_FIELDS)[number];

export type CharacterIdentity = Record<IdentityField, string>;

/** Defines a character's choices for one class they have taken levels in. */
export interface CharacterClass {
    name: ClassName;
    level: number;
    /** name of subclass, if chosen. */
    subclassId: string | null;
    proficiencyChoices: string[][];
    spellChoices: SpellChoices;
    ASIChoices: ASIChoice[];
}

/** One ability score improvement: 
 * +2 to one ability, or +1 to two abilities. 
 * Feats will be implemented at a later time. */
export interface ASIChoice {
    mode: "single" | "split";
    abilities: AbilityKey[];
}

/** A character's background and the choices made within it. Details are looked up from the background data. */
export interface CharacterBackground {
    name: BackgroundName;
    personalityTraitChoices: string[];
    idealChoices: string[];
    bondChoices: string[];
    flawChoices: string[];
}

/** The fields in CharacterBackground that hold a player's selections. */
export type BackgroundChoiceKey = 
    "personalityTraitChoices"   |
    "idealChoices"              |
    "bondChoices"               |
    "flawChoices";


/** A character's race and the choices made within it. Details are looked up from the race data. */
export interface CharacterRace {
    name: RaceName;
    /** null until chosen; required whenever the race has subraces. */
    subraceId: string | null;
    /**
     * Holds user selections for each of a race's choices.
     * ability keys, language indexes, proficiency ids, spell indexes or trait ids.
     */
    traitChoices: Record<string, string[]>;
}

/** A "choose X of options" offered by the selected race, or race trait, with the choices made so far. */
export interface RaceChoice {
    key: string; 
    choiceType: RaceChoiceType;
    label: string;
    choose: number;
    options: RaceChoiceOption[];
    choices: string[]; 
}


/** One selectable option of a race's trait that offers a choice */
export interface RaceChoiceOption {
    value: string;
    label: string;
}

export type RaceChoiceType = "ability" | "language" | "proficiency" | "spell" | "subtrait";
export type TraitChoiceType = Exclude<RaceChoiceType, "ability">;

/** One racial bonus to an ability, with where it comes from. */
export interface RacialBonus {
    value: number;
    source: string;
}


export type RacialBonuses = Record<AbilityKey, RacialBonus>;

export interface AbilityBonus {
    label: string;
    bonus: number;
}


/** One line of the bonus summary. */
export interface RacialBonusLine {
    ability: AbilityKey;
    text: string;
}

/** A trait ready to display: the trait, its description, and the subrace it came from (if any). */
export interface TraitView {
    raceTrait: RaceTrait;
    paragraphs: string[];
    subraceName: string | null;
}


export type SpellListKey = "cantrips" | "known" | "prepared";

/** Spell indexes a character has picked for one class. */
export interface SpellChoices {
    cantrips: string[];
    /** Spells known. */
    known: string[];
    /** Spells prepared. */
    prepared: string[];
}


/** One stack of identical items the character has. Details are looked up from the equipment data. */
export interface InventoryItem {
    itemIndex: string;
    /** How many pieces are in the stack. For ammunition this counts single pieces, not bundles. */
    quantity: number;
}

/** The choice made for one starting equipment choice. */
export interface StartingPick {
    /** Which option was taken; null until chosen. */
    option: number | null;
    /** Items picked for each of the option's parts, aligned with `option.parts`; empty for item parts. */
    categoryPicks: string[][];
}


/** Whether the first class's starting equipment or its starting gold is taken. */
export interface ClassWealth {
    mode: "equipment" | "gold";
    /** The total of the dice rolled for gold mode; null uses the average. */
    goldRoll: number | null;
}


export const JOURNAL_FIELDS = ["appearance", "backstory", "allies", "notes"] as const;
export type JournalField = (typeof JOURNAL_FIELDS)[number];

/** The free-text entries on the Journal page. */
export type CharacterJournal = Record<JournalField, string>;


export interface DieResult {
    value: number;
    isDropped: boolean;
}

type DieRolls = DieResult[]

export type RolledAbilityResult = {
    dieTotal: number,
    dieRolls: DieRolls;
};

export type AbilityAssignments = AbilityKey | "--"

export type ArmorClassCalculations = {
    "natural": number;
    "flat": number;
    "unarmored (barbarian)": "10 + dex + con";
    "unarmored (monk)": "10 + dex + wis";
    "custom": string;
};

export type ArmorClassCalculationKeys = keyof ArmorClassCalculations;