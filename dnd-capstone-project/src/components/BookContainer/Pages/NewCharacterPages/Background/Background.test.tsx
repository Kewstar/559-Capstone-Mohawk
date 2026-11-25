// Background.test.tsx
// Frontend tests: Background page selection, and the single background constraint.
import { BackgroundBlockLeft, BackgroundBlockRight } from "./Background";
import { NewCharacterProvider, useNewCharacterData } from "../useNewCharacterData";
import { getChoiceOptionTexts } from "./backgroundHelpers";
import { BACKGROUND_LIST, getBackground } from "@/data/dnd5e_2014/backgrounds";

import type { ReactNode } from "react";
import { act, render, renderHook, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";


vi.mock("@/components/BookContainer/Pages/hooks/NoFlip", () => ({
    NoFlip: function MockNoFlip({ children }: { children: ReactNode }) {
        return <>{children}</>;
    },
}));


//#region HELPERS

const ACOLYTE = getBackground("acolyte");
const TRAITS = getChoiceOptionTexts(ACOLYTE, "personalityTraitChoices");
const IDEALS = getChoiceOptionTexts(ACOLYTE, "idealChoices");

/** Renders both halves of the Background page inside the provider. */
function renderBackgroundPage() {
    return render(
        <NewCharacterProvider>
            <BackgroundBlockLeft />
            <BackgroundBlockRight />
        </NewCharacterProvider>
    );
}

/** @returns the background <select>. */
function getBackgroundSelect(): HTMLSelectElement {
    return screen.getByLabelText(/^Background:/) as HTMLSelectElement;
}

/**
 * Picks a background, or "" to clear it.
 *
 * @param value the background value.
 */
async function chooseBackground(value: string) {
    await userEvent.selectOptions(getBackgroundSelect(), value);
}

/**
 * Finds the checkbox for one option inside a choice group.
 *
 * @param groupTitle e.g. "Personality Traits".
 * @param text the option's text.
 *
 * @returns the checkbox.
 */
function getOption(groupTitle: string, text: string): HTMLElement {
    const group = screen.getByRole("group", { name: groupTitle });

    return within(group).getByRole("checkbox", { name: text });
}

/**
 * Reads an option text that must exist.
 *
 * @param texts the option list.
 * @param index which option.
 *
 * @returns the text.
 */
function textAt(texts: string[], index: number): string {
    const text = texts[index];

    if (text === undefined)
        throw new Error(`No option at ${index}`);

    return text;
}

/** Calls the character hook. */
function useCharacter() {
    return useNewCharacterData();
}

//#endregion



describe("Background page: selecting a background", () => {
    it("shows a prompt and no choice groups before a background is chosen", () => {
        renderBackgroundPage();

        expect(screen.getByText("Select a background to see its details...")).toBeInTheDocument();
        expect(screen.queryByRole("group", { name: "Personality Traits" })).not.toBeInTheDocument();
    });


    it("lists a placeholder plus every background", () => {
        renderBackgroundPage();

        expect(getBackgroundSelect().options).toHaveLength(BACKGROUND_LIST.length + 1);
    });


    it("shows the chosen background's details and choice groups", async () => {
        renderBackgroundPage();

        await chooseBackground("acolyte");

        expect(screen.getByRole("heading", { name: "ACOLYTE" })).toBeInTheDocument();
        expect(screen.getByText(ACOLYTE.feature.name)).toBeInTheDocument();
        expect(screen.getByRole("group", { name: "Personality Traits" })).toBeInTheDocument();
        expect(screen.getByRole("group", { name: "Ideal" })).toBeInTheDocument();
        expect(screen.getByRole("group", { name: "Bond" })).toBeInTheDocument();
        expect(screen.getByRole("group", { name: "Flaw" })).toBeInTheDocument();
    });


    it("choosing the placeholder clears the background", async () => {
        renderBackgroundPage();
        await chooseBackground("acolyte");

        await chooseBackground("");

        expect(screen.getByText("Select a background to see its details...")).toBeInTheDocument();
    });
});



describe("Background page: choice limits", () => {
    it("disables other personality traits once 2 are picked", async () => {
        renderBackgroundPage();
        await chooseBackground("acolyte");

        await userEvent.click(getOption("Personality Traits", textAt(TRAITS, 0)));
        await userEvent.click(getOption("Personality Traits", textAt(TRAITS, 1)));

        expect(getOption("Personality Traits", textAt(TRAITS, 2))).toBeDisabled();
        expect(getOption("Personality Traits", textAt(TRAITS, 0))).toBeEnabled();
        expect(screen.getByText("Personality Traits (2/2)")).toBeInTheDocument();
    });


    it("unchecking a trait frees a slot", async () => {
        renderBackgroundPage();
        await chooseBackground("acolyte");
        await userEvent.click(getOption("Personality Traits", textAt(TRAITS, 0)));
        await userEvent.click(getOption("Personality Traits", textAt(TRAITS, 1)));

        await userEvent.click(getOption("Personality Traits", textAt(TRAITS, 0)));

        expect(getOption("Personality Traits", textAt(TRAITS, 2))).toBeEnabled();
    });


    it("swaps the ideal instead of disabling, since only one can be picked", async () => {
        renderBackgroundPage();
        await chooseBackground("acolyte");

        await userEvent.click(getOption("Ideal", textAt(IDEALS, 0)));
        await userEvent.click(getOption("Ideal", textAt(IDEALS, 1)));

        expect(getOption("Ideal", textAt(IDEALS, 1))).toBeChecked();
        expect(getOption("Ideal", textAt(IDEALS, 0))).not.toBeChecked();
    });
});



describe("Background page: only one background at a time", () => {
    it("is a single-choice select", () => {
        renderBackgroundPage();

        expect(getBackgroundSelect().multiple).toBe(false);
    });


    it("clearing and choosing again starts with no picks", async () => {
        renderBackgroundPage();
        await chooseBackground("acolyte");
        await userEvent.click(getOption("Personality Traits", textAt(TRAITS, 0)));

        await chooseBackground("");
        await chooseBackground("acolyte");

        expect(getOption("Personality Traits", textAt(TRAITS, 0))).not.toBeChecked();
    });
});



describe("Background state: only one background at a time", () => {
    it("choosing the same background again keeps its choices", () => {
        const { result } = renderHook(useCharacter, { wrapper: NewCharacterProvider });

        act(() => result.current.setBackground("acolyte"));
        act(() => result.current.toggleBackgroundChoice("idealChoices", textAt(IDEALS, 0)));
        const before = result.current.background;

        act(() => result.current.setBackground("acolyte"));

        expect(result.current.background).toBe(before);
    });


    it("setBackground(null) removes the background and its choices", () => {
        const { result } = renderHook(useCharacter, { wrapper: NewCharacterProvider });

        act(() => result.current.setBackground("acolyte"));
        act(() => result.current.toggleBackgroundChoice("idealChoices", textAt(IDEALS, 0)));
        act(() => result.current.setBackground(null));

        expect(result.current.background).toBeNull();
    });


    it("background skill proficiencies come only from the current background", () => {
        const { result } = renderHook(useCharacter, { wrapper: NewCharacterProvider });

        act(() => result.current.setBackground("acolyte"));
        expect(result.current.proficiencies.has("skill-insight")).toBe(true);

        act(() => result.current.setBackground(null));
        expect(result.current.proficiencies.has("skill-insight")).toBe(false);
    });


    it("choices are ignored when there is no background", () => {
        const { result } = renderHook(useCharacter, { wrapper: NewCharacterProvider });

        act(() => result.current.toggleBackgroundChoice("idealChoices", textAt(IDEALS, 0)));

        expect(result.current.background).toBeNull();
    });
});