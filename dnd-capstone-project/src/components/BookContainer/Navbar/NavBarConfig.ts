// NavBarConfig.js
import type { BookMode } from "../types";
import type { PageConfig } from "./types";

import { NEW_CHARACTER_PAGES_CONFIG as NEWCH } from "../Books/NewCharacterPages/NewCharacterPagesConfig";

export const PAGE_CONFIG: Record<BookMode, PageConfig> = {
    newCharacter: {
        label: 'NEW CHARACTER',
        tabs: [
            { 
                key: NEWCH.core.key,
                pgIndex: NEWCH.core.pgIndex,
                label: NEWCH.core.label
            },
            { 
                key: NEWCH.class.key,
                pgIndex: NEWCH.class.pgIndex,
                label: NEWCH.class.label,
            },
            { 
                key: NEWCH.background.key,
                pgIndex: NEWCH.background.pgIndex,
                label: NEWCH.background.label,
            },
            { 
                key: NEWCH.race.key,
                pgIndex: NEWCH.race.pgIndex,
                label: NEWCH.race.label,
            },
            { 
                key: NEWCH.stats.key,
                pgIndex: NEWCH.stats.pgIndex,
                label: NEWCH.stats.label,
            },
            { 
                key: NEWCH.equipment.key,
                pgIndex: NEWCH.equipment.pgIndex,
                label: NEWCH.equipment.label,
            },
            { 
                key: NEWCH.journal.key,
                pgIndex: NEWCH.journal.pgIndex,
                label: NEWCH.journal.label,
            },
        ],
        role: 'player',
    },
    loadCharacter: {
        label: 'LOAD CHARACTER',
        tabs: [
            { key: 'load_character_browse', pgIndex: 0, label: 'Browse' },
            { key: 'load_character_import', pgIndex: 2, label: 'Import' },
        ],
        role: 'player',
    },
    gmTools: {
        label: 'GM TOOLS',
        tabs: [
            { key: 'profile',   pgIndex: 0, label: 'Profile' },
            { key: 'display',   pgIndex: 2, label: 'Display' },
        ],
        role: 'gm',
    },
    userSettings: {
        label: 'USER SETTINGS',
        tabs: [
            { key: 'user_settings_profile', pgIndex: 0, label: 'Profile' },
            { key: 'user_settings_display', pgIndex: 2, label: 'Display' },
        ],
        role: 'player',
    },
};