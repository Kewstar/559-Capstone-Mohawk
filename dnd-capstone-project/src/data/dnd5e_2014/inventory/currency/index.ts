// src/data/dnd5e_2014/currency/index.ts
import { CURRENCY_NAMES } from "./types";
import type { CurrencyName, CurrencyDetails } from "./types";

export * from "./types";


const cp: CurrencyDetails = {
    name: "cp",
    label: "Copper",
    valueInCopper: 1
}

const sp: CurrencyDetails = {
    name: "sp",
    label: "Silver",
    valueInCopper: 10
}

const ep: CurrencyDetails = {
    name: "ep",
    label: "Electrum",
    valueInCopper: 50
}

const gp: CurrencyDetails = {
    name: "gp",
    label: "Gold",
    valueInCopper: 100
}

const pp: CurrencyDetails = {
    name: "pp",
    label: "Platinum",
    valueInCopper: 1_000
}


/** Every background, keyed by name. */
export const CURRENCIES: Record<CurrencyName, CurrencyDetails> = {
    cp, sp, ep, gp, pp
};



/**
 * Retrieves a currency's CurrencyDetails.
 * 
 * @param name the currency to get the details of.
 * 
 * @returns the CurrencyDetails data for that class.
 */
export function getCurrency(name: CurrencyName): CurrencyDetails {
    return CURRENCIES[name];
}

/** Every currency in CURRENCY_NAMES. Used for dropdowns and lists. */
export const CURRENCY_LIST: CurrencyDetails[] = CURRENCY_NAMES.map(getCurrency);