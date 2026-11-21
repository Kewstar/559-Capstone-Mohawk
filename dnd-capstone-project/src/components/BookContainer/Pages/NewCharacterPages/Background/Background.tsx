// Background.tsx
import "./Background.css"
import "../../Page.css"
import { useId } from "react";
import { NoFlip } from "@/components/BookContainer/Pages/hooks/NoFlip";
import { BACKGROUND_LIST, getBackground, isBackgroundName } from "@/data/dnd5e_2014/backgrounds";
import type { BackgroundDetails } from "@/data/dnd5e_2014/backgrounds";
import type { ProficiencyRef, StartingEquipmentItem } from "@/data/dnd5e_2014/classes";
import { useNewCharacterData } from "../useNewCharacterData";
import { preventSubmit, renderParagraph } from "../../HTMLRenderHelpers";
import type { BackgroundChoiceKey } from "@/components/BookContainer/types";
import { getChoiceOptionTexts, getChoiceLimit } from "./backgroundHelpers";



/**
 * Renders one option in the background <select>.
 * 
 * @param backgroundDetails The BackgroundDetails this option chooses. 
 *  
 * @returns an option HTML element for the <select>. 
 */
function renderBackgroundOption(backgroundDetails: BackgroundDetails) {
    return  <option key={backgroundDetails.name} value={backgroundDetails.name}>
                {backgroundDetails.label}
            </option>;
}


/**
 * Renders one granted skill proficiency. 
 * 
 * @param skill The skill proficiency. 
 * 
 * @returns a list item with its name. 
 */
function renderSkill(skill: ProficiencyRef) {
    return  <li key={skill.index}>
        {skill.name}
    </li>;
}


/**
 * Renders one starting equipment item as a <li> item. 
 * 
 * @param item the equipment item to render.  
 * 
 * @returns A <li> with the quantity and name. 
 */
function renderEqiupmentItem(item: StartingEquipmentItem) {
    return  <li key={item.index}>
        {item.quantity} x {item.name}
    </li>;
}


type ChoiceCheckBoxProps = {
    choiceKey: BackgroundChoiceKey;
    text: string;
    checked: boolean;
    disabled: boolean;
};

function ChoiceCheckbox({ choiceKey, text, checked, disabled }: ChoiceCheckBoxProps ) {
    const { toggleBackgroundChoice } = useNewCharacterData();

    function handleOnChange() {
        toggleBackgroundChoice(choiceKey, text);
    }

    return (
        <label className="ChoiceOption">
            <input type="checkbox" checked={checked} disabled={disabled} onChange={handleOnChange} />
            <span>{text}</span>
        </label>
    );
}


type ChoiceGroupProps = {
    title: string;
    choiceKey: BackgroundChoiceKey;
}

function ChoiceGroup({ title, choiceKey }: ChoiceGroupProps) {
    const { background } = useNewCharacterData();

    if (background === null)
        return null;

    const backgroundDetails = getBackground(background.name);
    const choices = background[choiceKey];
    const limit = getChoiceLimit(backgroundDetails, choiceKey);
    const atLimit = choices.length >= limit;

    function renderOption(text: string) {
        const checked = choices.includes(text);

        return (
            <ChoiceCheckbox 
                key={text} 
                choiceKey={choiceKey} 
                text={text} 
                checked={checked} 
                disabled={ (!checked) && (atLimit) && (limit > 1) } 
            />
        );
    }

    return (
        <details className="BackgroundChoiceDetails">
            <summary>{title} ({choices.length}/{limit})</summary>

            <fieldset className="BackgroundChoiceGroup">
                <legend className="VisuallyHidden">{title}</legend>
                {getChoiceOptionTexts(backgroundDetails, choiceKey).map(renderOption)}
            </fieldset>
        </details>
    )
}

export function BackgroundBlockLeft() {
    const { background, setBackground } = useNewCharacterData();
    const selectId = useId();

    /**
     * Stores the chosen background, or erases it. 
     * 
     * @param e the select's change event.  
     */
    function handleBackgroundOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;

        if (value === "")
            setBackground(null);
        else if ( isBackgroundName(value) )
            setBackground(value);
    }

    return <>
        <NoFlip>
            <h1 className="OutlineBlue Stylized">BACKGROUND</h1>
            <p className="UnderlineGray">Where your character came from.</p>

            <form className="PageForm" onSubmit={preventSubmit}>
                
                <div className="BackgroundSelectBubble Sylized Sticker">
                    <label htmlFor={selectId}>Background: </label>
                    <select id={selectId} value={background?.name ?? ""} onChange={handleBackgroundOnChange}>
                        <option value={""}>--</option>
                        {BACKGROUND_LIST.map(renderBackgroundOption)}
                    </select>
                </div>

                {background !== null && <>
                    <div className="BackgroundChoice Sticker">
                        <ChoiceGroup title={"Personality Traits"} choiceKey={"personalityTraitChoices"} />
                    </div>
                    <div className="BackgroundChoice Sticker">
                        <ChoiceGroup title={"Ideal"} choiceKey={"idealChoices"} />
                    </div>
                    <div className="BackgroundChoice Sticker">
                        <ChoiceGroup title={"Bond"} choiceKey={"bondChoices"} />
                    </div>
                    <div className="BackgroundChoice Sticker">
                        <ChoiceGroup title={"Flaw"} choiceKey={"flawChoices"} />
                    </div>
                </>}

            </form>
        </NoFlip>
    </>
}

export function BackgroundBlockRight() {
    const { background } = useNewCharacterData();

    if (background === null) 
        return <p>Select a background to see its details.</p>
    
    const backgroundDetails = getBackground(background.name);

    return <div className="PageBlockRight">
        <div className="Stylized Sticker">
            <h1>{backgroundDetails.label.toUpperCase()}</h1>
        </div>
        
        <details className="BackgroundBubble Stylized Sticker" open>
            <summary>
                <span className="FeatureName">{backgroundDetails.feature.name}</span>
            </summary>
            <div className="BackgroundText">
                {backgroundDetails.feature.description.map(renderParagraph)}
            </div>
        </details>

        <div className="BackgroundGrid">
        
            <div className="BackgroundBubble Stylized Sticker">
                <h3>Skill Proficiencies</h3>
                <div className="BackgroundText">
                    <ul>{backgroundDetails.skillProficiencies.map(renderSkill)}</ul>
                </div>
            </div>

            <div className="BackgroundBubble Stylized Sticker">
                <h3>Languages</h3>
                <div className="BackgroundText">
                    <p>Choose {backgroundDetails.languageOptions.choose} languages</p>
                </div>
            </div>
            
            <div className="BackgroundBubble Stylized Sticker">
                <h3>Starting Equipment</h3>
                <div className="BackgroundText">
                    <ul>{backgroundDetails.startingEquipment.map(renderEqiupmentItem)}</ul>
                </div>
            </div>

            <div className="BackgroundBubble Stylized Sticker">
                <h3>Starting Gold</h3>
                <div className="BackgroundText">
                    <p>{backgroundDetails.startingGold.quantity} {backgroundDetails.startingGold.unit}</p>
                </div>
            </div>

        </div>

    </div>
}