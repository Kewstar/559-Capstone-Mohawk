// NewCharacterPages.tsx 
// import { Page } from "../Page"

// import { NEW_CHARACTER_PAGES_CONFIG as CONFIG } from "./NewCharacterPagesConfig";

import { CoreBlock1, CoreBlock2 } from "./Core/Core";
import { ClassBlock1, ClassBlock2 } from "./Class/Class";
import { BackgroundBlock1, BackgroundBlock2 } from "./Background/Background";
import { RaceBlock1, RaceBlock2 } from "./Race/Race";
import { StatsBlock1, StatsBlock2 } from "./Stats/Stats";
import { EquipmentBlock1, EqupimentBlock2 } from "./Equipment/Equipment";
import { JournalBlock1, JournalBlock2 } from "./Journal/Journal";
import type { Section } from "../../types";


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

// export function NewCharacterPages() {
//     return [
//         <Page key={CONFIG.core.key} className="demoPage">
//             <h1>New Character #1</h1>
//             <h1>CORE</h1>
//             <p className="author">by Jane Doe</p>
//         </Page>,
//         <Page key={`${CONFIG.core.key} blank`} className="demoPage">
//             <h1>Blank Page for CORE</h1>
//         </Page>,


//         <Page key={CONFIG.class.key} className="demoPage">
//             <h1>New Character #2</h1>
//             <h1>CLASS</h1>
//             <span className="chapter-num">Chapter 1</span>
//             <h2>The Beginning</h2>
//         </Page>,
//         <Page key={`${CONFIG.class.key} blank`} className="demoPage">
//             <h1>Blank Page for CLASS</h1>
//         </Page>,


//         <Page key={CONFIG.background.key} className="demoPage">
//             <h1>New Character #3</h1>
//             <h1>BACKGROUND</h1>
//             <div className="grid">
//                 <img src="src/assets/loginform/eye-visible.png" alt="" />
//             </div>
//         </Page>,
//         <Page key={`${CONFIG.background.key} blank`} className="demoPage">
//             <h1>Blank Page for BACKGROUND</h1>
//         </Page>,


//         <Page key={CONFIG.race.key} className="demoPage">
//             <h1>New Character #4</h1>
//             <h1>RACE</h1>
//             <div className="grid">
//                 <img src="src/assets/loginform/eye-visible.png" alt="" />
//             </div>
//         </Page>,
//         <Page key={`${CONFIG.race.key} blank`} className="demoPage">
//             <h1>Blank Page for RACE</h1>
//         </Page>,


//         <Page key={CONFIG.stats.key} className="demoPage">
//             <h1>New Character #5</h1>
//             <h1>STATS</h1>
//             <blockquote>It was a dark and stormy night.</blockquote>
//         </Page>,
//         <Page key={`${CONFIG.stats.key} blank`} className="demoPage">
//             <h1>Blank Page for STATS</h1>
//         </Page>,


//         <Page key={CONFIG.equipment.key} className="demoPage">
//             <h1>New Character #6</h1>
//             <h1>EQUIPMENT</h1>
//             <blockquote>To be or not to be.</blockquote>
//         </Page>,
//         <Page key={`${CONFIG.equipment.key} blank`} className="demoPage">
//             <h1>Blank Page for EQIUPMENT</h1>
//         </Page>,


//         <Page key={CONFIG.journal.key} className="demoPage">
//             <h1>New Character #7</h1>
//             <h1>JOURNAL</h1>
//             <blockquote>Hiiiii.</blockquote>
//         </Page>,
//         <Page key={`${CONFIG.journal.key} blank`} className="demoPage">
//             <h1>Blank Page for JOURNAL</h1>
//         </Page>,

//     ];
// };