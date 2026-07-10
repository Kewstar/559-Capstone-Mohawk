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