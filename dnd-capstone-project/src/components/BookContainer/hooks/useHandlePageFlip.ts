// useHandlePageFlip.ts 
import { useBookPages } from '../Books/hooks/useBookPages';
import { useBookNavigation } from '../Navbar/hooks/useBookNavigation';
import { PAGE_CONFIG } from '../Navbar/NavBarConfig';
import type { BookMode } from '../types';

export function useHandlePageFlip() {
    const { bookMode } = useBookPages();
    const { setActiveTab } = useBookNavigation(bookMode);

    function handleFlip(e: { data: number }) {
        const tabKey = getTabKeyForPage(bookMode, e.data);
        if (tabKey)
            setActiveTab(tabKey);
    }

    function getTabKeyForPage(bookMode: BookMode, pgIndex: number): string | undefined {
        const tabs = [...PAGE_CONFIG[bookMode].tabs].sort((a, b) => a.pgIndex - b.pgIndex);
        let match = tabs[0];
        for (const tab of tabs) {
            if (tab.pgIndex <= pgIndex) 
                match = tab
            else 
                break;
        }
        return match?.key;
    }

    return { handleFlip };
}

