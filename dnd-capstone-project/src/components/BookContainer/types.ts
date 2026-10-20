// types.ts 
import type { ReactNode } from "react";

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

/** Defines the options for character stats */
export type AbilityKey = "str" | "dex" | "con" | "int" | "wis" | "cha";

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
    totalLevel: number;
    alignment: string; 
    abilities: Record<AbilityKey, Abilities>;
    attributes: Attributes;
}


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