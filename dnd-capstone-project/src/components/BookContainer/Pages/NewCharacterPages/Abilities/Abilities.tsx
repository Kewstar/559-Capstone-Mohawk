// Abilities.tsx
import { NoFlip } from "@/components/BookContainer/Pages/hooks/NoFlip"
import { useNewCharacterData } from "../useNewCharacterData"
import type { DieResult, RolledAbilityResult, AbilityAssignments, AbilityKey, AbilitiesWithCalcFields } from "@/components/BookContainer/types";
import { useState } from "react";
import { ABILITY_INPUT_MAX, ABILITY_INPUT_MIN, ABILITY_KEYS } from "../constants";

type AbilitySelectOptions = "manual" | "rolled";

/**
 * Renders the Left Page in Two-Page (landscape) view, or the top half of the Page in Single Page (portrait) view for the Abilities.
 * @returns the HTML to render for the Left Page / Top half of the Page
 */
export function AbilitiesBlockLeft() {
    const { 
        abilities, rolledAbilityValues, rolledAbilityAssignments, 
        // setAbilityRacialBonus, setAbilityMax,
        handleOnChangeManualAbility, handleOnBlurManualAbility, 
        handleOnClickRollAbilities, handleOnChangeRollAbilityAssignment,
        resetManualSelection, resetRolledSelection
    } = useNewCharacterData();
    
    const [abilitySelection, setAbilitySelection] = useState<AbilitySelectOptions>("manual");
    // setAbilityRacialBonus("str", 10, "Half-Orc");
    // setAbilityRacialBonus("con", 1, "Half-Orc");
    // setAbilityMax("str", 40)



    /**
     * Renders the associated React / HTML elements depending on the ability selection option button the user has selected. 
     * Defaults to manual. 
     * 
     * @returns the Rendered React / HTML elements of that choice. 
     */
    function renderAbilitySelection() {
        switch (abilitySelection) {
            case "manual":
                return manualAbilitySelect();

            case "rolled":
                return rolledAbilitySelect();
                
            default:
                return manualAbilitySelect();
        }
    };



    /**
     * Renders the `<ManualAbilityInputs>` for every ability and inserts the required data fields & handlers for each. 
     * 
     * @returns the `<ManualAbilityInputs>` for every ability. 
     */
    function manualAbilitySelect() {
        return (
            <div className="AbilityBubbleBox">
                {Object.values(abilities).map((ability) => (
                    <ManualAbilityInputs 
                        key={ability.id} 
                        ability={ability} 
                        handleOnChange={handleOnChangeManualAbility} 
                        handleOnBlur={handleOnBlurManualAbility} 
                    />
                ))}
            </div>
        )
    };



    /**
     * Renders the `<RolledAbilityInputs>` for every ability, `<button>` to roll the values, & inserts the required data fields & handlers for each. 
     * 
     * @returns the `<RolledAbilityInputs>` for every ability & `<button>` to roll them.  
     */
    function rolledAbilitySelect() {
        return (
            <>
                <div className="AbilityBubbleBox">
                    {rolledAbilityValues.map((rolledAbility, index) => (
                        <RolledAbilityInputs 
                            key={index} 
                            index={index}
                            rolledAbility={rolledAbility} 
                            currentSelection={rolledAbilityAssignments[index]}
                            takenAbilities={takenAbilities} 
                            handleOnChange={handleOnChangeRollAbilityAssignment}
                        />
                    ))}
                </div>
                <button
                    type="button" 
                    className="RollAbilitiesBtn StickerBtn"
                    onClick={ () => handleOnClickRollAbilities(ABILITY_KEYS.length) }
                >
                    Roll Abilities!
                </button>
            </>
        )
    };


    
    /** Abilities already assigned to a random rolled value. Determined from `rolledAbilityAssignments` state. */ 
    const takenAbilities = rolledAbilityAssignments.filter(isRealAbility);

    /**
     * A type guard that checks if a given ability assignment is an actual ability or the `"--"` placeholder. 
     * 
     * @param selection The asignment to check: an `AbilityKey` if assigned or `"--"` if unassigned. 
     * 
     * @returns boolean that determines if `selection` is an `AbilityKey`, or the `"--"` placeholder. 
     */
    function isRealAbility(selection: AbilityAssignments): selection is AbilityKey {
        return selection !== "--";
    };



    return <>
        <NoFlip>
            <h1 className="OutlineBlue Stylized">ABILITIES</h1>
            <p className="UnderlineGray">Core attributes that describe the physical and mental characteristics of your character.</p>

            <form className="PageForm" onSubmit={(e) => e.preventDefault()}>

                <div className="AbilitySelectionBox">
                    <button 
                        type="button"
                        className={`AbilitySelect StickerBtn ${abilitySelection === "manual" ? "selected" : ""}`}
                        aria-pressed={ abilitySelection === "manual" }
                        onClick={ () => {
                            setAbilitySelection("manual");
                            resetRolledSelection();
                        } }
                    >
                        Manual Selection
                    </button>
                    
                    <button 
                        type="button"
                        className={`AbilitySelect StickerBtn ${abilitySelection === "rolled" ? "selected" : ""}`}
                        aria-pressed={ abilitySelection === "rolled" }
                        onClick={ () => { 
                            setAbilitySelection("rolled");
                            resetManualSelection();
                        } }
                    >
                        Rolled Selection
                    </button>
                </div>

                {renderAbilitySelection()}
            </form>
        </NoFlip>
    </>
}



/**
 * Renders the Right Page in Two-Page (landscape) view, or the bottom half of the Page in Single Page (portrait) view for the Abilities.
 * Shows the user's values for every ability, including computed values like mods and final values (base + racialBonus). 
 * 
 * @returns the HTML to render for the Right Page / Bottom half of the Page 
 */
export function AbilitiesBlockRight() {
    const { abilities } = useNewCharacterData();

    return <>
        <h1>RIGHT SIDE ABILITIES</h1>
        
        <NoFlip>
            <form className="PageForm">
                <div className="AbilityBubbleBox">
                    {Object.values(abilities).map((ability) => (
                        <DisplayAbilities key={ability.id} ability={ability} />
                    ))}
                </div>
            </form>
        </NoFlip>
    </>
}





type ManualAbilityInputsProps = {
    ability: AbilitiesWithCalcFields;
    handleOnChange: (abilityKey: AbilityKey, value: string) => void;
    handleOnBlur: (abilityKey: AbilityKey) => void;
}
/**
 * A single labelled number input for manual ability inputs. 
 * 
 * @param ability The ability this input edits.
 * @param handleOnChange Called on every change with the ability's key and the raw string typed by the user.
 * @param handleOnBlur Called when the input loses focus, with the ability's key, so an empty value can fall back to the default.
 * 
 * @returns The labelled input & ability number input. 
 */
function ManualAbilityInputs(
    { ability, handleOnChange, handleOnBlur }: ManualAbilityInputsProps
) {
    const inputId = `Character_${ability.id}`;
    
    return (
        <div className="AbilityInput Sticker">
            <label htmlFor={inputId} className="PageLabel">
                <span className="LabelText OutlineWhite Stylized">{ability.label}</span>
            </label>
            <input type="number" className="PageInput" id={inputId}
                min={ABILITY_INPUT_MIN} max={ABILITY_INPUT_MAX} 
                placeholder="10" value={ability.base}
                onChange={ (e) => handleOnChange(ability.id, e.target.value) }
                onBlur={ () => handleOnBlur(ability.id) }
            />
        </div>
    )
    
}


type RolledAbilityInputsProps = { 
    /** index The position of this roll in the rolled abilities and assignments arrays. */
    index: number;
    /** The roll (total & rolled values) to display.  */
    rolledAbility: RolledAbilityResult;
    /** Abilities that have already been assigned to a roll.  */
    takenAbilities: AbilityKey[];
    /** The abilities this roll is currently assigned to. `"--"` for unassigned.  */
    currentSelection: AbilityAssignments;
    /** Handler for the `<select>`'s onChange event.  */
    handleOnChange: (index: number, selection: AbilityAssignments) => void;
}
/**
 * One item of the rolled-abilities selection: the result of a single 4d6 (drop lowest) roll & and a `<select>` for assigning its total to a ability. 
 * 
 * @param index The position of this roll in the rolled abilities and assignments arrays.
 * @param rolledAbility The roll (total & rolled values) to display. 
 * @param takenAbilities Abilities that have already been assigned to a roll. 
 * @param currentSelection The ability this roll is currently assigned to. `"--"` for unassigned. 
 * @param handleOnChange Handler for the `<select>`'s onChange event. 
 * 
 * @returns The roll's total, its four dice, displaying the dropped & kept, & the ability `<select>`.  
 */
function RolledAbilityInputs({ index, rolledAbility, takenAbilities, currentSelection, handleOnChange }: RolledAbilityInputsProps) {
    return (
        <div className="RolledInputBox Sticker">
            <div className="RolledAbility">
                {rolledAbility.dieTotal || `--`}
            </div>
            <div className="RolledDiceBox">
                {rolledAbility.dieRolls.map((die, dieIndex) => (
                    <div 
                        key={dieIndex} 
                        className={`RolledDice ${getDieClass(die)}`}
                    >
                        {die.value}
                    </div>
                ))}
            </div>
            <select 
                name="RolledOptions" 
                className="RolledSelect" 
                value={currentSelection}
                onChange={ (e) => handleOnChange(index, e.target.value as AbilityAssignments) }
            >
                <option value="--">--</option>
                {ABILITY_KEYS.map((key) => (
                    <option
                        key={key}
                        value={key}
                        disabled={takenAbilities.includes(key) && key !== currentSelection}
                    >
                        {key}
                    </option>
                ))}
            </select>
        </div>
    )
};



/**
 * Gets the CSS class to assign to a single die in a rolled ability row. 
 * 
 * @param die the die to style, with its rolled `value` and `isDropped` flag.
 * 
 * @returns the CSS class for the single die: 
 * - `"Unrolled":` For placeholder empty dice before they are rolled. 
 * - `"Dropped"`: For dropped dice excluded from total.
 * - `"Kept"`: For kept dice included in total.  
 */
function getDieClass(die: DieResult): string {
    if (die.value === 0) // default state representing unrolled 
        return "Unrolled"    
    if (die.isDropped) 
        return "Dropped"
    else 
        return "Kept"
};



type DisplayAbilitiesProps = { 
    /** The ability to display the details of. */
    ability: AbilitiesWithCalcFields 
}
/**
 * Renders the final display of a single ability as a table. 
 *  
 * @param ability The ability to display the details of.  
 * 
 * @returns The final display in table format of the following: 
 *      - Total Score. Computed value of the base score + racial bonus. 
 *      - Modidier. Computed value determined by diving the total score. 
 *      - Base Score. The value inputted by the user. 
 *      - Racial Bonus. Bonus value provided by a race that contributes to total score. 
 */
function DisplayAbilities({ability}: DisplayAbilitiesProps ) {
    return (
        <div className="AbilityDisplay Sticker">
            <table>
                <thead>
                    <tr><th colSpan={2}>{ability.label}</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="AbilityTableLeft">Total Score</td>
                        <td className="AbilityTableRight">{ability.value}</td>
                    </tr>
                    <tr>
                        <td className="AbilityTableLeft">Modifier</td>
                        <td className="AbilityTableRight">{ability.mod >= 0 ? `+`+ability.mod : ability.mod}</td>
                    </tr>
                    <tr>
                        <td className="AbilityTableLeft">Base Score</td>
                        <td className="AbilityTableRight">{ability.base}</td>
                    </tr>
                    <tr>
                        <td className="AbilityTableLeft">
                            Bonus<br />{(ability.racialBonus.source !== "" && ability.racialBonus.value !== 0) ? `(${ability.racialBonus.source})` : ``} 
                        </td>
                        <td className="AbilityTableRight">{ability.racialBonus.value}</td>
                    </tr>
                </tbody>
            </table>
            
            <p>&nbsp;</p>

        </div>

    )
    
};