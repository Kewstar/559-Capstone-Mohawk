// Stats.tsx
import { NoFlip } from "@/components/BookContainer/Pages/hooks/NoFlip"
import { useNewCharacterData } from "../useNewCharacterData"
import type { StatKey, StatWithCalcFields } from "@/components/BookContainer/types";
import { useState } from "react";


/**
 * Renders the Left Page in Two-Page (landscape) view, or the top half of the Page in Single Page (portrait) view for the Stats.
 * @returns the HTML to render for the Left Page / Top half of the Page
*/
export function StatsBlockLeft() {
    const { stats, /*setStatRacialBonus ,*/handleStatOnChange, handleStatOnBlur } = useNewCharacterData();
    
    type StatSelectOptions = "manual" | "rolled";
    const [statSelection, setStatSelection] = useState<StatSelectOptions>("manual");
    // setStatRacialBonus("str", 2, "Half-Orc");
    // setStatRacialBonus("con", 1, "Half-Orc");

    function renderStatSelection() {
        switch (statSelection) {
            case "manual":
                return manualStatSelect();

            case "rolled":
                return rolledStatSelect();
                
            default:
                return manualStatSelect();
        }
    }

    function manualStatSelect() {
        return (
            <div className="StatBubbleBox">
                {Object.values(stats).map((stat) => (
                    <ManualStatInputs key={stat.id} stat={stat} handleOnChange={handleStatOnChange} handleOnBlur={handleStatOnBlur} />
                ))}
            </div>
        )
    }

    function rolledStatSelect() {
        return (
            <div className="StatBubbleBox">
                {Object.values(stats).map((stat) => (
                    <RolledStatInputs />
                ))}
            </div>
        )
    }

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
                        onClick={ () => setStatSelection("manual")}
                    >
                        Manual Selection
                    </button>
                    
                    <button 
                        type="button"
                        className={`StatSelect StickerBtn ${statSelection === "rolled" ? "selected" : ""}`}
                        aria-pressed={ statSelection === "rolled" }
                        onClick={ () => setStatSelection("rolled")}
                    >
                        Rolled Stats
                    </button>
                </div>

                {renderStatSelection()}

                {/* <div className="StatBubbleBox">
                    {Object.values(stats).map((stat) => (
                        <StatBubbleInputs key={stat.id} stat={stat} handleOnChange={handleStatOnChange} handleOnBlur={handleStatOnBlur} />
                    ))}
                </div> */}
            </form>
        </NoFlip>
    </>
}

/**
 * Renders the Right Page in Two-Page (landscape) view, or the bottom half of the Page in Single Page (portrait) view for the Stats.
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




// type HandleOnChange = (statKey: StatKey, value: string) => void;

type ManualStatInputsProps = {
    stat: StatWithCalcFields;
    handleOnChange: (statKey: StatKey, value: string) => void;
    handleOnBlur: (statKey: StatKey) => void;
}
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

function RolledStatInputs() {
    return (
        <div className="RolledInputBox Sticker">
            <div className="RolledStat">
                ——
            </div>
            <div className="RolledDiceBox">
                <div className="RolledDice">1</div>
                <div className="RolledDice">2</div>
                <div className="RolledDice">3</div>
                <div className="RolledDice">4</div>
            </div>
            <select name="RolledOptions" className="RolledSelect">
                <option value="——" selected>——</option>
                <option value="str">str</option>
                <option value="dex">dex</option>
                <option value="con">con</option>
                <option value="int">int</option>
                <option value="wis">wis</option>
                <option value="cha">cha</option>
            </select>
        </div>
    )
};

type DisplayStatsProps = { stat: StatWithCalcFields }
function DisplayStats({stat}: DisplayStatsProps ) {
    // const inputId = `Character_${stat.id}`;
    
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

            {/* <p className="LabelText OutlineWhite Stylized">{stat.label}</p>
            <p className="LabelText OutlineWhite Stylized">Total Score: {stat.value}</p>
            <p className="LabelText OutlineWhite Stylized">Modifier: {stat.mod}</p>  */}
        </div>

    )
    
}