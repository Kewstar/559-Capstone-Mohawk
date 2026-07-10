// PagesLoader.tsx
import NewCharacterPages from "./NewCharacterPages/NewCharacterPages";
import LoadCharactersPages from "./LoadCharactersPages/LoadCharactersPages";
import type { BookMode } from "../types";

export function getPagesForMode(mode: BookMode) {
    switch (mode) {
        case 'newCharacter':    return NewCharacterPages();
        case 'loadCharacter':   return LoadCharactersPages();
        // case 'userProfile':     return NewCharacterPages;
        default:                return defaultpages;
    }
}

import { Page } from "./Page";

export const defaultpages = [
    <Page key="default_1" className="demoPage">
        <h1>DEFAULT PAGE #1</h1>
    </Page>,
    // <NewCharacterPage />,

    <Page key="default_1" className="demoPage">
        <h1>DEFAULT PAGE #2</h1>
    </Page>,
];