// inventory.integration.test.tsx
// Integration tests: inventory constraints through the shared character state.
import { NewCharacterProvider, useNewCharacterData } from "../useNewCharacterData";
import type { InventoryStack } from "./equipmentHelpers";

import { act, renderHook } from "@testing-library/react";


/** Calls the character hook. */
function useCharacter() {
    return useNewCharacterData();
}

/** Renders the character hook inside its provider. No class is chosen, so there are no starting items. */
function renderCharacterHook() {
    return renderHook(useCharacter, { wrapper: NewCharacterProvider });
}

/**
 * Finds one item's stack in the full inventory.
 *
 * @param stacks the full inventory.
 * @param itemIndex the item.
 *
 * @returns the stack, or undefined.
 */
function stackFor(stacks: InventoryStack[], itemIndex: string): InventoryStack | undefined {
    function isWanted(stack: InventoryStack) {
        return stack.itemIndex === itemIndex;
    }

    return stacks.find(isWanted);
}



describe("Inventory (state): adding and removing", () => {
    it("starts empty without a class", () => {
        const { result } = renderCharacterHook();

        expect(result.current.fullInventory).toEqual([]);
    });


    it("adds and stacks items", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addInventoryItem("dagger", 2));
        act(() => result.current.addInventoryItem("dagger"));

        expect(result.current.fullInventory).toEqual([{ itemIndex: "dagger", quantity: 3, equipped: 0 }]);
    });


    it("unpacks a pack into its contents", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addInventoryItem("explorers-pack"));

        expect(stackFor(result.current.fullInventory, "explorers-pack")).toBeUndefined();
        expect(stackFor(result.current.fullInventory, "torch")?.quantity).toBe(10);
    });


    it("ignores invalid quantities and unknown items without changing state", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addInventoryItem("dagger"));
        const before = result.current.fullInventory;

        act(() => result.current.addInventoryItem("dagger", 0));
        act(() => result.current.addInventoryItem("dagger", -3));
        act(() => result.current.addInventoryItem("not-a-real-item"));
        act(() => result.current.removeInventoryItem("longsword"));

        expect(result.current.fullInventory).toBe(before);
    });


    it("removes the stack when the last piece is removed", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addInventoryItem("dagger", 2));
        act(() => result.current.removeInventoryItem("dagger", 2));

        expect(stackFor(result.current.fullInventory, "dagger")).toBeUndefined();
    });
});



describe("Inventory (state): equipping", () => {
    it("equips part of a stack", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addInventoryItem("dagger", 3));
        act(() => result.current.setItemEquipped("dagger", 2));

        expect(stackFor(result.current.fullInventory, "dagger")?.equipped).toBe(2);
    });


    it("lowers the equipped count when the stack shrinks below it", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addInventoryItem("dagger", 3));
        act(() => result.current.setItemEquipped("dagger", 3));
        act(() => result.current.removeInventoryItem("dagger", 2));

        expect(stackFor(result.current.fullInventory, "dagger")).toEqual({ itemIndex: "dagger", quantity: 1, equipped: 1 });
    });


    it("can't equip an item the character doesn't have", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.setItemEquipped("longsword", 1));

        expect(result.current.fullInventory).toEqual([]);
    });


    it("only one body armor can be worn", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addInventoryItem("chain-mail"));
        act(() => result.current.addInventoryItem("leather-armor"));
        act(() => result.current.setItemEquipped("chain-mail", 1));
        act(() => result.current.setItemEquipped("leather-armor", 1));

        expect(stackFor(result.current.fullInventory, "chain-mail")?.equipped).toBe(0);
        expect(stackFor(result.current.fullInventory, "leather-armor")?.equipped).toBe(1);
    });


    it("only one shield can be held, even with two in the bag", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addInventoryItem("shield", 2));
        act(() => result.current.setItemEquipped("shield", 2));

        expect(stackFor(result.current.fullInventory, "shield")?.equipped).toBe(1);
    });
});



describe("Inventory (state): equipped armor drives AC", () => {
    it("is 10 + DEX with nothing equipped", () => {
        const { result } = renderCharacterHook();

        expect(result.current.attributes.armorClass.total).toBe(10);
    });


    it("updates when armor and a shield are equipped and swapped", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addInventoryItem("leather-armor"));
        act(() => result.current.addInventoryItem("chain-mail"));
        act(() => result.current.addInventoryItem("shield"));

        act(() => result.current.setItemEquipped("leather-armor", 1));
        expect(result.current.attributes.armorClass.total).toBe(11);

        act(() => result.current.setItemEquipped("shield", 1));
        expect(result.current.attributes.armorClass.total).toBe(13);

        act(() => result.current.setItemEquipped("chain-mail", 1));
        expect(result.current.attributes.armorClass.total).toBe(18);
    });


    it("goes back to unarmored when the worn armor is removed from the inventory", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addInventoryItem("chain-mail"));
        act(() => result.current.setItemEquipped("chain-mail", 1));
        act(() => result.current.removeInventoryItem("chain-mail"));

        expect(result.current.attributes.armorClass.total).toBe(10);
    });


    it("re-adding armor after removing it doesn't come back already equipped", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addInventoryItem("chain-mail"));
        act(() => result.current.setItemEquipped("chain-mail", 1));
        act(() => result.current.removeInventoryItem("chain-mail"));
        act(() => result.current.addInventoryItem("chain-mail"));

        expect(stackFor(result.current.fullInventory, "chain-mail")?.equipped).toBe(0);
        expect(result.current.attributes.armorClass.total).toBe(10);
    });


    it("re-adding items after shrinking a stack doesn't restore the old equipped count", () => {
    const { result } = renderCharacterHook();

    act(() => result.current.addInventoryItem("dagger", 3));
    act(() => result.current.setItemEquipped("dagger", 3));
    act(() => result.current.removeInventoryItem("dagger", 2));
    act(() => result.current.addInventoryItem("dagger", 2));

    expect(stackFor(result.current.fullInventory, "dagger")?.equipped).toBe(1);
});
});