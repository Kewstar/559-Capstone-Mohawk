import { getBackground } from "@/data/dnd5e_2014/backgrounds";
import { getClass } from "@/data/dnd5e_2014/classes";
import { getRace } from "@/data/dnd5e_2014/races";
import type { CharacterClass, CharacterData, CharacterRace } from "@/components/BookContainer/types";
import { getRaceChoices, getSelectedSubrace, isSubraceMissing } from "../Race/raceHelpers";
import { countStartingChoices } from "../choiceHelpers";


export type BuildData = Pick<CharacterData, "name" | "classes" | "race" | "background" | "startingPicks" | "classWealth">;


/** One line of the checklist. */
export interface ChecklistItem {
    key: string;
    label: string;
    done: boolean;
    /** Extra text, e.g. "1/2" picks. */
    detail?: string;
}


interface ChoiceCount {
    chosen: number;
    needed: number;
}


/**
 * Determines how many of the first class's proficiency picks have been made.
 *
 * @param firstClass the CharacterClass data for the first class the character has taken levels in.
 *
 * @returns the choices made (never counting extras) and the choices required.
 */
function countClassPicks(firstClass: CharacterClass): ChoiceCount {
    let chosen = 0;
    let needed = 0;

    for (const [index, choice] of getClass(firstClass.name).proficiencyChoices.entries()) {
        needed += choice.choose;
        chosen += Math.min(choice.choose, firstClass.proficiencyChoices[index]?.length ?? 0);
    }

    return { chosen, needed };
}


/**
 * Determines how many of the race's choices have been made.
 *
 * @param characterRace the character's race selection.
 *
 * @returns the picks made and the picks required.
 */
function countRacePicks(characterRace: CharacterRace): ChoiceCount {
    let chosen = 0;
    let needed = 0;

    for (const choice of getRaceChoices(characterRace)) {
        needed += choice.choose;
        chosen += Math.min(choice.choose, choice.choices.length);
    }

    return { chosen, needed };
}


/**
 * Creates the list of things a character still needs, and what is done.
 *
 * @param buildData the character's name, classes, race and background.
 *
 * @returns the checklist, in the order a player would do things.
 */
export function getBuildChecklist(buildData: BuildData, proficiencies: Set<string>): ChecklistItem[] {
    const items: ChecklistItem[] = [
        { key: "name", label: "Name your character", done: buildData.name.trim() !== "" },
        { key: "class", label: "Choose a class", done: buildData.classes.length > 0 },
    ];

    const first = buildData.classes[0];

    if (first) {
        const picks = countClassPicks(first);

        if (picks.needed > 0) {
            items.push({ key: "class-picks", label: "Class proficiencies", done: picks.chosen >= picks.needed, detail: `${picks.chosen}/${picks.needed}` });
        }
    }

    items.push({ key: "race", label: "Choose a race", done: buildData.race !== null });

    if (buildData.race !== null) {
        if (getRace(buildData.race.name).subraces.length > 0) {
            items.push({ key: "subrace", label: "Choose a subrace", done: !isSubraceMissing(buildData.race) });
        }

        const picks = countRacePicks(buildData.race);

        if (picks.needed > 0) {
            items.push({ key: "race-picks", label: "Race choices", done: picks.chosen >= picks.needed, detail: `${picks.chosen}/${picks.needed}` });
        }
    }

    items.push({ key: "background", label: "Choose a background", done: buildData.background !== null });


    const startingChoices = countStartingChoices(buildData, proficiencies);

    if (startingChoices.total > 0) {
        items.push({
            key: "starting-equipment",
            label: "Starting Equipment",
            done: ( (startingChoices.complete) >= (startingChoices.total) ),
            detail: `${startingChoices.complete}/${startingChoices.total}`
        });
    }

    return items;
}


/**
 * Formats one CharacterClass for display.
 *
 * @param characterClass the class entry.
 *
 * @returns the class name and level.
 */
function formatClassLevel(characterClass: CharacterClass): string {
    return `${getClass(characterClass.name).label} ${characterClass.level}`;
}


/**
 * Describes the build in one line, leaving out whatever isn't chosen yet.
 *
 * @param data the character's classes, race and background.
 *
 * @returns ex. "Hill Dwarf · Cleric 3 / Wizard 2 · Acolyte", or a placeholder when nothing is chosen.
 */
export function describeBuild(data: Pick<BuildData, "classes" | "race" | "background">): string {
    const parts: string[] = [];

    if (data.race !== null) 
        parts.push(getSelectedSubrace(data.race)?.name ?? getRace(data.race.name).label);
    
    if (data.classes.length > 0) 
        parts.push(data.classes.map(formatClassLevel).join(" / "));

    if (data.background !== null) 
        parts.push(getBackground(data.background.name).label);


    if (parts.length > 0)
        return parts.join(" ");
    else 
        return "Nothing chosen yet...";
}


/**
 * Determines if every item on the checklist is done. 
 * 
 * @param checklist the items from {@link getBuildChecklist}.
 *
 * @returns true if the character can be created.
 */
export function isBuildReady(checklist: ChecklistItem[]): boolean {
    return checklist.every(function isDone(item) { return item.done; });
}