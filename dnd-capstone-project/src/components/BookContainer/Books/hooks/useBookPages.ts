// useBookPages.ts
import { useState, useMemo } from "react";
import { getPagesForMode } from "../PagesLoader";
import type { BookMode } from "../../types";

export function useBookPages(initialMode: BookMode = 'newCharacter') {
    const [mode, setMode] = useState<BookMode>(initialMode);
    const pages = useMemo(() => getPagesForMode(mode), [mode]);
    
    return { mode, setMode, pages };
}