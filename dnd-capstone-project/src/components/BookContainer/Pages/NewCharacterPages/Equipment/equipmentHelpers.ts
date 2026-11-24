// equipmentHelpers.ts
import { findItem } from "@/data/dnd5e_2014/inventory/equipment";
import type { ItemDetails } from "@/data/dnd5e_2014/inventory/equipment";
import type { InventoryItem } from "@/components/BookContainer/types";
import { removeAt, replaceAt } from "@/components/BookContainer/Pages/HTMLRenderHelpers";

/** Which equipped limit an item falls under. Body armor and shields allow one each; everything else is free. */
export type EquipSlot = "armor" | "shield" | "other";

/** A stack of an item the character has, + how many pieces are equipped. */
export interface InventoryStack {
    itemIndex: string;
    quantity: number;
    equipped: number;
}

/** An InventoryStack item together with its ItemDetails. */
export interface EquippedItem {
    inventoryStack: InventoryStack;
    itemDetails: ItemDetails;
}


/**
 * Determines which equipped item limit a given item falls under.
 * 
 * @param itemDetails The data for the item to determine. 
 *  
 * @returns What kind of type the item is:
 *          - "shield" for shields. 
 *          - "armor" for armor.
 *          - "other" for everything else
 */
export function getEquipSlot(itemDetails: ItemDetails): EquipSlot {
    if (itemDetails.type !== "armor")
        return "other";

    if (itemDetails.armorCategory === "Shield") 
        return "shield";
    else 
        return "armor";
}


/**
 * Determines how many pieces one purchase adds. 
 * 
 * @remarks Ammunition is sold by the bundle (20 arrows), but stacks as single pieces. 
 *          Ex. 10 arrows + bundle of 20 becomes one stack of 30. 
 *          Everything else is bought one at a time. 
 * 
 * @param itemDetails The data for the item to determine. 
 * 
 * @returns The number of pieces one purchase adds to the inventory.  
 */
export function getPurchaseQuantity(itemDetails: ItemDetails): number {
    if (itemDetails.type === "ammunition")
        return itemDetails.bundleSize;
    else 
        return 1;
}


/**
 * Determines the position of the stack for an item. 
 * 
 * @param inventory The inventory to search through.  
 * @param itemIndex The item's index to search for. 
 * 
 * @returns the position of the item in the inventory. Returns -1 if the character has none.   
 */
function findItemPosition(inventory: InventoryItem[], itemIndex: string): number {
    for ( const [position, invItem] of inventory.entries() ) {
        if (invItem.itemIndex === itemIndex)
            return position;
    }

    return -1;
}


/**
 * Adds items to the inventory. Merges existing stacks of the same items.
 * 
 * @remarks An item pack isnt added itself. Its contents are added instead, multipled by the number of packs added. 
 *          Ignores unknown items, quantities that aren't integers, or quantites that aren't at least 1.   
 * 
 * @param inventory The current inventory.  
 * @param itemIndex The item's index to add. 
 * @param quantity How many of the item to add. 
 * 
 * @returns The updated inventory, or the same array if unchanged.  
 */
export function addItem(
    inventory: InventoryItem[], itemIndex: string, quantity: number = 1
): InventoryItem[] {
    const itemDetails = findItem(itemIndex);

    if ( (!itemDetails) || (!Number.isInteger(quantity)) || (quantity < 1) )
        return inventory;

    if (itemDetails.type === "pack") {
        let result = inventory;

        // Recursion to add each invididual item in the pack 
        for (const part of itemDetails.contents) {
            result = addItem(result, part.itemIndex, part.quantity * quantity);
        }

        return result;
    }

    const position = findItemPosition(inventory, itemIndex);
    const invItem = position === -1 ? undefined : inventory[position]; 

    if (!invItem) 
        return [ ...inventory, { itemIndex, quantity } ];

    return replaceAt(inventory, position, { ...invItem, quantity: invItem.quantity + quantity });
}


/**
 * Removes items from the inventory. 
 * 
 * @remarks the equipped count is lowered to match if the stack shrinks below it, 
 *          the stack is removed when it reaches 0. 
 * 
 * @param inventory The current inventory.  
 * @param itemIndex The item's index to add. 
 * @param quantity How many of the item to remove.
 *  
 * @returns The updated inventory, or the same array if the character doesn't have the item to remove.  
 */
export function removeItem(
    inventory: InventoryItem[], itemIndex: string, quantity: number = 1
): InventoryItem[] {
    const position = findItemPosition(inventory, itemIndex);
    const invItem = position === -1 ? undefined : inventory[position]; 

    if ( (!invItem) || (!Number.isInteger(quantity)) || (quantity < 1) )
        return inventory;

    const remaining = invItem.quantity - quantity;

    if (remaining <= 0)
        return removeAt(inventory, position);

    return replaceAt(inventory, position, {
        ...invItem,
        quantity: remaining,
    });
}


/**
 * Merges separate lists of InventoryItems, combining every item that has the same itemIndex, regardless of the list its from. 
 * 
 * @param lists The lists to merge, in order. 
 * 
 * @returns An array element per distinct item. 
 */
export function mergeInventoryItems(...lists: InventoryItem[][]): InventoryItem[] {
    const totals = new Map<string, number>();

    for (const list of lists) {
        for (const entry of list) {

            const previousTotal = totals.get(entry.itemIndex) ?? 0;
            const newTotal = previousTotal + entry.quantity;

            totals.set(entry.itemIndex, newTotal);
        }
    }

    const merged: InventoryItem[] = [];

    for (const [itemIndex, quantity] of totals) {
        merged.push({ itemIndex, quantity });
    }

    return merged;
}


/**
 * Determines how many pieces of an item can be equipped at most. 
 * 
 * @param itemDetails The data for the item to determine, or null if it isn't in the data.
 * @param quantity How many pieces of the item the character has.
 *  
 * @returns 1 for armor and shields. Otherwise the whole quantity. 
 */
function getEquipLimit(itemDetails: ItemDetails | null, quantity: number): number {
    if ( (itemDetails !== null) && (getEquipSlot(itemDetails) !== "other") )
        return Math.min(1, quantity);
    else 
        return quantity;
}


/**
 * Combines starting items and added items into the character's full inventory. 
 * 
 * @param startingInv starting inventory items. Derived from class and background. 
 * @param manualInv The items manually added by hand. 
 * @param equippedCounts The equipped count per item. 
 * 
 * @returns One InventoryStack per distinct item. 
 */
export function getFullInventory(
    startingInv: InventoryItem[], manualInv: InventoryItem[], equippedCounts: Record<string, number>
): InventoryStack[] {
    const stacks: InventoryStack[] = [];

    for ( const item of mergeInventoryItems(startingInv, manualInv) ) {
        const limit = getEquipLimit( findItem(item.itemIndex), item.quantity );

        stacks.push({ ...item, equipped: Math.min(limit, equippedCounts[item.itemIndex] ?? 0) });
    }

    return stacks;
}


/**
 * Finds a stack by item. 
 * 
 * @param stacks The InventoryStack item to find.  
 * @param itemIndex The index of the item to find. 
 * 
 * @returns The stack, or undefined. 
 */
function findStack(stacks: InventoryStack[], itemIndex: string): InventoryStack | undefined {
    for (const stack of stacks) {
        if (stack.itemIndex === itemIndex)
            return stack;
    }

    return undefined; 
}


/**
 * Returns a copy of the equipped item counts, with one item's count set. A count of 0 removes the item. 
 * 
 * @param equippedCounts Object containing the item's index and its equipped counts.  
 * @param itemIndex The index of the item to find. 
 * @param count The new count. 
 * 
 * @returns The new counts.  
 */
function withEquippedCount(
    equippedCounts: Record<string, number>, itemIndex: string, count: number
): Record<string, number> {
    const next = { ...equippedCounts };

    if (count > 0)
        next[itemIndex] = count;
    else 
        delete next[itemIndex];

    return next;
}


/**
 * Sets how many pieces of an item are equipped. 
 * 
 * @param equippedCounts Object containing the item's index and its equipped counts.  
 * @param invStacks The character's full inventory. See {@link getFullInventory}. 
 * @param itemIndex The index of the item to set. 
 * @param count How many pieces to equip. 
 * 
 * @returns The updated counts. Returns the same object if nothing changed. 
 */
export function setEquippedCount(
    equippedCounts: Record<string, number>, invStacks: InventoryStack[], itemIndex: string, count: number
): Record<string, number> {
    const stack = findStack(invStacks, itemIndex);
    const item = findItem(itemIndex);

    if ( (!stack) || (!item) || (Number.isNaN(count)) )
        return equippedCounts;

    const wanted = Math.max(0, Math.min( getEquipLimit(item, stack.quantity), Math.floor(count) ) );

    if (wanted === stack.equipped)
        return equippedCounts;

    const slot = getEquipSlot(item);
    let next = equippedCounts; 

    if ( (slot !== "other") && (wanted > 0) ) {
        for (const other of invStacks) {
            const otherItem = findItem(other.itemIndex);

            if ( (other.itemIndex !== itemIndex) && (otherItem) && (getEquipSlot(otherItem) === slot) )
                next = withEquippedCount(next, other.itemIndex, 0);
        }
    }

    return withEquippedCount(next, itemIndex, wanted);
}

export function getEquippedItems(invStacks: InventoryStack[]): EquippedItem[] {
    const equippedItems: EquippedItem[] = [];

    for (const invStack of invStacks) {
        const itemDetails = findItem(invStack.itemIndex);

        if ( (itemDetails !== null) && (invStack.equipped > 0) )
            equippedItems.push({ inventoryStack: invStack, itemDetails})
    }

    return equippedItems;
}