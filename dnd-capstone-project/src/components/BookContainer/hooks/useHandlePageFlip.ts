// useHandlePageFlip.ts 
import { PAGE_CONFIG } from '../Navbar/NavBarConfig';
import type { BookMode } from '../types';
import { useRef, useEffect } from 'react';

export function useHandlePageFlip(
    bookMode: BookMode, 
    activeTab: string, 
    setActiveTab: (tabKey: string) => void
) {
    // const { bookMode } = useBookPages();
    // const { activeTab, setActiveTab } = useBookNavigation(bookMode);

    const activeTabRef = useRef(activeTab);
    const bookModeRef = useRef(bookMode);

    useEffect(() => {
        activeTabRef.current = activeTab;
        bookModeRef.current = bookMode;
    }, [activeTab, bookMode]);


    function handleFlip(e: { data: number }) {
        const rawPageNumber = e.data; 
        const currentMode = bookModeRef.current;

        const tabKey = getTabKeyForPage(currentMode, rawPageNumber);
        if (tabKey && tabKey !== activeTabRef.current)
            setActiveTab(tabKey);
    }

    function getTabKeyForPage(bookMode: BookMode, pgIndex: number): string | undefined {
        const tabs = [...PAGE_CONFIG[bookMode].tabs].sort((a, b) => a.pgIndex - b.pgIndex);
        
        let match = undefined;
        for (const tab of tabs) {
            if (tab.pgIndex <= pgIndex) 
                match = tab;
            else 
                break;
        }
        return match?.key;
    }

    return { handleFlip };
}

