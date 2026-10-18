// Stats.tsx
import { NoFlip } from "@/components/BookContainer/Pages/hooks/NoFlip"
import { useNewCharacterData } from "../useNewCharacterData"
import type { DieResult, RolledStatResult, StatAssignments, StatKey, StatWithCalcFields } from "@/components/BookContainer/types";
import { useState } from "react";
import { STAT_KEYS } from "../constants";

type StatSelectOptions = "manual" | "rolled";

/**
 * Renders the Left Page in Two-Page (landscape) view, or the top half of the Page in Single Page (portrait) view for the Stats.
 * @returns the HTML to render for the Left Page / Top half of the Page
 */
export function StatsBlockLeft() {
    const { 
        stats, rolledStats, rolledStatAssignments, 
        // setStatRacialBonus,
        handleStatOnChange, handleStatOnBlur, 
        handleRollStatsOnClick, handleRollStatAssignmentOnChange,
        resetManualSelection, resetRolledSelection
    } = useNewCharacterData();
    
    const [statSelection, setStatSelection] = useState<StatSelectOptions>("manual");
    // setStatRacialBonus("str", 2, "Half-Orc");
    // setStatRacialBonus("con", 1, "Half-Orc");



    /**
     * Renders the associated React / HTML elements depending on the stat selection option button the user has selected. 
     * Defaults to manual. 
     * 
     * @returns the Rendered React / HTML elements of that choice. 
     */
    function renderStatSelection() {
        switch (statSelection) {
            case "manual":
                return manualStatSelect();

            case "rolled":
                return rolledStatSelect();
                
            default:
                return manualStatSelect();
        }
    };



    /**
     * Renders the `<ManualStatInputs>` for every stat and inserts the required data fields & handlers for each. 
     * 
     * @returns the `<ManualStatInputs>` for every stat. 
     */
    function manualStatSelect() {
        return (
            <div className="StatBubbleBox">
                {Object.values(stats).map((stat) => (
                    <ManualStatInputs 
                        key={stat.id} 
                        stat={stat} 
                        handleOnChange={handleStatOnChange} 
                        handleOnBlur={handleStatOnBlur} 
                    />
                ))}
            </div>
        )
    };



    /**
     * Renders the `<RolledStatInputs>` for every stat, `<button>` to roll the values, & inserts the required data fields & handlers for each. 
     * 
     * @returns the `<RolledStatInputs>` for every stat & `<button>` to roll them.  
     */
    function rolledStatSelect() {
        return (
            <>
                <div className="StatBubbleBox">
                    {rolledStats.map((rolledStat, index) => (
                        <RolledStatInputs 
                            key={index} 
                            index={index}
                            rolledStat={rolledStat} 
                            currentSelection={rolledStatAssignments[index]}
                            takenStats={takenStats} 
                            handleOnChange={handleRollStatAssignmentOnChange}
                        />
                    ))}
                </div>
                <button
                    type="button" 
                    className="RollStatsBtn StickerBtn"
                    onClick={ () => handleRollStatsOnClick(STAT_KEYS.length) }
                >
                    Roll Stats!
                </button>
            </>
        )
    };


    
    /** Stats already assigned to a random rolled value. Determined from `rolledStatAssignments` state. */ 
    const takenStats = rolledStatAssignments.filter(isRealStat);

    /**
     * A type guard that checks if a given stat assignment is an actual stat or the `"--"` placeholder. 
     * 
     * @param selection The asignment to check: a `StatKey` if assigned or `"--"` if unassigned. 
     * 
     * @returns boolean that determines if `selection` is a `StatKey`, or the `"--"` placeholder. 
     */
    function isRealStat(selection: StatAssignments): selection is StatKey {
        return selection !== "--";
    };



    return <>
        <NoFlip>
            <h1 className="OutlineBlue Stylized">STATS</h1>
            <p className="UnderlineGray">Core attributes that describe the physical and mental characteristics of your character.</p>

            <form className="PageForm" onSubmit={(e) => e.preventDefault()}>

                <div className="StatSelectionBox">
                    <button 
                        type="button"
                        className={`StatSelect StickerBtn ${statSelection === "manual" ? "selected" : ""}`}
                        aria-pressed={ statSelection === "manual" }
                        onClick={ () => {
                            setStatSelection("manual");
                            resetRolledSelection();
                        } }
                    >
                        Manual Selection
                    </button>
                    
                    <button 
                        type="button"
                        className={`StatSelect StickerBtn ${statSelection === "rolled" ? "selected" : ""}`}
                        aria-pressed={ statSelection === "rolled" }
                        onClick={ () => { 
                            setStatSelection("rolled");
                            resetManualSelection();
                        } }
                    >
                        Rolled Selection
                    </button>
                </div>

                {renderStatSelection()}
            </form>
        </NoFlip>
    </>
}



/**
 * Renders the Right Page in Two-Page (landscape) view, or the bottom half of the Page in Single Page (portrait) view for the Stats.
 * Shows the user's values for every stat, including computed values like mods and final values (base + racialBonus). 
 * 
 * @returns the HTML to render for the Right Page / Bottom half of the Page 
 */
export function StatsBlockRight() {
    const { stats } = useNewCharacterData();

    return <>
        <h1>RIGHT SIDE STATS</h1>
        
        <NoFlip>
            <form className="PageForm">
                <div className="StatBubbleBox">
                    {Object.values(stats).map((stat) => (
                        <DisplayStats key={stat.id} stat={stat} />
                    ))}
                </div>
            </form>
        </NoFlip>
    </>
}





type ManualStatInputsProps = {
    stat: StatWithCalcFields;
    handleOnChange: (statKey: StatKey, value: string) => void;
    handleOnBlur: (statKey: StatKey) => void;
}
/**
 * A single labelled number input for manual stat inputs. 
 * 
 * @param stat The stat this input edits, including its `id` & `label`.
 * @param handleOnChange Called on every change with the stat's key and the raw string typed by the user.
 * @param handleOnBlur Called when the input loses focus, with the stat's key, so an empty value can fall back to the default.
 * 
 * @returns The labelled input & stat number input. 
 */
function ManualStatInputs(
    { stat, handleOnChange, handleOnBlur }: ManualStatInputsProps
) {
    const inputId = `Character_${stat.id}`;
    
    return (
        <div className="StatInput Sticker">
            <label htmlFor={inputId} className="PageLabel">
                <span className="LabelText OutlineWhite Stylized">{stat.label}</span>
            </label>
            <input type="number" className="PageInput" id={inputId}
                min={1} max={18} 
                placeholder="10" value={stat.base}
                onChange={ (e) => handleOnChange(stat.id, e.target.value) }
                onBlur={ () => handleOnBlur(stat.id) }
            />
        </div>
    )
    
}


type RolledStatInputsProps = { 
    /** index The position of this roll in the rolled stats and assignments arrays. */
    index: number;
    /** The roll (total & rolled values) to display.  */
    rolledStat: RolledStatResult;
    /** Stats that have already been assigned to a roll.  */
    takenStats: StatKey[];
    /** The stat this roll is currently assigned to. `"--"` for unassigned.  */
    currentSelection: StatAssignments;
    /** Handler for the `<select>`'s onChange event.  */
    handleOnChange: (index: number, selection: StatAssignments) => void;
}
/**
 * One item of the rolled-stats selection: the result of a single 4d6 (drop lowest) roll & and a `<select>` for assigning its total to a stat. 
 * 
 * @param index The position of this roll in the rolled stats and assignments arrays.
 * @param rolledStat The roll (total & rolled values) to display. 
 * @param takenStats Stats that have already been assigned to a roll. 
 * @param currentSelection The stat this roll is currently assigned to. `"--"` for unassigned. 
 * @param handleOnChange Handler for the `<select>`'s onChange event. 
 * 
 * @returns The roll's total, its four dice, displaying the dropped & kept, & the stat `<select>`.  
 */
function RolledStatInputs({ index, rolledStat, takenStats, currentSelection, handleOnChange }: RolledStatInputsProps) {
    return (
        <div className="RolledInputBox Sticker">
            <div className="RolledStat">
                {rolledStat.dieTotal || `--`}
            </div>
            <div className="RolledDiceBox">
                {rolledStat.dieRolls.map((die, dieIndex) => (
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
                onChange={ (e) => handleOnChange(index, e.target.value as StatAssignments) }
            >
                <option value="--">--</option>
                {STAT_KEYS.map((key) => (
                    <option
                        key={key}
                        value={key}
                        disabled={takenStats.includes(key) && key !== currentSelection}
                    >
                        {key}
                    </option>
                ))}
            </select>
        </div>
    )
};



/**
 * Gets the CSS class to assign to a single die in a rolled stat row. 
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



type DisplayStatsProps = { 
    /** The stat to display the details of. */
    stat: StatWithCalcFields 
}
/**
 * Renders the final display of a single stat as a table. 
 *  
 * @param stat The stat to display the details of.  
 * 
 * @returns The final display in table format of the following: 
 *      - Total Score. Computed value of the base score + racial bonus. 
 *      - Modidier. Computed value determined by diving the total score. 
 *      - Base Score. The value inputted by the user. 
 *      - Racial Bonus. Bonus value provided by a race that contributes to total score. 
 */
function DisplayStats({stat}: DisplayStatsProps ) {
    return (
        <div className="StatDisplay Sticker">
            <table>
                <thead>
                    <tr><th colSpan={2}>{stat.label}</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="StatTableLeft">Total Score</td>
                        <td className="StatTableRight">{stat.value}</td>
                    </tr>
                    <tr>
                        <td className="StatTableLeft">Modifier</td>
                        <td className="StatTableRight">{stat.mod >= 0 ? `+`+stat.mod : stat.mod}</td>
                    </tr>
                    <tr>
                        <td className="StatTableLeft">Base Score</td>
                        <td className="StatTableRight">{stat.base}</td>
                    </tr>
                    <tr>
                        <td className="StatTableLeft">
                            Bonus<br />{(stat.racialBonus.source !== "" && stat.racialBonus.value !== 0) ? `(${stat.racialBonus.source})` : ``} 
                        </td>
                        <td className="StatTableRight">{stat.racialBonus.value}</td>
                    </tr>
                </tbody>
            </table>
            
            <p>&nbsp;</p>

        </div>

    )
    
};