// LoadCharactersPages.tsx 
import type { Section } from "../../types";

import { CharacterBlock1, CharacterBlock2 } from "./Characters/Characters";

export const LOAD_CHARACTER_SECTIONS: Section[] = [
    {
        key: 'new_character_core',      
        label: 'MY CHARACTERS',      
        blocks: [<CharacterBlock1 />, <CharacterBlock2 />]   
    },
];