// startingWealth.ts
import type { ClassName } from "./types";


/** Starting wealth when a class takes gold instead of its starting equipment: (dice)d4 * multiplier gp. */
export interface StartingWealth {
    dice: number;
    multiplier: number;
}


export const CLASS_STARTING_WEALTH: Record<ClassName, StartingWealth> = {
    barbarian:  { dice: 2, multiplier: 10 },
    bard:       { dice: 5, multiplier: 10 },
    cleric:     { dice: 5, multiplier: 10 },
    druid:      { dice: 2, multiplier: 10 },
    fighter:    { dice: 5, multiplier: 10 },
    monk:       { dice: 5, multiplier: 1  },
    paladin:    { dice: 5, multiplier: 10 },
    ranger:     { dice: 5, multiplier: 10 },
    rogue:      { dice: 4, multiplier: 10 },
    sorcerer:   { dice: 3, multiplier: 10 },
    warlock:    { dice: 4, multiplier: 10 },
    wizard:     { dice: 4, multiplier: 10 },
};


/** Every class uses d4s for starting wealth. */
export const STARTING_WEALTH_DIE = 4;