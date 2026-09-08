// useBookPages.ts
import { useState, useMemo } from "react";
import { getPagesForMode } from "../PagesLoader";
import type { BookMode } from "../../types";

export function useBookPages(initialMode: BookMode = 'newCharacter') {
    const [bookMode, setBookMode] = useState<BookMode>(initialMode);
    const pages = useMemo(() => getPagesForMode(bookMode), [bookMode]);
    
    return { bookMode, setBookMode, pages };
}