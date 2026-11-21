/** A language characters can speak. */
export interface LanguageDetails {
    index: string;
    name: string;
    type: "Standard" | "Exotic";
    script?: string;
    typicalSpeakers: string[];
    description?: string;
}