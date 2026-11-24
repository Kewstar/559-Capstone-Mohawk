
export const CURRENCY_NAMES = [
    "cp", "sp", "ep", "gp", "pp"
] as const;


export type CurrencyName = (typeof CURRENCY_NAMES)[number];


export interface CurrencyDetails {
    name: CurrencyName;
    label: string; 
    valueInCopper: number; 
}


/** A purse: how many of each coin a character holds. 
 * @remarks coins must be non-negative integer numbers. */
export type Coins = Record<CurrencyName, number>;


/** Fifty coins of any type weigh one pound. */
export const COINS_PER_POUND = 50;