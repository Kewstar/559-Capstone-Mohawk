// useHandlePageFlip.ts 
import type { NavigationSection } from '../types';
import { useRef, useEffect } from 'react';


/**
 * When a page is flipped, this handles the switching of the tabs to follow suit, sets the new active tab in {@link tabs}, and sets the new split position.   
 * 
 * @param e an object containing the 0-based index of the page being flipped to.
 */
// interface UseHandlePageFlipResult {
//     handleFlip: (e: { data: number }) => void;
// }

/**
 * When a page is flipped using the `HTMLFlipBook`'s `onFlip` event, this function syncronizes the active tab and current `Page` when a page is flipped.  
 * 
 * @param tabs an array of navigation items which are rendered for the bottom `NavBar`, which is linked to the current set of `Page` objects. Each tab is associated with 1-2 `Page`s, depending on the book's orientation. 
 * @param activeTab the current active tab in {@link tabs}. When a tab is active, the set of `Page`s associated with that tab is rendered. 
 * @param setActiveTab updates the current active Tab and sets the `Page` to be. Takes in the key of a tab to associate with. 
 * @param setSplitByTabKey updates the split position through a tabKey, a unique string ID for each tab.
 * 
 * @returns a handler to be passed into `HTMLFlipBook`'s `onFlip` event.
 */
export function useHandlePageFlip(
    // bookMode: BookMode, 
    tabs: NavigationSection[],
    activeTab: string, 
    setActiveTab: (tabKey: string) => void,
    setSplitByTabKey: (tabKey: string) => void
) {
    const activeTabRef = useRef(activeTab);
    const tabsRef = useRef(tabs);

    useEffect(() => {
        activeTabRef.current = activeTab;
        tabsRef.current = tabs;
    }, [activeTab, tabs]);


    
    return function handleFlip(e: { data: number }) {
        const tabKey = getTabKeyForPage(tabsRef.current, e.data);
        
        if (tabKey && tabKey !== activeTabRef.current) {
            setActiveTab(tabKey);
            setSplitByTabKey(tabKey);
        }
    }

    // return { handleFlip };
}





/**
 * Retrieves a TabKey, a `string` value unique to each tab in {@link tabs}, for the tab at the provided {@link pgIndex}.
 *  
 * @param tabs an array of navigation items which are rendered for the bottom `NavBar`, which is linked to the current set of `Page` objects. Each tab is associated with 1-2 `Page`s, depending on the book's orientation. 
 * @param pgIndex integer value containing the 0-based index of the `Page` to get the TabKey for.
 * 
 * @returns the string value containing the TabKey.
 */
function getTabKeyForPage(
    tabs: NavigationSection[],
    pgIndex: number
): string | undefined {
    const sortedTabs = [...tabs].sort((a, b) => a.pgIndex - b.pgIndex);
    let match: NavigationSection | undefined;

    for (const tab of sortedTabs) {
        if (tab.pgIndex <= pgIndex) {
            match = tab;
        }
        else {
            break;
        }
    }
    return match?.key;
}