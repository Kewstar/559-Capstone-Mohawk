// hooks/useTabSplit.ts
import { useState, useCallback, useEffect } from 'react';
// import { PAGE_CONFIG } from '../NavBarConfig';
import type { BookMode, SectionLocation } from '../../types';


export function useTabSplit(
    bookMode: BookMode,
    tabs: SectionLocation[]
) {
    const [splitIndex, setSplitIndex] = useState(0);

    useEffect(() => {
        setSplitIndex(0);
    }, [bookMode, tabs]);

    // const tabs = PAGE_CONFIG[bookMode].tabs;

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

// export function useTabSplit(bookMode: BookMode) {
//     const [splitIndex, setSplitIndex] = useState(0);

//     useEffect(() => {
//         setSplitIndex(0);
//     }, [bookMode]);

//     const tabs = PAGE_CONFIG[bookMode].tabs;

//     const getPageForIndex = useCallback(
//         (i: number): 'left' | 'right' =>
//             i < splitIndex ? 'left' : 'right',
//         [splitIndex]
//     );

//     const setSplitByTabKey = useCallback((tabKey: string) => {
//         const index = tabs.findIndex(t => t.key === tabKey);
//         if (index !== -1) {
//             setSplitIndex(index);
//         }
//     }, [tabs]);

//     return { getPageForIndex, setSplitByTabKey };
// }