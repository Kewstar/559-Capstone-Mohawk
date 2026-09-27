// useBookNavigation.ts
import { useState } from "react";
import type { BookMode, NavigationSection } from "../../types";


/** Interface for the return value of {@link useBookNavigation} */
interface useBookNavigationResult {
    /** Determines the tab in the {@link tabs} which is both clicked on and has its relevant pages associated with that tab rendered. */
    activeTab: string;

    /** Updates the tab currently considered active in the array of {@link tabs}. */
    setActiveTab: (tabKey: string) => void;
}


/**
 * Holds the state for which tab which is currently active. 
 * 
 * @param bookMode The set of pages being rendered.
 * @param tabs The array of navigation items which are rendered for the bottom `NavBar`, which is linked to the pages. Each tab is associated with 1-2 `Page`s, depending on the singlePageFlag. 
 * 
 * @returns an object containing the {@link activeTab} and {@link setActiveTab}.
 */
export function useBookNavigation(
    bookMode: BookMode,
    tabs: NavigationSection[]
): useBookNavigationResult {
    const [activeTabByMode, setActiveTabByMode] = useState<Record<string, string>>({});
    const activeTab = activeTabByMode[bookMode] ?? tabs[0]?.key;

    const setActiveTab = (tabKey: string) => {
        setActiveTabByMode(prev => ({ ...prev, [bookMode]: tabKey }));
    };

    return { activeTab, setActiveTab };
}