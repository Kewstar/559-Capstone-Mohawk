
export const CURRENCY_NAMES = [
    "cp", "sp", "ep", "gp", "pp"
] as const;


export type CurrencyName = (typeof CURRENCY_NAMES)[number];


export interface CurrencyDetails {
    name: CurrencyName;
    label: string; 
    valueInCopper: number; 
}
