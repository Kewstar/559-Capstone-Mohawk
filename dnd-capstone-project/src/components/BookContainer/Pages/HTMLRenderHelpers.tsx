// HTMLRenderHelpers.tsx
import type { SpellDetails } from "@/data/dnd5e_2014/spells";
import { SpellCard } from "./NewCharacterPages/Spells/SpellCard";

/**
 * Prevents a <form> from submitting and reloading the page.
 * 
 * @param e the submit event.
 */
export function preventSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
}



/**
 * Renders one paragraph of text.
 *
 * @param text the paragraph's text.
 * @param index the paragraph's position, supplied by `map`.
 *
 * @returns a paragraph element.
 */
export function renderParagraph(text: string, index: number) {
    return  <p key={index}>
                {text}
            </p>
}


/**
 * Renders one option in a select.
 *  
 * @param text The option's text.  
 * 
 * @returns The option HTML element. 
 */
export function renderOption(text: string) {
    return  <option key={text} value={text}>
        {text}
    </option>;
}


/**
 * Renders one picked spell as a collapsable card. 
 * 
 * @param spellDetails The SpellDetails to render. 
 *  
 * @returns The {@link SpellCard} 
 */
export function renderSpellCard(spellDetails: SpellDetails) {
    return  <SpellCard key={spellDetails.index} spellDetails={spellDetails} />;
}


/**
 * Returns a copy of a list with one element replaced.
 * 
 * @param items the list.
 * @param index the position to replace.
 * @param item the new element.
 * 
 * @returns the new list.
 */
export function replaceAt<T>(items: T[], index: number, item: T): T[] {
    return [...items.slice(0, index), item, ...items.slice(index + 1)];
}



/**
 * Returns a copy of a list without one element.
 * 
 * @param items the list.
 * @param index the position to remove.
 * 
 * @returns the new list.
 */
export function removeAt<T>(items: T[], index: number): T[] {
    return [...items.slice(0, index), ...items.slice(index + 1)];
}


/**
 * Returns a list without one value.
 * 
 * @param items the list.
 * @param value the value to drop.
 * 
 * @returns the new list.
 */
export function removeValue(items: string[], value: string): string[] {
    const result: string[] = [];

    for (const item of items) {
        if (item !== value) 
            result.push(item);
    }

    return result;
}



/**
 * Formats a number with a leading plus for zero and above.
 *
 * @param value the number.
 *
 * @returns e.g. "+2", "+0" or "-1".
 */
export function formatSigned(value: number): string {
    return `${value >= 0 ? "+" : ""}${value}`;
}