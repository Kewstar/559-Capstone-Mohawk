export const PROFICIENCY_TYPES = [
    "Armor", "Weapons", "Artisan's Tools", "Musical Instruments", "Gaming Sets",
    "Other", "Vehicles", "Saving Throws", "Skills",
] as const;
export type ProficiencyType = (typeof PROFICIENCY_TYPES)[number];


/** What a proficiency applies to. */
export type ProficiencyCovers =
    | { kind: "category"; index: string }
    | { kind: "item"; index: string }       
    | { kind: "skill"; index: string }      
    | { kind: "ability"; index: string };   


export interface ProficiencyData {
    index: string;
    name: string;
    type: ProficiencyType;
    covers: ProficiencyCovers;
}