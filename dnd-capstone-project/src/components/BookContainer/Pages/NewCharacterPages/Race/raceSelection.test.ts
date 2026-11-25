// raceSelection.test.ts
// Unit tests: validation of a single race selection (subrace + trait choices).
import {
    applyRaceTraitChoice,
    applySubrace,
    getRaceChoices,
    getRacialAbilityBonus,
    isSubraceMissing,
    makeDefaultRaceSelection,
} from "./raceHelpers";
import type { CharacterRace, RaceChoice } from "@/components/BookContainer/types";


/**
 * Finds one of a race's choices by its key.
 *
 * @param characterRace the race selection.
 * @param key the choice key.
 *
 * @returns the choice. Throws if missing.
 */
function choiceFor(characterRace: CharacterRace, key: string): RaceChoice {
    function hasKey(choice: RaceChoice) {
        return choice.key === key;
    }

    const choice = getRaceChoices(characterRace).find(hasKey);

    if (!choice)
        throw new Error(`No race choice "${key}"`);

    return choice;
}


describe("makeDefaultRaceSelection", () => {
    it("starts with no subrace and no choices", () => {
        expect(makeDefaultRaceSelection("elf")).toEqual({ name: "elf", subraceId: null, traitChoices: {} });
    });
});


describe("isSubraceMissing", () => {
    it("is true for a race with subraces when none is chosen", () => {
        expect(isSubraceMissing(makeDefaultRaceSelection("dwarf"))).toBe(true);
    });

    it("is false once a subrace is chosen", () => {
        expect(isSubraceMissing(applySubrace(makeDefaultRaceSelection("dwarf"), "hill-dwarf"))).toBe(false);
    });

    it("is false for a race with no subraces", () => {
        expect(isSubraceMissing(makeDefaultRaceSelection("human"))).toBe(false);
    });
});


describe("applySubrace", () => {
    it("sets a subrace that belongs to the race", () => {
        expect(applySubrace(makeDefaultRaceSelection("elf"), "high-elf").subraceId).toBe("high-elf");
    });


    it("rejects a subrace from a different race", () => {
        const elf = makeDefaultRaceSelection("elf");

        expect(applySubrace(elf, "hill-dwarf")).toBe(elf);
    });


    it("returns the same selection when the subrace doesn't change", () => {
        const highElf = applySubrace(makeDefaultRaceSelection("elf"), "high-elf");

        expect(applySubrace(highElf, "high-elf")).toBe(highElf);
    });


    it("clearing the subrace discards choices that belonged to it", () => {
        let highElf = applySubrace(makeDefaultRaceSelection("elf"), "high-elf");
        highElf = applyRaceTraitChoice(highElf, "high-elf-cantrip:spell", "light");

        expect(applySubrace(highElf, null).traitChoices).toEqual({});
    });
});


describe("applyRaceTraitChoice", () => {
    const halfElf = makeDefaultRaceSelection("half-elf");


    it("picks a valid option", () => {
        const updated = applyRaceTraitChoice(halfElf, "ability-bonus", "str");

        expect(choiceFor(updated, "ability-bonus").choices).toEqual(["str"]);
    });


    it("un-picks an option that is already picked", () => {
        const picked = applyRaceTraitChoice(halfElf, "ability-bonus", "str");

        expect(choiceFor(applyRaceTraitChoice(picked, "ability-bonus", "str"), "ability-bonus").choices).toEqual([]);
    });


    it("rejects an option that isn't offered", () => {
        // Half-elf's +1s cannot go to Charisma (it already gets +2)
        expect(applyRaceTraitChoice(halfElf, "ability-bonus", "cha")).toBe(halfElf);
    });


    it("rejects a choice key the race doesn't have", () => {
        expect(applyRaceTraitChoice(halfElf, "high-elf-cantrip:spell", "light")).toBe(halfElf);
    });


    it("rejects a pick beyond the limit when more than one may be chosen", () => {
        let picked = applyRaceTraitChoice(halfElf, "ability-bonus", "str");
        picked = applyRaceTraitChoice(picked, "ability-bonus", "dex");

        expect(applyRaceTraitChoice(picked, "ability-bonus", "con")).toBe(picked);
    });


    it("swaps the pick when only one may be chosen", () => {
        let picked = applyRaceTraitChoice(halfElf, "language", "dwarvish");
        picked = applyRaceTraitChoice(picked, "language", "giant");

        expect(choiceFor(picked, "language").choices).toEqual(["giant"]);
    });
});


describe("getRacialAbilityBonus", () => {
    it("gives no bonuses when no race is chosen", () => {
        const bonuses = getRacialAbilityBonus(null);

        expect(bonuses.str).toEqual({ value: 0, source: "" });
        expect(bonuses.con).toEqual({ value: 0, source: "" });
    });


    it("adds the race and subrace bonuses together", () => {
        const hillDwarf = applySubrace(makeDefaultRaceSelection("dwarf"), "hill-dwarf");
        const bonuses = getRacialAbilityBonus(hillDwarf);

        expect(bonuses.con.value).toBe(2);
        expect(bonuses.wis.value).toBe(1);
    });


    it("applies chosen ability bonuses", () => {
        const halfElf = applyRaceTraitChoice(makeDefaultRaceSelection("half-elf"), "ability-bonus", "str");
        const bonuses = getRacialAbilityBonus(halfElf);

        expect(bonuses.str.value).toBe(1);
        expect(bonuses.cha.value).toBe(2);
    });
});