// import type { CurrencyName } from "../inventory/currency";
import type { AlignmentName } from "../alignments";
import type { ProficiencyRef, StartingEquipmentItem } from "../classes";
import type { CurrencyName } from "../inventory/currency";


export const BACKGROUND_NAMES = [
    "acolyte"
] as const;

export type BackgroundName = (typeof BACKGROUND_NAMES)[number];


export interface BackgroundDetails {
    name: BackgroundName;
    label: string;
    skillProficiencies: ProficiencyRef[];
    feature: {
        name: string;
        description: string[];
    }
    languageOptions: {
        choose: number;
    }
    startingEquipment: StartingEquipmentItem[];
    startingEquipmentOptions: {
        choose: number;
        category: {
            name: string;
            label: string;
        }
    }[];
    startingGold: {
        quantity: number;
        unit: CurrencyName;
    }
    personalityTraits: Choice<string>;
    ideals: Choice<Ideal>
    bonds: Choice<string>;
    flaws: Choice<string>; 


}

export interface Choice<T> {
    choose: number;
    options: T[];
}

export interface Ideal {
    description: string;
    alignments: AlignmentName[];
}