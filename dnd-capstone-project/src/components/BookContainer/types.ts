// types.ts 
import type { AbilityKey } from "@/data/dnd5e_2014/abilities";
import type { ReactNode } from "react";
import type { ClassName } from "@/data/dnd5e_2014/classes";
import type { BackgroundName } from "@/data/dnd5e_2014/backgrounds";

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
};


/** Defines rules for sub details on a Character */
export interface Attributes {
    proficiencyBonus: number
};

/** Defines the rules for a Character */
export interface CharacterData {
    name: string;
    // totalLevel: number;
    classes: CharacterClass[],
    alignment: string; 
    abilities: Record<AbilityKey, Abilities>;
    attributes: Attributes;
    background: CharacterBackground | null;
}

/** Defines a character's choices for one class they have taken levels in. */
export interface CharacterClass {
    name: ClassName;
    level: number;
    /** name of subclass, if chosen. */
    subclassId: string | null;
    proficiencyChoices: string[][];
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
    "flawChoices"

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