// equipmentHelpers.test.ts
// Unit tests: inventory constraints (adding, removing, merging, equip limits).
import {
    addItem,
    getEquipSlot,
    getEquippedItems,
    getFullInventory,
    getPurchaseQuantity,
    mergeInventoryItems,
    removeItem,
    setEquippedCount,
} from "./equipmentHelpers";
import type { InventoryStack } from "./equipmentHelpers";
import type { InventoryItem } from "@/components/BookContainer/types";
import { findItem } from "@/data/dnd5e_2014/inventory/equipment";


/**
 * Looks up an item that must exist in the data.
 *
 * @param index the item's index.
 *
 * @returns the item's details. Throws if it is missing, so a typo fails loudly.
 */
function mustFindItem(index: string) {
    const item = findItem(index);

    if (!item)
        throw new Error(`Test item "${index}" is not in the equipment data`);

    return item;
}


/**
 * Finds one item's stack in an inventory list.
 *
 * @param inventory the inventory to search.
 * @param itemIndex the item to find.
 *
 * @returns the stack, or undefined.
 */
function findEntry<T extends InventoryItem>(inventory: T[], itemIndex: string): T | undefined {
    function isWanted(entry: T) {
        return entry.itemIndex === itemIndex;
    }

    return inventory.find(isWanted);
}


/** An inventory with two body armors, two shields, and a stack of daggers. */
const ARMORY: InventoryItem[] = [
    { itemIndex: "chain-mail", quantity: 1 },
    { itemIndex: "leather-armor", quantity: 1 },
    { itemIndex: "shield", quantity: 2 },
    { itemIndex: "dagger", quantity: 3 },
];


/**
 * Builds the full inventory for {@link ARMORY} with the given equipped counts.
 *
 * @param equippedCounts how many of each item are equipped.
 *
 * @returns the inventory stacks.
 */
function armoryStacks(equippedCounts: Record<string, number> = {}): InventoryStack[] {
    return getFullInventory([], ARMORY, equippedCounts);
}



describe("getEquipSlot / getPurchaseQuantity", () => {
    it("puts body armor, shields, and everything else in different slots", () => {
        expect(getEquipSlot(mustFindItem("chain-mail"))).toBe("armor");
        expect(getEquipSlot(mustFindItem("leather-armor"))).toBe("armor");
        expect(getEquipSlot(mustFindItem("shield"))).toBe("shield");
        expect(getEquipSlot(mustFindItem("longsword"))).toBe("other");
        expect(getEquipSlot(mustFindItem("torch"))).toBe("other");
    });


    it("sells ammunition by the bundle and everything else one at a time", () => {
        expect(getPurchaseQuantity(mustFindItem("arrow"))).toBe(20);
        expect(getPurchaseQuantity(mustFindItem("dagger"))).toBe(1);
    });
});



describe("addItem", () => {
    it("adds a new stack", () => {
        expect(addItem([], "dagger")).toEqual([{ itemIndex: "dagger", quantity: 1 }]);
    });


    it("merges into an existing stack instead of making a second one", () => {
        const once = addItem([], "dagger", 2);
        const twice = addItem(once, "dagger", 3);

        expect(twice).toHaveLength(1);
        expect(twice[0]).toEqual({ itemIndex: "dagger", quantity: 5 });
    });


    it("does not mutate the original inventory", () => {
        const original: InventoryItem[] = [{ itemIndex: "dagger", quantity: 1 }];

        addItem(original, "dagger", 4);

        expect(original).toEqual([{ itemIndex: "dagger", quantity: 1 }]);
    });


    it("breaks a pack into its contents instead of adding the pack", () => {
        const inventory = addItem([], "explorers-pack");

        expect(findEntry(inventory, "explorers-pack")).toBeUndefined();
        expect(findEntry(inventory, "backpack")?.quantity).toBe(1);
        expect(findEntry(inventory, "torch")?.quantity).toBe(10);
        expect(findEntry(inventory, "rations-1-day")?.quantity).toBe(10);
    });


    it("multiplies pack contents by the number of packs", () => {
        const inventory = addItem([], "explorers-pack", 2);

        expect(findEntry(inventory, "torch")?.quantity).toBe(20);
    });


    it.each([
        ["zero",               0],
        ["a negative number", -1],
        ["a fraction",       1.5],
        ["NaN",       Number.NaN],
    ])("ignores a quantity of %s (returns the same array)", (_label, quantity) => {
        const inventory: InventoryItem[] = [{ itemIndex: "dagger", quantity: 1 }];

        expect(addItem(inventory, "dagger", quantity)).toBe(inventory);
    });


    it("ignores an item that is not in the data", () => {
        const inventory: InventoryItem[] = [];

        expect(addItem(inventory, "not-a-real-item")).toBe(inventory);
    });
});



describe("removeItem", () => {
    const daggers: InventoryItem[] = [
        { itemIndex: "dagger", quantity: 3 },
        { itemIndex: "torch", quantity: 1 },
    ];


    it("lowers the quantity of a stack", () => {
        expect(findEntry(removeItem(daggers, "dagger", 2), "dagger")?.quantity).toBe(1);
    });


    it("removes the stack when it reaches exactly 0", () => {
        expect(findEntry(removeItem(daggers, "dagger", 3), "dagger")).toBeUndefined();
    });


    it("removes the stack instead of going negative when removing more than you have", () => {
        const result = removeItem(daggers, "dagger", 99);

        expect(findEntry(result, "dagger")).toBeUndefined();
        expect(findEntry(result, "torch")?.quantity).toBe(1);
    });


    it("returns the same array when the item isn't in the inventory", () => {
        expect(removeItem(daggers, "longsword")).toBe(daggers);
    });


    it.each([0, -2, 1.5, Number.NaN])("returns the same array for an invalid quantity (%s)", (quantity) => {
        expect(removeItem(daggers, "dagger", quantity)).toBe(daggers);
    });
});



describe("mergeInventoryItems", () => {
    it("combines stacks of the same item across lists", () => {
        const merged = mergeInventoryItems(
            [{ itemIndex: "dagger", quantity: 2 }],
            [{ itemIndex: "dagger", quantity: 1 }, { itemIndex: "torch", quantity: 5 }],
        );

        expect(merged).toEqual([
            { itemIndex: "dagger", quantity: 3 },
            { itemIndex: "torch", quantity: 5 },
        ]);
    });


    it("returns an empty list when given no items", () => {
        expect(mergeInventoryItems([], [])).toEqual([]);
    });
});



describe("getFullInventory", () => {
    it("merges starting items with added items", () => {
        const stacks = getFullInventory(
            [{ itemIndex: "dagger", quantity: 2 }],
            [{ itemIndex: "dagger", quantity: 1 }],
            {},
        );

        expect(stacks).toEqual([{ itemIndex: "dagger", quantity: 3, equipped: 0 }]);
    });


    it("never reports more equipped than the stack holds", () => {
        const stacks = getFullInventory([], [{ itemIndex: "dagger", quantity: 1 }], { dagger: 3 });

        expect(findEntry(stacks, "dagger")?.equipped).toBe(1);
    });


    it("caps equipped armor and shields at 1, even with more in the stack", () => {
        const stacks = armoryStacks({ shield: 2 });

        expect(findEntry(stacks, "shield")?.equipped).toBe(1);
    });
});



describe("setEquippedCount: equip limits", () => {
    it("equips one body armor", () => {
        expect(setEquippedCount({}, armoryStacks(), "chain-mail", 1)).toEqual({ "chain-mail": 1 });
    });


    it("only allows one body armor: equipping another unequips the first", () => {
        const equipped = { "chain-mail": 1 };
        const result = setEquippedCount(equipped, armoryStacks(equipped), "leather-armor", 1);

        expect(result).toEqual({ "leather-armor": 1 });
    });


    it("only allows one shield, even when asked for more", () => {
        expect(setEquippedCount({}, armoryStacks(), "shield", 5)).toEqual({ shield: 1 });
    });


    it("lets armor and a shield be worn together", () => {
        const withArmor = { "chain-mail": 1 };
        const result = setEquippedCount(withArmor, armoryStacks(withArmor), "shield", 1);

        expect(result).toEqual({ "chain-mail": 1, shield: 1 });
    });


    it("lets other items be equipped up to the stack's quantity", () => {
        expect(setEquippedCount({}, armoryStacks(), "dagger", 2)).toEqual({ dagger: 2 });
        expect(setEquippedCount({}, armoryStacks(), "dagger", 10)).toEqual({ dagger: 3 });
    });


    it("floors fractional counts and clamps negatives to 0", () => {
        expect(setEquippedCount({}, armoryStacks(), "dagger", 2.9)).toEqual({ dagger: 2 });

        const equipped = { dagger: 2 };
        expect(setEquippedCount(equipped, armoryStacks(equipped), "dagger", -4)).toEqual({});
    });


    it("removes the entry when set to 0", () => {
        const equipped = { "chain-mail": 1 };

        expect(setEquippedCount(equipped, armoryStacks(equipped), "chain-mail", 0)).toEqual({});
    });


    it("returns the same object when nothing changes", () => {
        const equipped = { dagger: 2 };

        expect(setEquippedCount(equipped, armoryStacks(equipped), "dagger", 2)).toBe(equipped);
    });


    it("returns the same object for an item the character doesn't have, an unknown item, or NaN", () => {
        const equipped = {};

        expect(setEquippedCount(equipped, armoryStacks(), "longsword", 1)).toBe(equipped);
        expect(setEquippedCount(equipped, armoryStacks(), "not-a-real-item", 1)).toBe(equipped);
        expect(setEquippedCount(equipped, armoryStacks(), "dagger", Number.NaN)).toBe(equipped);
    });
});



describe("getEquippedItems", () => {
    it("returns only stacks with at least one piece equipped, with their details", () => {
        const equippedItems = getEquippedItems(armoryStacks({ "chain-mail": 1, dagger: 1 }));

        function toIndex(item: { itemDetails: { index: string } }) {
            return item.itemDetails.index;
        }

        expect(equippedItems.map(toIndex)).toEqual(["chain-mail", "dagger"]);
    });


    it("returns an empty list when nothing is equipped", () => {
        expect(getEquippedItems(armoryStacks())).toEqual([]);
    });
});