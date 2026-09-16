// PagesLoader.tsx
import { pagesAndTabsBuilder } from "./PagesAndTabsBuilder";

import { NEW_CHARACTER_SECTIONS } from "./NewCharacterPages/NewCharacterPages";
import { LOAD_CHARACTER_SECTIONS } from "./LoadCharactersPages/LoadCharactersPages";
import { USER_PROFILE_SECTIONS } from "./UserSettingsPages/UserSettingsPages";
import { GM_TOOLS_SECTIONS } from "./GMToolsPages/GmToolsPages";

// import LoadCharactersPages from "./LoadCharactersPages/LoadCharactersPages";
// import { NEW_CHARACTER_SECTIONS } from "./NewCharacterPages/NewCharacterPages";

import type { BookMode } from "../types";
// import { PAGE_CONFIG } from "../Navbar/NavBarConfig";

export function getPagesAndTabsForMode(
    mode: BookMode, 
    singlePageFlag: boolean
) {
    switch (mode) {
        case "newCharacter":
            return pagesAndTabsBuilder(NEW_CHARACTER_SECTIONS, singlePageFlag);

        case "loadCharacter":
            return pagesAndTabsBuilder(LOAD_CHARACTER_SECTIONS, singlePageFlag);

        case "userSettings":
            return pagesAndTabsBuilder(USER_PROFILE_SECTIONS, singlePageFlag);
            
        case "gmTools":
            return pagesAndTabsBuilder(GM_TOOLS_SECTIONS, singlePageFlag);
    

        default:
            // return { pages: defaultpages, tabs: PAGE_CONFIG[mode].tabs };
            return pagesAndTabsBuilder(LOAD_CHARACTER_SECTIONS, singlePageFlag);
            // return { pages: defaultpages };
    }
}

// export function getPagesForMode(mode: BookMode) {
//     switch (mode) {
//         case 'newCharacter':    return NewCharacterPages();
//         case 'loadCharacter':   return LoadCharactersPages();
//         // case 'userProfile':     return UserProfilePages();
//         default:                return defaultpages;
//     }
// }


import { Page } from "./Page";
export const defaultpages = [
    <Page key="default_1" className="demoPage">
        <h1>DEFAULT PAGE #1</h1>
    </Page>,

    <Page key="default_2" className="demoPage">
        <h1>DEFAULT PAGE #2</h1>
    </Page>,
];