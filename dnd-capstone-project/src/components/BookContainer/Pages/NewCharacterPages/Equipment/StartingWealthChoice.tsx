import { CLASS_STARTING_WEALTH, STARTING_WEALTH_DIE } from "@/data/dnd5e_2014/classes/startingWealth";
import { getAverageClassGold, getGoldRollRange } from "../wealthHelpers";
import { useNewCharacterData } from "../useNewCharacterData";


/** Lets the first class take starting gold instead of its starting equipment. */
export function StartingWealthChoice() {
    const { classes, classWealth, chooseClassWealthMode, setGoldRoll } = useNewCharacterData();
    const first = classes[0];

    if (!first) 
        return null;

    const wealth = CLASS_STARTING_WEALTH[first.name];
    const range = getGoldRollRange(first.name);
    const formula = `${wealth.dice}d${STARTING_WEALTH_DIE}${wealth.multiplier > 1 ? ` x ${wealth.multiplier}` : ""}`;


    function handleEquipment() {
        chooseClassWealthMode("equipment");
    }

    function handleGold() {
        chooseClassWealthMode("gold");
    }

    function handleRoll(e: React.ChangeEvent<HTMLInputElement>) {
        setGoldRoll(e.target.value === "" ? null : Number(e.target.value));
    }


    return (
        <div className="RaceBubble Stylized Sticker">
            <fieldset className="BackgroundChoiceGroup">
                <legend>Starting wealth</legend>

                <label className="ChoiceOption">
                    <input type="radio" name="class-wealth" checked={classWealth.mode === "equipment"} onChange={handleEquipment} />
                    <span>Starting equipment</span>
                </label>

                <label className="ChoiceOption">
                    <input type="radio" name="class-wealth" checked={classWealth.mode === "gold"} onChange={handleGold} />
                    <span>Gold instead ({formula} gp, about {getAverageClassGold(first.name)} gp on average)</span>
                </label>

                {classWealth.mode === "gold" && (
                    <label className="ChoiceOption">
                        <span>Dice total (optional, {range.min} to {range.max}):</span>
                        <input
                            type="number"
                            min={range.min}
                            max={range.max}
                            value={classWealth.goldRoll ?? ""}
                            onChange={handleRoll}
                            />
                    </label>
                )}
            </fieldset>
        </div>
    );
}