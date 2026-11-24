// Equipment.tsx
import { findItem, getItemsInCategory, type ItemDetails } from "@/data/dnd5e_2014/inventory/equipment";
import { useNewCharacterData } from "../useNewCharacterData";
import { describeOption, getSelectedOption, getStartingChoices, isOptionAvailable, type StartingChoiceRef } from "../choiceHelpers";
import type { StartingOption, StartingPart } from "@/data/dnd5e_2014/classes";
import { NoFlip } from "../../hooks/NoFlip";
import { preventSubmit } from "../../HTMLRenderHelpers";
import { getEquipSlot, type InventoryStack } from "./equipmentHelpers";
import { ItemBody } from "./ItemBody";
import { CoinPurse } from "./CoinPurse";
import { StartingWealthChoice } from "./StartingWealthChoice";
import { ArmorClassShield } from "./ArmorClassShield";



type CategoryPickerProps = {
    choiceKey: string;
    partIndex: number;
    categoryIndex: string;
    choose: number;
    picks: string[];
};

/** Checkboxes for picking items from a category, e.g. "any martial melee weapon". */
function CategoryPicker({ choiceKey, partIndex, categoryIndex, choose, picks }: CategoryPickerProps) {
    const { toggleStartingPick } = useNewCharacterData();
    const atLimit = picks.length >= choose;

    function renderItem(itemDetails: ItemDetails) {
        const checked = picks.includes(itemDetails.index);

        function handleChange() {
            toggleStartingPick(choiceKey, partIndex, itemDetails.index);
        }

        return  <label key={itemDetails.index} className="ChoiceOption">
                    <input type="checkbox" checked={checked} disabled={!checked && atLimit && choose > 1} onChange={handleChange} />
                    <span>{itemDetails.name}</span>
                </label>;
    }

    return  <div className="StartingPicker">
                <p className="SubDetail">Picked {picks.length}/{choose}</p>
                {getItemsInCategory(categoryIndex).map(renderItem)}
            </div>;
}

type StartingChoiceGroupProps = {
    choiceRef: StartingChoiceRef;
};


/** One starting equipment choice: radio buttons for its options, and pickers for any category parts. */
function StartingChoiceGroup({ choiceRef }: StartingChoiceGroupProps) {
    const { startingPicks, proficiencies, chooseStartingOption } = useNewCharacterData();
    const { key, choice } = choiceRef;
    const pick = startingPicks[key];
    const selected = getSelectedOption(choice, pick);
    const selectedOption = (selected === null) ? undefined : choice.options[selected];
    const categoryPicks = (pick && pick.option === selected) ? pick.categoryPicks : [];


    function renderOption(option: StartingOption, optionIndex: number) {
        const available = isOptionAvailable(option, proficiencies);

        function handleChange() {
            chooseStartingOption(key, optionIndex);
        }

        return (
            <label key={optionIndex} className="ChoiceOption">
                <input
                    type="radio"
                    name={key}
                    checked={selected === optionIndex}
                    disabled={!available}
                    onChange={handleChange}
                />
                <span>{describeOption(option)}{!available && " (requires proficiency)"}</span>
            </label>
        );
    }


    function renderPart(part: StartingPart, partIndex: number) {
        if (part.kind !== "category") 
            return null;

        return (
            <CategoryPicker
                key={partIndex}
                choiceKey={key}
                partIndex={partIndex}
                categoryIndex={part.categoryIndex}
                choose={part.choose}
                picks={categoryPicks[partIndex] ?? []}
            />
        );
    }


    return (
        <fieldset className="BackgroundChoiceGroup">
            <legend>{choice.desc}</legend>
            {choice.options.length > 1 && choice.options.map(renderOption)}
            {selectedOption?.parts.map(renderPart)}
        </fieldset>
    );
}



/**
 * Renders one starting equipment choice.
 *
 * @param choiceRef the choice.
 *
 * @returns the choice group.
 */
function renderStartingChoice(choiceRef: StartingChoiceRef) {
    return  (
        <div className="ClassSpellDisplay">
            <div className="RaceBubble Stylized Sticker">
                <StartingChoiceGroup key={choiceRef.key} choiceRef={choiceRef} />
            </div>
        </div>
    );
}



export function EquipmentBlockLeft() {
    const { classes, background, startingPicks, classWealth } = useNewCharacterData();
    const choices = getStartingChoices({ classes, background, startingPicks, classWealth });

    return <>
        <NoFlip>
            <h1 className="OutlineBlue Stylized">EQUIPMENT</h1>
            <p className="UnderlineGray">Choose your starting gear.</p>

            <form className="PageForm" onSubmit={preventSubmit}>
                {/* {choices.length === 0 && <p>Choose a class and a background to see your starting equipment.</p>} */}
                <StartingWealthChoice />
                {choices.map(renderStartingChoice)}
            </form>
        </NoFlip>
    </>
}


type InventoryRowProps = {
    stack: InventoryStack;
};


/** One row of the inventory: name, quantity and an equip control. */
function InventoryRow({ stack }: InventoryRowProps) {
    const { setItemEquipped } = useNewCharacterData();
    const itemDetails = findItem(stack.itemIndex);

    if (!itemDetails) 
        return null;

    const isSingle = getEquipSlot(itemDetails) !== "other" || stack.quantity === 1;

    function handleToggle() {
        setItemEquipped(stack.itemIndex, stack.equipped > 0 ? 0 : 1);
    }

    function handleCount(e: React.ChangeEvent<HTMLInputElement>) {
        setItemEquipped(stack.itemIndex, Number(e.target.value));
    }

    return (
        <li className={stack.equipped > 0 ? "InventoryRow EquippedRow" : "InventoryRow"}>
            <details className="ItemDetails">
                <summary>{itemDetails.name}{stack.quantity > 1 && ` x${stack.quantity}`}</summary>
                <ItemBody itemDetails={itemDetails} />
            </details>
            <label>
                Equipped
                {isSingle
                    ? <input type="checkbox" checked={stack.equipped > 0} onChange={handleToggle} />
                    : <input type="number" min={0} max={stack.quantity} value={stack.equipped} onChange={handleCount} />}
            </label>
        </li>
    );
}







/**
 * Renders one inventory stack.
 *
 * @param stack the stack.
 *
 * @returns an inventory row.
 */
function renderInventoryRow(stack: InventoryStack) {
    return (
        <div className="ClassSpellDisplay">
            <div className="RaceBubble Stylized Sticker">
                <InventoryRow key={stack.itemIndex} stack={stack} />
            </div>
        </div>
    );
}


export function EquipmentBlockRight() {
    const { fullInventory, coinPurse, attributes } = useNewCharacterData();

    return (
        <div className="PageBlockRight">
            <h1 className="UnderlineGray">INVENTORY</h1>
            <ArmorClassShield armorClass={attributes.armorClass} />
            <CoinPurse coins={coinPurse} />
            <ul className="InventoryList">{fullInventory.map(renderInventoryRow)}</ul>
        </div>
    );
}