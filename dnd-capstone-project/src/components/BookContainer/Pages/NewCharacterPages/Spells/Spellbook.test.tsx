// Spellbook.test.tsx
// Integration tests: spellbook management through the shared character state, and through the Class + Spells pages.
import { SpellsBlockLeft, SpellsBlockRight } from "./Spells";
import { ClassBlockLeft } from "../Class/Class";
import { NewCharacterProvider, useNewCharacterData } from "../useNewCharacterData";

import type { ReactNode } from "react";
import { act, render, renderHook, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";


vi.mock("@/components/BookContainer/Pages/hooks/NoFlip", () => ({
    NoFlip: function MockNoFlip({ children }: { children: ReactNode }) {
        return <>{children}</>;
    },
}));


//#region HELPERS

/** Calls the character hook. */
function useCharacter() {
    return useNewCharacterData();
}

/** Renders the character hook with a level 1 wizard already added. */
function renderWizardHook() {
    const hook = renderHook(useCharacter, { wrapper: NewCharacterProvider });

    act(() => hook.result.current.addClass("wizard"));

    return hook;
}

/** Renders the Class page (to pick classes) next to both Spells pages. */
function renderSpellPages() {
    return render(
        <NewCharacterProvider>
            <ClassBlockLeft />
            <SpellsBlockLeft />
            <SpellsBlockRight />
        </NewCharacterProvider>
    );
}

/**
 * Picks the first class on the Class page.
 *
 * @param className the class value, e.g. "wizard".
 */
async function chooseFirstClass(className: string) {
    const [firstSelect] = screen.getAllByRole("combobox");

    if (!firstSelect)
        throw new Error("No class select rendered");

    await userEvent.selectOptions(firstSelect, className);
}

/**
 * Finds a spell group by the start of its legend, e.g. "Spellbook".
 *
 * @param title the group title.
 *
 * @returns the fieldset.
 */
function getSpellGroup(title: string): HTMLElement {
    return screen.getByRole("group", { name: new RegExp(`^${title} \\(`) });
}

/**
 * Finds a spell's checkbox inside a group.
 *
 * @param group the fieldset.
 * @param spellName the spell's name, e.g. "Magic Missile".
 *
 * @returns the checkbox.
 */
function getSpellBox(group: HTMLElement, spellName: string): HTMLElement {
    return within(group).getByRole("checkbox", { name: new RegExp(`^${spellName} \\(`) });
}

/**
 * Looks for a spell's checkbox inside a group.
 *
 * @param group the fieldset.
 * @param spellName the spell's name.
 *
 * @returns the checkbox, or null.
 */
function querySpellBox(group: HTMLElement, spellName: string): HTMLElement | null {
    return within(group).queryByRole("checkbox", { name: new RegExp(`^${spellName} \\(`) });
}

//#endregion



describe("Spellbook (state)", () => {
    it("adds a spell to the spellbook", () => {
        const { result } = renderWizardHook();

        act(() => result.current.toggleSpellChoice(0, "known", "magic-missile"));

        expect(result.current.classes[0]?.spellChoices.known).toEqual(["magic-missile"]);
    });


    it("can't prepare a spell that isn't in the spellbook", () => {
        const { result } = renderWizardHook();

        act(() => result.current.toggleSpellChoice(0, "prepared", "magic-missile"));

        expect(result.current.classes[0]?.spellChoices.prepared).toEqual([]);
    });


    it("prepares a spell from the spellbook", () => {
        const { result } = renderWizardHook();

        act(() => result.current.toggleSpellChoice(0, "known", "magic-missile"));
        act(() => result.current.toggleSpellChoice(0, "prepared", "magic-missile"));

        expect(result.current.classes[0]?.spellChoices.prepared).toEqual(["magic-missile"]);
    });


    it("removing a spell from the spellbook unprepares it", () => {
        const { result } = renderWizardHook();

        act(() => result.current.toggleSpellChoice(0, "known", "magic-missile"));
        act(() => result.current.toggleSpellChoice(0, "prepared", "magic-missile"));
        act(() => result.current.toggleSpellChoice(0, "known", "magic-missile"));

        expect(result.current.classes[0]?.spellChoices.known).toEqual([]);
        expect(result.current.classes[0]?.spellChoices.prepared).toEqual([]);
    });


    it("prepared spells are limited by INT modifier + wizard level", () => {
        const { result } = renderWizardHook();

        act(() => result.current.toggleSpellChoice(0, "known", "magic-missile"));
        act(() => result.current.toggleSpellChoice(0, "known", "shield"));

        // INT 10 (+0): 0 + 1 = 1 prepared
        act(() => result.current.toggleSpellChoice(0, "prepared", "magic-missile"));
        act(() => result.current.toggleSpellChoice(0, "prepared", "shield"));
        expect(result.current.classes[0]?.spellChoices.prepared).toEqual(["magic-missile"]);

        // INT 16 (+3): 3 + 1 = 4 prepared
        act(() => result.current.handleOnChangeManualAbility("int", "16"));
        act(() => result.current.toggleSpellChoice(0, "prepared", "shield"));
        expect(result.current.classes[0]?.spellChoices.prepared).toEqual(["magic-missile", "shield"]);
    });


    it("higher level spells open up as the wizard levels", () => {
        const { result } = renderWizardHook();

        act(() => result.current.toggleSpellChoice(0, "known", "fireball"));
        expect(result.current.classes[0]?.spellChoices.known).toEqual([]);

        act(() => result.current.setClassLevel(0, 5));
        act(() => result.current.toggleSpellChoice(0, "known", "fireball"));
        expect(result.current.classes[0]?.spellChoices.known).toEqual(["fireball"]);
    });


    it("a spell kept after leveling down can still be removed", () => {
        const { result } = renderWizardHook();

        act(() => result.current.setClassLevel(0, 5));
        act(() => result.current.toggleSpellChoice(0, "known", "fireball"));
        act(() => result.current.setClassLevel(0, 1));
        act(() => result.current.toggleSpellChoice(0, "known", "fireball"));

        expect(result.current.classes[0]?.spellChoices.known).toEqual([]);
    });


    it("each class keeps its own spell picks when multiclassed", () => {
        const { result } = renderWizardHook();

        act(() => result.current.addClass("cleric"));
        act(() => result.current.toggleSpellChoice(1, "cantrips", "light"));

        expect(result.current.classes[0]?.spellChoices.cantrips).toEqual([]);
        expect(result.current.classes[1]?.spellChoices.cantrips).toEqual(["light"]);
    });


    it("does nothing for a class that can't cast spells", () => {
        const { result } = renderHook(useCharacter, { wrapper: NewCharacterProvider });

        act(() => result.current.addClass("fighter"));
        const before = result.current.classes;

        act(() => result.current.toggleSpellChoice(0, "cantrips", "fire-bolt"));

        expect(result.current.classes).toBe(before);
    });


    it("changing class clears the spellbook", () => {
        const { result } = renderWizardHook();

        act(() => result.current.toggleSpellChoice(0, "known", "magic-missile"));
        act(() => result.current.setClassName(0, "sorcerer"));

        expect(result.current.classes[0]?.spellChoices).toEqual({ cantrips: [], known: [], prepared: [] });
    });
});



describe("Spellbook (Spells page)", () => {
    it("tells a non-caster they have no spellcasting classes", async () => {
        renderSpellPages();

        await chooseFirstClass("fighter");

        expect(screen.getByText("You have no classes that can cast spells.")).toBeInTheDocument();
    });


    it("a level 1 wizard sees cantrips, spellbook and prepared groups", async () => {
        renderSpellPages();

        await chooseFirstClass("wizard");

        expect(getSpellGroup("Cantrips")).toHaveAccessibleName("Cantrips (0/3)");
        expect(getSpellGroup("Spellbook")).toBeInTheDocument();
        expect(getSpellGroup("Prepared Spells")).toHaveAccessibleName("Prepared Spells (0/1)");
    });


    it("nothing can be prepared until the spellbook has spells", async () => {
        renderSpellPages();
        await chooseFirstClass("wizard");

        expect(within(getSpellGroup("Prepared Spells")).queryAllByRole("checkbox")).toHaveLength(0);
    });


    it("a spell added to the spellbook becomes preparable and shows in Your Spells", async () => {
        renderSpellPages();
        await chooseFirstClass("wizard");

        await userEvent.click(getSpellBox(getSpellGroup("Spellbook"), "Magic Missile"));

        expect(getSpellBox(getSpellGroup("Prepared Spells"), "Magic Missile")).not.toBeChecked();
        expect(screen.getByRole("heading", { name: "Spellbook", level: 3 })).toBeInTheDocument();
    });


    it("disables other prepared spells once the prepared limit is reached", async () => {
        renderSpellPages();
        await chooseFirstClass("wizard");
        await userEvent.click(getSpellBox(getSpellGroup("Spellbook"), "Magic Missile"));
        await userEvent.click(getSpellBox(getSpellGroup("Spellbook"), "Shield"));

        await userEvent.click(getSpellBox(getSpellGroup("Prepared Spells"), "Magic Missile"));

        expect(getSpellGroup("Prepared Spells")).toHaveAccessibleName("Prepared Spells (1/1)");
        expect(getSpellBox(getSpellGroup("Prepared Spells"), "Shield")).toBeDisabled();
    });


    it("removing a spell from the spellbook removes it from Prepared Spells", async () => {
        renderSpellPages();
        await chooseFirstClass("wizard");
        await userEvent.click(getSpellBox(getSpellGroup("Spellbook"), "Magic Missile"));
        await userEvent.click(getSpellBox(getSpellGroup("Spellbook"), "Shield"));
        await userEvent.click(getSpellBox(getSpellGroup("Prepared Spells"), "Magic Missile"));

        await userEvent.click(getSpellBox(getSpellGroup("Spellbook"), "Magic Missile"));

        expect(querySpellBox(getSpellGroup("Prepared Spells"), "Magic Missile")).not.toBeInTheDocument();
        expect(getSpellGroup("Prepared Spells")).toHaveAccessibleName("Prepared Spells (0/1)");
        expect(getSpellBox(getSpellGroup("Prepared Spells"), "Shield")).toBeEnabled();
    });


    it("disables the remaining cantrips once 3 are chosen", async () => {
        renderSpellPages();
        await chooseFirstClass("wizard");

        const cantrips = getSpellGroup("Cantrips");
        await userEvent.click(getSpellBox(cantrips, "Fire Bolt"));
        await userEvent.click(getSpellBox(cantrips, "Light"));
        await userEvent.click(getSpellBox(cantrips, "Mage Hand"));

        expect(getSpellBox(getSpellGroup("Cantrips"), "Ray of Frost")).toBeDisabled();
    });


    it("Fireball appears in the spellbook at wizard level 5", async () => {
        renderSpellPages();
        await chooseFirstClass("wizard");

        expect(querySpellBox(getSpellGroup("Spellbook"), "Fireball")).not.toBeInTheDocument();

        const [levelSelect] = screen.getAllByRole("combobox", { name: /level/i });
        await userEvent.selectOptions(levelSelect!, "5");

        expect(getSpellBox(getSpellGroup("Spellbook"), "Fireball")).toBeInTheDocument();
    });
});