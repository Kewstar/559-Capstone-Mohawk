// useBookPages.ts
import type { BookMode } from "../../types";
import { useState, useMemo } from "react";
import { getPagesForMode } from "../PagesLoader";

export function useBookPages(initialMode: BookMode = 'newCharacter') {
    const [mode, setMode] = useState<BookMode>(initialMode);
    const pages = useMemo(() => getPagesForMode(mode), [mode]);
    
    return { mode, setMode, pages };
}