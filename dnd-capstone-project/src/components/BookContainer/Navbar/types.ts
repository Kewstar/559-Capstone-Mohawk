// types.ts 
import type { BookMode } from "../types";


export interface NavButton {
    key: string;
    label: string;
    onClick: () => void; 
    isActive?: boolean;
    page?: 'left' | 'right';
}

export interface NavRowProps {
    buttons: NavButton[];
    singlePageFlag: boolean;
    splitEvenly: boolean; 
}


export interface PageConfig {
    label: string;
    tabs: { key: string; label: string }[];
    role: string;
}
