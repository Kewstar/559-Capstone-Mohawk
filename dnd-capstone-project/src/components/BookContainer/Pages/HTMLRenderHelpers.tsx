// HTMLRenderHelpers.tsx

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