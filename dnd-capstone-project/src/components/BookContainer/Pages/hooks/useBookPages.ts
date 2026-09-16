// useBookPages.ts
import { useState, useMemo } from "react";
// import { getPagesForMode } from "../PagesLoader";
import { getPagesAndTabsForMode } from "../PagesLoader";
import type { BookMode } from "../../types";

export function useBookPages(
    singlePageFlag: boolean,
    initialMode: BookMode = 'newCharacter'
) {
    const [bookMode, setBookMode] = useState<BookMode>(initialMode);
    const { pages, tabs } = useMemo(() => 
        getPagesAndTabsForMode(bookMode, singlePageFlag), 
        [bookMode, singlePageFlag]
    ); 

    return { bookMode, setBookMode, pages, tabs };
}

// export function useBookPages(initialMode: BookMode = 'newCharacter') {
//     const [bookMode, setBookMode] = useState<BookMode>(initialMode);
//     const pages = useMemo(() => getPagesForMode(bookMode), [bookMode]);
    
//     return { bookMode, setBookMode, pages };
// }