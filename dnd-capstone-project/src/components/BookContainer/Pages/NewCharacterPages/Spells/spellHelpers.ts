// spellHelpers.ts
import type { CharacterClass, SpellListKey } from "@/components/BookContainer/types";
import type { AbilityKey } from "@/data/dnd5e_2014/abilities";
import { getClass, type SpellcastingLevel, type SpellReference, type SubclassSpellPrerequisite } from "@/data/dnd5e_2014/classes";
import { PREPARED_LEVEL_DIVISOR, SPELL_STYLE, SPELLBOOK_SPELLS_PER_LEVEL, SPELLBOOK_STARTING_SPELLS } from "@/data/dnd5e_2014/classes/spellRules";
import { findSpell, type SpellDetails } from "@/data/dnd5e_2014/spells";
import { removeValue, replaceAt } from "../../HTMLRenderHelpers";
import { getActiveSubclass } from "../Class/classHelpers";


/** One list of spell picks with its limit and the spells to choose from. */
export interface SpellGroup {
    key: SpellListKey;
    title: string;
    limit: number;
    options: SpellDetails[];
    choices: string[];
}

/** A titled list of picked spells, for display. */
export interface SpellSection {
    title: string;
    spells: SpellDetails[];
}


/**
 * Retrieves a class' spellcasting progression at its current level. 
 * 
 * @param characterClass A character's class which they have taken levels in.  
 * 
 * @returns The progression. Undefined if the class has none.  
 */
function getLevelSpellcasting(characterClass: CharacterClass): SpellcastingLevel | undefined {
    return getClass(characterClass.name).classTable[characterClass.level - 1]?.spellcasting;
}



/**
 * Finds the highest spell level a character's class ha slots for. 
 * 
 * @param characterClass A class which the character has taken levels in.  
 * 
 * @returns The level (1-9). 0 If the class has no spell slots yet. 
 */
export function getMaxSpellLevel(characterClass: CharacterClass): number {
    const slots = getLevelSpellcasting(characterClass)?.spellSlots ?? [];
    let max = 0;

    for ( const [index, count] of slots.entries() ) {
        if (count > 0)
            max = index+1;
    }

    return max;
}


/**
 * Retrieves the modifier of a class' spellcasting ability. 
 * 
 * @param characterClass A class which the character has taken levels in.  
 * @param abilities The character's abilities with their calculated modifiers. 
 * 
 * @returns The ability modifier of the class. 0 If the class has no spellcasting ability.  
 */
export function getSpellcastingMod(
    characterClass: CharacterClass, 
    abilities: Record<AbilityKey, { mod: number}>
): number {
    const ability = getClass(characterClass.name).spellcasting?.ability;
    
    if (ability)
        return abilities[ability].mod;
    else 
        return 0;
}


/**
 * Orders spells by level, then by name. 
 * 
 * @param a The first spell.  
 * @param b The second spell.
 * 
 * @returns A negative num, positive num, or zero, for sorting.  
 */
function compareSpells(a: SpellDetails, b: SpellDetails) {
    return a.level - b.level || a.name.localeCompare(b.name);
}


/**
 * Searchs a class' spell list to locate spells within a spell level range. 
 * 
 * @param spellRefs The class' spell reference. 
 * @param minLevel The lowest spell level to include. 
 * @param maxLevel The highest spell level to include. 
 * 
 * @returns The spells, sorted by level then name. 
 */
function spellsInRange(spellRefs: SpellReference[], minLevel: number, maxLevel: number): SpellDetails[] {
    const spells: SpellDetails[] = [];

    for (const ref of spellRefs) {
        const spell = findSpell(ref.index);

        if ( (spell) && (spell.level >= minLevel) && (spell.level <= maxLevel) )
            spells.push(spell);
    }

    return spells.sort(compareSpells);
}


/**
 * Determines whether a given list of spells contains a specific provided spell. 
 * 
 * @param spells The list of spells to search.  
 * @param index The index of the spell to search for. 
 * 
 * @returns True if the spell is in the list. False if it is not.  
 */
function containsSpell(spells: SpellDetails[], index: string): boolean {
    for (const spell of spells) {
        if (spell.index === index)
            return true
    }

    return false; 
}


/**
 * Creates a group, adding any chosen spell that is no longer selectable. 
 * 
 * @remarks Choices are kept when a level drops, so a choice can flal outside the allowed levels.
 *          Listing it anyways lets the user uncheck it. 
 * 
 * @param key Which list the group edits. 
 * @param title The group's heading. 
 * @param limit How many spells can be chosen. 
 * @param spells The spells that can be chosen. 
 * @param choices The spells indexes chosen so far. 
 * 
 * @returns The built group. 
 */
function buildSpellGroup(
    key: SpellListKey, title: string, limit: number, spells: SpellDetails[], choices: string[]
): SpellGroup {
    const listed = [ ...spells ];

    for (const choice of choices) {
        const spell = findSpell(choice); 

        if ( (spell) && (!containsSpell(listed, choice)) )
            listed.push(spell);
    }

    return { key, title, limit, options: listed, choices }
}


/**
 * Takes a given array of spell indexes, and retrieves the full SpellDetails for those spells.
 * Skips spells that don't exist. 
 *  
 * @param indexes Array of spell indexes to retrieve the data of.  
 * 
 * @returns Array of SpellDetails. Same order. 
 */
function toSpells(indexes: string[]): SpellDetails[] {
    const spells: SpellDetails[] = [];

    for (const index of indexes) {
        const spell = findSpell(index);

        if (spell)
            spells.push(spell);
    }

    return spells; 
}


/**
 * Determines how many spells a prepared caster can prepare. 
 * 
 * @param characterClass A class which the character has taken levels in.  
 * @param abilityMod The casting ability modifier. 
 * 
 * @returns mod + level (level/2 for half casters). Cannot prepare less than 1.  
 */
function getPreparedLimit(characterClass: CharacterClass, abilityMod: number): number {
    const divisor = PREPARED_LEVEL_DIVISOR[characterClass.name] ?? 1;

    return Math.max( 1, abilityMod + Math.floor(characterClass.level / divisor) );
}


/**
 * Determines how many spells a wizard's spellbook holds. 
 * 
 * @param characterClass A class which the character has taken levels in.  
 * 
 * @returns 6 at level 1, + 2 every level in wizard after that.  
 */
function getSpellbookLimit(characterClass: CharacterClass): number {
    return SPELLBOOK_STARTING_SPELLS + SPELLBOOK_SPELLS_PER_LEVEL * (characterClass.level - 1);
}


/**
 * Builds the lists of spell choices a class can make right now. 
 * 
 * @param characterClass A class which the character has taken levels in.  
 * @param abilityMod The casting ability modifier. 
 * 
 * @returns The groups for each type, with a limit, options, and current choices. 
 */
export function getSpellGroups(characterClass: CharacterClass, abilityMod: number): SpellGroup[] {
    const castingStyle = SPELL_STYLE[characterClass.name];
    const maxLevel = getMaxSpellLevel(characterClass);

    if ( (castingStyle === "none") && (maxLevel === 0) )
        return [];

    const progression = getLevelSpellcasting(characterClass)
    const classList = getClass(characterClass.name).spellcasting?.spellList ?? [];
    const spellLevels = spellsInRange(classList, 1, maxLevel);
    const choices = characterClass.spellChoices;
    const groups: SpellGroup[] = [];

    if ( (progression?.cantripsKnown ?? 0) > 0 ) {
        groups.push( buildSpellGroup( "cantrips", "Cantrips", 
                        progression?.cantripsKnown ?? 0, 
                        spellsInRange(classList, 0, 0), 
                        choices.cantrips ) 
                    );
    }
    if (castingStyle === "known") {
        groups.push( buildSpellGroup("known", "Spells Known", 
                        progression?.spellsKnown ?? 0, spellLevels, choices.known) );
    }
    else if (castingStyle === "prepared") {
        groups.push( buildSpellGroup("prepared", "Prepared Spells", 
                        getPreparedLimit(characterClass, abilityMod), spellLevels, choices.prepared) );
    }
    else {
        groups.push( buildSpellGroup("known", "Spellbook", 
                        getSpellbookLimit(characterClass), spellLevels, choices.known) );
        groups.push( buildSpellGroup("prepared", "Prepared Spells", 
                        getPreparedLimit(characterClass, abilityMod), toSpells(choices.known), choices.prepared) );
    }

    return groups;
}


/**
 * Finds a group by its provided SpellListKey. 
 * 
 * @param groups The groups to search.  
 * @param spellListKey The key of the group to find. 
 * 
 * @returns The group if it is found, or undefined if unfound.  
 */
function findGroup(groups: SpellGroup[], spellListKey: SpellListKey): SpellGroup | undefined {
    for (const group of groups) {
        if (group.key === spellListKey)
            return group
    }   

    return undefined;
}


/**
 * Checks or unchecks one spell in one point of a CharacterClass' list of spellChoices. 
 * 
 * @param classes Array containing every class which the character has taken levels in. 
 * @param classIdx The index of the class to change. 
 * @param listKey The spellChoice list to update. 
 * @param spellIdx The index of the spell to update. 
 * @param abilityMod The casting ability modifier of the class. 
 * 
 * @returns The updated list of a CharacterClass spellChoices, or the same array if unchanged.
 */
export function toggleClassSpellPick(
    classes: CharacterClass[], classIdx: number, listKey: SpellListKey, spellIdx: string, abilityMod: number
): CharacterClass[] {
    const characterClass = classes[classIdx];
    const group = characterClass ? findGroup( getSpellGroups(characterClass, abilityMod), listKey ) : undefined;

    if ( (!characterClass) || (!group) )
        return classes;
    
    const removing = group.choices.includes(spellIdx);

    if ( (!removing) && 
        ( !containsSpell(group.options, spellIdx) || (group.choices.length >= group.limit) ) ) {
        return classes;
    }

    const updated = removing ? removeValue(group.choices, spellIdx) : [...group.choices, spellIdx];
    const spellChoices = { 
        ...characterClass.spellChoices, 
        [listKey]: updated 
    };

    if ( (removing) && (listKey === "known") && (SPELL_STYLE[characterClass.name] === "spellbook") )
        spellChoices.prepared = removeValue(spellChoices.prepared, spellIdx);

    return replaceAt(classes, classIdx, { 
        ...characterClass, spellChoices 
    });
}


/**
 * Determines if a subclass' spell prerequisites are met. 
 * 
 * @param prerequisites The spell's prerequisites.  
 * @param level The class level. 
 * 
 * @returns True if every level requirement ismet. 
 *          Feature requirements are treated as unmet for now. 
 */
function isGrantedAtLevel(prerequisites: SubclassSpellPrerequisite[], level: number): boolean {
    for (const prerequisite of prerequisites) {
        if ( (prerequisite.kind !== "level") || (prerequisite.level > level) )
            return false; 
    }

    return true;
}


/**
 * Retrieves the spells a given subclass always prepares. 
 * 
 * @param characterClass A class which the character has taken levels in.  
 * 
 * @returns The subclass spells. These do not count against any limit. 
 */
export function getAlwaysPreparedSpells(characterClass: CharacterClass): SpellDetails[] {
    const spells: SpellDetails[] = [];

    for (const granted of getActiveSubclass(characterClass)?.spells ?? []) {
        const spell = findSpell(granted.spell.index);

        if ( (spell) && (isGrantedAtLevel(granted.prerequisites, characterClass.level)) )
            spells.push(spell);
    }

    return spells;
}



/**
 * Determines if a SpellSection contains any spells. 
 * 
 * @param spellSection The section to determine. 
 *  
 * @returns True if the SpellSection has any spells. False if empty.  
 */
function hasSpells(spellSection: SpellSection): boolean {
    return spellSection.spells.length > 0;
}


export function getPickedSpellSections(characterClass: CharacterClass): SpellSection[] {
    const castingStyle = SPELL_STYLE[characterClass.name];

    if (castingStyle === "none")
        return [];

    const choices = characterClass.spellChoices;
    const sections: SpellSection[] = [
        { title: "Cantrips", spells: toSpells(choices.cantrips) },
        { title: "Always Prepared", spells: getAlwaysPreparedSpells(characterClass) }
    ];

    if (castingStyle === "known")
        sections.push({ title: "Spells Known", spells: toSpells(choices.known) });
    else {
        sections.push({ title: "Prepared Spells", spells: toSpells(choices.prepared) });
        
        if (castingStyle === "spellbook")
            sections.push({ title: "Spellbook", spells: toSpells(choices.known) });
    }

    return sections.filter(hasSpells);
}