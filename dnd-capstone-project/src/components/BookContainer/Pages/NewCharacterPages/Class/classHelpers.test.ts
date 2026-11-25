// classHelpers.hp.test.ts
// Unit tests: Max HP calculation (fixed average rule, 2014 PHB).
import { CalculateMaxHP, calculateMaxHPAverage, makeClass } from "./classHelpers";
import { getRacialHpBonusPerLevel, makeDefaultRaceSelection, applySubrace } from "../Race/raceHelpers";
import type { ClassName } from "@/data/dnd5e_2014/classes";


/**
 * Builds a class entry at a given level.
 *
 * @param name the class.
 * @param level the level in that class.
 *
 * @returns a fresh CharacterClass.
 */
function classAt(name: ClassName, level: number) {
    return makeClass(name, level);
}


describe("CalculateMaxHP: no classes", () => {
    it("returns 0 when the character has no classes", () => {
        expect(CalculateMaxHP([], 0, "average")).toBe(0);
        expect(calculateMaxHPAverage([], 5)).toBe(0);
    });
});


describe("CalculateMaxHP: level 1 takes the max hit die", () => {
    it.each([
        ["barbarian",   12],
        ["fighter",     10],
        ["paladin",     10],
        ["ranger",      10],
        ["bard",         8],
        ["cleric",       8],
        ["druid",        8],
        ["monk",         8],
        ["rogue",        8],
        ["warlock",      8],
        ["sorcerer",     6],
        ["wizard",       6],
    ] as const)("%s at level 1 with CON +0 has %i HP", (name, expected) => {
        expect(CalculateMaxHP([classAt(name, 1)], 0, "average")).toBe(expected);
    });


    it("adds the CON modifier to the first level", () => {
        expect(CalculateMaxHP([classAt("fighter", 1)], 2, "average")).toBe(12);
    });


    it("never gives less than 1 HP at level 1, even with a very low CON", () => {
        // d6 + (-5) = 1, d6 + (-6) would be 0 → clamped to 1
        expect(CalculateMaxHP([classAt("wizard", 1)], -5, "average")).toBe(1);
        expect(CalculateMaxHP([classAt("wizard", 1)], -6, "average")).toBe(1);
    });
});


describe("CalculateMaxHP: levels after the first use the rounded-up average", () => {
    it("fighter 3, CON +0: 10 + 6 + 6 = 22", () => {
        expect(CalculateMaxHP([classAt("fighter", 3)], 0, "average")).toBe(22);
    });


    it("fighter 5, CON +2: 12 + 4 × (6 + 2) = 44", () => {
        expect(CalculateMaxHP([classAt("fighter", 5)], 2, "average")).toBe(44);
    });


    it("fighter 20, CON +0: 10 + 19 × 6 = 124", () => {
        expect(CalculateMaxHP([classAt("fighter", 20)], 0, "average")).toBe(124);
    });


    it("each later level gains at least 1 HP when CON is very negative", () => {
        // wizard 3, CON -4: first = max(1, 6-4) = 2, each later = max(1, 4-4) = 1 → 4
        expect(CalculateMaxHP([classAt("wizard", 3)], -4, "average")).toBe(4);
    });
});


describe("CalculateMaxHP: multiclassing", () => {
    it("only the first class's first level takes the max die", () => {
        // fighter 3 / wizard 2, CON +1: 11 + 2×7 + 2×5 = 35
        const classes = [classAt("fighter", 3), classAt("wizard", 2)];

        expect(CalculateMaxHP(classes, 1, "average")).toBe(35);
    });


    it("class order changes the result, because the first class sets the level 1 die", () => {
        // wizard 2 / fighter 3, CON +1: 7 + 1×5 + 3×7 = 33
        const classes = [classAt("wizard", 2), classAt("fighter", 3)];

        expect(CalculateMaxHP(classes, 1, "average")).toBe(33);
    });
});


describe("CalculateMaxHP: bonus HP per level", () => {
    it("adds the bonus once for every character level", () => {
        // fighter 5, CON +0, +1/level: 34 + 5 = 39
        expect(CalculateMaxHP([classAt("fighter", 5)], 0, "average", 1)).toBe(39);
    });


    it("counts levels across every class for the bonus", () => {
        const classes = [classAt("fighter", 3), classAt("wizard", 2)];

        expect(CalculateMaxHP(classes, 1, "average", 1)).toBe(35 + 5);
    });


    it("defaults the bonus to 0", () => {
        expect(CalculateMaxHP([classAt("fighter", 5)], 0, "average"))
            .toBe(CalculateMaxHP([classAt("fighter", 5)], 0, "average", 0));
    });
});


describe("CalculateMaxHP: calculation types", () => {
    it("'average' and calculateMaxHPAverage agree", () => {
        const classes = [classAt("paladin", 7)];

        expect(CalculateMaxHP(classes, 3, "average", 1)).toBe(calculateMaxHPAverage(classes, 3, 1));
    });

    it.todo("'rolled' uses the rolled hit die results instead of the average");
});


describe("getRacialHpBonusPerLevel", () => {
    it("is 0 when no race is chosen", () => {
        expect(getRacialHpBonusPerLevel(null)).toBe(0);
    });


    it("is 0 for a race with no HP trait", () => {
        expect(getRacialHpBonusPerLevel(makeDefaultRaceSelection("human"))).toBe(0);
    });


    it("does not apply Dwarven Toughness until Hill Dwarf is chosen", () => {
        expect(getRacialHpBonusPerLevel(makeDefaultRaceSelection("dwarf"))).toBe(0);
    });


    it("gives Hill Dwarf +1 HP per level", () => {
        const hillDwarf = applySubrace(makeDefaultRaceSelection("dwarf"), "hill-dwarf");

        expect(getRacialHpBonusPerLevel(hillDwarf)).toBe(1);
    });
});