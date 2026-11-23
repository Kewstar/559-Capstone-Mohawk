import type { RaceDetails } from "../types";

export const human: RaceDetails = {
    "name": "human",
    "label": "Human",
    "speed": 30,
    "size": "Medium",
    "sizeDescription": "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.",
    "age": "Humans reach adulthood in their late teens and live less than a century.",
    "alignment": "Humans tend toward no particular alignment. The best and the worst are found among them.",
    "languageDescription": "You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.",
    "darkvision": 0,
    "abilityBonuses": [
        {
            "ability": "str",
            "bonus": 1
        },
        {
            "ability": "dex",
            "bonus": 1
        },
        {
            "ability": "con",
            "bonus": 1
        },
        {
            "ability": "int",
            "bonus": 1
        },
        {
            "ability": "wis",
            "bonus": 1
        },
        {
            "ability": "cha",
            "bonus": 1
        }
    ],
    "languages": [
        "common"
    ],
    "languageChoice": {
        "choose": 1,
        "options": [
            "dwarvish",
            "elvish",
            "giant",
            "gnomish",
            "goblin",
            "halfling",
            "orc",
            "abyssal",
            "celestial",
            "draconic",
            "deep-speech",
            "infernal",
            "primordial",
            "sylvan",
            "undercommon"
        ]
    },
    "traitIds": [],
    "subraces": [],
    "traits": {},
    "traitDescriptions": {}
};
