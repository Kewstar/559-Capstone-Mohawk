// src/data/dnd5e_2014/currency/index.ts
import { COINS_PER_POUND, CURRENCY_NAMES } from "./types";
import type { CurrencyName, CurrencyDetails, Coins } from "./types";

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


/** Every currency, keyed by name. */
export const CURRENCIES: Record<CurrencyName, CurrencyDetails> = {
    cp, sp, ep, gp, pp
};



/**
 * Retrieves a currency's CurrencyDetails.
 * 
 * @param name the currency to get the details of.
 * 
 * @returns the CurrencyDetails data for that currency.
 */
export function getCurrency(name: CurrencyName): CurrencyDetails {
    return CURRENCIES[name];
}

/** Every currency in CURRENCY_NAMES. Used for dropdowns and lists. */
export const CURRENCY_LIST: CurrencyDetails[] = CURRENCY_NAMES.map(getCurrency);

/**
 * Orders currencies by value, from most to least.
 *
 * @param a the first currency.
 * @param b the second currency.
 *
 * @returns a negative, zero or positive number for sorting.
 */
function compareByValueDescending(a: CurrencyDetails, b: CurrencyDetails): number {
    return b.valueInCopper - a.valueInCopper;
}


/** Every currency from most to least valuable, for making change and formatting. */
const CURRENCY_LIST_DESCENDING: CurrencyDetails[] = [...CURRENCY_LIST].sort(compareByValueDescending);

/** The coins used when making change. Electrum is left out, since few tables use it. */
export const DEFAULT_CHANGE_CURRENCIES: CurrencyName[] = ["pp", "gp", "sp", "cp"];


/**
 * Type guard for the currency name.
 * 
 * @param value The string to test. 
 *  
 * @returns True if it is a CurrencyName. False if not.  
 */
export function isCurrencyName(value: string): value is CurrencyName {
    return (CURRENCY_NAMES as readonly string[]).includes(value);
}


/**
 * Creates an empty coin purse. 
 * 
 * @returns A purse containing no coins.  
 */
export function buildEmptyCoinPurse(): Coins {
    return { cp: 0, sp: 0, ep: 0, gp: 0, pp: 0 }
}


/**
 * Converts an amount of one currency into copper. 
 * 
 * @param quantity The number of coins.  
 * @param unit The type of currency. 
 * 
 * @returns The value in copper pieces.  
 */
export function toCopperValue(quantity: number, unit: CurrencyName): number {
    return (quantity * getCurrency(unit).valueInCopper);
}


/**
 * Totals a purse in copper's value. 
 * 
 * @remarks Copper is the one unit every coin type converts to without fractions. 
 * 
 * @param coins The coins owned by the character.
 *  
 * @returns The total value in copper pieces.  
 */
export function getTotalCopperValue(coins: Coins): number {
    let total = 0;

    for (const currency of CURRENCY_LIST) {
        total += coins[currency.name] * currency.valueInCopper;
    }

    return total;
}


/**
 * Converts a given amount of copper into coins. Uses the largest coins that fit first. 
 * 
 * @remarks Only uses provided currencies. The total value is always exact, 
 *          because any remainder that cannot convert is added as copper. 
 * 
 * @param copper The amount to convert, in copper value. 
 * @param currencies Which coins to use. Defaults to platinum, gold, silver, and copper. 
 * 
 * @returns The updated coin amounts of each currency type.  
 */
export function makeChange(
    copper: number, 
    currencies: CurrencyName[] = DEFAULT_CHANGE_CURRENCIES
): Coins {
    const coins = buildEmptyCoinPurse();
    let remaining = Math.max( 0, Math.floor(copper) );

    for (const currency of CURRENCY_LIST_DESCENDING) {
        if ( !currencies.includes(currency.name) )
            continue;

        const count = Math.floor(remaining / currency.valueInCopper);

        coins[currency.name] = count;
        remaining -= (count * currency.valueInCopper);
    }

    coins.cp += remaining;

    return coins;
}


/**
 * Determines if a provided list of coin types can pay a price. 
 * 
 * @param coins object containing each coin type and an amount for each. 
 * @param costInCopper The price, converted to copper pieces. 
 * 
 * @returns True if the provided coins is worth at least the price. False if not.  
 */
export function canAfford(coins: Coins, costInCopper: number): boolean {
    return getTotalCopperValue(coins) >= costInCopper;
}


/**
 * Subtracts the amount of coins needed to pay for a provided costInCopper. 
 * 
 * @remarks The returned Coins type is built via {@link makeChange}. 
 *          The character's remaining coin types are reshuffled to accomplish this.  
 * 
 * @param coins object containing each coin type and an amount for each. 
 * @param costInCopper 
 * @returns 
 */
export function spendCoinsInCopper(coins: Coins, costInCopper: number): Coins | null {
    if ( !canAfford(coins, costInCopper) )
        return null;

    return makeChange( getTotalCopperValue(coins) - costInCopper )
}


/**
 * Formats a provided Coins object for display. Largest coins are listed first.
 * 
 * @param coins object containing each coin type and an amount for each. 
 * @returns ex. "7 gp 5 sp", or "0 cp" for an empty Coins object.
 */
export function formatCoins(coins: Coins): string {
    const formattedCoins: string[] = [];

    for (const currency of CURRENCY_LIST_DESCENDING) {
        const count = coins[currency.name];

        if (count > 0)
            formattedCoins.push(`${count} ${currency.name}`);
    }

    if (formattedCoins.length > 0)
        return formattedCoins.join(" ");
    else 
        return "0 cp";
}


/**
 * Determines how much a Coins object weighs using {@link COINS_PER_POUND}.
 * 
 * @param coins object containing each coin type and an amount for each. 
 * 
 * @returns The calculated weight of the Coins object. 50 coins of any type weighs 1 pound. 
 */
export function determineCoinWeight(coins: Coins): number {
    let count = 0;

    for (const name of CURRENCY_NAMES) {
        count += coins[name];
    }

    return (count / COINS_PER_POUND);
}


/**
 * Formats an item's price for display.
 *
 * @param cost the price, as a quantity and a currency.
 *
 * @returns e.g. "45 gp".
 */
export function formatCost(cost: { quantity: number; unit: CurrencyName }): string {
    return `${cost.quantity} ${cost.unit}`;
}