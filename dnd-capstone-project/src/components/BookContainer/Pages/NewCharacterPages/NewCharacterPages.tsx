// NewCharacterPages.tsx 
import type { PageSection } from "../../types";

import { CoreBlock1, CoreBlock2 } from "./Core/Core";
import { ClassBlockLeft, ClassBlockRight } from "./Class/Class";
import { BackgroundBlockLeft, BackgroundBlockRight } from "./Background/Background";
import { RaceBlockLeft, RaceBlockRight } from "./Race/Race";
import { AbilitiesBlockLeft, AbilitiesBlockRight } from "./Abilities/Abilities";
import { EquipmentBlockLeft, EquipmentBlockRight } from "./Equipment/Equipment";
import { JournalBlock1, JournalBlock2 } from "./Journal/Journal";
import { SpellsBlockLeft, SpellsBlockRight } from "./Spells/Spells";

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
        blocks: [<BackgroundBlockLeft />, <BackgroundBlockRight />]
    },
    {   key: 'new_character_race',
        label: 'RACE',
        blocks: [<RaceBlockLeft />, <RaceBlockRight />]
    },
    {   key: 'new_character_abilities',
        label: 'ABILITIES',
        blocks: [<AbilitiesBlockLeft />, <AbilitiesBlockRight />]
    },
    {
        key: 'new_character_spells',
        label: 'SPELLS',
        blocks: [<SpellsBlockLeft />, <SpellsBlockRight />]
    },
    {   key: 'new_character_equipment',
        label: 'EQUIPMENT',
        blocks: [<EquipmentBlockLeft />, <EquipmentBlockRight />]
    },
    {   key: 'new_character_journal',
        label: 'JOURNAL',
        blocks: [<JournalBlock1 />, <JournalBlock2 />]
    },
];