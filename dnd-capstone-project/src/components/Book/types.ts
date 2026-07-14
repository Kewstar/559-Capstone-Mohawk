// types.ts 
import type { ReactNode } from "react";

export type BookMode = 
    'newCharacter'  |
    'loadCharacter' |
    'userSettings'  |
    'gmTools'; 

export type PageProps = {
    children: ReactNode;
    className?: string;
};

export type orientationType = 'landscape' | 'portrait';

export interface PageFlipStateEvent  {
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