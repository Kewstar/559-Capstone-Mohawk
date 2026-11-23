import type { RaceDetails } from "../types";

export const tiefling: RaceDetails = {
    "name": "tiefling",
    "label": "Tiefling",
    "speed": 30,
    "size": "Medium",
    "sizeDescription": "Tieflings are about the same size and build as humans. Your size is Medium.",
    "age": "Tieflings mature at the same rate as humans but live a few years longer.",
    "alignment": "Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.",
    "languageDescription": "You can speak, read, and write Common and Infernal.",
    "darkvision": 60,
    "abilityBonuses": [
        {
            "ability": "int",
            "bonus": 1
        },
        {
            "ability": "cha",
            "bonus": 2
        }
    ],
    "languages": [
        "common",
        "infernal"
    ],
    "traitIds": [
        "darkvision",
        "hellish-resistance",
        "infernal-legacy"
    ],
    "subraces": [],
    "traits": {
        "darkvision": {
            "id": "darkvision",
            "name": "Darkvision",
            "proficiencies": []
        },
        "hellish-resistance": {
            "id": "hellish-resistance",
            "name": "Hellish Resistance",
            "proficiencies": []
        },
        "infernal-legacy": {
            "id": "infernal-legacy",
            "name": "Infernal Legacy",
            "proficiencies": []
        }
    },
    "traitDescriptions": {
        "darkvision": [
            "You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray."
        ],
        "hellish-resistance": [
            "You have resistance to fire damage."
        ],
        "infernal-legacy": [
            "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
        ]
    }
};
