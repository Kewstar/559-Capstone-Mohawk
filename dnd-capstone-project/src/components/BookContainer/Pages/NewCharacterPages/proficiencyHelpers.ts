import { getClass } from "@/data/dnd5e_2014/classes";
import type { ClassDetails } from "@/data/dnd5e_2014/classes";
import { getBackground } from "@/data/dnd5e_2014/backgrounds";
import { findProficiency } from "@/data/dnd5e_2014/proficiencies";
import type { ProficiencyData } from "@/data/dnd5e_2014/proficiencies";
import type { ItemDetails } from "@/data/dnd5e_2014/inventory/equipment";
import type { CharacterData } from "@/components/BookContainer/types";
import { getActiveTraitIds, getRaceChoices } from "./Race/raceHelpers";
import { getRace } from "@/data/dnd5e_2014/races";


/**
 * Adds the indexes of a list of proficiencies to a set.
 *
 * @param target the set to add to.
 * @param indexes the proficiency indexes.
 */
function addAll(target: Set<string>, indexes: string[]): void {
    for (const index of indexes) {
        target.add(index);
    }
}


/**
 * Retrieves the indexes of a class's fixed proficiencies and, for the first class, its saving throws.
 *
 * @remarks Only the first class grants its full list and its saving throws. 
 *          Every other class grants just its multiclass proficiencies.
 *
 * @param characterClass One CharacterClass the character has taken levels in. 
 * @param isFirstClass whether this is the character's first class.
 *
 * @returns the proficiency indexes.
 */
function getClassProficiencyIndexes(classDetails: ClassDetails, isFirstClass: boolean): string[] {
    if (!isFirstClass) 
        return classDetails.multiclassing.proficiencies.map(function getIndex(p) { return p.index; });

    const fixed = classDetails.proficiencies.map(function getIndex(p) { return p.index; });
    const saves = classDetails.savingThrows.map(function getSave(ability) { return `saving-throw-${ability}`; });

    return [...fixed, ...saves];
}


/**
 * Retrieves every proficiency the character has, from their classes, race and background.
 *
 * @remarks Derived from the character selections, automatically updates on class/race change.
 *
 * @param data the character's choices made in creation.
 *
 * @returns the set of proficiency indexes.
 */
export function getCharacterProficiencies(
    data: Pick<CharacterData, "classes" | "race" | "background">,
): Set<string> {
    const indexes = new Set<string>();

    for (const [position, characterClass] of data.classes.entries()) {
        addAll( indexes, getClassProficiencyIndexes(getClass(characterClass.name), position === 0) );

        for (const profChoices of characterClass.proficiencyChoices) {
            addAll(indexes, profChoices);
        }
    }

    if (data.race !== null) {
        const raceDetails = getRace(data.race.name);

        for (const id of getActiveTraitIds(data.race)) {
            addAll(indexes, (raceDetails.traits[id]?.proficiencies ?? []).map(function getIndex(p) { return p.index; }));
        }

        for (const raceChoice of getRaceChoices(data.race)) {
            if (raceChoice.choiceType === "proficiency") 
                addAll(indexes, raceChoice.choices);
        }
    }

    if (data.background !== null) {
        const background = getBackground(data.background.name);

        addAll(indexes, background.skillProficiencies.map(function getIndex(p) { return p.index; }));
    }

    return new Set([...indexes].filter(function exists(index) { return findProficiency(index) !== null; }));
}


/**
 * Determines if a given proficiency covers a given item.
 *
 * @param proficiency the proficiency to check.
 * @param itemDetails the item to check.
 *
 * @returns true if it covers the item by category or by name. False if not. 
 */
function covers(proficiency: ProficiencyData, itemDetails: ItemDetails): boolean {
    const target = proficiency.covers;

    if (target.kind === "item") 
        return (target.index === itemDetails.index);

    return (target.kind === "category") && ( itemDetails.categories.includes(target.index) );
}


/**
 * Determines if a character is proficient with an item.
 *
 * @remarks Armor and weapons match by category or by the specific item. 
 *          Tools match by the item itself.
 *
 * @param itemDetails the item to check.
 * @param proficiencies the character's proficiency indexes.
 *
 * @returns true if some proficiency covers the item. False if not. 
 */
export function isProficientWith(itemDetails: ItemDetails, proficiencies: Set<string>): boolean {
    for (const index of proficiencies) {
        const proficiency = findProficiency(index);

        if ( (proficiency !== null) && (covers(proficiency, itemDetails)) ) 
            return true;
    }

    return false;
}