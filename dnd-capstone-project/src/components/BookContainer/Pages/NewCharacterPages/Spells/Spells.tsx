// Spells.tsx
import { formatSpellLevel, formatSpellSchool, type SpellDetails } from "@/data/dnd5e_2014/spells";
import { useNewCharacterData } from "../useNewCharacterData";
import { SpellBody, SpellCard } from "./SpellCard";
import type { CharacterClass, CharacterRace, SpellListKey } from "@/components/BookContainer/types";
import { 
    getAlwaysPreparedSpells, getPickedSpellSections, getSpellcastingMod, getSpellGroups 
} from "./spellHelpers";
import type { SpellGroup, SpellSection } from "./spellHelpers";
import { getClass } from "@/data/dnd5e_2014/classes";
import { preventSubmit, renderSpellCard } from "../../HTMLRenderHelpers";
import { SPELL_STYLE } from "@/data/dnd5e_2014/classes/spellRules";
import { NoFlip } from "../../hooks/NoFlip";
import { getRacialSpells } from "../Race/raceHelpers";
import { getRace } from "@/data/dnd5e_2014/races";


type SpellChoiceCheckboxProps = {
    classIdx: number;
    listKey: SpellListKey;
    spellDetails: SpellDetails;
    checked: boolean;
    disabled: boolean;
};

/** A single checkbox <input> for one spell. Contains collapsable <details> <summary> view. */
function SpellChoiceCheckbox({ classIdx, listKey, spellDetails, checked, disabled }: SpellChoiceCheckboxProps) {
    const { toggleSpellChoice } = useNewCharacterData();

    function handleOnChange() {
        toggleSpellChoice(classIdx, listKey, spellDetails.index);
    }

    return (
        <div className="ChoiceRow">
            <label className="ChoiceOption">
                <input type="checkbox" checked={checked} disabled={disabled} onChange={handleOnChange} />
                <span>{spellDetails.name} ({formatSpellLevel(spellDetails.level)}, {formatSpellSchool(spellDetails.school)})</span>
            </label>
            <details className="SpellOptionDetails">
                <summary aria-label={`Show details for ${spellDetails.name}`}></summary>
                <SpellBody spellDetails={spellDetails} />
            </details>
        </div>
    );
}


type SpellGroupFieldsetProps = {
    classIdx: number;
    group: SpellGroup;
};


/** Renders list of titled spell checkboxes. Automatically disabled once limit is hit. */
function SpellGroupFieldset({ classIdx, group: spellGroup }: SpellGroupFieldsetProps) {
    const atLimit = spellGroup.choices.length >= spellGroup.limit;
    const over = spellGroup.choices.length - spellGroup.limit;

    function renderOption(spellDetails: SpellDetails) {
        const checked = spellGroup.choices.includes(spellDetails.index);

        return (
            <SpellChoiceCheckbox 
                key={spellDetails.index}
                classIdx={classIdx}
                listKey={spellGroup.key}
                spellDetails={spellDetails}
                checked={checked}
                disabled={(!checked) && (atLimit)}
            />
        );
    }

    return (
        <fieldset className="BackgroundChoiceGroup">
            <legend>{spellGroup.title} ({spellGroup.choices.length}/{spellGroup.limit})</legend>
            {over > 0 && <p className="SubDetail">{over} too many spells prepared.</p> }
            {spellGroup.options.map(renderOption)}
        </fieldset>
    );
}


/**
 * Renders a single always prepared spell as a <li> item. 
 * 
 * @param spellDetails The data of the spell that is always prepared. 
 * 
 * @returns A `<li>` HTML item of the always prepared spell.  
 */
function renderAlwaysPrepared(spellDetails: SpellDetails) {
    return  <li key={spellDetails.index}>
                {spellDetails.name}
            </li>;
}


type ClassSpellSectionProps = {
    characterClass: CharacterClass;
    classIdx: number;
}

/** Renders the HTML elements for the spell pick lists for one class. */
function ClassSpellSection({ characterClass, classIdx }: ClassSpellSectionProps) {
    const { abilities } = useNewCharacterData();
    const classDetails = getClass(characterClass.name);
    const spellGroups = getSpellGroups( characterClass, getSpellcastingMod(characterClass, abilities) );
    const alwaysPrepared = getAlwaysPreparedSpells(characterClass);


    function renderSpellGroup(spellGroup: SpellGroup) {
        return <SpellGroupFieldset key={spellGroup.key} classIdx={classIdx} group={spellGroup} />;
    }

    return (
        <section className="SpellClassSection">
            <h2>{classDetails.label} {characterClass.level}</h2>

            {spellGroups.length === 0 && (
                <p className="SubDetail">Spellcasting begins at level {classDetails.spellcasting?.startLevel ?? 1}.</p>
            )}

            {spellGroups.map(renderSpellGroup)}

            {alwaysPrepared.length > 0 && (
                <fieldset className="BackgroundChoiceGroup">
                    <legend>Always Prepared</legend>
                    <ul>{alwaysPrepared.map(renderAlwaysPrepared)}</ul>
                </fieldset>
            )}
        </section>
    );
}


/**
 * Render the <{@link ClassSpellSection}> for one class, or nothing if the class does not have spellcasting.
 * 
 * @param characterClass A class which the character has taken levels in.  
 * @param classIdx The index of the class to render the spells for. 
 * 
 * @returns The <{@link ClassSpellSection}> TSX to render, or null if it is not a spellcasting class. 
 */
function renderClassSpellSection(characterClass: CharacterClass, classIdx: number) {
    if (SPELL_STYLE[characterClass.name] === "none")
        return null;

    return (
        <div className="ClassSpellDisplay">
            <div className="RaceBubble Sticker">
                <ClassSpellSection 
                    key={characterClass.name} 
                    characterClass={characterClass} 
                    classIdx={classIdx} />
            </div>
        </div>
    );
}


/**
 * Renders a titled `<li>` of selected spells for a class.
 *  
 * @param spellSection The ready for display picked spells. 
 * 
 * @returns A display bubble with a heading and <{@link SpellCard}>.  
 */
function renderSpellSection(spellSection: SpellSection) {
    return (
        <div>
            <h3>{spellSection.title}</h3>
            <div className="BackgroundText">{spellSection.spells.map(renderSpellCard)}</div>
        </div>
    );
}


/**
 * Renders the selected spells for one class the character has levels in. 
 * 
 * @param characterClass A class which the character has taken levels in.  
 * 
 * @returns A HTML `<div>` with a heading and class' SpellSectoins. Returns null if the class doesn't have spellcasting.   
 */
function renderClassPicks(characterClass: CharacterClass) {
    const sections = getPickedSpellSections(characterClass);

    if (sections.length === 0)
        return null;

    return (
        <div className="RaceBubble Stylized Sticker" key={characterClass.name}>
            <h2>{getClass(characterClass.name).label}</h2>
            {sections.map(renderSpellSection)}
        </div>
    );
}


function renderRacialSpells(racialSpells: SpellDetails[], race: CharacterRace) {
    return (
        <div className="RaceBubble Stylized Sticker" key={race.name}>
            {renderSpellSection({
                title: `${getRace(race.name).label} Spells`,
                spells: racialSpells
            })}
        </div>
    );
}


export function SpellsBlockLeft() {
    const { classes } = useNewCharacterData();
    const spellClasses = classes.filter(function isCaster(characterClass) {
        return SPELL_STYLE[characterClass.name] !== "none";
    });

    
    return <>
        <NoFlip>
            <h1 className="OutlineBlue Stylized">SPELLS</h1>
            <p className="UnderlineGray">Choose the magic spells your character can cast.</p>

            {spellClasses.length === 0 && <p>You have no classes that can cast spells.</p>}
            <form className="PageForm" onSubmit={preventSubmit}>
                {classes.map(renderClassSpellSection)}
            </form>
        </NoFlip>
    </>
}


export function SpellsBlockRight() {
    const { classes, race } = useNewCharacterData();
    const racialSpells = getRacialSpells(race);

    return <div className="PageBlockRight">
        <h1 className="UnderlineGray">YOUR SPELLS</h1>
        {classes.map(renderClassPicks)}
        {(race !== null) && (racialSpells.length > 0) && renderRacialSpells(racialSpells, race)}
    </div>
}