// UserSettings.tsx
import type { Section } from "../../types";

import { SettingsBlock1, SettingsBlock2 } from "./Settings/Settings";

export const USER_PROFILE_SECTIONS: Section[] = [
    {
        key: 'user_settings_settings',      
        label: 'SETTINGS',      
        blocks: [<SettingsBlock1 />, <SettingsBlock2 />]   
    },
];