// levelAdvancement.test.tsx
// Integration tests: level advancement through the shared character state, and through the Class page.
import { ClassBlockLeft } from "./Class";
import { CalculateMaxHP } from "./classHelpers";
import { NewCharacterProvider, useNewCharacterData } from "../useNewCharacterData";

import type { ReactNode } from "react";
import { act, render, renderHook, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";


vi.mock("@/components/BookContainer/Pages/hooks/NoFlip", () => ({
    NoFlip: function MockNoFlip({ children }: { children: ReactNode }) {
        return <>{children}</>;
    },
}));


//#region HELPERS

/** Calls the character hook. Named so renderHook gets a named callback. */
function useCharacter() {
    return useNewCharacterData();
}

/** Renders the character hook inside its provider. */
function renderCharacterHook() {
    return renderHook(useCharacter, { wrapper: NewCharacterProvider });
}

/** The hook's return value. */
type CharacterHook = ReturnType<typeof useNewCharacterData>;

/**
 * Computes max HP the same way the Class page does.
 *
 * @param character the hook's current value.
 *
 * @returns the character's max HP.
 */
function maxHpOf(character: CharacterHook): number {
    return CalculateMaxHP(character.classes, character.abilities.con.mod, "average", character.hpBonusPerLevel);
}

/** Renders the left Class page inside the provider. */
function renderClassPage() {
    return render(
        <NewCharacterProvider>
            <ClassBlockLeft />
        </NewCharacterProvider>
    );
}

/**
 * Reads a value from the Class page summary, e.g. "Total Level:" → "5".
 *
 * @param label the bold label text, including the colon.
 *
 * @returns the text after the label.
 */
function getSummaryValue(label: string): string {
    const text = screen.getByText(label).parentElement?.textContent ?? "";

    return text.replace(label, "").trim();
}

/** @returns every level select on the page, in class order. */
function getLevelSelects(): HTMLSelectElement[] {
    return screen.getAllByRole("combobox", { name: /level/i }) as HTMLSelectElement[];
}

/**
 * Picks the first class from the empty class row.
 *
 * @param className the class value, e.g. "fighter".
 */
async function chooseFirstClass(className: string) {
    const [firstSelect] = screen.getAllByRole("combobox");

    if (!firstSelect)
        throw new Error("No class select rendered");

    await userEvent.selectOptions(firstSelect, className);
}

//#endregion



describe("Level advancement (state)", () => {
    it("starts with no classes, total level 0, and a +2 proficiency bonus", () => {
        const { result } = renderCharacterHook();

        expect(result.current.classes).toEqual([]);
        expect(result.current.totalLevel).toBe(0);
        expect(result.current.attributes.proficiencyBonus).toBe(2);
    });


    it("adding a class starts it at level 1", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addClass("fighter"));

        expect(result.current.classes).toHaveLength(1);
        expect(result.current.classes[0]?.level).toBe(1);
        expect(result.current.totalLevel).toBe(1);
    });


    it.each([
        [1,  2], [4,  2],
        [5,  3], [8,  3],
        [9,  4], [12, 4],
        [13, 5], [16, 5],
        [17, 6], [20, 6],
    ])("at level %i the proficiency bonus is +%i", (level, expectedBonus) => {
        const { result } = renderCharacterHook();

        act(() => result.current.addClass("fighter"));
        act(() => result.current.setClassLevel(0, level));

        expect(result.current.attributes.proficiencyBonus).toBe(expectedBonus);
    });


    it("clamps a single class between level 1 and 20", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addClass("fighter"));

        act(() => result.current.setClassLevel(0, 25));
        expect(result.current.classes[0]?.level).toBe(20);

        act(() => result.current.setClassLevel(0, 0));
        expect(result.current.classes[0]?.level).toBe(1);
    });


    it("ignores a level that isn't a number", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addClass("fighter"));
        act(() => result.current.setClassLevel(0, 7));
        act(() => result.current.setClassLevel(0, Number.NaN));

        expect(result.current.classes[0]?.level).toBe(7);
    });


    it("keeps the total of every class at 20 or below when multiclassing", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addClass("fighter"));
        act(() => result.current.setClassLevel(0, 15));
        act(() => result.current.addClass("wizard"));
        act(() => result.current.setClassLevel(1, 10));

        expect(result.current.classes[1]?.level).toBe(5);
        expect(result.current.totalLevel).toBe(20);
    });


    it("won't add a class once the character is level 20", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addClass("fighter"));
        act(() => result.current.setClassLevel(0, 20));
        act(() => result.current.addClass("wizard"));

        expect(result.current.classes).toHaveLength(1);
    });


    it("won't add the same class twice", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addClass("fighter"));
        act(() => result.current.addClass("fighter"));

        expect(result.current.classes).toHaveLength(1);
    });


    it("removing a class frees its levels", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addClass("fighter"));
        act(() => result.current.setClassLevel(0, 15));
        act(() => result.current.addClass("wizard"));
        act(() => result.current.removeClass(0));

        expect(result.current.totalLevel).toBe(1);
        expect(result.current.classes[0]?.name).toBe("wizard");
    });


    it("changing a class keeps its level but resets its choices", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addClass("wizard"));
        act(() => result.current.setClassLevel(0, 4));
        act(() => result.current.toggleSpellChoice(0, "cantrips", "fire-bolt"));
        act(() => result.current.setClassName(0, "sorcerer"));

        expect(result.current.classes[0]?.name).toBe("sorcerer");
        expect(result.current.classes[0]?.level).toBe(4);
        expect(result.current.classes[0]?.spellChoices.cantrips).toEqual([]);
    });


    it("only allows a subclass once the class reaches its unlock level", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addClass("fighter"));
        act(() => result.current.setClassLevel(0, 2));
        act(() => result.current.setSubclass(0, "champion"));
        expect(result.current.classes[0]?.subclassId).toBeNull();

        act(() => result.current.setClassLevel(0, 3));
        act(() => result.current.setSubclass(0, "champion"));
        expect(result.current.classes[0]?.subclassId).toBe("champion");
    });


    it("rejects a subclass that belongs to a different class", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addClass("fighter"));
        act(() => result.current.setClassLevel(0, 3));
        act(() => result.current.setSubclass(0, "evocation"));

        expect(result.current.classes[0]?.subclassId).toBeNull();
    });
});



describe("Level advancement: ability score improvements (state)", () => {
    it("can't choose an ASI before the class earns one", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addClass("fighter"));
        act(() => result.current.setClassLevel(0, 3));
        act(() => result.current.chooseASI(0, 0, { mode: "single", abilities: ["str"] }));

        expect(result.current.abilities.str.value).toBe(10);
    });


    it("+2 to one ability at level 4", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addClass("fighter"));
        act(() => result.current.setClassLevel(0, 4));
        act(() => result.current.chooseASI(0, 0, { mode: "single", abilities: ["str"] }));

        expect(result.current.ASIBonuses.str).toBe(2);
        expect(result.current.abilities.str.value).toBe(12);
        expect(result.current.abilities.str.mod).toBe(1);
    });


    it("+1 to two abilities", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addClass("fighter"));
        act(() => result.current.setClassLevel(0, 4));
        act(() => result.current.chooseASI(0, 0, { mode: "split", abilities: ["dex", "con"] }));

        expect(result.current.abilities.dex.value).toBe(11);
        expect(result.current.abilities.con.value).toBe(11);
    });


    it("fighters earn a second ASI at level 6", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addClass("fighter"));
        act(() => result.current.setClassLevel(0, 6));
        act(() => result.current.chooseASI(0, 0, { mode: "single", abilities: ["str"] }));
        act(() => result.current.chooseASI(0, 1, { mode: "single", abilities: ["str"] }));

        expect(result.current.abilities.str.value).toBe(14);
    });


    it("dropping below the ASI level stops applying the bonus", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addClass("fighter"));
        act(() => result.current.setClassLevel(0, 4));
        act(() => result.current.chooseASI(0, 0, { mode: "single", abilities: ["str"] }));
        act(() => result.current.setClassLevel(0, 3));

        expect(result.current.abilities.str.value).toBe(10);
    });
});



describe("Level advancement: max HP (state)", () => {
    it("is 0 with no class", () => {
        const { result } = renderCharacterHook();

        expect(maxHpOf(result.current)).toBe(0);
    });


    it("grows by the average hit die each level", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addClass("fighter"));
        expect(maxHpOf(result.current)).toBe(10);

        act(() => result.current.setClassLevel(0, 3));
        expect(maxHpOf(result.current)).toBe(22);
    });


    it("uses the current CON modifier for every level", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addClass("fighter"));
        act(() => result.current.setClassLevel(0, 3));
        act(() => result.current.handleOnChangeManualAbility("con", "14"));

        // CON 14 (+2): 12 + 8 + 8
        expect(maxHpOf(result.current)).toBe(28);
    });


    it("includes racial CON and Hill Dwarf's +1 HP per level", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.addClass("fighter"));
        act(() => result.current.setClassLevel(0, 3));
        act(() => result.current.handleOnChangeManualAbility("con", "14"));
        act(() => result.current.setRace("dwarf"));
        act(() => result.current.setSubrace("hill-dwarf"));

        // CON 14 + 2 = 16 (+3): 13 + 9 + 9 = 31, plus 3 × 1 = 34
        expect(result.current.hpBonusPerLevel).toBe(1);
        expect(maxHpOf(result.current)).toBe(34);

        act(() => result.current.setClassLevel(0, 4));
        expect(maxHpOf(result.current)).toBe(44);
    });
});



describe("Level advancement (Class page)", () => {
    it("shows level 0, +2 and 0 HP before a class is picked", () => {
        renderClassPage();

        expect(getSummaryValue("Total Level:")).toBe("0");
        expect(getSummaryValue("Prof. Bonus:")).toBe("2");
        expect(getSummaryValue("Max Hit Points:")).toBe("0");
    });


    it("picking a class shows level 1 and the first level's HP", async () => {
        renderClassPage();

        await chooseFirstClass("fighter");

        expect(getSummaryValue("Total Level:")).toBe("1");
        expect(getSummaryValue("Max Hit Points:")).toBe("10");
    });


    it("raising the level updates total level, proficiency bonus and HP", async () => {
        renderClassPage();
        await chooseFirstClass("fighter");

        const [levelSelect] = getLevelSelects();
        await userEvent.selectOptions(levelSelect!, "5");

        expect(getSummaryValue("Total Level:")).toBe("5");
        expect(getSummaryValue("Prof. Bonus:")).toBe("3");
        expect(getSummaryValue("Max Hit Points:")).toBe("34");
    });


    it("offers levels 1 to 20 for a single class", async () => {
        renderClassPage();
        await chooseFirstClass("fighter");

        const [levelSelect] = getLevelSelects();

        expect(levelSelect!.options).toHaveLength(20);
    });


    it("shows the subclass select only once the unlock level is reached", async () => {
        renderClassPage();
        await chooseFirstClass("fighter");

        expect(screen.queryByLabelText("Martial Archetype")).not.toBeInTheDocument();

        await userEvent.selectOptions(getLevelSelects()[0]!, "3");

        expect(screen.getByLabelText("Martial Archetype")).toBeInTheDocument();
    });


    it("a second class only offers the levels left under 20", async () => {
        renderClassPage();
        await chooseFirstClass("fighter");
        await userEvent.selectOptions(getLevelSelects()[0]!, "5");

        await userEvent.selectOptions(screen.getByDisplayValue("Add a new class..."), "wizard");

        const levelSelects = getLevelSelects();
        expect(levelSelects).toHaveLength(2);
        expect(levelSelects[1]!.options).toHaveLength(15);
        expect(getSummaryValue("Total Level:")).toBe("6");
    });


    it("hides 'Add a new class' at level 20", async () => {
        renderClassPage();
        await chooseFirstClass("fighter");

        expect(screen.getByDisplayValue("Add a new class...")).toBeInTheDocument();

        await userEvent.selectOptions(getLevelSelects()[0]!, "20");

        expect(screen.queryByDisplayValue("Add a new class...")).not.toBeInTheDocument();
    });


    it("removing a class lowers the total level", async () => {
        renderClassPage();
        await chooseFirstClass("fighter");
        await userEvent.selectOptions(getLevelSelects()[0]!, "5");
        await userEvent.selectOptions(screen.getByDisplayValue("Add a new class..."), "wizard");

        const removeButtons = screen.getAllByRole("button", { name: "✖" });
        await userEvent.click(removeButtons[1]!);

        expect(getLevelSelects()).toHaveLength(1);
        expect(getSummaryValue("Total Level:")).toBe("5");
    });
});