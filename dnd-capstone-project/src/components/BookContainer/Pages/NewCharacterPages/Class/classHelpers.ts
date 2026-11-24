import { CLASS_LIST, getClass } from "@/data/dnd5e_2014/classes";
import type { ClassDetails, ClassName, ProficiencyChoice, Subclass, LevelFeatures, FeatureView, ProficiencyRef } from "@/data/dnd5e_2014/classes";
import type { CharacterClass } from "@/components/BookContainer/types";
import { LEVEL_MAX } from "../constants";
import { replaceAt, removeAt, removeValue } from "../../HTMLRenderHelpers";

/**
 * Sums the levels taken in every class the character has taken.
 * 
 * @param classes the character's classes taken. 
 * 
 * @returns the total class level. 
 */
export function getTotalLevel(classes: CharacterClass[]): number {
    let totalLevel = 0;

    for (const characterClass of classes) 
        totalLevel += characterClass.level;

    return totalLevel;
}


/**
 * Finds the highest level a character can have in a given class without the total passing the {@link LEVEL_MAX}.
 *  
 * @param classes the character's classes they have taken levels in.  
 * @param index the class to check. 
 * 
 * @returns the class's level cap. 0 When index is invalid.   
 */
export function getMaxLevelForClass(classes: CharacterClass[], index: number): number {
    const currentClass = classes[index];

    if (!currentClass) 
        return 0;
    
    return LEVEL_MAX - ( getTotalLevel(classes) - currentClass.level );
}


/**
 * Clamps a requested level to what a class may have without the character's total passing {@link LEVEL_MAX}.
 * 
 * @remarks A class's cap is {@link LEVEL_MAX} subtracted by the levels taken in every other class. A character with
 * only one class can reach the {@link LEVEL_MAX} in it, while a multiclassed character has a
 * smaller cap per class.
 * 
 * Example: with a {@link LEVEL_MAX} of 20, a character with 7 levels in Paladin and 10 in Sorcerer has
 * caps of 10 in Paladin and 13 in Sorcerer.
 * 
 * @param classes Array containing the character's classes they have taken levels in.  
 * @param classIndex The class to check the requested level of. 
 * @param requestedLv The level the user is attempting to reach in the class. 
 * 
 * @returns Number from 1 to the class' cap; the current level if the request isn't a number.
 */
export function clampClassLevel(classes: CharacterClass[], classIndex: number, requestedLv: number): number {
    const currentClass = classes[classIndex];

    if ( !currentClass || Number.isNaN(requestedLv) )
        return currentClass?.level ?? 1;

    return Math.min( getMaxLevelForClass(classes, classIndex), Math.max(1, Math.floor(requestedLv)) );
}

/**
 * Builds an empty pick list for one proficiency choice.
 * 
 * @returns an empty array to be filled with their choices.
 */
function makeEmptyPicks(): string[] {
    return [];
}

/**
 * Builds a fresh class for the array of chosen classes, with one empty pick list per proficiency choice.
 * 
 * @param name the class.
 * @param level the starting level.
 * 
 * @returns the new class.
 */
export function makeClass(name: ClassName, level = 1): CharacterClass {
    return {
        name,
        level,
        subclassId: null,
        proficiencyChoices: getClass(name).proficiencyChoices.map(makeEmptyPicks),
        spellChoices: { cantrips: [], known: [], prepared: [] },
    };
}

/**
 * Returns a boolean that signifies whether a character has already taken levels in a given class.
 * 
 * @param classes Array containing the character's levelled classes.
 * @param className The class to look for.
 * @param exceptIndex an class to ignore (the row being edited).
 * 
 * @returns True if the character has taken levels in the specified className. False if not. 
 */
export function isClassTaken(classes: CharacterClass[], className: ClassName, exceptIndex?: number): boolean {
    for (let i = 0; i < classes.length; i++) {
        if (i !== exceptIndex && classes[i]?.name === className) 
            return true;
    }

    return false;
}

/**
 * Lists the classes a row may choose from: unused ones plus the row's own.
 * 
 * @param classes the character's class entries.
 * @param exceptIndex the row being edited, whose own class stays available.
 * 
 * @returns the available class details, ordered by {@link CLASS_LIST}.
 */
export function getAvailableClasses(classes: CharacterClass[], exceptIndex?: number): ClassDetails[] {
    const available: ClassDetails[] = [];

    for (const details of CLASS_LIST) {
        if (!isClassTaken(classes, details.name, exceptIndex)) 
            available.push(details);
        
    }

    return available;
}

/**
 * Adds a class at level 1, unless it is already taken or the character is at the level cap.
 * 
 * @param classes the current entries.
 * @param name the class to add.
 * 
 * @returns the new entries (the same array if nothing changed).
 */
export function addClassEntry(classes: CharacterClass[], name: ClassName): CharacterClass[] {
    if (isClassTaken(classes, name) || getTotalLevel(classes) >= LEVEL_MAX) {
        return classes;
    }

    return [...classes, makeClass(name)];
}

/**
 * Updates an chosen class to a different class, keeping its level and discarding its old choices.
 * 
 * @param classes array containing the classes a character has taken levels in.
 * @param classIdx the class to change.
 * @param newClassName the new class.
 * 
 * @returns the new array of classes. If nothing changes returns the same array. 
 */
export function changeClassInClasses(classes: CharacterClass[], classIdx: number, newClassName: ClassName): CharacterClass[] {
    const currentClass = classes[classIdx];

    if ( !currentClass || isClassTaken(classes, newClassName, classIdx) ) 
        return classes;
    

    return replaceAt(classes, classIdx, makeClass(newClassName, currentClass.level));
}

/**
 * Sets an class' level, clamped to its cap.
 * 
 * @param characterClasses array containing the classes a character has taken levels in.
 * @param index the class to change.
 * @param level the requested level.
 * 
 * @returns updated array of classes. If nothing changes returns the same array. 
 */
export function setClassLevelInClasses(characterClasses: CharacterClass[], index: number, level: number): CharacterClass[] {
    const currentClass = characterClasses[index];

    if (!currentClass) 
        return characterClasses;

    return replaceAt(characterClasses, index, { ...currentClass, level: clampClassLevel(characterClasses, index, level) });
}

/**
 * Removes a class from the array of chosen classes.
 * 
 * @param characterClasses array containing the classes a character has taken levels in.
 * @param classIdx the class to remove.
 * 
 * @returns Updated array of classes.
 */
export function removeClassInClasses(characterClasses: CharacterClass[], classIdx: number): CharacterClass[] {
    return removeAt(characterClasses, classIdx);
}


/**
 * Collects every proficiency that can be picked in a choice, including nested choices. 
 * 
 * @param choice the proficiency choice. 
 *  
 * @returns the leaf proficiencies.  
 */
export function getLeafProficiencies(choice: ProficiencyChoice): ProficiencyRef[] {
    const leaves: ProficiencyRef[] = [];

    for (const option of choice.options) {
        if (option.type === "reference")
            leaves.push(option.proficiency);
        else 
            leaves.push( ...getLeafProficiencies(option.choice) )
    }

    return leaves;
}

/**
 * Collects the id of every proficiency that can be picked in a choice, including nested choices.
 * 
 * @param choice the proficiency choice.
 * 
 * @returns the leaf proficiency ids.
 */
export function getLeafProficiencyIds(choice: ProficiencyChoice): string[] {
    const ids: string[] = [];

    for (const option of choice.options) {
        if (option.type === "reference") 
            ids.push(option.proficiency.index);
        else 
            ids.push(...getLeafProficiencyIds(option.choice));
        
    }

    return ids;
}


/**
 * Toggles one pick in a proficiency choice, enforcing the choice's limit.
 * 
 * @param picks the current picks for this choice.
 * @param proficiencyId the proficiency being toggled.
 * @param choice the choice, from the class data.
 * 
 * @returns the new picks (the same array if the pick isn't allowed).
 *
 * @remarks The limit is the outer choice's `choose`. A nested choice (Monk's tools or instrument)
 * counts as part of that one pick, so only leaf ids are stored.
 */
export function toggleProficiencyPick(picks: string[], proficiencyId: string, choice: ProficiencyChoice): string[] {
    if (picks.includes(proficiencyId)) 
        return removeValue(picks, proficiencyId);
    
    if (!getLeafProficiencyIds(choice).includes(proficiencyId) || picks.length >= choice.choose) 
        return picks;

    return [...picks, proficiencyId];
}

/**
 * Toggles a proficiency pick on one class.
 * 
 * @param classes the current entries.
 * @param index the entry to change.
 * @param choiceIndex which of the class's proficiency choices.
 * @param proficiencyId the proficiency being toggled.
 * 
 * @returns the new entries (the same array if nothing changed).
 */
export function toggleClassProficiency(
    classes: CharacterClass[],
    index: number,
    choiceIndex: number,
    proficiencyId: string,
): CharacterClass[] {
    const entry = classes[index];
    const choice = entry ? getClass(entry.name).proficiencyChoices[choiceIndex] : undefined;

    if (!entry || !choice) 
        return classes;

    const current = entry.proficiencyChoices[choiceIndex] ?? [];
    const updated = toggleProficiencyPick(current, proficiencyId, choice);

    return replaceAt(classes, index, {
        ...entry,
        proficiencyChoices: replaceAt(entry.proficiencyChoices, choiceIndex, updated),
    });
}


//#region HP CALC
/**
 * Retrieves the calculation for a character's Max HP, given their class and constitution ability modifier. 
 *  
 * @param classes 
 * @param conMod 
 * @param calculationType determines how the max HP should be calculated beyond the first level; 
 *                        take the average HP each level or roll the value for HP each level. 
 * @param bonusPerLevel A bonus applied by some sources that increases the total hp gained every level. Default value of 0. 
 * 
 * @returns The calculated HP values. Returns 0 when the character has no classses. 
 */
export function CalculateMaxHP( 
    classes: CharacterClass[], 
    conMod: number, 
    calculationType: "rolled" | "average",
    bonusPerLevel: number = 0
): number { 
    if (classes.length === 0)
        return 0;
    
    switch (calculationType) {
        // case "rolled":
        //     CalculateMaxHPRolled(classes, conMod);
        //     break;
            
        case "average":
            return calculateMaxHPAverage(classes, conMod, bonusPerLevel);
            
        default:
            return calculateMaxHPAverage(classes, conMod, bonusPerLevel);            
    }
}



/**
 * Calculates the max HP of a character using the fixed average for every level after the first rule. 
 * 
 * @remarks The first level of the first class takes the maximum die value. 
 * Every other level, in any class, gains rounded up average. Each level has a minimum gain of 1 HP. 
 * 
 * @param classes Array containing the character's classes they have taken levels in. 
 * @param conMod The character's constituion modifier. Applied to every level. 
 * @param bonusPerLevel A bonus applied by some sources that increases the total hp gained every level. Default value of 0. 
 * 
 * @returns The character's calculated max HP. Returns 0 When the character has no class. 
 */
export function calculateMaxHPAverage( 
    classes: CharacterClass[], 
    conMod: number, 
    bonusPerLevel: number = 0 
): number {
    const firstClass = classes[0];

    if (!firstClass)
        return 0;

    let maxHP = getFirstLevelHp(getClass(firstClass.name).hitDie, conMod)

    for ( const [index, currentClass] of classes.entries() ) {
        const size = getClass(currentClass.name).hitDie;
        // Count of levels beyond the very first level taken in a class, if they exist. 
        const ordinaryLevels = index === 0 ? currentClass.level-1 : currentClass.level;

        maxHP += ordinaryLevels * getAverageHpGain(size, conMod);
    }

    return maxHP + ( bonusPerLevel * getTotalLevel(classes) );
}

/**
 * Retreives the HP for a character's very first level, which is the maximum die value. 
 * 
 * @param size The size of the hit die of the character's first class. 
 * @param conMod The character's constiution modifier. 
 * 
 * @returns the very 1st level's HP. Cannot be below 1. (case of negative con mod + very low hit die) 
 */
function getFirstLevelHp(size: number, conMod: number): number {
    return Math.max(1, size + conMod);
}

/**
 * Retreives the fixed HP gained for every level that is not the character's first level.
 * 
 * @remarks RULE: Every level you gain the average of a hit die roll, rounded up, plus the constition modifier. Cannot gain less than 1 hp. 
 * 
 * @param size The size of the hit die of the character's first class. 
 * @param conMod the character's constituion modiffier. 
 * 
 * @returns The HP value gained for that level.  
 */
function getAverageHpGain(size: number, conMod: number): number {
    return Math.max(1, size / 2 + 1 + conMod);
}
//#endregion



//#region SUBCLASS  

/**
 * Retrieves the level at which a class's subclass choice becomes available.
 * 
 * @param classDetails the class to determine what level its subclass choice becomes available.
 * 
 * @returns the lowest level any of its subclasses has features at. Returns null if the `classDetails` has no subclasses.
 */
export function getSubclassUnlockLevel(classDetails: ClassDetails): number | null {
    let subclassUnlockLevel: number | null = null;

    if (classDetails.subclasses.length === 0) 
        return null;

    for (const subclass of classDetails.subclasses) {
        for (const subclassLevel of subclass.levels) {

            if (subclassUnlockLevel === null || subclassLevel.level < subclassUnlockLevel) 
                subclassUnlockLevel = subclassLevel.level;
            
        }
    }
    
    return subclassUnlockLevel;
}



/**
 * Retrieves the subclass that a character has selected for a given class. 
 * 
 * @param characterClass One CharacterClass the character has taken levels in to retrieve the subclass of. 
 * 
 * @returns the data for the chosen subclass' for the provided `characterClass`. 
 *          Returns null if the character has not yet chosen a subclass, the class does not contain a subclass, 
 *          or the character's level has not yet reached the subclass' unlock level. 
 */
export function getActiveSubclass(characterClass: CharacterClass): Subclass | null {
    if (characterClass.subclassId === null) 
        return null;

    const classDetails = getClass(characterClass.name);
    const subclassUnlockLevel = getSubclassUnlockLevel(classDetails);
    
    if (subclassUnlockLevel == null || characterClass.level < subclassUnlockLevel) 
        return null;

    for (const subclass of classDetails.subclasses) {
        if (subclass.id === characterClass.subclassId)
            return subclass;
    }

    return null;
}


/**
 * Sets or clears the subclass on one character class, rejecting choices that aren't allowed.
 * 
 * @param characterClasses array containing the character's classes they have taken levels in. 
 * @param classIdx the class to change.
 * @param subclassId the subclass id, or null to clear it.
 * 
 * @returns The updated CharacterClass array containing the newly set subclass. If the subclass choice 
 */
export function setClassSubclass(
    characterClasses: CharacterClass[], classIdx: number, subclassId: string | null
): CharacterClass[] {
    const characterClass = characterClasses[classIdx];

    if (!characterClass)
        return characterClasses

    if (subclassId !== null) {
        const classDetails = getClass(characterClass.name);
        const subclassUnlockLevel = getSubclassUnlockLevel(classDetails);

        if (subclassUnlockLevel === null || characterClass.level < subclassUnlockLevel) 
            return characterClasses;

        if (!isValidSubclassId(classDetails, subclassId))
            return characterClasses;
    }

    return replaceAt(
        characterClasses, classIdx, { ...characterClass, subclassId }
    );
}

/**
 * Validates that a provided subclass id belongs to one of the subclasses in the provided class. 
 * 
 * @param classDetails The class' data to validate
 * @param subclassId the subclass' id to validate. 
 * 
 * @returns boolean that represents true if the class contains any subclass with `subclassId`. False if not.  
 */
function isValidSubclassId(classDetails: ClassDetails, subclassId: string): boolean {
    for (const subclass of classDetails.subclasses) {
        if (subclass.id === subclassId)
            return true;
    }

    return false; 
}
//#endregion



//#region CLASS LEVELS
export function getFeaturesByLevel(characterClass: CharacterClass): LevelFeatures[] {
    const classDetails = getClass(characterClass.name);
    const subclass = getActiveSubclass(characterClass);
    const groups = new Map<number, FeatureView[]>();

    for (const row of classDetails.classTable) {
        if (row.level > characterClass.level)
            continue;

        for (const featureId of row.featureIds)
            addToLevel( groups, row.level, makeFeatureView(classDetails, featureId, null) );
    }

    if (subclass) {
        for (const row of subclass.levels) {
            if (row.level > characterClass.level) 
                continue;

            for (const featureId of row.featureIds) 
                addToLevel( groups, row.level, makeFeatureView(classDetails, featureId, subclass.name) )
        }
    }

    return [...groups.entries()].sort(compareByLevel).map(toLevelFeatures);
}

function makeFeatureView(classDetails: ClassDetails, featureId: string, subclassName: string | null): FeatureView {
    const feature = classDetails.features[featureId];
    const paragraphs = classDetails.featureDescriptions[featureId];

    if (!feature || !paragraphs) 
        throw new Error(`${classDetails.name} lists unknown feature "${featureId}"`);
    
    return { feature, paragraphs, subclassName };
}

function addToLevel(groups: Map<number, FeatureView[]>, level: number, view: FeatureView) {
    const existing = groups.get(level);

    if (existing)
        existing.push(view);
    else 
        groups.set(level, [view]);
}


/**
 * Orders level, features pairs by level.
 *
 * @param a the first pair.
 * @param b the second pair.
 *
 * @returns a negative, zero or positive number for sorting.
 */
function compareByLevel(a: [number, FeatureView[]], b: [number, FeatureView[]]): number {
    return a[0] - b[0];
}

/**
 * Converts a [level, features] pair into a LevelFeatures object.
 *
 * @param pair the pair from the grouping map.
 *
 * @returns the level and its features.
 */
function toLevelFeatures(pair: [number, FeatureView[]]): LevelFeatures {
    return { level: pair[0], features: pair[1] };
}

//#endregion