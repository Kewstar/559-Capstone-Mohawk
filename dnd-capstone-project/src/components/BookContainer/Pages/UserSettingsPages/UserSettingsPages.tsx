// UserSettings.tsx
import type { PageSection } from "../../types";

import { SettingsBlock1, SettingsBlock2 } from "./Settings/Settings";

export const USER_PROFILE_SECTIONS: PageSection[] = [
    {
        key: 'user_settings_settings',      
        label: 'SETTINGS',      
        blocks: [<SettingsBlock1 />, <SettingsBlock2 />]   
    },
];