// Abilities.test.tsx 

// JSX Imports 
import { AbilitiesBlockLeft, AbilitiesBlockRight } from "./Abilities";
import { NewCharacterProvider } from "../useNewCharacterData";
import { ABILITY_DEFAULT_VALUE, ABILITY_INPUT_MIN, ABILITY_INPUT_MAX } from "../constants";

// Testing Imports 
import type { ReactNode } from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

vi.mock("@components/BookContainer/Pages/hooks/NoFlip", () => ({
    NoFlip: ({ children }: { children: ReactNode }) => <>{children}</>,
}));


const { mockRollResult } = vi.hoisted(() => ({ mockRollResult: vi.fn() }));


vi.mock("@dice-roller/rpg-dice-roller", () => ({
    DiceRoll: class {
        constructor(notation: string) {
            return mockRollResult(notation);
        }
    },
}));


//#region HELPERS 
function renderAbilities() {
    return render(
        <NewCharacterProvider>
            <AbilitiesBlockLeft />
            <AbilitiesBlockRight />
        </NewCharacterProvider>
    );
}


function fakeRoll(dice: [number, number, number, number]) {
    const lowest = Math.min(...dice);
    const droppedIndex = dice.indexOf(lowest);

    return {
        total: dice.reduce( (sum, value, i) => (i === droppedIndex ? sum : sum + value), 0 ),
        rolls: [{
            rolls: dice.map( (value, i) => ({ value, useInTotal: i !== droppedIndex }) )
        }]
    };

}



function getDisplayValue(abilityLabel: string, rowLabel: string): string {
    const table = screen.getByRole("columnheader", { name: abilityLabel }).closest("table");
    if (!table) 
        throw new Error(`No table found for ability "${abilityLabel}"`);

    const row = within(table).getByText(new RegExp(`^${rowLabel}`)).closest("tr");
    if (!row) 
        throw new Error(`No row found for "${rowLabel}"`);

    return within(row).getAllByRole("cell")[1].textContent ?? "";
}


function setManualAbility(label: string, value: string) {
    fireEvent.change(screen.getByLabelText(label), {target: { value }});
}

async function switchToRolled() {
    await userEvent.click(screen.getByRole("button", { name: /rolled selection/i }));
}

async function switchToManual() {
    await userEvent.click(screen.getByRole("button", { name: /manual selection/i }));
}

async function clickRoll() {
    await userEvent.click(screen.getByRole("button", { name: /roll abilities/i }));
}

function getRolledTotals(): string[] {
    return Array.from(document.querySelectorAll(".RolledAbility")).map((element) => element.textContent ?? "");
}
//#endregion HELPERS 


beforeEach(() => {
    mockRollResult.mockReset();
})


describe("Abilities: manual selection", () => {
    it("Renders all six abilities with the default base score", () => {
        renderAbilities();

        for (let label of ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]) {
            expect(screen.getByLabelText(label)).toHaveValue(ABILITY_DEFAULT_VALUE);
        }

    });


    it("Has the correct input min/max", () => {
        renderAbilities(); 
        const input = screen.getByLabelText("Strength");

        expect(input).toHaveAttribute("min", String(ABILITY_INPUT_MIN));
        expect(input).toHaveAttribute("max", String(ABILITY_INPUT_MAX));
    });


    it.each([
        ["15", 15],     // inputs match
        ["12.7", 12],   // floored input 
        ["0", ABILITY_INPUT_MIN],   // below range
        ["-5", ABILITY_INPUT_MIN],  //  (negative)
        ["25", ABILITY_INPUT_MAX],  // above range
    ])("Typed values results in expected Base Values", (typedValue, expectedValue) => {
        renderAbilities();

        setManualAbility("Strength", typedValue);

        expect(screen.getByLabelText("Strength")).toHaveValue(expectedValue);
        expect(getDisplayValue("Strength", "Base Score")).toBe(String(expectedValue));
    });


    it("Resets to default when input is emptied", () => {
        renderAbilities();

        setManualAbility("Strength", "15");
        setManualAbility("Strength", "");

        expect(screen.getByLabelText("Strength")).toHaveValue(ABILITY_DEFAULT_VALUE);
    });


    describe("Abilities: modifier calculations", () => {
        it.each([
            ["1", "-5"],
            ["8", "-1"],
            ["9", "-1"],
            ["10", "+0"],
            ["11", "+0"],
            ["12", "+1"],
            ["15", "+2"],
            ["18", "+4"],
        ])("Abilty Score base value of %s shows modifier %s", (baseValue, expectedMod) => {
            renderAbilities();

            setManualAbility("Strength", baseValue);

            expect(getDisplayValue("Strength", "Base Score")).toBe(baseValue);
            expect(getDisplayValue("Strength", "Total Score")).toBe(baseValue);
            expect(getDisplayValue("Strength", "Modifier")).toBe(expectedMod);
        });


        it("Only the ability editied is updated", () => {
            renderAbilities();

            setManualAbility("Dexterity", "16");

            expect(getDisplayValue("Dexterity", "Modifier")).toBe("+3");
            expect(getDisplayValue("Strength", "Modifier")).toBe("+0");
        });


        it("Shows no racial bonus source when there is no bonus", () => {
            renderAbilities();

            expect(getDisplayValue("Strength", "Bonus")).toBe("0");
        });
    });

});


describe("Abilities: Rolled Selection", () => {
    it("Toggles aria-pressed when switching modes", async () => {
        renderAbilities();

        const manualButton = screen.getByRole("button", { name: /manual selection/i });
        const rolledButton = screen.getByRole("button", { name: /rolled selection/i });

        await switchToRolled();

        expect(manualButton).toHaveAttribute("aria-pressed", "false");
        expect(rolledButton).toHaveAttribute("aria-pressed", "true");
    });

    it("Rows six unrolled placeholders before rolling", async () => {
        renderAbilities(); 
        await switchToRolled(); 

        expect(screen.getAllByRole("combobox")).toHaveLength(6);
        expect(getRolledTotals()).toEqual(["--", "--", "--", "--", "--", "--"]);
        expect(document.querySelectorAll(".RolledDice.Unrolled")).toHaveLength(24);
    });

    it("Rolls 4d6 and drops the lowest value once per ability, then shows each total", async () => {
        mockRollResult
            .mockReturnValueOnce(fakeRoll([6, 6, 6, 1])) // 18
            .mockReturnValueOnce(fakeRoll([1, 1, 1, 1])) // 3
            .mockReturnValueOnce(fakeRoll([4, 3, 2, 1])) // 9
            .mockReturnValueOnce(fakeRoll([5, 5, 5, 5])) // 15
            .mockReturnValueOnce(fakeRoll([6, 5, 4, 3])) // 15
            .mockReturnValueOnce(fakeRoll([2, 2, 3, 1]));// 7
        
        renderAbilities();

        await switchToRolled();
        await clickRoll();

        expect(mockRollResult).toHaveBeenCalledTimes(6);
        expect(mockRollResult).toHaveBeenCalledWith("4d6dl1");
        expect(getRolledTotals()).toEqual(["18", "3", "9", "15", "15", "7"]);
    });


    it("Three dice are marked as kept and one is marked as dropped", async () => {
        mockRollResult.mockImplementation(() => fakeRoll([6, 6, 6, 1]));
        renderAbilities();

        await switchToRolled();
        await clickRoll();

        const firstRoll = document.querySelector(".RolledInputBox")!;
        expect(firstRoll.querySelectorAll(".RolledDice.Kept")).toHaveLength(3);
        expect(firstRoll.querySelectorAll(".RolledDice.Dropped")).toHaveLength(1);
        expect(firstRoll.querySelector(".RolledDice.Dropped")).toHaveTextContent("1");
    });

    it("A roll's total is assigned to the chosen ability's base score", async () => {
        mockRollResult.mockImplementation(() => fakeRoll([6, 6, 6, 1])); // 18
        renderAbilities();

        await switchToRolled();
        await clickRoll();

        await userEvent.selectOptions(screen.getAllByRole("combobox")[0], "str");

        expect(getDisplayValue("Strength", "Base Score")).toBe("18");
        expect(getDisplayValue("Strength", "Modifier")).toBe("+4");
    });


    it("The value is moved when a roll is reassigned to a different ability", async () => {
        mockRollResult.mockImplementation(() => fakeRoll([6, 6, 6, 1])); // 18
        renderAbilities();
        
        await switchToRolled();
        await clickRoll();
        
        const [first] = screen.getAllByRole("combobox");

        await userEvent.selectOptions(first, "str");
        await userEvent.selectOptions(first, "dex");

        expect(getDisplayValue("Strength", "Base Score")).toBe(String(ABILITY_DEFAULT_VALUE));
        expect(getDisplayValue("Dexterity", "Base Score")).toBe("18");
    });


    it("The ability is reset to the default when a roll is set back to '--'", async () => {
        mockRollResult.mockImplementation(() => fakeRoll([6, 6, 6, 1]));
        renderAbilities();
        
        await switchToRolled();
        await clickRoll();
        
        const [first] = screen.getAllByRole("combobox");

        await userEvent.selectOptions(first, "str");
        await userEvent.selectOptions(first, "--");

        expect(getDisplayValue("Strength", "Base Score")).toBe(String(ABILITY_DEFAULT_VALUE));
    });


    it("Disables an assigned ability in the other selects, but not in its own", async () => {
        mockRollResult.mockImplementation(() => fakeRoll([6, 6, 6, 1]));
        renderAbilities();
        
        await switchToRolled();
        await clickRoll();
        
        const [first, second] = screen.getAllByRole("combobox");

        await userEvent.selectOptions(first, "str");

        expect(within(second).getByRole("option", { name: "str" })).toBeDisabled();
        expect(within(first).getByRole("option", { name: "str" })).toBeEnabled();
    });


    it("The ability is freed for the other selects once unassigned", async () => {
        mockRollResult.mockImplementation(() => fakeRoll([6, 6, 6, 1]));
        renderAbilities();
        
        await switchToRolled();
        await clickRoll();
        
        const [first, second] = screen.getAllByRole("combobox");

        await userEvent.selectOptions(first, "str");
        await userEvent.selectOptions(first, "--");

        expect(within(second).getByRole("option", { name: "str" })).toBeEnabled();
    });


    it("Assignments made before anything is rolled are ignored", async () => {
        renderAbilities();

        await switchToRolled();
        const [first] = screen.getAllByRole("combobox");

        await userEvent.selectOptions(first, "str");

        expect(first).toHaveValue("--");
        expect(getDisplayValue("Strength", "Base Score")).toBe(String(ABILITY_DEFAULT_VALUE));
    });

});


describe("Abilities: switching selection modes", () => { 
    it("Resets manual scores when switching to rolled", async () => {
        renderAbilities();

        setManualAbility("Strength", "15");

        await switchToRolled();

        expect(getDisplayValue("Strength", "Base Score")).toBe(String(ABILITY_DEFAULT_VALUE));
    });


    it("Resets rolled assignments & scores when switching to manual", async () => {
        mockRollResult.mockImplementation(() => fakeRoll([6, 6, 6, 1]));
        renderAbilities();
        
        await switchToRolled();
        await clickRoll();
 
        await userEvent.selectOptions(screen.getAllByRole("combobox")[0], "str");
 
        await switchToManual();
 
        expect(screen.getByLabelText("Strength")).toHaveValue(ABILITY_DEFAULT_VALUE);
    }); 


    it("Rolled assignments are reset when switching away from and back to rolled selection", async () => {
        mockRollResult.mockImplementation(() => fakeRoll([6, 6, 6, 1]));
        renderAbilities();
        
        await switchToRolled();
        await clickRoll();
        
        await userEvent.selectOptions(screen.getAllByRole("combobox")[0], "str");
 
        await switchToManual();
        await switchToRolled();
 
        expect(screen.getAllByRole("combobox")[0]).toHaveValue("--");
        expect(getRolledTotals()).toEqual(["--", "--", "--", "--", "--", "--"]);
    });
})