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