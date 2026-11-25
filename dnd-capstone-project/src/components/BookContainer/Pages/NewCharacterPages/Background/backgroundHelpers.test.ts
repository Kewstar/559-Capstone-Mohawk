// backgroundHelpers.test.ts
// Unit tests: validation of a single background selection and its choices.
import { getChoiceLimit, getChoiceOptionTexts, makeDefaultBackgroundSelection, toggleChoicePick } from "./backgroundHelpers";
import { getBackground } from "@/data/dnd5e_2014/backgrounds";


const ACOLYTE = getBackground("acolyte");
const TRAITS = getChoiceOptionTexts(ACOLYTE, "personalityTraitChoices");
const IDEALS = getChoiceOptionTexts(ACOLYTE, "idealChoices");


/**
 * Reads an option text that must exist.
 *
 * @param texts the option list.
 * @param index which option.
 *
 * @returns the text. Throws if missing.
 */
function textAt(texts: string[], index: number): string {
    const text = texts[index];

    if (text === undefined)
        throw new Error(`No option at ${index}`);

    return text;
}


describe("makeDefaultBackgroundSelection", () => {
    it("starts with no choices picked", () => {
        expect(makeDefaultBackgroundSelection("acolyte")).toEqual({
            name: "acolyte",
            personalityTraitChoices: [],
            idealChoices: [],
            bondChoices: [],
            flawChoices: [],
        });
    });
});


describe("getChoiceLimit", () => {
    it("uses the background's own limits (2 traits, 1 ideal, 1 bond, 1 flaw)", () => {
        expect(getChoiceLimit(ACOLYTE, "personalityTraitChoices")).toBe(2);
        expect(getChoiceLimit(ACOLYTE, "idealChoices")).toBe(1);
        expect(getChoiceLimit(ACOLYTE, "bondChoices")).toBe(1);
        expect(getChoiceLimit(ACOLYTE, "flawChoices")).toBe(1);
    });
});


describe("toggleChoicePick", () => {
    const empty = makeDefaultBackgroundSelection("acolyte");


    it("picks an option", () => {
        expect(toggleChoicePick(empty, "personalityTraitChoices", textAt(TRAITS, 0)).personalityTraitChoices)
            .toEqual([textAt(TRAITS, 0)]);
    });


    it("un-picks an option that is already picked", () => {
        const picked = toggleChoicePick(empty, "personalityTraitChoices", textAt(TRAITS, 0));

        expect(toggleChoicePick(picked, "personalityTraitChoices", textAt(TRAITS, 0)).personalityTraitChoices).toEqual([]);
    });


    it("rejects text that isn't one of the background's options", () => {
        expect(toggleChoicePick(empty, "bondChoices", "I made this up")).toBe(empty);
    });


    it("rejects a pick past the limit when more than one may be chosen", () => {
        let picked = toggleChoicePick(empty, "personalityTraitChoices", textAt(TRAITS, 0));
        picked = toggleChoicePick(picked, "personalityTraitChoices", textAt(TRAITS, 1));

        expect(toggleChoicePick(picked, "personalityTraitChoices", textAt(TRAITS, 2))).toBe(picked);
    });


    it("swaps the pick when only one may be chosen", () => {
        let picked = toggleChoicePick(empty, "idealChoices", textAt(IDEALS, 0));
        picked = toggleChoicePick(picked, "idealChoices", textAt(IDEALS, 1));

        expect(picked.idealChoices).toEqual([textAt(IDEALS, 1)]);
    });


    it("doesn't touch the other categories", () => {
        const picked = toggleChoicePick(empty, "idealChoices", textAt(IDEALS, 0));

        expect(picked.personalityTraitChoices).toBe(empty.personalityTraitChoices);
        expect(picked.bondChoices).toBe(empty.bondChoices);
    });
});