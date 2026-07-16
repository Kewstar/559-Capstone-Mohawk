// types.ts 
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
    tabs: { key: string; pgIndex: number, label: string }[];
    role: string;
}