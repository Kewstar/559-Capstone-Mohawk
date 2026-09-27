// hooks/useTabSplit.ts
import { useState, useCallback, useEffect } from 'react';
import type { BookMode, NavigationSection } from '../../types';


/** Interface for the return value of {@link useTabSplit} */
interface UseTabSplitResult {
    /** Determines if a given tab is on the left or right half of the book in two-page view, when singlePageFlag is false. */
    getPageForIndex: (i: number) => "left" | "right";

    /** setSplitByTabKey updates the split position through a tabKey, a unique string ID for each tab. */  
    setSplitByTabKey: (tabKey: string) => void;
}


/**
 * When the book is in `landscape` orienation (two-page view), this determines which of the navigation tabs 
 * are on the left and right half of the book, based on the activeTab.
 * 
 * @param bookMode, a string that acts as a key that determines the set of {@link pages} being rendered. 
 * @param tabs, the navigation tabs being rendered on the bottom NavBar, determined by the bookMode selected. 
 * 
 * @returns an object containing {@link getPageForIndex} and {@link setSplitByTabKey}
 */
export function useTabSplit(
    bookMode: BookMode,
    tabs: NavigationSection[]
): UseTabSplitResult {
    const [splitIndex, setSplitIndex] = useState(0);

    useEffect(() => {
        setSplitIndex(0);
    }, [bookMode, tabs]);


    const getPageForIndex = useCallback(
        (i: number): 'left' | 'right' =>
            i < splitIndex ? 'left' : 'right',
        [splitIndex]
    );

    const setSplitByTabKey = useCallback((tabKey: string) => {
        const index = tabs.findIndex(t => t.key === tabKey);
        if (index !== -1) {
            setSplitIndex(index);
        }
    }, [tabs]);

    return { getPageForIndex, setSplitByTabKey };
}