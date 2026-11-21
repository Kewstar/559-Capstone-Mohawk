import type { AbilityBonus, CharacterRace, RaceChoice, RaceChoiceOption, RaceChoiceType, RacialBonus, RacialBonuses, RacialBonusLine, TraitChoiceType, TraitView } from "@/components/BookContainer/types";
import { ABILITY_KEYS, ABILITY_LABELS, type AbilityKey } from "@/data/dnd5e_2014/abilities";
import type { ProficiencyChoice, ProficiencyRef, SpellReference } from "@/data/dnd5e_2014/classes";
import { getLanguage, isLanguageIndex, type LanguageIndex } from "@/data/dnd5e_2014/languages";
import type { RaceAbilityBonus, RaceDetails, RaceName, RaceTrait, SubraceDetails } from "@/data/dnd5e_2014/races";
import { getRace, findSubrace } from "@/data/dnd5e_2014/races";
 

export const ABILITY_BONUS_CHOICE_KEY = "ability-bonus";
export const RACE_LANGUAGE_CHOICE_KEY = "language";



/**
 * Builds the key for a race's trait which offers a choice. 
 * 
 * @param traitId the trait's id.  
 * @param traitChoiceType the type of choice which the trait offers. 
 * 
 * @returns the key for the race's trait choice. 
 *          Ex. `high-elf-cantrip:spell`. 
 */
export function makeTraitChoiceKey(traitId: string, traitChoiceType: TraitChoiceType): string {
    return `${traitId}:${traitChoiceType}`
}




//#region RACE SELECTION 

/**
 * Sets the default value for a character's Race selection, 
 * with a race name attached but with no choices made for the race, including subrace, which is unset.
 * 
 * @param raceName The name of the race to attach. 
 * 
 * @returns The default state for the selected race. 
 */
export function makeDefaultRaceSelection(RaceName: RaceName): CharacterRace {
    return {
        name: RaceName, 
        subraceId: null,
        traitChoices: {}
    };
}


/**
 * Retrieves the subrace for a selected race.  
 * 
 * @param characterRace the character's selected race.  
 * 
 * @returns the subrace. Null if none are chosen.  
 */
export function getSelectedSubrace(characterRace: CharacterRace): SubraceDetails | null {
    if (characterRace.subraceId === null) 
        return null;

    return findSubrace(getRace(characterRace.name), characterRace.subraceId) ?? null;
}


/**
 * Determines if a race has a subrace that hasn't been chosen yet. 
 * 
 * @param characterRace the character's selected CharacterRace.  
 * 
 * @returns a boolean that signifies true if the race has subraces and none are chosen. 
 */
export function isSubraceMissing(characterRace: CharacterRace): boolean {
    return (getRace(characterRace.name).subraces.length > 0) && 
            (characterRace.subraceId === null);
}


/**
 * Lists the ids of currently applied traits
 * 
 * @param characterRace the character's selected CharacterRace.  
 * 
 * @returns The trait ids in display order. 
 */
export function getActiveTraitIds(characterRace: CharacterRace): string[] {
    const race = getRace(characterRace.name);
    const subrace = getSelectedSubrace(characterRace);

    if (subrace) 
        return [...race.traitIds, ...subrace.traitIds];
    else 
        return [...race.traitIds];
}

//#endregion


//#region RACE CHOICES 

/**
 * Collects every proficiency that can be picked in a choice, including nested choices. 
 * 
 * @param choice the proficiency choice. 
 *  
 * @returns the leaf proficiencies.  
 */
function getLeafProficiencies(choice: ProficiencyChoice): ProficiencyRef[] {
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
 * Turns an ability bonus into a choice option. 
 * 
 * @param bonus The ability bonus. 
 *  
 * @returns An option whose value is the ability key. 
 */
function toAbilityOption(bonus: RaceAbilityBonus): RaceChoiceOption {
    return {    value: bonus.ability, 
                label: `${ABILITY_LABELS[bonus.ability]} +${bonus.bonus}` };
}


/**
 * Turns a language index into a choice option. 
 * 
 * @param index The language index. 
 *  
 * @returns An option labelled with the language's name.  
 */
function toLanguageOption(index: LanguageIndex): RaceChoiceOption {
    return {    value: index, 
                label: getLanguage(index).name };
}

/**
 * Turns a proficency into a choice option. 
 * 
 * @param proficency The proficiency. 
 * 
 * @returns An option labelled with the proficiency's name. 
 */
function toProficiencyOption(proficency: ProficiencyRef): RaceChoiceOption {
    return {    value: proficency.index, 
                label: proficency.name };
}


/**
 * Turns a spell reference into a choice option.
 *
 * @param spell the spell.
 *
 * @returns an option labelled with the spell's name.
 */
function toSpellOption(spell: SpellReference): RaceChoiceOption {
    return {    value: spell.index, 
                label: spell.name };
}


/**
 * Turns the ids of option traits into choice options. 
 * 
 * @param RaceDetails The race data holding the traits.  
 * @param optionIds The option trait ids.
 * 
 * @returns options labelled with each trait's name.  
 */
function getSubtraitOptions(RaceDetails: RaceDetails, optionIds: string[]): RaceChoiceOption[] {
    const choiceOptions: RaceChoiceOption[] = [];

    for (const id of optionIds) {
        const trait = RaceDetails.traits[id];

        if (!trait)
            throw new Error(`${RaceDetails.name} lists unknown option trait: "${id}`);

        choiceOptions.push({ value: id, label: trait.name })
    }

    return choiceOptions;
}


/**
 * Builds one choice, attaching the choices already made. 
 * 
 * @param characterRace The character's selected race.  
 * @param key The choice key. 
 * @param choiceType The type of choice being made. 
 * @param label Display string for the choice. 
 * @param choose How many choices are allowed. 
 * @param options The options to pick from. 
 * 
 * @returns The choice.  
 */
function makeChoice(
    characterRace: CharacterRace, 
    key: string, 
    choiceType: RaceChoiceType, 
    label: string, 
    choose: number, 
    options: RaceChoiceOption[]
): RaceChoice {
    return { 
        key, 
        choiceType, 
        label, 
        choose, 
        options, 
        choices: characterRace.traitChoices[key] ?? [] 
    };  
}


/**
 * Builds the choices offered by one raceTrait. 
 * 
 * @param raceDetails The race's data. 
 * @param raceTrait The raceTrait.
 * @param characterRace The character's selected race. 
 * 
 * @returns the choices available, 0 or more.  
 */
function getRaceTraitChoices(raceDetails: RaceDetails, raceTrait: RaceTrait, characterRace: CharacterRace): RaceChoice[] {
    const choices: RaceChoice[] = [];

    if (raceTrait.proficiencyChoice) {
        const options = getLeafProficiencies(raceTrait.proficiencyChoice).map(toProficiencyOption);

        choices.push(makeChoice(
            characterRace, 
            makeTraitChoiceKey(raceTrait.id, "proficiency"),
            "proficiency",
            raceTrait.name,
            raceTrait.proficiencyChoice.choose,
            options
        ));
    }

    if (raceTrait.languageChoice) {
        choices.push(makeChoice(
            characterRace, 
            makeTraitChoiceKey(raceTrait.id, "language"),
            "language",
            raceTrait.name,
            raceTrait.languageChoice.choose,
            raceTrait.languageChoice.options.map(toLanguageOption)
        ));
    }

    if (raceTrait.spellChoice) {
        choices.push(makeChoice(
            characterRace, 
            makeTraitChoiceKey(raceTrait.id, "spell"), "spell",
            raceTrait.name, 
            raceTrait.spellChoice.choose, 
            raceTrait.spellChoice.options.map(toSpellOption),
        ));
    }
    
    if (raceTrait.subtraitChoice) {
        choices.push(makeChoice(
            characterRace, 
            makeTraitChoiceKey(raceTrait.id, "subtrait"), "subtrait",
            raceTrait.name, 
            raceTrait.subtraitChoice.choose, 
            getSubtraitOptions(raceDetails, raceTrait.subtraitChoice.optionIds)
        ));
    }

    return choices;
}



/**
 * Lists every choice the selected race currently offers. 
 * 
 * @param characterRace The character's selected race. 
 *  
 * @returns The choices, each with its possible choices.  
 */
export function getRaceChoices(characterRace: CharacterRace): RaceChoice[] {
    const race = getRace(characterRace.name);
    const choices: RaceChoice[] = [];

    if (race.abilityBonusChoice) {
        choices.push(makeChoice(
            characterRace,
            ABILITY_BONUS_CHOICE_KEY,
            "ability",
            "Ability Score Increase",
            race.abilityBonusChoice.choose,
            race.abilityBonusChoice.options.map(toAbilityOption)
        ));
    }

    if (race.languageChoice) {
        choices.push(makeChoice(
            characterRace,
            RACE_LANGUAGE_CHOICE_KEY,
            "language",
            "Languages",
            race.languageChoice.choose,
            race.languageChoice.options.map(toLanguageOption)
        ));
    }


    for ( const id of getActiveTraitIds(characterRace) ) {
        const trait = race.traits[id];

        if (!trait) 
            throw new Error(`${race.name} lists unknown trait: "${id}"`);

        choices.push( ...getRaceTraitChoices(race, trait, characterRace) );
    }

    return choices;
}


/**
 * Retrieves a RaceChoiceOption's value. 
 * 
 * @param raceChoiceOption The option to get the value of.  
 * 
 * @returns the option's value.  
 */
function getRaceChoiceOptionValue(raceChoiceOption: RaceChoiceOption): string {
    return raceChoiceOption.value;
}



/**
 * Finds a choice by its key. 
 * 
 * @param choices Array of RaceChoice to search.  
 * @param key The key to search for. 
 * 
 * @returns The choice, or null when not found.  
 */
function findChoice(choices: RaceChoice[], key: string): RaceChoice | null {
    for (const choice of choices) {
        if (choice.key === key)
            return choice
    }

    return null;
}


/**
 * Returns a list of strings, without a specified value. 
 * 
 * @param items The list of strings to filter.  
 * @param value The value to drop from the list. 
 * 
 * @returns The new list. 
 */
function removeFromList(items: string[], value: string): string[] {
    const result: string[] = [];

    for (const item of items) {
        if (item !== value)
            result.push(item);
    }

    return result;
}


/**
 * Drops traitChoices that no longer belong to any choice the race currently offers.
 * 
 * @remarks Used for when a subrace changes, as an old subrace choices must be erased. 
 * Also drops choices that aren't valid or choices beyond a limit. 
 * 
 * @param characterRace The character's currently selected race. 
 * 
 * @returns The CharacterRace with only valid traitChoices. 
 */
function pruneRaceTraitChoices(characterRace: CharacterRace): CharacterRace {
    const traitChoices: Record<string, string[]> = {};

    for (const raceChoice of getRaceChoices(characterRace)) {
        const allowedChoices = raceChoice.options.map(getRaceChoiceOptionValue);
        const keptChoices: string[] = [];

        for (const selectedChoice of raceChoice.choices) {
            if ( (allowedChoices.includes(selectedChoice )) && (keptChoices.length < raceChoice.choose) ) 
                keptChoices.push(selectedChoice)
        }

        if (keptChoices.length > 0)
            traitChoices[raceChoice.key] = keptChoices;
    }

    return { ...characterRace, traitChoices }
}



/**
 * Chooses a subrace, or erases it with null.
 *  
 * @param characterRace The character's currently selected race.  
 * @param subraceId The subrace's id, or null to erase it.  
 * 
 * @returns The new selected characterRace with subrace included. 
 *          Returns the same characterRace if the subraceid isn't tied to the race's subraces, 
 *          or if the same subrace is selected as the current. 
 */
export function applySubrace(characterRace: CharacterRace, subraceId: string | null): CharacterRace {
    if (subraceId === characterRace.subraceId)
        return characterRace;

    if ( (subraceId !== null) && 
            !findSubrace(getRace(characterRace.name), subraceId) )
        return characterRace;

    return pruneRaceTraitChoices({ ...characterRace, subraceId });
}


export function applyRaceTraitChoice(characterRace: CharacterRace, choiceKey: string, value: string): CharacterRace {
    const traitChoice = findChoice( getRaceChoices(characterRace), choiceKey );

    if (!traitChoice) 
        return characterRace;

    let updated: string[];


    if ( traitChoice.choices.includes(value) ) 
        updated = removeFromList(traitChoice.choices, value);

    else if ( !traitChoice.options.map(getRaceChoiceOptionValue).includes(value) )
        return characterRace;

    else if (traitChoice.choices.length < traitChoice.choose)
        updated = [ ...traitChoice.choices, value ];

    else if (traitChoice.choose === 1)
        updated = [value];

    else 
        return characterRace;


    return {    
        ...characterRace, 
        traitChoices: { 
            ...characterRace.traitChoices, 
            [choiceKey]: updated 
        }
    };
}

//#endregion


//#region DERIVED VALUES 


/**
 * Sets the default values for a race's abiltiy score bonuses. 
 * 
 * @returns Empty array for each stat to fill with bonuses. 
 */
function makeDefaultRacialBonuses(): Record<AbilityKey, AbilityBonus[]> {
    return { str: [], dex: [], con: [], int: [], wis: [], cha: [] }
}


/**
 * Formats one AbilityBonus
 * 
 * @param abilityBonus 
 */
function formatRacialBonus(abilityBonus: AbilityBonus) {
    return `${abilityBonus.label} ${abilityBonus.bonus >= 0 ? "+" : ""}${abilityBonus.bonus}`;
}


/**
 * Adds up one ability's various AbilityBonus values. 
 * 
 * @param abilityBonuses the ability's 
 * 
 * @returns The total bonus value for the ability, and text listing all sources. 
 */
function sumAbilityBonuses(abilityBonuses: AbilityBonus[]): RacialBonus {
    let value = 0;

    for (const abilityBonus of abilityBonuses) {
        value += abilityBonus.bonus;
    }

    return {    value, 
                source: abilityBonuses.map(formatRacialBonus).join(", ") };
}



/**
 * Determines the racial bonus to every ability from the character's race selection. 
 * 
 * @remarks Adds the race's fixed bonuses, the subrace's fixed bonuses, and any ability bonus picks.
 *          The result is derived from racial selection, changing race automatically calculates bonuses. 
 * 
 * @param characterRace The character's selected race. Null when unchosen.  
 * 
 * @returns The racial bonus for each ability. Bonus value of 0 when there is none applied.
 */
export function getRacialAbilityBonus(characterRace: CharacterRace | null): RacialBonuses {
    const bonusParts = makeDefaultRacialBonuses();

    if (characterRace !== null) {
        const race = getRace(characterRace.name);
        const subrace = getSelectedSubrace(characterRace);
        const abilityBonusChoices = characterRace.traitChoices[ABILITY_BONUS_CHOICE_KEY] ?? [];
    

        for (const raceBonus of race.abilityBonuses) {
            bonusParts[raceBonus.ability].push({ label: race.label, bonus: raceBonus.bonus });
        }

        for (const Subracebonus of subrace?.abilityBonuses ?? []) {
            bonusParts[Subracebonus.ability].push({ label: race.label, bonus: Subracebonus.bonus });
        }

        for (const bonusChoice of race.abilityBonusChoice?.options ?? []) {
            if (abilityBonusChoices.includes(bonusChoice.ability)) 
                bonusParts[bonusChoice.ability].push({ label: race.label, bonus: bonusChoice.bonus });
        }
    }

    return {
        str: sumAbilityBonuses(bonusParts.str),
        dex: sumAbilityBonuses(bonusParts.dex),
        con: sumAbilityBonuses(bonusParts.con),
        int: sumAbilityBonuses(bonusParts.int),
        wis: sumAbilityBonuses(bonusParts.wis),
        cha: sumAbilityBonuses(bonusParts.cha),
    };
}


/**
 * Lists the abilities that recieve a racial bonus as display text. 
 * 
 * @param bonuses The derived ability bonuses. 
 * 
 * @returns One item in the array for each ability with a nonzero bonus. 
 */
export function getRacialBonusLines(bonuses: RacialBonuses): RacialBonusLine[] {
    const lines: RacialBonusLine[] = [];

    for (const abilityKey of ABILITY_KEYS) {
        const bonus = bonuses[abilityKey];

        if (bonus.value !== 0)
            lines.push({    ability: abilityKey, 
                            text: `${ABILITY_LABELS[abilityKey]} ${bonus.value > 0 ? "+" : ""}${bonus.value}` });
    }

    return lines;
}


/**
 * Retrieves every language the character knowns through their race: both fixed and selected languages. 
 * 
 * @param characterRace the character's selected race.  
 * 
 * @returns Array of LanguageIndex elements. No duplicates.  
 */
export function getKnownLanguages(characterRace: CharacterRace): LanguageIndex[] {
    const knownLanguages: LanguageIndex[] = [ ...getRace(characterRace.name).languages ];

    for ( const raceChoice of getRaceChoices(characterRace) ) {
        if (raceChoice.choiceType !== "language")
            continue;
        
        for (const choice of raceChoice.choices) {
            if ( (isLanguageIndex(choice)) && (!knownLanguages.includes(choice)) )
                knownLanguages.push(choice);
        }
    }

    return knownLanguages;
}



/**
 * Combines a trait with its description into a TraitView object, so that it can be displayed.
 *  
 * @param raceDetails The race's data. 
 * @param traitId The trait's id. 
 * @param subraceName The name of the subrace which owns the trait, or null. 
 * 
 * @returns TraitView object that contains details to display the racialTrait. 
 */
function makeTraitView(
    raceDetails: RaceDetails, traitId: string, subraceName: string | null
): TraitView {
    const raceTrait = raceDetails.traits[traitId];
    const paragraphs = raceDetails.traitDescriptions[traitId];

    if ( (!raceTrait) || (!paragraphs) )
        throw new Error(`${raceDetails.name} lists unknown trait: "${traitId}"`);

    return { raceTrait, paragraphs, subraceName }
}


/**
 * Lists the traits that apply to the selection, with chosen option traits listed after the trait that offers them. 
 * 
 * @param characterRace The character's selected race.  
 * 
 * @returns The TraitView objects in dispaly order. 
 */
export function getTraitViews(characterRace: CharacterRace): TraitView[] {
    const race = getRace(characterRace.name);
    const subraceName = getSelectedSubrace(characterRace)?.name ?? null;
    const traitViews: TraitView[] = [];

    for ( const traitId of getActiveTraitIds(characterRace) ) {
        const traitView = makeTraitView(race, traitId, null);
        const owner = traitView.raceTrait.subraceId ? subraceName : null;

        traitViews.push({ ...traitView, subraceName: owner });

        const traitChoices = characterRace.traitChoices[makeTraitChoiceKey(traitId, "subtrait")] ?? []
        for ( const optionId of traitChoices) {
            traitViews.push(makeTraitView(race, optionId, null));
        }
    }

    return traitViews;
}


/**
 * Retrieves the labels of the options selected for a choice. 
 * 
 * @param raceChoice The choice.  
 * 
 * @returns Array containing the labels for the selected options. 
 */
export function getPickedLabels(raceChoice: RaceChoice): string[] {
    const labels: string[] = [];

    for (const option of raceChoice.options) {
        if ( raceChoice.choices.includes(option.value) )
            labels.push(option.label);
    }

    return labels;
}

//#endregion