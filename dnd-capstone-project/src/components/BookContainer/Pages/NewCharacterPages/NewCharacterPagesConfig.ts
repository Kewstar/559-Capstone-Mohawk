// NewCharacterPagesConfig.ts 
// import { useCalculateConfigIndex } from "../hooks/useCalculateConfigIndex" 
// import type { NewCharacterConfig } from "../types";


// import { useBookOrientation } from "../../hooks/useBookOrientation";
// const singlePageFlag = useBookOrientation();



// var pageIndex = 0;
// var idxInc = 2;
// if (singlePageFlag) {
//     idxInc = 1;
// }

// const CONFIG_NO_INDEX: NewCharacterConfig = {
//     core: {
//         key: 'new_character_core', 
//         pgIndex: 0, 
//         label: 'CORE'
//     }, 
//     class: {
//         key: 'new_character_class',  
//         pgIndex: 0,
//         label: 'CLASS'
//     },
//     background: {
//         key: 'new_character_background',  
//         pgIndex: 0,
//         label: 'BACKGROUND'
//     },
//     race: {
//         key: 'new_character_race',  
//         pgIndex: 0,
//         label: 'RACE'
//     },
//     stats: {
//         key: 'new_character_stats',  
//         pgIndex: 0,
//         label: 'STATS'
//     },
//     equipment: {
//         key: 'new_character_equipment', 
//         pgIndex: 0,
//         label: 'EQUIPMENT'
//     },
//     journal: {
//         key: 'new_character_journal',  
//         pgIndex: 0,
//         label: 'JOURNAL'
//     },
// }

// export let NEW_CHARACTER_PAGES_CONFIG = useCalculateConfigIndex(CONFIG_NO_INDEX);

export const NEW_CHARACTER_PAGES_CONFIG = {
    core: {
        key: 'new_character_core', 
        pgIndex: 0, 
        label: 'CORE'
    }, 
    class: {
        key: 'new_character_class', 
        pgIndex: 2,
        label: 'CLASS'
    },
    background: {
        key: 'new_character_background', 
        pgIndex: 4, 
        label: 'BACKGROUND'
    },
    race: {
        key: 'new_character_race', 
        pgIndex: 6, 
        label: 'RACE'
    },
    stats: {
        key: 'new_character_stats', 
        pgIndex: 8, 
        label: 'STATS'
    },
    equipment: {
        key: 'new_character_equipment', 
        pgIndex: 10,
        label: 'EQUIPMENT'
    },
    journal: {
        key: 'new_character_journal', 
        pgIndex: 12,
        label: 'JOURNAL'
    },
};

// export const NEW_CHARACTER_PAGES_CONFIG_SINGLE_PAGE = {};
// export const NEW_CHARACTER_PAGES_CONFIG_DOUBLE_PAGE = {};


//     { key: 'new_character_core',        pgIndex: 0,     label: 'CORE'       },
//     { key: 'new_character_class',       pgIndex: 2,     label: 'CLASS'      },
//     { key: 'new_character_background',  pgIndex: 4,     label: 'BACKGROUND' },
//     { key: 'new_character_race',        pgIndex: 6,     label: 'RACE'       },
//     { key: 'new_character_stats',       pgIndex: 8,     label: 'STATS'      },
//     { key: 'new_character_equipment',   pgIndex: 10,    label: 'EQUIPMENT'  },
//     { key: 'new_character_journal',     pgIndex: 12,    label: 'JOURNAL'    },
// ],