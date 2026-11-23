// useNewCharacterData.test.tsx
import { NewCharacterProvider, useNewCharacterData } from "./useNewCharacterData";
import {
    ABILITY_ABSOLUTE_MAX_VALUE,
    ABILITY_ABSOLUTE_MIN_VALUE,
    ABILITY_DEFAULT_MAX_VALUE,
    ABILITY_DEFAULT_VALUE,
    ABILITY_KEYS,
    getAbilityModifier,
    getAbilityScore,
} from "@/data/dnd5e_2014/abilities";
 
import { act, renderHook } from "@testing-library/react";
 
 
function renderCharacterHook() {
    return renderHook(() => useNewCharacterData(), { wrapper: NewCharacterProvider });
}


describe("useNewCharacterData Context Provider", () => {
    it("Throws error when used outside <NewCharacterProvider>", () => {
        const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
 
        expect(() => renderHook(() => useNewCharacterData())).toThrow(/NewCharacterProvider/);
 
        consoleError.mockRestore();
    });
});



describe("useNewCharacterData: defaults", () => {
    it("starts every ability at the default base, no bonus, and the default max", () => {
        const { result } = renderCharacterHook();
 
        for (const key of ABILITY_KEYS) {
            const ability = result.current.abilities[key];
            expect(ability.base).toBe(ABILITY_DEFAULT_VALUE);
            expect(ability.value).toBe(ABILITY_DEFAULT_VALUE);
            expect(ability.mod).toBe(0);
            expect(ability.racialBonus).toEqual({ value: 0, source: "" });
            expect(ability.max).toBe(ABILITY_DEFAULT_MAX_VALUE);
        }
    });
    
 
    it("starts with six unrolled values and six unassigned selections", () => {
        const { result } = renderCharacterHook();
 
        expect(result.current.rolledAbilityValues).toHaveLength(ABILITY_KEYS.length);
        result.current.rolledAbilityValues.forEach((roll) => {
            expect(roll.dieTotal).toBe(0);
            expect(roll.dieRolls).toHaveLength(4);
        });
        expect(result.current.rolledAbilityAssignments).toEqual(ABILITY_KEYS.map(() => "--"));
    });
});



describe("useNewCHaracterData: scores above 20 (max 30)", () => { 
    it("Default max 20 and absolute max 30", () => {
        expect(ABILITY_DEFAULT_MAX_VALUE).toBe(20);
        expect(ABILITY_ABSOLUTE_MAX_VALUE).toBe(30);
    });


    it("caps the final value at the default max of 20", () => {
        const value = getAbilityScore(18, 5, ABILITY_DEFAULT_MAX_VALUE);   // 18 + 5 = 23

        expect(value).toBe(20);
        expect(getAbilityModifier(value)).toBe(5);
    });

    it("lets the final value exceed 20 once the ability's max is raised", () => {
        const value = getAbilityScore(18, 7, 30);                          // 18 + 7 = 25

        expect(value).toBe(25);
        expect(getAbilityModifier(value)).toBe(7);
    });

    it("never exceeds the absolute max of 30, even with a higher requested max", () => {
        const value = getAbilityScore(18, 20, 30);                         // 18 + 20 = 38

        expect(value).toBe(30);
        expect(getAbilityModifier(value)).toBe(10);
    });


    it("setAbilityMax cannot exceed absolute range of 1-30", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.setAbilityMax("str", 99));
        expect(result.current.abilities.str.max).toBe(ABILITY_ABSOLUTE_MAX_VALUE);
        
        act(() => result.current.setAbilityMax("str", -5));
        expect(result.current.abilities.str.max).toBe(ABILITY_ABSOLUTE_MIN_VALUE);
    });


    it("Only the adjusts the max for the changed ability", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.setAbilityMax("str", 30));
            
        expect(result.current.abilities.str.max).toBe(30);
        expect(result.current.abilities.dex.max).toBe(ABILITY_DEFAULT_MAX_VALUE);
    });
});


describe("useNewCharacterData: racial bonus reaches the final value", () => {
    it("adds a race's fixed bonus to the manual score", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.handleOnChangeManualAbility("con", "18"));
        act(() => result.current.setRace("dwarf"));                        // +2 Constitution

        expect(result.current.abilities.con.value).toBe(20);
        expect(result.current.abilities.con.mod).toBe(5);
    });
});