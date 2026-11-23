// // types.ts
// export interface PageEntry {
//     key: string,
//     pgIndex: number,
//     label: string
// }

export type NewCharacterPageId = 
    'new_character_core'        | 
    'new_character_class'       | 
    'new_character_background'  | 
    'new_character_race'        | 
    'new_character_abilities'   | 
    'new_character_equipment'   | 
    'new_character_journal'     |
    'new_character_spells';

export type LoadCharacterPageId = 
    'load_character_characters';

// export type NewCharacterConfig = Record<NewCharacterPageId, PageEntry>;