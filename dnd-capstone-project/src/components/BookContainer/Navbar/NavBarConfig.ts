// NavBarConfig.js
import type { BookMode } from "../types";
import type { PageConfig } from "./types";


export const PAGE_CONFIG: Record<BookMode, PageConfig> = {
    newCharacter: {
        label: 'NEW CHARACTER',
        role: 'player',
    },
    loadCharacter: {
        label: 'LOAD CHARACTER',
        role: 'player',
    },
    gmTools: {
        label: 'GM TOOLS',
        role: 'gm',
    },
    userSettings: {
        label: 'USER SETTINGS',
        role: 'player',
    },
};