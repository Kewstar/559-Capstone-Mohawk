import { ABILITY_KEYS, type AbilityKey } from "@/data/dnd5e_2014/abilities";
import type { ASIChoice, CharacterClass } from "../../types";
import { getClass, type ClassDetails } from "@/data/dnd5e_2014/classes";
import { replaceAt } from "../HTMLRenderHelpers";


export const ASI_SINGLE_BONUS = 2;
export const ASI_SPLIT_BONUS = 1; 

export const EMPTY_ASI_CHOICE: ASIChoice = { mode: "single", abilities: [] };


/**
 * Type guard for ability keys.
 *
 * @param value the string to test.
 *
 * @returns true if it is one of the six ability keys.
 */
export function isAbilityKey(value: string): value is AbilityKey {
    return (ABILITY_KEYS as readonly string[]).includes(value);
}


/**
 * Determines the number of ASIs a CharacterClass has earned at its current level. 
 * 
 * @param characterClass One class the character has taken levels in. 
 * 
 * @returns The count of ASIs.  
 */
export function getASICount(characterClass: CharacterClass): number {
    return getClass(characterClass.name).classTable[characterClass.level - 1]?.abilityScoreBonuses ?? 0;
}



/**
 * Determines the class level at which an ASI is earned.
 *
 * @param classDetails the class data.
 * @param slot the improvement's position, starting at 0.
 *
 * @returns the level whose row first reaches that many improvements.
 */
export function getASILevel(classDetails: ClassDetails, slot: number): number {
    for (const row of classDetails.classTable) {
        if (row.abilityScoreBonuses > slot) 
            return row.level;
    }

    return classDetails.classTable.length;
}


/**
 * Cleans an improvement choice: one ability for "single", up to two different ones for "split".
 *
 * @param choice the choice.
 *
 * @returns the choice with duplicates, extras and invalid abilities removed.
 */
export function normalizeASIChoice(choice: ASIChoice): ASIChoice {
    const limit = choice.mode === "single" ? 1 : 2;
    const abilities: AbilityKey[] = [];

    for (const ability of choice.abilities) {
        if ( (isAbilityKey(ability)) && (!abilities.includes(ability)) && (abilities.length < limit) ) 
            abilities.push(ability);
    }

    return { mode: choice.mode, abilities };
}



/**
 * Determines whether an improvement has all the abilities it needs.
 *
 * @param choice the choice.
 *
 * @returns true if "single" has one ability, or "split" has two.
 */
export function isASIComplete(choice: ASIChoice): boolean {
    return normalizeASIChoice(choice).abilities.length === (choice.mode === "single" ? 1 : 2);
}


/**
 * Determines the total bonus each ability gets from every earned improvement.
 *
 * @remarks Only the first `getAsiCount` choices of each class count. 
 *          A partly made choice already counts for the abilities picked, so the effect shows while choosing.
 *
 * @param classes the character's class entries.
 *
 * @returns a bonus for each ability. Zero when there is none. 
 */
export function getASIBonuses(classes: CharacterClass[]): Record<AbilityKey, number> {
    const totals: Record<AbilityKey, number> = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };

    for (const characterClass of classes) {
        const count = getASICount(characterClass);

        for (let ASI = 0; ASI < count; ASI++) {
            const choice = characterClass.ASIChoices[ASI];

            if (!choice) 
                continue;

            const clean = normalizeASIChoice(choice);
            const bonus = clean.mode === "single" ? ASI_SINGLE_BONUS : ASI_SPLIT_BONUS;

            for (const ability of clean.abilities) {
                totals[ability] += bonus;
            }
        }
    }

    return totals;
}


/**
 * Determines how many earned ASIs are fully chosen.
 *
 * @param classes Array containing the classes the character has taken levels in. 
 *
 * @returns the improvements chosen and the improvements earned.
 */
export function countASI(classes: CharacterClass[]): { chosen: number; available: number } {
    let chosen = 0;
    let available = 0;

    for (const characterClass of classes) {
        const count = getASICount(characterClass);

        available += count;

        for (let ASI = 0; ASI < count; ASI++) {
            const choice = characterClass.ASIChoices[ASI];

            if ( (choice) && (isASIComplete(choice)) ) 
                chosen += 1;
        }
    }

    return { chosen, available };
}


/**
 * Pads an array of with empty ones, so a slot can be written to.
 *
 * @param choices the existing choices.
 * @param length how long the list must be.
 *
 * @returns an array of at least that length.
 */
function padChoices(choices: ASIChoice[], length: number): ASIChoice[] {
    const padded: ASIChoice[] = [];

    for (let slot = 0; slot < Math.max(length, choices.length); slot++) {
        padded.push(choices[slot] ?? EMPTY_ASI_CHOICE);
    }

    return padded;
}


/**
 * Sets one ASI of a CharacterClass.
 *
 * @param classes list containing the classes the character has taken levels in. 
 * @param classIdx the entry to change.
 * @param slot which ASI.
 * @param choice the new choice; it is cleaned before being stored.
 *
 * @returns Updated list of classes. Returns the same array if the slot isn't earned yet or nothing changed.
 */
export function setClassASIChoice(
    classes: CharacterClass[], classIdx: number, slot: number, choice: ASIChoice,
): CharacterClass[] {
    const characterClass = classes[classIdx];

    if ( (!characterClass) || (slot < 0) || (slot >= getASICount(characterClass)) ) 
        return classes;
    

    const clean = normalizeASIChoice(choice);
    const current = characterClass.ASIChoices[slot] ?? EMPTY_ASI_CHOICE;

    if ( (clean.mode === current.mode) && (clean.abilities.join()) === (current.abilities.join()) ) 
        return classes;
    

    const ASIChoices = replaceAt( padChoices(characterClass.ASIChoices, slot + 1), slot, clean );

    return replaceAt(classes, classIdx, { ...characterClass, ASIChoices });
}