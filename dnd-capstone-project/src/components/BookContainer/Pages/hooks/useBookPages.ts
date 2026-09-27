// useBookPages.ts
import { useState, useMemo } from "react";
// import { getPagesForMode } from "../PagesLoader";
import { getPagesAndTabsForMode } from "../getPagesAndTabsForMode";
import type { BookMode, NavigationSection } from "../../types";
import type { Dispatch, SetStateAction, ReactElement } from "react";


/** Interface for the return value of {@link useBookPages} */
interface UseBookPagesResult {
    /** String that serves as a unique key which determines the `pages` and `tabs` to render */
    bookMode: BookMode;

    /** Updates the set of {@link pages} to render */
    setBookMode: Dispatch<SetStateAction<BookMode>>;

    /** The array of `Page` objects to be rendered. If {@link singlePageFlag} is true, the number of pages is 1:1 to the number of {@link tabs}. If false, the number of pages is 2:1 to {@link tabs}. */
    pages: ReactElement[];

    /** The array of navigation items which are rendered for the bottom `NavBar`, which is linked to the {@link pages}. Each tab is associated with 1-2 `Page`s, depending on the {@link singlePageFlag}. */
    tabs: NavigationSection[];
}


/**
 * Assembles the relevant set of {@link pages} and {@link tabs} associated with a given key, the {@link bookMode}
 * 
 * @param singlePageFlag Flag that is `true` if the current orientation is in `'portrait'`, which signifies the HTMLFlipBook is in one-page view
 * @param initialMode the initial state of {@link bookMode} when the `HTMLFlipBook` object is first created on page load.
 * 
 * @returns an object containing the 
 * - {@link bookMode}, a string that acts as a key that determines the set of {@link pages} being rendered
 * - {@link setBookMode}, a function to update the {@link bookMode}
 * - {@link pages}, an array of `Page` objects rendered 
 * - {@link tabs}, an array of navigation items associcated with {@link pages}.
 */
export function useBookPages(
    singlePageFlag: boolean,
    initialMode: BookMode = 'newCharacter'
): UseBookPagesResult {
    const [bookMode, setBookMode] = useState<BookMode>(initialMode);
    const { pages, tabs } = useMemo(() => 
        getPagesAndTabsForMode(bookMode, singlePageFlag), 
        [bookMode, singlePageFlag]
    ); 

    return { bookMode, setBookMode, pages, tabs };
}