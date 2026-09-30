// UserSettings.tsx
import type { PageSection } from "../../types";

import { SettingsBlockLeft, SettingsBlockRight } from "./Settings/Settings";

export const USER_PROFILE_SECTIONS: PageSection[] = [
    {
        key: 'user_settings_settings',      
        label: 'SETTINGS',      
        blocks: [<SettingsBlockLeft />, <SettingsBlockRight />]   
    },
];