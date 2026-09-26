// useBookNavigation.ts
import { useState } from "react";
import type { BookMode, SectionLocation } from "../../types";

export function useBookNavigation(
    bookMode: BookMode,
    tabs: SectionLocation[]
) {
    const [activeTabByMode, setActiveTabByMode] = useState<Record<string, string>>({});
    const activeTab = activeTabByMode[bookMode] ?? tabs[0]?.key;

    const setActiveTab = (tabKey: string) => {
        setActiveTabByMode(prev => ({ ...prev, [bookMode]: tabKey }));
    };

    return { activeTab, setActiveTab };
}