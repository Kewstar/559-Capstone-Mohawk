// NewCharacterPages.tsx 
import type { PageSection } from "../../types";

import { CoreBlock1, CoreBlock2 } from "./Core/Core";
import { ClassBlockLeft, ClassBlockRight } from "./Class/Class";
import { BackgroundBlock1, BackgroundBlock2 } from "./Background/Background";
import { RaceBlockLeft, RaceBlockRight } from "./Race/Race";
import { AbilitiesBlockLeft, AbilitiesBlockRight } from "./Abilities/Abilities";
import { EquipmentBlock1, EquipmentBlock2 } from "./Equipment/Equipment";
import { JournalBlock1, JournalBlock2 } from "./Journal/Journal";


import type { NewCharacterPageId } from "../types";
type NewCharacterSection = Omit<PageSection, "key"> & {
    key: NewCharacterPageId
};

export const NEW_CHARACTER_SECTIONS: NewCharacterSection[] = [
    {
        key: 'new_character_core',      
        label: 'CORE',      
        blocks: [<CoreBlock1 />, <CoreBlock2 />]   
    },
    {
        key: 'new_character_class',
        label: 'CLASS',
        blocks: [<ClassBlockLeft />, <ClassBlockRight />]  
    },
    {   key: 'new_character_background',
        label: 'BACKGROUND',
        blocks: [<BackgroundBlock1 />, <BackgroundBlock2 />]
    },
    {   key: 'new_character_race',
        label: 'RACE',
        blocks: [<RaceBlockLeft />, <RaceBlockRight />]
    },
    {   key: 'new_character_abilities',
        label: 'ABILITIES',
        blocks: [<AbilitiesBlockLeft />, <AbilitiesBlockRight />]
    },
    {   key: 'new_character_equipment',
        label: 'EQUIPMENT',
        blocks: [<EquipmentBlock1 />, <EquipmentBlock2 />]
    },
    {   key: 'new_character_journal',
        label: 'JOURNAL',
        blocks: [<JournalBlock1 />, <JournalBlock2 />]
    },
];