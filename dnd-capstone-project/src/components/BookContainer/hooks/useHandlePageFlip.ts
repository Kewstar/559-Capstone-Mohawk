// useHandlePageFlip.ts 
import type { SectionLocation } from '../types';
import { useRef, useEffect } from 'react';

export function useHandlePageFlip(
    // bookMode: BookMode, 
    tabs: SectionLocation[],
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


    function handleFlip(e: { data: number }) {
        const tabKey = getTabKeyForPage(tabsRef.current, e.data);
        
        if (tabKey && tabKey !== activeTabRef.current) {
            setActiveTab(tabKey);
            setSplitByTabKey(tabKey);
        }
    }

    return { handleFlip };
}


function getTabKeyForPage(
    tabs: SectionLocation[],
    pgIndex: number
): string | undefined {
    const sortedTabs = [...tabs].sort((a, b) => a.pgIndex - b.pgIndex);
    let match: SectionLocation | undefined;

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