// ASIPicker.tsx
import { useId } from "react";
import { ABILITY_KEYS, ABILITY_LABELS } from "@/data/dnd5e_2014/abilities";
import type { AbilityKey } from "@/data/dnd5e_2014/abilities";
import { getClass } from "@/data/dnd5e_2014/classes";
import type { ASIChoice, CharacterClass } from "@/components/BookContainer/types";
import { useNewCharacterData } from "../useNewCharacterData";
import { EMPTY_ASI_CHOICE, getASICount, getASILevel, isAbilityKey, isASIComplete } from "../asiHelpers";


type AsiAbilitySelectProps = {
    classIdx: number;
    slot: number;
    choice: ASIChoice;
    position: 0 | 1;
};


/** A select for one of the abilities an improvement raises. */
function AsiAbilitySelect({ classIdx, slot, choice, position }: AsiAbilitySelectProps) {
    const { chooseASI } = useNewCharacterData();
    const id = useId();
    const first = choice.abilities[0] ?? "";
    const second = choice.abilities[1] ?? "";
    const own = position === 0 ? first : second;
    const other = position === 0 ? second : first;

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;
        const picked = position === 0 ? [value, second] : [first, value];

        chooseASI(classIdx, slot, { mode: choice.mode, abilities: picked.filter(isAbilityKey) });
    }

    function renderOption(ability: AbilityKey) {
        return (
            <option key={ability} value={ability} disabled={ability === other}>
                {ABILITY_LABELS[ability]}
            </option>
        );
    }

    return (
        <>
            <label htmlFor={id} className="VisuallyHidden">Ability {position + 1}</label>
            <select id={id} value={own} onChange={handleChange}>
                <option value="">Choose...</option>
                {ABILITY_KEYS.map(renderOption)}
            </select>
        </>
    );
}


type AsiSlotProps = {
    classIdx: number;
    slot: number;
    level: number;
    choice: ASIChoice;
};

/** One improvement: +2 to one ability, or +1 to two. */
function AsiSlot({ classIdx, slot, level, choice }: AsiSlotProps) {
    const { chooseASI } = useNewCharacterData();
    const groupName = `asi-${classIdx}-${slot}`;

    function handleSingle() {
        chooseASI(classIdx, slot, { mode: "single", abilities: choice.abilities });
    }

    function handleSplit() {
        chooseASI(classIdx, slot, { mode: "split", abilities: choice.abilities });
    }

    return (
        <fieldset className={isASIComplete(choice) ? "AsiSlot" : "AsiSlot AsiIncomplete"}>
            <legend>Level {level} improvement{isASIComplete(choice) ? "" : " (choose)"}</legend>

            <div className="AsiModes">
                <label className="AsiModeOption">
                    <input type="radio" name={groupName} checked={choice.mode === "single"} onChange={handleSingle} />
                    <span>+2 to one ability</span>
                </label>
                <label className="AsiModeOption">
                    <input type="radio" name={groupName} checked={choice.mode === "split"} onChange={handleSplit} />
                    <span>+1 to two abilities</span>
                </label>
            </div>

            <div className="AsiAbilities">
                <AsiAbilitySelect classIdx={classIdx} slot={slot} choice={choice} position={0} />
                {choice.mode === "split" && <AsiAbilitySelect classIdx={classIdx} slot={slot} choice={choice} position={1} />}
            </div>
        </fieldset>
    );
}

/**
 * Renders the ASI earned for one class' selection.
 *
 * @param characterClass One class the character has taken levels in. 
 * @param classIdx Its position in the character's classes.
 *
 * @returns A section of improvement choices, or null if none are earned yet.
 */
function renderASIForClass(characterClass: CharacterClass, classIdx: number) {
    const count = getASICount(characterClass);

    if (count === 0) {
        return null;
    }
    
    const details = getClass(characterClass.name);
    const slots: number[] = [];

    for (let slot = 0; slot < count; slot++) {
        slots.push(slot);
    }

    function renderASI(slot: number) {
        return (
            <AsiSlot
                key={slot}
                classIdx={classIdx}
                slot={slot}
                level={getASILevel(details, slot)}
                choice={characterClass.ASIChoices[slot] ?? EMPTY_ASI_CHOICE}
            />
        );
    }

    return (
        <section key={characterClass.name} className="ChoiceBubble AsiPicker Stylized Sticker">
            <h3>{details.label}: ability score improvements</h3>
            {slots.map(renderASI)}
        </section>
    );
}

/** Ability score improvements for every class that has earned some. */
export function ASIPicker() {
    const { classes } = useNewCharacterData();

    return <>
        {classes.map(renderASIForClass)}
    </>;
}