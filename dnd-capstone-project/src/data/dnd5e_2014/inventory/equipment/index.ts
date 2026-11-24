import { ITEM_INDEXES, ITEMS } from "./equipment";
import type { ItemIndex } from "./equipment";
import type { ItemDetails } from "./types";

export * from "./types";
export { ITEM_INDEXES, ITEMS } from "./equipment";
export type { ItemIndex } from "./equipment";


/**
 * Type guard for item indexes.
 *
 * @param value the string to test.
 *
 * @returns true if it is an ItemIndex.
 */
export function isItemIndex(value: string): value is ItemIndex {
    return (ITEM_INDEXES as readonly string[]).includes(value);
}


/**
 * Looks up an item by index.
 *
 * @param index the item's index.
 *
 * @returns the item's details.
 */
export function getItem(index: ItemIndex): ItemDetails {
    return ITEMS[index];
}


/**
 * Looks up an item by a plain string index, as stored in saved data.
 *
 * @param index the item's index.
 *
 * @returns the item, or null if there is no item with that index.
 */
export function findItem(index: string): ItemDetails | null {
    return isItemIndex(index) ? getItem(index) : null;
}


/** Every item, alphabetical. Used for lists and the shop. */
export const ITEM_LIST: ItemDetails[] = ITEM_INDEXES.map(getItem);


/**
 * Lists the items in a category, e.g. "martial-melee-weapons" or "holy-symbols".
 *
 * @param categoryIndex the category's index.
 *
 * @returns the items that belong to it.
 */
export function getItemsInCategory(categoryIndex: string): ItemDetails[] {
    return ITEM_LIST.filter(function inCategory(item) {
        return item.categories.includes(categoryIndex);
    });
}