// Race.test.tsx
// Frontend tests: Race page selection, and the single race constraint.
import { RaceBlockLeft, RaceBlockRight } from "./Race";
import { NewCharacterProvider, useNewCharacterData } from "../useNewCharacterData";
import { RACE_LIST } from "@/data/dnd5e_2014/races";

import type { ReactNode } from "react";
import { act, render, renderHook, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";


vi.mock("@/components/BookContainer/Pages/hooks/NoFlip", () => ({
    NoFlip: function MockNoFlip({ children }: { children: ReactNode }) {
        return <>{children}</>;
    },
}));


//#region HELPERS

/** Renders both halves of the Race page inside the provider. */
function renderRacePage() {
    return render(
        <NewCharacterProvider>
            <RaceBlockLeft />
            <RaceBlockRight />
        </NewCharacterProvider>
    );
}

/** @returns the race <select>. */
function getRaceSelect(): HTMLSelectElement {
    return screen.getByLabelText(/^Race:/) as HTMLSelectElement;
}

/** @returns the subrace <select>, or null when it isn't shown. */
function querySubraceSelect(): HTMLSelectElement | null {
    return screen.queryByLabelText(/^Subrace:/) as HTMLSelectElement | null;
}

/**
 * Picks a race from the race select.
 *
 * @param raceName the race value, e.g. "dwarf".
 */
async function chooseRace(raceName: string) {
    await userEvent.selectOptions(getRaceSelect(), raceName);
}

/**
 * Finds a race choice group by the start of its legend.
 *
 * @param label e.g. "Languages".
 *
 * @returns the fieldset.
 */
function getChoiceGroup(label: string): HTMLElement {
    return screen.getByRole("group", { name: new RegExp(`^${label} \\(`) });
}

/** Calls the character hook. */
function useCharacter() {
    return useNewCharacterData();
}

//#endregion



describe("Race page: selecting a race", () => {
    it("shows a prompt before a race is chosen", () => {
        renderRacePage();

        expect(screen.getByText("Select a race to see its details...")).toBeInTheDocument();
        expect(getRaceSelect().value).toBe("");
    });


    it("lists a placeholder plus every race", () => {
        renderRacePage();

        expect(getRaceSelect().options).toHaveLength(RACE_LIST.length + 1);
    });


    it("shows the chosen race's details", async () => {
        renderRacePage();

        await chooseRace("dwarf");

        expect(screen.getByRole("heading", { name: "DWARF" })).toBeInTheDocument();
        expect(screen.queryByText("Select a race to see its details...")).not.toBeInTheDocument();
    });


    it("requires a subrace for races that have them", async () => {
        renderRacePage();

        await chooseRace("dwarf");

        expect(querySubraceSelect()).toBeInTheDocument();
        expect(screen.getByText("A subrace is required for this race.")).toBeInTheDocument();

        await userEvent.selectOptions(querySubraceSelect()!, "hill-dwarf");

        expect(screen.queryByText("A subrace is required for this race.")).not.toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Hill Dwarf" })).toBeInTheDocument();
    });


    it("doesn't show a subrace select for races without subraces", async () => {
        renderRacePage();

        await chooseRace("human");

        expect(querySubraceSelect()).not.toBeInTheDocument();
    });


    it("choosing the placeholder clears the race", async () => {
        renderRacePage();
        await chooseRace("elf");

        await userEvent.selectOptions(getRaceSelect(), "");

        expect(screen.getByText("Select a race to see its details...")).toBeInTheDocument();
    });
});



describe("Race page: race choices", () => {
    it("picking an option updates the choice count", async () => {
        renderRacePage();
        await chooseRace("half-elf");

        const languages = getChoiceGroup("Languages");
        await userEvent.click(within(languages).getByRole("checkbox", { name: "Dwarvish" }));

        expect(within(languages).getByRole("checkbox", { name: "Dwarvish" })).toBeChecked();
        expect(getChoiceGroup("Languages")).toHaveAccessibleName(/\(1\/1\)/);
    });


    it("swaps the pick when only one can be chosen", async () => {
        renderRacePage();
        await chooseRace("half-elf");

        const languages = getChoiceGroup("Languages");
        await userEvent.click(within(languages).getByRole("checkbox", { name: "Dwarvish" }));
        await userEvent.click(within(languages).getByRole("checkbox", { name: "Giant" }));

        expect(within(languages).getByRole("checkbox", { name: "Giant" })).toBeChecked();
        expect(within(languages).getByRole("checkbox", { name: "Dwarvish" })).not.toBeChecked();
    });


    it("disables the other options once a multi-pick choice is full", async () => {
        renderRacePage();
        await chooseRace("half-elf");

        const bonuses = getChoiceGroup("Ability Score Increase");
        await userEvent.click(within(bonuses).getByRole("checkbox", { name: "Strength +1" }));
        await userEvent.click(within(bonuses).getByRole("checkbox", { name: "Dexterity +1" }));

        expect(within(bonuses).getByRole("checkbox", { name: "Constitution +1" })).toBeDisabled();
        expect(within(bonuses).getByRole("checkbox", { name: "Strength +1" })).toBeEnabled();
    });
});



describe("Race page: only one race at a time", () => {
    it("is a single-choice select", () => {
        renderRacePage();

        expect(getRaceSelect().multiple).toBe(false);
    });


    it("choosing another race replaces the first", async () => {
        renderRacePage();
        await chooseRace("dwarf");
        await chooseRace("elf");

        expect(getRaceSelect().value).toBe("elf");
        expect(screen.getByRole("heading", { name: "ELF" })).toBeInTheDocument();
        expect(screen.queryByRole("heading", { name: "DWARF" })).not.toBeInTheDocument();
    });


    it("changing race resets the subrace and choices", async () => {
        renderRacePage();
        await chooseRace("half-elf");
        await userEvent.click(within(getChoiceGroup("Languages")).getByRole("checkbox", { name: "Dwarvish" }));

        await chooseRace("human");
        await chooseRace("half-elf");

        expect(within(getChoiceGroup("Languages")).getByRole("checkbox", { name: "Dwarvish" })).not.toBeChecked();
    });
});



describe("Race state: only one race at a time", () => {
    it("setRace replaces the race and clears the old subrace and choices", () => {
        const { result } = renderHook(useCharacter, { wrapper: NewCharacterProvider });

        act(() => result.current.setRace("elf"));
        act(() => result.current.setSubrace("high-elf"));
        act(() => result.current.toggleRaceChoice("high-elf-cantrip:spell", "light"));
        act(() => result.current.setRace("dwarf"));

        expect(result.current.race).toEqual({ name: "dwarf", subraceId: null, traitChoices: {} });
    });


    it("choosing the same race again keeps its choices", () => {
        const { result } = renderHook(useCharacter, { wrapper: NewCharacterProvider });

        act(() => result.current.setRace("elf"));
        act(() => result.current.setSubrace("high-elf"));
        const before = result.current.race;

        act(() => result.current.setRace("elf"));

        expect(result.current.race).toBe(before);
    });


    it("racial ability bonuses come only from the current race", () => {
        const { result } = renderHook(useCharacter, { wrapper: NewCharacterProvider });

        act(() => result.current.setRace("dwarf"));
        act(() => result.current.setSubrace("hill-dwarf"));
        act(() => result.current.setRace("human"));

        // Human is +1 to everything; the dwarf's +2 CON / +1 WIS must not linger
        expect(result.current.abilities.con.racialBonus.value).toBe(1);
        expect(result.current.abilities.wis.racialBonus.value).toBe(1);
        expect(result.current.hpBonusPerLevel).toBe(0);
    });


    it("subrace and choices are ignored when there is no race", () => {
        const { result } = renderHook(useCharacter, { wrapper: NewCharacterProvider });

        act(() => result.current.setSubrace("hill-dwarf"));
        act(() => result.current.toggleRaceChoice("language", "giant"));

        expect(result.current.race).toBeNull();
    });
});