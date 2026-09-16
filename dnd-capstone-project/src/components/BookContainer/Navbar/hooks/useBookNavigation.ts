// useBookNavigation.ts
import { useState } from "react";
import type { BookMode, SectionLocation } from "../../types";
// import { PAGE_CONFIG } from "../NavBarConfig";

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

// export function useBookNavigation(bookMode: BookMode) {
//     const [activeTabByMode, setActiveTabByMode] = useState<Record<string, string>>({});

//     const activeTab = activeTabByMode[bookMode] ?? PAGE_CONFIG[bookMode].tabs[0].key;

//     const setActiveTab = (tabKey: string) => {
//         // console.log("setActiveTab", tabKey);
//         // console.log("activeTab", activeTab);
//         setActiveTabByMode(prev => ({ ...prev, [bookMode]: tabKey }));
//     };

//     return { activeTab, setActiveTab };
// }