// LoadCharactersPages.tsx 
import type { PageSection } from "../../types";

import { CharacterBlock1, CharacterBlock2 } from "./Characters/Characters";

export const LOAD_CHARACTER_SECTIONS: PageSection[] = [
    {
        key: 'new_character_core',      
        label: 'MY CHARACTERS',      
        blocks: [<CharacterBlock1 />, <CharacterBlock2 />]   
    },
];