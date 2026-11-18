// Class.tsx
import './Class.css'
import { NoFlip } from "@/components/BookContainer/Pages/hooks/NoFlip";
import { getClass, isClassName } from "@/data/dnd5e_2014/classes";
import type { ClassDetails, FeatureView, LevelFeatures, Subclass } from "@/data/dnd5e_2014/classes";
import type { CharacterClass } from "@/components/BookContainer/types";
import { useNewCharacterData } from "../useNewCharacterData";
import { LEVEL_MAX } from "../constants";
import { getAvailableClasses, getMaxLevelForClass, getTotalLevel, CalculateMaxHP, getSubclassUnlockLevel, getFeaturesByLevel } from "./classHelpers";
import { useId } from 'react';
import { preventSubmit, renderParagraph } from '../../HTMLRenderHelpers';

/**
 * Maps an array position to a level number (for Array.from).
 * 
 * @param _unused the element, which is always undefined.
 * @param i the position.
 * 
 * @returns the level, starting at 1.
 */
function toLevel(_unused: unknown, i: number): number {
    return i + 1;
}

/**
 * Renders one option of a class select.
 * 
 * @param classDetails the class this option represents.
 * 
 * @returns an option element.
 */
function renderClassOption(classDetails: ClassDetails) {
    return  <option key={classDetails.name} value={classDetails.name}>
                {classDetails.label}
            </option>;
}

/**
 * Renders one option of a level select.
 * 
 * @param level the level this option represents.
 * 
 * @returns an option element.
 */
function renderLevelOption(level: number) {
    return  <option key={level} value={level}>
                {level}
            </option>;
}



/**
 * Renders one feature in a features list.
 * 
 * @param feature the feature to show.
 * 
 * @returns a list item with its level and name.
 */
function renderFeatureItem(view: FeatureView) {
    return (
        <li key={view.feature.id}>
            <details>

                <summary>
                    <span className="FeatureName">
                        {view.feature.name}
                    </span>
                    <span className="SubclassName">
                        {view.subclassName && <em>({view.subclassName})</em>}
                    </span>
                </summary>

                <div className="FeatureDescription">
                    {view.paragraphs.map(renderParagraph)}
                </div>
                
            </details>
        </li>
    );
}

function renderLevelGroup(group: LevelFeatures) {
    return (
        <div key={group.level} className="LevelGroup">
            <h3 className="LevelHeading">Level {group.level}</h3>
            <ul className="FeatureList">{group.features.map(renderFeatureItem)}</ul>
        </div>
    );
}


/**
 * Renders one class's heading and the features gained so far.
 * 
 * @param characterClass One class the character has taken levels in.
 * 
 * @returns Section for the right page.
 */
function renderClassFeatures(characterClass: CharacterClass) {
    const details = getClass(characterClass.name);

    return (
        <section className="ClassFeaturesBubble Stylized Sticker" key={characterClass.name}>
            <h2>{details.label} {characterClass.level}</h2>
            {getFeaturesByLevel(characterClass).map(renderLevelGroup)}
        </section>
    );
}

type ClassRowProps = {
    entry: CharacterClass;
    index: number;
};

/** 
 * A class select, a level select and a remove button for one class. 
 * 
 * @param param0 
 * 
 * @returns The HTML elements containing the selects for a class and level. 
 */
function ClassRow({ entry: characterClass, index: classIdx }: ClassRowProps) {
    const { classes, setClassName, setClassLevel, removeClass, setSubclass } = useNewCharacterData();
    const levels = Array.from({ length: getMaxLevelForClass(classes, classIdx) }, toLevel);

    const subclassSelectId = useId();
    const classDetails = getClass(characterClass.name);
    const subclassUnlockLevel = getSubclassUnlockLevel(classDetails);
    const subclassLabel = classDetails.subclasses[0]?.flavor ?? "Subclass";

    function handleClassChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;

        if (isClassName(value)) 
            setClassName(classIdx, value);
        
    }

    function handleLevelChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setClassLevel(classIdx, Number(e.target.value));
    }

    function handleRemove() { 
        removeClass(classIdx);
    }

    function handleSubclassChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setSubclass(classIdx, e.target.value === "" ? null : e.target.value);
    }

    return (
        <div className="ClassSelectBubble Stylized Sticker">
            <select className="ClassOptionSelect" value={characterClass.name} onChange={handleClassChange}>
                {getAvailableClasses(classes, classIdx).map(renderClassOption)}
            </select>
            
            <label className='ClassLevelLabel'>
                Level 
                <select className="ClassLevelSelect" value={characterClass.level} onChange={handleLevelChange}>
                    {levels.map(renderLevelOption)}
                </select>
            </label>

            {subclassUnlockLevel !== null && characterClass.level >= subclassUnlockLevel && (
                <div className="SubclassSelectBox">
                    <label htmlFor={subclassSelectId}>{subclassLabel}</label>
                    <select 
                        id={subclassSelectId}
                        value={characterClass.subclassId ?? ""}
                        onChange={handleSubclassChange}
                    >
                        <option value="">Choose...</option>
                        {classDetails.subclasses.map(renderSubclassOption)}
                    </select>
                </div>
            )}
            
            <button className="RemoveClassBtn" type="button" onClick={handleRemove}>✖</button>
        </div>
    );
}


/**
 * Renders an option select for a given class' subclass choices. 
 * 
 * @param subclass 
 * 
 * @returns 
 */
function renderSubclassOption(subclass: Subclass) {
    return  <option key={subclass.id} value={subclass.id}>
                {subclass.name}
            </option>
}


/**
 * Renders a ClassRow for one entry.
 * 
 * @param characterClass the class entry.
 * @param index its position.
 * 
 * @returns the row.
 */
function renderClassRow(characterClass: CharacterClass, index: number) {
    return <ClassRow key={characterClass.name} entry={characterClass} index={index} />;
}

/** 
 * The placeholder row shown before any class is chosen; picking a class creates the first entry. 
 * 
 * @returns The HTML placeholder row. 
 */
function EmptyClassRow() {
    const { classes, addClass } = useNewCharacterData();

    function handleClassChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;

        if ( isClassName(value) ) 
            addClass(value);
        
    }

    return (
        <div className="ClassSelectBubble Stylized Sticker">
            <select className="ClassOptionSelect" value="" onChange={handleClassChange}>
                <option value="">--</option>
                {getAvailableClasses(classes).map(renderClassOption)}
            </select>
        </div>
    );
}

/** 
 * Lets the user add another class while there is room and an unused class remains. 
 * 
 * @returns The select option HTML. 
 */
function AddClassSelect() {
    const { classes, addClass } = useNewCharacterData();
    const available = getAvailableClasses(classes);

    if (getTotalLevel(classes) >= LEVEL_MAX || available.length === 0) {
        return null;
    }

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;

        if (isClassName(value)) 
            addClass(value);
        
    }

    return (
        <select className="ClassSelectBubble Stylized Sticker" value="" onChange={handleChange}>
            <option value="">Add a new class...</option>
            {available.map(renderClassOption)}
        </select>
    );
}


/**
 * Displays a Character's: Total Level, Proficency Bonus, Max HP data, based on class selections. 
 * 
 * @returns An HTML `<div>` Element containing the calculated data. 
 */
function RenderTotalSummary() {
    const { totalLevel, attributes, classes, abilities } = useNewCharacterData();
    return (
        <div className="TotalClassSummaryBubble Sticker">
                
            <div className="TotalLevelProfBonusBox">
                <div className="MainDetail"><strong>Total Level:</strong> {totalLevel}</div>
                <div className="SubDetail"><strong>Prof. Bonus:</strong> {attributes.proficiencyBonus}</div>
            </div>

            <div className="HpDisplayBubble">
                <p className="MainDetail"><strong>Max Hit Points:</strong> {CalculateMaxHP(classes, abilities.con.mod, "average")}</p>
                <p className="SubDetail"><strong>Hit Dice:</strong> {classes.map(renderHitDice)}</p>
            </div>

        </div>
    );
}


function renderHitDice(characterClass: CharacterClass, index: number) {
    const size = getClass(characterClass.name).hitDie;

    return  <span key={characterClass.name}>
                {index > 0 && " + "}{characterClass.level}d{size}
            </span>;
}

export function ClassBlockLeft() {
    const { classes } = useNewCharacterData();

    return <>
        <NoFlip>
            <h1 className="OutlineBlue Stylized">CLASS</h1>
            <p className="UnderlineGray">Pick your class and level, man.</p>

            <form className="PageForm" onSubmit={preventSubmit}>
                {<RenderTotalSummary />}
                {classes.length === 0 ? <EmptyClassRow /> : classes.map(renderClassRow)}
                {classes.length > 0 && <AddClassSelect />}
            </form>

        </NoFlip>
    </>
}

export function ClassBlockRight() {
    const { classes } = useNewCharacterData();

    if (classes.length === 0) {
        return <p>Select a class to see its features.</p>;
    }
    // <h1>FEATURES</h1>

    return <>
        <div className="ClassesDisplayBox">
            {
                classes.map(renderClassFeatures)
            }
        </div>
    </>
}