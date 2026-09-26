// NewCharacterPages.tsx 
import type { Section } from "../../types";

import { CoreBlock1, CoreBlock2 } from "./Core/Core";
import { ClassBlock1, ClassBlock2 } from "./Class/Class";
import { BackgroundBlock1, BackgroundBlock2 } from "./Background/Background";
import { RaceBlock1, RaceBlock2 } from "./Race/Race";
import { StatsBlock1, StatsBlock2 } from "./Stats/Stats";
import { EquipmentBlock1, EqupimentBlock2 } from "./Equipment/Equipment";
import { JournalBlock1, JournalBlock2 } from "./Journal/Journal";


import type { NewCharacterPageId } from "../types";
type NewCharacterSection = Omit<Section, "key"> & {
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
        blocks: [<ClassBlock1 />, <ClassBlock2 />]  
    },
    {   key: 'new_character_background',
        label: 'BACKGROUND',
        blocks: [<BackgroundBlock1 />, <BackgroundBlock2 />]
    },
    {   key: 'new_character_race',
        label: 'RACE',
        blocks: [<RaceBlock1 />, <RaceBlock2 />]
    },
    {   key: 'new_character_stats',
        label: 'STATS',
        blocks: [<StatsBlock1 />, <StatsBlock2 />]
    },
    {   key: 'new_character_equipment',
        label: 'EQUIPMENT',
        blocks: [<EquipmentBlock1 />, <EqupimentBlock2 />]
    },
    {   key: 'new_character_journal',
        label: 'STATS',
        blocks: [<JournalBlock1 />, <JournalBlock2 />]
    },
];