// backgroundHelpers.ts
import { getBackground } from "@/data/dnd5e_2014/backgrounds";
import type { BackgroundName, BackgroundDetails, Ideal } from "@/data/dnd5e_2014/backgrounds";
import type { CharacterBackground, BackgroundChoiceKey } from "@/components/BookContainer/types";


/**
 * Sets the default value for a character's Background selection, 
 * with a background name attached but with no choices made for the background.
 * 
 * @param backgroundName The name of the background to attach. 
 * 
 * @returns The default state for the selected background. 
 */
export function makeDefaultBackgroundSelection(backgroundName: BackgroundName): CharacterBackground {
    return {
        name: backgroundName, 
        personalityTraitChoices: [],
        idealChoices: [],
        bondChoices: [],
        flawChoices: [],
    };
}


/**
 * Lists the texts a player may pick from for one category.
 *
 * @param backgroundDetails the background data.
 * @param choiceKey which category.
 *
 * @returns the option texts, in data order.
 */
export function getChoiceOptionTexts(
    backgroundDetails: BackgroundDetails, choiceKey: BackgroundChoiceKey
): string[] {
    switch (choiceKey) {
        case "personalityTraitChoices":
            return backgroundDetails.personalityTraits.options;
        case "idealChoices":
            return backgroundDetails.ideals.options.map(getIdealDescription);
        case "bondChoices":
            return backgroundDetails.bonds.options;
        case "flawChoices":
            return backgroundDetails.flaws.options;
    }
}


/**
 * Retrieves the description text of an ideal. 
 * 
 * @param ideal The ideal to get the description of. 
 * 
 * @returns The ideal's description text. 
 */
function getIdealDescription(ideal: Ideal): string {
    return ideal.description;
}



/**
 * Retrieves the texts a player may pick from one category. 
 * 
 * @param backgroundDetails The background's BackgroundDetails data. 
 * @param choiceKey Which category to retrieve the text of. 
 * 
 * @returns The option texts. 
 */
export function getChoiceLimit(
    backgroundDetails: BackgroundDetails, choiceKey: BackgroundChoiceKey
): number {
    switch (choiceKey) {
        case "personalityTraitChoices":
            return backgroundDetails.personalityTraits.choose;
    
        case "idealChoices":
            return backgroundDetails.ideals.choose;
            
        case "bondChoices":
            return backgroundDetails.bonds.choose;
            
        case "flawChoices":
            return backgroundDetails.flaws.choose;
    }
}


/**
 * Checks or unchecks one option in a category.
 *
 * @param currentBackground the current background selection.
 * @param choiceKey The category to adjust.
 * @param text the option's text.
 *
 * @returns the updated CharacterBackground data, or the same object if nothing changed.
 */
export function toggleChoicePick(
    currentBackground: CharacterBackground, choiceKey: BackgroundChoiceKey, text: string
): CharacterBackground {
    const choices = currentBackground[choiceKey];

    if ( choices.includes(text) ) 
        return { ...currentBackground, [choiceKey]: choices.filter(function isOtherText(pick) { return pick !== text; }) };
    

    const details = getBackground(currentBackground.name);
    const limit = getChoiceLimit(details, choiceKey);

    if (!getChoiceOptionTexts(details, choiceKey).includes(text)) 
        return currentBackground;
    

    if (choices.length < limit) 
        return { ...currentBackground, [choiceKey]: [...choices, text] };
    

    if (limit === 1) 
        return { ...currentBackground, [choiceKey]: [text] };
    

    return currentBackground;
}