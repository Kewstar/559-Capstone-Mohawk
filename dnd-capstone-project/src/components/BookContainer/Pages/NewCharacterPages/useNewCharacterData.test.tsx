// useNewCharacterData.test.tsx
import { NewCharacterProvider, useNewCharacterData } from "./useNewCharacterData";
import {
    ABILITY_ABSOLUTE_MAX_VALUE,
    ABILITY_ABSOLUTE_MIN_VALUE,
    ABILITY_DEFAULT_MAX_VALUE,
    ABILITY_DEFAULT_VALUE,
    ABILITY_KEYS,
} from "./constants";
 
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


    it("The final value is capped at default max of 20", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.handleOnChangeManualAbility("str", "18"));
        act(() => result.current.setAbilityRacialBonus("str", 5, "Test")); 
        // 18 + 5 = 23

        expect(result.current.abilities.str.value).toBe(20);
        expect(result.current.abilities.str.mod).toBe(5);
    });


    it("Final value can exceed 20 once the ability's max is raised", () => {
        const { result } = renderCharacterHook(); 

        act(() => result.current.handleOnChangeManualAbility("str", "18"));
        act(() => result.current.setAbilityRacialBonus("str", 7, "Test"));
        act(() => result.current.setAbilityMax("str", 30));

        expect(result.current.abilities.str.max).toBe(30);
        expect(result.current.abilities.str.value).toBe(25);
        expect(result.current.abilities.str.mod).toBe(7);
    });


    it("Final value cannot exceed an absolute maximum of 30", () => {
        const { result } = renderCharacterHook();

        act(() => result.current.handleOnChangeManualAbility("str", "18"));
        act(() => result.current.setAbilityRacialBonus("str", 20, "18"));
        act(() => result.current.setAbilityMax("str", 30));
        
        expect(result.current.abilities.str.value).toBe(30);
        expect(result.current.abilities.str.mod).toBe(10);
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