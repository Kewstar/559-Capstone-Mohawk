import type { RaceDetails } from "../types";

export const halfElf: RaceDetails = {
    "name": "half-elf",
    "label": "Half-Elf",
    "speed": 30,
    "size": "Medium",
    "sizeDescription": "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.",
    "age": "Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",
    "alignment": "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes prove unreliable, or at least unpredictable.",
    "languageDescription": "You can speak, read, and write Common, Elvish, and one extra language of your choice.",
    "darkvision": 60,
    "abilityBonuses": [
        {
            "ability": "cha",
            "bonus": 2
        }
    ],
    "abilityBonusChoice": {
        "choose": 2,
        "options": [
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
            }
        ]
    },
    "languages": [
        "common",
        "elvish"
    ],
    "languageChoice": {
        "choose": 1,
        "options": [
            "dwarvish",
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
    "traitIds": [
        "darkvision",
        "fey-ancestry",
        "skill-versatility"
    ],
    "subraces": [],
    "traits": {
        "darkvision": {
            "id": "darkvision",
            "name": "Darkvision",
            "proficiencies": []
        },
        "fey-ancestry": {
            "id": "fey-ancestry",
            "name": "Fey Ancestry",
            "proficiencies": []
        },
        "skill-versatility": {
            "id": "skill-versatility",
            "name": "Skill Versatility",
            "proficiencies": [],
            "proficiencyChoice": {
                "choose": 2,
                "options": [
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "skill-acrobatics",
                            "name": "Skill: Acrobatics",
                            "type": "Skills"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "skill-animal-handling",
                            "name": "Skill: Animal Handling",
                            "type": "Skills"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "skill-arcana",
                            "name": "Skill: Arcana",
                            "type": "Skills"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "skill-athletics",
                            "name": "Skill: Athletics",
                            "type": "Skills"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "skill-deception",
                            "name": "Skill: Deception",
                            "type": "Skills"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "skill-history",
                            "name": "Skill: History",
                            "type": "Skills"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "skill-insight",
                            "name": "Skill: Insight",
                            "type": "Skills"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "skill-intimidation",
                            "name": "Skill: Intimidation",
                            "type": "Skills"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "skill-investigation",
                            "name": "Skill: Investigation",
                            "type": "Skills"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "skill-medicine",
                            "name": "Skill: Medicine",
                            "type": "Skills"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "skill-nature",
                            "name": "Skill: Nature",
                            "type": "Skills"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "skill-perception",
                            "name": "Skill: Perception",
                            "type": "Skills"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "skill-performance",
                            "name": "Skill: Performance",
                            "type": "Skills"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "skill-persuasion",
                            "name": "Skill: Persuasion",
                            "type": "Skills"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "skill-religion",
                            "name": "Skill: Religion",
                            "type": "Skills"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "skill-sleight-of-hand",
                            "name": "Skill: Sleight of Hand",
                            "type": "Skills"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "skill-stealth",
                            "name": "Skill: Stealth",
                            "type": "Skills"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "skill-survival",
                            "name": "Skill: Survival",
                            "type": "Skills"
                        }
                    }
                ]
            }
        }
    },
    "traitDescriptions": {
        "darkvision": [
            "You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray."
        ],
        "fey-ancestry": [
            "You have advantage on saving throws against being charmed, and magic cannot put you to sleep."
        ],
        "skill-versatility": [
            "You gain proficiency in two skills of your choice."
        ]
    }
};
