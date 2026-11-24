// choiceHelpers.ts
import { findItem, getItemsInCategory, type ItemDetails } from "@/data/dnd5e_2014/inventory/equipment";
import type { CharacterData, InventoryItem, StartingPick } from "../../types";
import { getClass, type StartingEquipmentChoice, type StartingEquipmentItem, type StartingOption, type StartingPart } from "@/data/dnd5e_2014/classes";
import { getBackground } from "@/data/dnd5e_2014/backgrounds";
import { addItem } from "./Equipment/equipmentHelpers";
import { replaceAt } from "../HTMLRenderHelpers";



/**
 * Checks or unchecks one value in a list of picks.
 *
 * @remarks Unchecking always works. Checking is accepted only for an allowed value while the limit
 *          isn't reached. With a limit of 1, checking another value replaces the current one.
 *
 * @param currentChoices the current choices.
 * @param value the value being toggled.
 * @param allowed every value that may be chosen.
 * @param limit how many values may be chosen.
 *
 * @returns The updated choices, or the same array if nothing changed.
 */
export function toggleLimitedPick(
    currentChoices: string[], value: string, allowed: string[], limit: number
): string[] {
    if (currentChoices.includes(value)) {
        const remaining: string[] = [];

        for (const choice of currentChoices) {
            if (choice !== value) 
                remaining.push(choice);
        }

        return remaining;
    }

    if ( !allowed.includes(value) ) 
        return currentChoices;

    if (currentChoices.length < limit) 
        return [...currentChoices, value];


    if (limit === 1)
        return [value] 
    else 
        return currentChoices;
}


export type StartingData = Pick<CharacterData, "classes" | "background" | "startingPicks" | "classWealth">;
type CategoryPart = Extract<StartingPart, { kind: "category" }>;


/** One starting equipment choice with the key its pick is stored under. */
export interface StartingChoiceRef {
    key: string;
    choice: StartingEquipmentChoice;
}



/**
 * Makes an empty list of choices.
 *
 * @returns an empty array.
 */
function makeEmptyChoices(): string[] {
    return [];
}


/**
 * Retrieves an item's index.
 *
 * @param item the item.
 *
 * @returns its index.
 */
function getItemIndex(item: ItemDetails): string {
    return item.index;
}


/**
 * Retrieves and lists the starting equipment choices that currently apply: the first class's, then the background's.
 *
 * @param startingData the character's classes, background and picks.
 *
 * @returns the choices, each with its pick key.
 */
export function getStartingChoices(startingData: StartingData): StartingChoiceRef[] {
    const refs: StartingChoiceRef[] = [];
    const firstClass = startingData.classes[0];

    if ( (firstClass) && (startingData.classWealth.mode === "equipment") ) {
        for (const [index, choice] of getClass(firstClass.name).startingEquipment.choices.entries()) {
            refs.push({ key: `class:${firstClass.name}:${index}`, choice });
        }
    }

    if (startingData.background !== null) {
        const backgroundDetails = getBackground(startingData.background.name);

        for (const [index, choice] of backgroundDetails.startingEquipmentOptions.entries()) {
            refs.push({ key: `background:${backgroundDetails.name}:${index}`, choice });
        }
    }

    return refs;
}


/**
 * Retrieves and lists the fixed items the first class and the background grant.
 *
 * @param startingData the character's classes and background.
 *
 * @returns the fixed starting items.
 */
function getFixedStartingItems(startingData: StartingData): StartingEquipmentItem[] {
    const startingItems: StartingEquipmentItem[] = [];
    const firstClass = startingData.classes[0];

    if ( (firstClass) && (startingData.classWealth.mode === "equipment") ) 
        startingItems.push(...getClass(firstClass.name).startingEquipment.items);

    if (startingData.background !== null) 
        startingItems.push(...getBackground(startingData.background.name).startingEquipment);

    return startingItems;
}


/**
 * Determines which option of a choice is selected.
 *
 * @param choice the choice.
 * @param pick the stored pick, if any.
 *
 * @returns the option index; a choice with one option always selects it; null if none is chosen.
 */
export function getSelectedOption(choice: StartingEquipmentChoice, pick: StartingPick | undefined): number | null {
    if (choice.options.length === 1) 
        return 0;

    const option = pick?.option;

    if ( (option !== undefined) && (option !== null) && (option < choice.options.length) )
        return option;
    else 
        return null; 
}


/**
 * Determines if an option meets a character's proficiency requirements. 
 * 
 * @param option The option. 
 * @param proficiencies The character's prof. requirements. 
 * 
 * @returns False if any item needs a prof. the character doesn't meet. True if met.  
 */
export function isOptionAvailable(option: StartingOption, proficiencies: Set<string>): boolean {
    for (const part of option.parts) 
        if (part.kind === "item" && part.requiresProficiency && !proficiencies.has(part.requiresProficiency)) {
            return false;
    }

    return true;
}


/**
 * Keeps only the choices that belong to the part's category, up to its limit.
 *
 * @param part the category part.
 * @param choices the chosen item indexes.
 *
 * @returns the valid choices.
 */
function getValidCategoryPicks(part: CategoryPart, choices: string[]): string[] {
    const allowed = getItemsInCategory(part.categoryIndex).map(getItemIndex);
    const valid: string[] = [];

    for (const pick of choices) 
        if (allowed.includes(pick) && valid.length < part.choose) {
            valid.push(pick);
    }

    return valid;
}



/**
 * Derives the items a character starts with from their first class, their background and their choices.
 *
 * @remarks Fixed items are always included, then each choice's selected option if the character meets
 * its proficiency requirements. Packs unpack into their contents. A choice with nothing selected
 * contributes nothing.
 *
 * @param data the character's classes, background and picks.
 * @param proficiencies the character's proficiency indexes.
 *
 * @returns the starting items, merged by item.
 */
export function getStartingItems(data: StartingData, proficiencies: Set<string>): InventoryItem[] {
    let inventory: InventoryItem[] = [];

    for (const item of getFixedStartingItems(data)) {
        inventory = addItem(inventory, item.index, item.quantity);
    }

    for (const ref of getStartingChoices(data)) {
        const pick = data.startingPicks[ref.key];
        const optionIndex = getSelectedOption(ref.choice, pick);
        const option = (optionIndex === null) ? undefined : ref.choice.options[optionIndex];

        if ( (!option) || (!isOptionAvailable(option, proficiencies)) ) 
            continue;

        const categoryPicks = ( (pick !== undefined) 
            && (pick.option === optionIndex) ) ? pick.categoryPicks : [];

        for (const [partIndex, part] of option.parts.entries()) {
            if (part.kind === "item") {
                inventory = addItem(inventory, part.itemIndex, part.quantity);
                continue;
            }

            for (const itemIndex of getValidCategoryPicks(part, categoryPicks[partIndex] ?? [])) {
                inventory = addItem(inventory, itemIndex, 1);
            }
        }
    }

    return inventory;
}


/**
 * Retrieves a choice by key.
 *
 * @param refs the choices.
 * @param key the choice key.
 *
 * @returns the choice, or undefined.
 */
function findStartingChoice(refs: StartingChoiceRef[], key: string): StartingChoiceRef | undefined {
    for (const ref of refs) {
        if (ref.key === key) 
            return ref;
    }

    return undefined;
}


/**
 * Takes one option of a choice, discarding picks made under another option.
 *
 * @param startingData the character's classes, background and picks.
 * @param key the choice's pick key.
 * @param optionIndex the option to take.
 *
 * @returns the new picks, or the same object if nothing changed.
 */
export function selectStartingOption(startingData: StartingData, key: string, optionIndex: number): Record<string, StartingPick> {
    const ref = findStartingChoice(getStartingChoices(startingData), key);
    const option = ref?.choice.options[optionIndex];

    if ( (!option) || (startingData.startingPicks[key]?.option === optionIndex) ) 
        return startingData.startingPicks;
    
    return { 
        ...startingData.startingPicks, 
        [key]: { 
            option: optionIndex, 
            categoryPicks: option.parts.map(makeEmptyChoices) 
        } 
    };
}


/**
 * Checks or unchecks one item in a category part of the selected option.
 *
 * @param startingData the character's classes, background and picks.
 * @param key the choice's pick key.
 * @param partIndex which part of the selected option.
 * @param itemIndex the item's index.
 *
 * @returns the new picks, or the same object if nothing changed.
 */
export function toggleStartingItem(
    startingData: StartingData, key: string, partIndex: number, itemIndex: string,
): Record<string, StartingPick> {
    const ref = findStartingChoice(getStartingChoices(startingData), key);
    const pick = startingData.startingPicks[key];
    const optionIndex = ref ? getSelectedOption(ref.choice, pick) : null;
    const option = ( (ref) && (optionIndex !== null) ) ? ref.choice.options[optionIndex] : undefined;
    const part = option?.parts[partIndex];

    if (!option || optionIndex === null || part?.kind !== "category") 
        return startingData.startingPicks;
    
    const categoryPicks = ( (pick !== undefined) && (pick.option === optionIndex) ) 
        ? pick.categoryPicks : option.parts.map(makeEmptyChoices);
    
// if ( (option !== undefined) && (option !== null) && (option < choice.options.length) )

    
    const allowed = getItemsInCategory(part.categoryIndex).map(getItemIndex);
    const current = categoryPicks[partIndex] ?? [];
    const updated = toggleLimitedPick(current, itemIndex, allowed, part.choose);

    if (updated === current) 
        return startingData.startingPicks;

    return {
        ...startingData.startingPicks,
        [key]: { 
            option: optionIndex, 
            categoryPicks: replaceAt(categoryPicks, partIndex, updated) 
        },
    };
}


/**
 * Converts a category to text, "martial-melee-weapons" becomes "martial melee weapons".
 *
 * @param categoryIndex the category's index.
 *
 * @returns the text.
 */
function formatCategory(categoryIndex: string): string {
    return categoryIndex.replace(/-/g, " ");
}

/**
 * Describes one part of an option as text.
 *
 * @param part the part.
 *
 * @returns e.g. "2 x Handaxe" or "Choose 1 from simple weapons".
 */
function describePart(part: StartingPart): string {
    if (part.kind === "category") {
        return `Choose ${part.choose} from ${formatCategory(part.categoryIndex)}`;
    }

    const name = findItem(part.itemIndex)?.name ?? part.itemIndex;

    return part.quantity > 1 ? `${part.quantity} x ${name}` : name;
}


/**
 * Describes an option as text.
 *
 * @param option the option.
 *
 * @returns its parts joined with " + ".
 */
export function describeOption(option: StartingOption): string {
    return option.parts.map(describePart).join(" + ");
}