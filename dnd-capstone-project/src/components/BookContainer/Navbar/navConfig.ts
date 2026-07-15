import type { BookMode } from "../types";
import type { PageConfig } from "./types";

// navConfig.js
export const PAGE_CONFIG: Record<BookMode, PageConfig> = {
    newCharacter: {
        label: 'NEW CHARACTER',
        tabs: [
            { key: 'core',          label: 'CORE'       },
            { key: 'class',         label: 'CLASS'      },
            { key: 'background',    label: 'BACKGROUND' },
            { key: 'race',          label: 'RACE'       },
            { key: 'stats',         label: 'STATS'      },
            { key: 'equipment',     label: 'EQUIPMENT'  },
            { key: 'journal',       label: 'JOURNAL'    },
        ],
        role: 'player',
    },
    loadCharacter: {
        label: 'LOAD CHARACTER',
        tabs: [
            { key: 'browse', label: 'Browse' },
            { key: 'import', label: 'Import' },
        ],
        role: 'player',
    },
    gmTools: {
        label: 'GM TOOLS',
        tabs: [
            { key: 'profile', label: 'Profile' },
            { key: 'display', label: 'Display' },
        ],
        role: 'gm',
    },
    userSettings: {
        label: 'USER SETTINGS',
        tabs: [
            { key: 'profile', label: 'Profile' },
            { key: 'display', label: 'Display' },
        ],
        role: 'player',
    },
};