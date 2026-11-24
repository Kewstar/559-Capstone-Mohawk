// wealthHelpers.ts
import { getBackground } from "@/data/dnd5e_2014/backgrounds";
import { CLASS_STARTING_WEALTH, STARTING_WEALTH_DIE } from "@/data/dnd5e_2014/classes/startingWealth";
import type { ClassName } from "@/data/dnd5e_2014/classes";
import { makeChange, toCopperValue } from "@/data/dnd5e_2014/inventory/currency";
import type { Coins, CurrencyName } from "@/data/dnd5e_2014/inventory/currency";
import type { CharacterData } from "@/components/BookContainer/types";


export type WealthData = Pick<CharacterData, "classes" | "background" | "classWealth" | "copperAdjustment">;


/** The coins shown. Platinum is left out so 15 gp doesn't display as "1 pp 5 gp". */
const PURSE_CURRENCIES: CurrencyName[] = ["gp", "sp", "cp"];


/**
 * Determines the average starting gold for a class.
 *
 * @param name the class.
 *
 * @returns the average roll of the class's dice, times its multiplier, in gold.
 */
export function getAverageClassGold(name: ClassName): number {
    const wealth = CLASS_STARTING_WEALTH[name];

    return Math.round(wealth.dice * ((STARTING_WEALTH_DIE + 1) / 2) * wealth.multiplier);
}


/**
 * Retrieves the lowest and highest dice totals a class's starting wealth roll can have.
 *
 * @param name the class.
 *
 * @returns the valid range, e.g. 5 to 20 for 5d4.
 */
export function getGoldRollRange(name: ClassName): { min: number; max: number } {
    const dice = CLASS_STARTING_WEALTH[name].dice;

    return { 
        min: (dice), 
        max: (dice * STARTING_WEALTH_DIE)
    };
}


/**
 * Determines the gold the first class grants.
 *
 * @remarks Zero unless gold was chosen over equipment. 
 *          A rolled total outside the class's valid range is ignored in favour of the average.
 *
 * @param data the character's classes and wealth choice.
 *
 * @returns the gold, in gp.
 */
export function getClassGold(data: Pick<WealthData, "classes" | "classWealth">): number {
    const first = data.classes[0];

    if (!first || data.classWealth.mode !== "gold") 
        return 0;

    const roll = data.classWealth.goldRoll;
    const range = getGoldRollRange(first.name);

    if ( (roll !== null) && (roll >= range.min) && (roll <= range.max) ) 
        return roll * CLASS_STARTING_WEALTH[first.name].multiplier;

    return getAverageClassGold(first.name);
}


/**
 * Determines the character's total wealth in copper.
 *
 * @remarks The background's gold, plus the class's gold when it was chosen, plus whatever has been
 *          gained or spent since. Never below zero.
 *
 * @param data the character's classes, background, wealth choice and adjustment.
 *
 * @returns the total in copper pieces.
 */
export function getWealthCopper(data: WealthData): number {
    let total = toCopperValue(getClassGold(data), "gp") + data.copperAdjustment;

    if (data.background !== null) {
        const gold = getBackground(data.background.name).startingGold;

        total += toCopperValue(gold.quantity, gold.unit);
    }

    return Math.max(0, total);
}


/**
 * Builds the character's purse from their total wealth.
 *
 * @param data the character's classes, background, wealth choice and adjustment.
 *
 * @returns the coins, using gold, silver and copper.
 */
export function getPurse(data: WealthData): Coins {
    return makeChange(getWealthCopper(data), PURSE_CURRENCIES);
}