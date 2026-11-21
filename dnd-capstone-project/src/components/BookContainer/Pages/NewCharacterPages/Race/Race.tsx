// Race.tsx
import './Race.css'
// import "../Background/Background.css"
import { useId } from "react"
import { NoFlip } from "../../hooks/NoFlip"
import { getRace, isRaceName, RACE_LIST, type RaceDetails, type SubraceDetails } from "@/data/dnd5e_2014/races"
import type { RaceChoice, RacialBonusLine, TraitView } from "@/components/BookContainer/types";
import { useNewCharacterData } from "../useNewCharacterData";
import { preventSubmit } from "../../HTMLRenderHelpers";
import { getKnownLanguages, getPickedLabels, getRaceChoices, getRacialAbilityBonus, getRacialBonusLines, getSelectedSubrace, getTraitViews, isSubraceMissing } from "./raceHelpers";
import { getLanguage, type LanguageIndex } from "@/data/dnd5e_2014/languages";
import { renderParagraph } from "../../HTMLRenderHelpers";
import { ABILITY_LABELS } from "@/data/dnd5e_2014/abilities";


/**
 * Renders one option of the race select. 
 * 
 * @param raceDetails The race this option represents. 
 * 
 * @returns The option HTML element to render.  
 */
function renderRaceOption(raceDetails: RaceDetails) {
    return  <option key={raceDetails.name} value={raceDetails.name}>
                {raceDetails.label}
            </option>;
}


/**
 * Renders one <option> of the subrace select.
 * 
 * @param subraceDetails The subrace this <option> represents. 
 * 
 * @returns The <option> HTML element to render.  
 */
function renderSubraceOption(subraceDetails: SubraceDetails) {
    return  <option key={subraceDetails.id} value={subraceDetails.id}>
                {subraceDetails.name}
            </option>;
}


type RaceChoiceCheckBoxProps = {
    choice: RaceChoice;
    value: string;
    label: string;
}


/** One checkbox for one option of a race choice. */
function RaceChoiceCheckBox({ choice, value, label}: RaceChoiceCheckBoxProps) {
    const { toggleRaceChoice } = useNewCharacterData();
    const checked = choice.choices.includes(value);
    const atLimit = choice.choices.length >= choice.choose;

    function handleOnChange() {
        toggleRaceChoice(choice.key, value);
    }

    return (
        <label className="BackgroundText">
            <input 
                type="checkbox" 
                checked={checked}
                disabled={ (!checked) && (atLimit) && (choice.choose > 1) }
                onChange={handleOnChange}
                />
            <span>{label}</span>
        </label>
    );
}


type RaceChoiceGroupProps = {
    choice: RaceChoice;
}

function RaceChoiceGroup({ choice }: RaceChoiceGroupProps) {
    function renderOption(option: { value: string; label: string }) {
        return  <div>
                    <RaceChoiceCheckBox 
                        key={option.value} 
                        choice={choice} 
                        value={option.value} 
                        label={option.label} />
                </div>;
    }

    return (
        <fieldset className="BackgroundChoiceGroup">
            <legend>{choice.label} ({choice.choices.length}/{choice.choose})</legend>
            {choice.options.map(renderOption)}
        </fieldset>
    );
}


function renderRaceChoice(raceChoice: RaceChoice) {
    return  <div className="RaceSelectBubble Stylized Sticker">
                <RaceChoiceGroup key={raceChoice.key} choice={raceChoice} />
            </div>;
}


export function RaceBlockLeft() {
    const { race, setRace, setSubrace } = useNewCharacterData();
    const raceSelectId = useId();
    const subraceSelectId = useId();

    /**
     * Stores the chosen race, or clears it when placeholder is picked. 
     * 
     * @param e The select's change event. 
     */
    function handleRaceOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;

        if (value === "")
            setRace(null);
        else if ( isRaceName(value) )
            setRace(value);
    }

    /**
     * Stores the chosen subrace, or erases it when placeholder is picked. 
     * 
     * @param e the select's change event.  
     */
    function handleSubraceOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
        if (e.target.value === "")
            setSubrace(null);
        else 
            setSubrace(e.target.value);
    }

    const raceDetails = race ? getRace(race.name) : null;
        
    return <>
        <NoFlip>
            <h1 className="OutlineBlue Stylized">RACE</h1>
            <p className="UnderlineGray">Your Character's sapient species, and their people.</p>

            <form className="PageForm" onSubmit={preventSubmit}>

                <div className="RaceSelectBubble Sylized Sticker">
                    <label htmlFor={raceSelectId}>Race: </label>
                    <select id={raceSelectId} value={race?.name ?? ""} onChange={handleRaceOnChange}>
                        <option value="">--</option>
                        {RACE_LIST.map(renderRaceOption)}
                    </select>
                </div>

                { (race) && (raceDetails) && (raceDetails.subraces.length > 0) && <>
                    <div className="RaceSelectBubble Sylized Sticker">

                        <label htmlFor={subraceSelectId}>Subrace: </label>
                        <select id={subraceSelectId} value={race.subraceId ?? ""} onChange={handleSubraceOnChange}>
                            <option value="">Choose a subrace...</option>
                            {raceDetails.subraces.map(renderSubraceOption)}
                        </select>
                        {isSubraceMissing(race) && 
                            <p className="SubDetail">A subrace is required for this race.</p>}
                    </div>
                </>}
                { (race) && ( getRaceChoices(race).map(renderRaceChoice) ) }
            </form>
        </NoFlip>
    </>
}


/**
 * Renders one line of hte racial bonus summary. 
 * 
 * @param line The racial bonus line. 
 * 
 * @returns A <li> HTML element.  
 */
function renderBonusLine(line: RacialBonusLine) {
    return  <li key={line.ability}>
                {line.text}
            </li>;
}


/**
 * Render one language the character knows. 
 * 
 * @param index The languageIndex to render.  
 * 
 * @returns A <li> item with the language's name. 
 */
function renderLanguage(index: LanguageIndex) {
    return  <li key={index}>
                {getLanguage(index).name}
            </li>;
}


/**
 * Renders one paragraph of text. 
 * 
 * @param raceChoice The choice to render.  
 * 
 * @returns A <li> item, or null if nothing is picked. 
 */
function renderPickedChoice(raceChoice: RaceChoice) {
    const labels = getPickedLabels(raceChoice);

    if (labels.length === 0)
        return null;

    return  <li key={raceChoice.key}>
                <strong>{raceChoice.label}:</strong> {labels.join(", ")}
            </li>;
}


function renderTraitView(traitView: TraitView) {
    const breath = traitView.raceTrait.breathWeapon;

    return (
        <li key={traitView.raceTrait.id}>
            <details>
                <summary>
                    {traitView.raceTrait.name}
                    {traitView.subraceName && <em>({traitView.subraceName})</em>}
                </summary>
                {traitView.paragraphs.map(renderParagraph)}
                {breath && (
                    <p>
                        <strong>Breath Weapon:</strong> {breath.damageType} damage,
                        {" "}{ABILITY_LABELS[breath.saveAbility]} save ({breath.saveSuccess} damage on a success)  
                    </p>
                )}
            </details>
        </li>
    );
}


export function RaceBlockRight() {
    const { race } = useNewCharacterData();

    if (race === null)
        return <p>Select a race to see its details...</p>

    const raceDetails = getRace(race.name);
    const subrace = getSelectedSubrace(race);
    const bonusLines = getRacialBonusLines( getRacialAbilityBonus(race) );
    const picked = getRaceChoices(race).map(renderPickedChoice);

    return <div className="RaceBlockRight">
        <div className="DisplayBubble Stylized Sticker">
            <h1>{raceDetails.label.toUpperCase()}</h1>
            <h2>{subrace && ` (${subrace.name})`}</h2>
        </div>

        <div className="BackgroundGrid">
            <div className="RaceBubble Stylized Sticker">
                <h3>Basics</h3>
                <div className="BackgroundText">
                    <p>Size: {raceDetails.size}</p>
                    <p>Speed: {raceDetails.speed} ft.</p>
                    {raceDetails.darkvision !== null && <p>Darkvision: {raceDetails.darkvision} ft.</p>}
                </div>
            </div>

            <div className="RaceBubble Stylized Sticker">
                <h3>Ability Scores</h3>
                <div className="BackgroundText">
                    <ul>{bonusLines.map(renderBonusLine)}</ul>
                </div>
            </div>

            <div className="RaceBubble Stylized Sticker">
                <h3>Languages</h3>
                <div className="BackgroundText">
                    <ul>{getKnownLanguages(race).map(renderLanguage)}</ul>
                </div>
            </div>

            <div className="RaceBubble Stylized Sticker">
                <h3>Choices</h3>
                <div className="BackgroundText">
                    <ul>{picked}</ul>
                </div>
            </div>
        </div>

        {subrace && <p className="BackgroundBubble Stylized Sticker">{subrace.description}</p>}

        <div className="RaceBubble Stylized Sticker">
            <h2>Traits</h2>
            <ul className="FeatureList">{getTraitViews(race).map(renderTraitView)}</ul>
        </div>
            
    </div>
}