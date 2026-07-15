import { useState } from "react";
import type { BookMode } from "@/components/Book/types";
import { PAGE_CONFIG } from "../navConfig";

export function useBookNavigation() {
    const [navMode, setNavMode] = useState<BookMode>('newCharacter');
    const [activeTabByMode, setActiveTabByMode] = useState<Record<string, string>>({});

    const activeTab = activeTabByMode[navMode] ?? PAGE_CONFIG[navMode].tabs[0].key;

    const setActiveTab = (tabKey: string) => {
        setActiveTabByMode(prev => ({ ...prev, [navMode]: tabKey }));
    };

    return { navMode, setNavMode, activeTab, setActiveTab };
}