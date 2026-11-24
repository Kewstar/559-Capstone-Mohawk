import type { ClassDetails } from "../types";

export const ranger: ClassDetails = {
    "name": "ranger",
    "label": "Ranger",
    "hitDie": 10,
    "savingThrows": [
        "str",
        "dex"
    ],
    "proficiencies": [
        {
            "index": "light-armor",
            "name": "Light Armor",
            "type": "Armor"
        },
        {
            "index": "martial-weapons",
            "name": "Martial Weapons",
            "type": "Weapons"
        },
        {
            "index": "medium-armor",
            "name": "Medium Armor",
            "type": "Armor"
        },
        {
            "index": "shields",
            "name": "Shields",
            "type": "Armor"
        },
        {
            "index": "simple-weapons",
            "name": "Simple Weapons",
            "type": "Weapons"
        }
    ],
    "proficiencyChoices": [
        {
            "choose": 3,
            "desc": "Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival",
            "options": [
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
                        "index": "skill-athletics",
                        "name": "Skill: Athletics",
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
                        "index": "skill-investigation",
                        "name": "Skill: Investigation",
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
    ],
    "startingEquipment": {
        "items": [
            {
                "index": "longbow",
                "name": "Longbow",
                "quantity": 1,
                "category": "Weapon"
            },
            {
                "index": "arrow",
                "name": "Arrow",
                "quantity": 20,
                "category": "Ammunition"
            }
        ],
        "choices": [
            {
                "choose": 1,
                "desc": "(a) scale mail or (b) leather armor",
                "options": [
                    {
                        "parts": [
                            {
                                "kind": "item",
                                "itemIndex": "scale-mail",
                                "quantity": 1
                            }
                        ]
                    },
                    {
                        "parts": [
                            {
                                "kind": "item",
                                "itemIndex": "leather-armor",
                                "quantity": 1
                            }
                        ]
                    }
                ]
            },
            {
                "choose": 1,
                "desc": "(a) two shortswords or (b) two simple melee weapons",
                "options": [
                    {
                        "parts": [
                            {
                                "kind": "item",
                                "itemIndex": "shortsword",
                                "quantity": 2
                            }
                        ]
                    },
                    {
                        "parts": [
                            {
                                "kind": "category",
                                "categoryIndex": "simple-melee-weapons",
                                "choose": 2
                            }
                        ]
                    }
                ]
            },
            {
                "choose": 1,
                "desc": "(a) a dungeoneer’s pack or (b) an explorer’s pack",
                "options": [
                    {
                        "parts": [
                            {
                                "kind": "item",
                                "itemIndex": "dungeoneers-pack",
                                "quantity": 1
                            }
                        ]
                    },
                    {
                        "parts": [
                            {
                                "kind": "item",
                                "itemIndex": "explorers-pack",
                                "quantity": 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "multiclassing": {
        "prerequisites": [
            {
                "ability": "dex",
                "minimum": 13
            },
            {
                "ability": "wis",
                "minimum": 13
            }
        ],
        "proficiencies": [
            {
                "index": "light-armor",
                "name": "Light Armor",
                "type": "Armor"
            },
            {
                "index": "martial-weapons",
                "name": "Martial Weapons",
                "type": "Weapons"
            },
            {
                "index": "medium-armor",
                "name": "Medium Armor",
                "type": "Armor"
            },
            {
                "index": "shields",
                "name": "Shields",
                "type": "Armor"
            },
            {
                "index": "simple-weapons",
                "name": "Simple Weapons",
                "type": "Weapons"
            }
        ],
        "proficiencyChoices": [
            {
                "choose": 1,
                "options": [
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
                            "index": "skill-athletics",
                            "name": "Skill: Athletics",
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
                            "index": "skill-investigation",
                            "name": "Skill: Investigation",
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
        ]
    },
    "primaryAbilities": [
        "dex",
        "wis"
    ],
    "classTable": [
        {
            "level": 1,
            "abilityScoreBonuses": 0,
            "featureIds": [
                "favored-enemy-1-type",
                "natural-explorer-1-terrain-type"
            ],
            "classSpecific": {
                "favoredEnemies": 1,
                "favoredTerrain": 1
            },
            "spellcasting": {
                "spellsKnown": 0,
                "spellSlots": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        {
            "level": 2,
            "abilityScoreBonuses": 0,
            "featureIds": [
                "ranger-fighting-style",
                "spellcasting-ranger"
            ],
            "classSpecific": {
                "favoredEnemies": 1,
                "favoredTerrain": 1
            },
            "spellcasting": {
                "spellsKnown": 2,
                "spellSlots": [
                    2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        {
            "level": 3,
            "abilityScoreBonuses": 0,
            "featureIds": [
                "primeval-awareness",
                "ranger-archetype"
            ],
            "classSpecific": {
                "favoredEnemies": 1,
                "favoredTerrain": 1
            },
            "spellcasting": {
                "spellsKnown": 3,
                "spellSlots": [
                    3,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        {
            "level": 4,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "ranger-ability-score-improvement-1"
            ],
            "classSpecific": {
                "favoredEnemies": 1,
                "favoredTerrain": 1
            },
            "spellcasting": {
                "spellsKnown": 3,
                "spellSlots": [
                    3,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        {
            "level": 5,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "ranger-extra-attack"
            ],
            "classSpecific": {
                "favoredEnemies": 1,
                "favoredTerrain": 1
            },
            "spellcasting": {
                "spellsKnown": 4,
                "spellSlots": [
                    4,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        {
            "level": 6,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "favored-enemy-2-types",
                "natural-explorer-2-terrain-types"
            ],
            "classSpecific": {
                "favoredEnemies": 2,
                "favoredTerrain": 2
            },
            "spellcasting": {
                "spellsKnown": 4,
                "spellSlots": [
                    4,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        {
            "level": 7,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "ranger-archetype-improvement-1"
            ],
            "classSpecific": {
                "favoredEnemies": 2,
                "favoredTerrain": 2
            },
            "spellcasting": {
                "spellsKnown": 5,
                "spellSlots": [
                    4,
                    3,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        {
            "level": 8,
            "abilityScoreBonuses": 2,
            "featureIds": [
                "ranger-ability-score-improvement-2",
                "ranger-lands-stride"
            ],
            "classSpecific": {
                "favoredEnemies": 2,
                "favoredTerrain": 2
            },
            "spellcasting": {
                "spellsKnown": 5,
                "spellSlots": [
                    4,
                    3,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        {
            "level": 9,
            "abilityScoreBonuses": 2,
            "featureIds": [],
            "classSpecific": {
                "favoredEnemies": 2,
                "favoredTerrain": 2
            },
            "spellcasting": {
                "spellsKnown": 6,
                "spellSlots": [
                    4,
                    3,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        {
            "level": 10,
            "abilityScoreBonuses": 2,
            "featureIds": [
                "hide-in-plain-sight",
                "natural-explorer-3-terrain-types"
            ],
            "classSpecific": {
                "favoredEnemies": 2,
                "favoredTerrain": 3
            },
            "spellcasting": {
                "spellsKnown": 6,
                "spellSlots": [
                    4,
                    3,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        {
            "level": 11,
            "abilityScoreBonuses": 2,
            "featureIds": [
                "ranger-archetype-improvement-2"
            ],
            "classSpecific": {
                "favoredEnemies": 2,
                "favoredTerrain": 3
            },
            "spellcasting": {
                "spellsKnown": 7,
                "spellSlots": [
                    4,
                    3,
                    3,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        {
            "level": 12,
            "abilityScoreBonuses": 3,
            "featureIds": [
                "ranger-ability-score-improvement-3"
            ],
            "classSpecific": {
                "favoredEnemies": 2,
                "favoredTerrain": 3
            },
            "spellcasting": {
                "spellsKnown": 7,
                "spellSlots": [
                    4,
                    3,
                    3,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        {
            "level": 13,
            "abilityScoreBonuses": 3,
            "featureIds": [],
            "classSpecific": {
                "favoredEnemies": 2,
                "favoredTerrain": 3
            },
            "spellcasting": {
                "spellsKnown": 8,
                "spellSlots": [
                    4,
                    3,
                    3,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        {
            "level": 14,
            "abilityScoreBonuses": 3,
            "featureIds": [
                "favored-enemy-3-enemies",
                "vanish"
            ],
            "classSpecific": {
                "favoredEnemies": 3,
                "favoredTerrain": 3
            },
            "spellcasting": {
                "spellsKnown": 8,
                "spellSlots": [
                    4,
                    3,
                    3,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        {
            "level": 15,
            "abilityScoreBonuses": 3,
            "featureIds": [
                "ranger-archetype-improvement-3"
            ],
            "classSpecific": {
                "favoredEnemies": 3,
                "favoredTerrain": 3
            },
            "spellcasting": {
                "spellsKnown": 9,
                "spellSlots": [
                    4,
                    3,
                    3,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        {
            "level": 16,
            "abilityScoreBonuses": 4,
            "featureIds": [
                "ranger-ability-score-improvement-4"
            ],
            "classSpecific": {
                "favoredEnemies": 3,
                "favoredTerrain": 3
            },
            "spellcasting": {
                "spellsKnown": 9,
                "spellSlots": [
                    4,
                    3,
                    3,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        {
            "level": 17,
            "abilityScoreBonuses": 4,
            "featureIds": [],
            "classSpecific": {
                "favoredEnemies": 3,
                "favoredTerrain": 3
            },
            "spellcasting": {
                "spellsKnown": 10,
                "spellSlots": [
                    4,
                    3,
                    3,
                    3,
                    1,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        {
            "level": 18,
            "abilityScoreBonuses": 4,
            "featureIds": [
                "feral-senses"
            ],
            "classSpecific": {
                "favoredEnemies": 3,
                "favoredTerrain": 3
            },
            "spellcasting": {
                "spellsKnown": 10,
                "spellSlots": [
                    4,
                    3,
                    3,
                    3,
                    1,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        {
            "level": 19,
            "abilityScoreBonuses": 5,
            "featureIds": [
                "ranger-ability-score-improvement-5"
            ],
            "classSpecific": {
                "favoredEnemies": 3,
                "favoredTerrain": 3
            },
            "spellcasting": {
                "spellsKnown": 11,
                "spellSlots": [
                    4,
                    3,
                    3,
                    3,
                    2,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        {
            "level": 20,
            "abilityScoreBonuses": 5,
            "featureIds": [
                "foe-slayer"
            ],
            "classSpecific": {
                "favoredEnemies": 3,
                "favoredTerrain": 3
            },
            "spellcasting": {
                "spellsKnown": 11,
                "spellSlots": [
                    4,
                    3,
                    3,
                    3,
                    2,
                    0,
                    0,
                    0,
                    0
                ]
            }
        }
    ],
    "features": {
        "favored-enemy-1-type": {
            "id": "favored-enemy-1-type",
            "name": "Favored Enemy (1 type)",
            "level": 1
        },
        "natural-explorer-1-terrain-type": {
            "id": "natural-explorer-1-terrain-type",
            "name": "Natural Explorer (1 terrain type)",
            "level": 1
        },
        "ranger-fighting-style": {
            "id": "ranger-fighting-style",
            "name": "Fighting Style",
            "level": 2
        },
        "spellcasting-ranger": {
            "id": "spellcasting-ranger",
            "name": "Spellcasting: Ranger",
            "level": 2
        },
        "primeval-awareness": {
            "id": "primeval-awareness",
            "name": "Primeval Awareness",
            "level": 3
        },
        "ranger-archetype": {
            "id": "ranger-archetype",
            "name": "Ranger Archetype",
            "level": 3
        },
        "ranger-ability-score-improvement-1": {
            "id": "ranger-ability-score-improvement-1",
            "name": "Ability Score Improvement",
            "level": 4
        },
        "ranger-extra-attack": {
            "id": "ranger-extra-attack",
            "name": "Extra Attack",
            "level": 5
        },
        "favored-enemy-2-types": {
            "id": "favored-enemy-2-types",
            "name": "Favored Enemy (2 types)",
            "level": 6
        },
        "natural-explorer-2-terrain-types": {
            "id": "natural-explorer-2-terrain-types",
            "name": "Natural Explorer (2 terrain types)",
            "level": 6
        },
        "ranger-archetype-improvement-1": {
            "id": "ranger-archetype-improvement-1",
            "name": "Ranger Archetype feature",
            "level": 7
        },
        "ranger-ability-score-improvement-2": {
            "id": "ranger-ability-score-improvement-2",
            "name": "Ability Score Improvement",
            "level": 8
        },
        "ranger-lands-stride": {
            "id": "ranger-lands-stride",
            "name": "Land's Stride",
            "level": 8
        },
        "hide-in-plain-sight": {
            "id": "hide-in-plain-sight",
            "name": "Hide in Plain Sight",
            "level": 10
        },
        "natural-explorer-3-terrain-types": {
            "id": "natural-explorer-3-terrain-types",
            "name": "Natural Explorer (3 terrain types)",
            "level": 10
        },
        "ranger-archetype-improvement-2": {
            "id": "ranger-archetype-improvement-2",
            "name": "Ranger Archetype feature",
            "level": 11
        },
        "ranger-ability-score-improvement-3": {
            "id": "ranger-ability-score-improvement-3",
            "name": "Ability Score Improvement",
            "level": 12
        },
        "favored-enemy-3-enemies": {
            "id": "favored-enemy-3-enemies",
            "name": "Favored Enemy (3 enemies)",
            "level": 14
        },
        "vanish": {
            "id": "vanish",
            "name": "Vanish",
            "level": 14
        },
        "ranger-archetype-improvement-3": {
            "id": "ranger-archetype-improvement-3",
            "name": "Ranger Archetype feature",
            "level": 15
        },
        "ranger-ability-score-improvement-4": {
            "id": "ranger-ability-score-improvement-4",
            "name": "Ability Score Improvement",
            "level": 16
        },
        "feral-senses": {
            "id": "feral-senses",
            "name": "Feral Senses",
            "level": 18
        },
        "ranger-ability-score-improvement-5": {
            "id": "ranger-ability-score-improvement-5",
            "name": "Ability Score Improvement",
            "level": 19
        },
        "foe-slayer": {
            "id": "foe-slayer",
            "name": "Foe Slayer",
            "level": 20
        },
        "hunters-prey": {
            "id": "hunters-prey",
            "name": "Hunter's Prey",
            "level": 3,
            "subclassId": "hunter"
        },
        "defensive-tactics": {
            "id": "defensive-tactics",
            "name": "Defensive Tactics",
            "level": 7,
            "subclassId": "hunter"
        },
        "multiattack": {
            "id": "multiattack",
            "name": "Multiattack",
            "level": 11,
            "subclassId": "hunter"
        },
        "superior-hunters-defense": {
            "id": "superior-hunters-defense",
            "name": "Superior Hunter's Defense",
            "level": 15,
            "subclassId": "hunter"
        }
    },
    "featureDescriptions": {
        "favored-enemy-1-type": [
            "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.",
            "Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.",
            "You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.",
            "When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.",
            "You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
        ],
        "natural-explorer-1-terrain-type": [
            "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.",
            "While traveling for an hour or more in your favored terrain, you gain the following benefits:",
            "- Difficult terrain doesn't slow your group's travel.",
            "- Your group can't become lost except by magical means.",
            "- Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.",
            "- If you are traveling alone, you can move stealthily at a normal pace.",
            "- When you forage, you find twice as much food as you normally would.",
            "- While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.",
            "You choose additional favored terrain types at 6th and 10th level."
        ],
        "ranger-fighting-style": [
            "At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again."
        ],
        "spellcasting-ranger": [
            "By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does."
        ],
        "primeval-awareness": [
            "Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn't reveal the creatures' location or number."
        ],
        "ranger-archetype": [
            "At 3rd level, you choose an archetype that you strive to emulate, such as the Hunter. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level."
        ],
        "ranger-ability-score-improvement-1": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "ranger-extra-attack": [
            "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
        ],
        "favored-enemy-2-types": [
            "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.",
            "Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.",
            "You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.",
            "When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.",
            "You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
        ],
        "natural-explorer-2-terrain-types": [
            "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.",
            "While traveling for an hour or more in your favored terrain, you gain the following benefits:",
            "- Difficult terrain doesn't slow your group's travel.",
            "- Your group can't become lost except by magical means.",
            "- Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.",
            "- If you are traveling alone, you can move stealthily at a normal pace.",
            "- When you forage, you find twice as much food as you normally would.",
            "- While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.",
            "You choose additional favored terrain types at 6th and 10th level."
        ],
        "ranger-archetype-improvement-1": [
            "At 3rd level, you choose an archetype that you strive to emulate, such as the Hunter. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level."
        ],
        "ranger-ability-score-improvement-2": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "ranger-lands-stride": [
            "Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.",
            "In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell."
        ],
        "hide-in-plain-sight": [
            "Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.",
            "Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit."
        ],
        "natural-explorer-3-terrain-types": [
            "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.",
            "While traveling for an hour or more in your favored terrain, you gain the following benefits:",
            "- Difficult terrain doesn't slow your group's travel.",
            "- Your group can't become lost except by magical means.",
            "- Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.",
            "- If you are traveling alone, you can move stealthily at a normal pace.",
            "- When you forage, you find twice as much food as you normally would.",
            "- While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.",
            "You choose additional favored terrain types at 6th and 10th level."
        ],
        "ranger-archetype-improvement-2": [
            "At 3rd level, you choose an archetype that you strive to emulate, such as the Hunter. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level."
        ],
        "ranger-ability-score-improvement-3": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "favored-enemy-3-enemies": [
            "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.",
            "Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.",
            "You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.",
            "When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.",
            "You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
        ],
        "vanish": [
            "Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail."
        ],
        "ranger-archetype-improvement-3": [
            "At 3rd level, you choose an archetype that you strive to emulate, such as the Hunter. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level."
        ],
        "ranger-ability-score-improvement-4": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "feral-senses": [
            "At 18th level, you gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it.",
            "You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't blinded or deafened."
        ],
        "ranger-ability-score-improvement-5": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "foe-slayer": [
            "At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied."
        ],
        "hunters-prey": [
            "At 3rd level, you gain one of the following features of your choice.",
            "Colossus Slayer",
            "Giant Killer",
            "Horde Breaker"
        ],
        "defensive-tactics": [
            "At 7th level, you gain one of the following features of your choice.",
            "Escape the Horde",
            "Multiattack Defense",
            "Steel Will"
        ],
        "multiattack": [
            "At 11th level, you gain one of the following features of your choice.",
            "Volley",
            "Whirlwind Attack"
        ],
        "superior-hunters-defense": [
            "At 15th level, you gain one of the following features of your choice.",
            "Evasion",
            "Stand Against the Tide",
            "Uncanny Dodge"
        ]
    },
    "spellcasting": {
        "ability": "wis",
        "startLevel": 2,
        "info": [
            {
                "name": "Spell Slots",
                "desc": [
                    "The Ranger table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                    "For example, if you know the 1st-level spell animal friendship and have a 1st-level and a 2nd-level spell slot available, you can cast animal friendship using either slot."
                ]
            },
            {
                "name": "Spells Known of 1st Level and Higher",
                "desc": [
                    "You know two 1st-level spells of your choice from the ranger spell list.",
                    "The Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level.",
                    "Additionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots."
                ]
            },
            {
                "name": "Spellcasting Ability",
                "desc": [
                    "Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one.",
                    "Spell save DC = 8 + your proficiency bonus + your Wisdom modifier.",
                    "Spell attack modifier = your proficiency bonus + your Wisdom modifier."
                ]
            }
        ],
        "spellList": [
            {
                "index": "alarm",
                "name": "Alarm",
                "level": 1
            },
            {
                "index": "animal-friendship",
                "name": "Animal Friendship",
                "level": 1
            },
            {
                "index": "cure-wounds",
                "name": "Cure Wounds",
                "level": 1
            },
            {
                "index": "detect-magic",
                "name": "Detect Magic",
                "level": 1
            },
            {
                "index": "detect-poison-and-disease",
                "name": "Detect Poison and Disease",
                "level": 1
            },
            {
                "index": "fog-cloud",
                "name": "Fog Cloud",
                "level": 1
            },
            {
                "index": "goodberry",
                "name": "Goodberry",
                "level": 1
            },
            {
                "index": "hunters-mark",
                "name": "Hunter's Mark",
                "level": 1
            },
            {
                "index": "jump",
                "name": "Jump",
                "level": 1
            },
            {
                "index": "longstrider",
                "name": "Longstrider",
                "level": 1
            },
            {
                "index": "speak-with-animals",
                "name": "Speak with Animals",
                "level": 1
            },
            {
                "index": "animal-messenger",
                "name": "Animal Messenger",
                "level": 2
            },
            {
                "index": "barkskin",
                "name": "Barkskin",
                "level": 2
            },
            {
                "index": "darkvision",
                "name": "Darkvision",
                "level": 2
            },
            {
                "index": "find-traps",
                "name": "Find Traps",
                "level": 2
            },
            {
                "index": "lesser-restoration",
                "name": "Lesser Restoration",
                "level": 2
            },
            {
                "index": "locate-animals-or-plants",
                "name": "Locate Animals or Plants",
                "level": 2
            },
            {
                "index": "locate-object",
                "name": "Locate Object",
                "level": 2
            },
            {
                "index": "pass-without-trace",
                "name": "Pass Without Trace",
                "level": 2
            },
            {
                "index": "protection-from-poison",
                "name": "Protection from Poison",
                "level": 2
            },
            {
                "index": "silence",
                "name": "Silence",
                "level": 2
            },
            {
                "index": "spike-growth",
                "name": "Spike Growth",
                "level": 2
            },
            {
                "index": "conjure-animals",
                "name": "Conjure Animals",
                "level": 3
            },
            {
                "index": "daylight",
                "name": "Daylight",
                "level": 3
            },
            {
                "index": "nondetection",
                "name": "Nondetection",
                "level": 3
            },
            {
                "index": "plant-growth",
                "name": "Plant Growth",
                "level": 3
            },
            {
                "index": "protection-from-energy",
                "name": "Protection From Energy",
                "level": 3
            },
            {
                "index": "speak-with-plants",
                "name": "Speak with Plants",
                "level": 3
            },
            {
                "index": "water-breathing",
                "name": "Water Breathing",
                "level": 3
            },
            {
                "index": "water-walk",
                "name": "Water Walk",
                "level": 3
            },
            {
                "index": "wind-wall",
                "name": "Wind Wall",
                "level": 3
            },
            {
                "index": "conjure-woodland-beings",
                "name": "Conjure Woodland Beings",
                "level": 4
            },
            {
                "index": "freedom-of-movement",
                "name": "Freedom of Movement",
                "level": 4
            },
            {
                "index": "locate-creature",
                "name": "Locate Creature",
                "level": 4
            },
            {
                "index": "stoneskin",
                "name": "Stoneskin",
                "level": 4
            },
            {
                "index": "commune-with-nature",
                "name": "Commune With Nature",
                "level": 5
            },
            {
                "index": "tree-stride",
                "name": "Tree Stride",
                "level": 5
            }
        ]
    },
    "subclasses": [
        {
            "id": "hunter",
            "name": "Hunter",
            "flavor": "Ranger Archetype",
            "description": [
                "Emulating the Hunter archetype means accepting your place as a bulwark between civilization and the terrors of the wilderness. As you walk the Hunter's path, you learn specialized techniques for fighting the threats you face, from rampaging ogres and hordes of orcs to towering giants and terrifying dragons."
            ],
            "levels": [
                {
                    "level": 3,
                    "featureIds": [
                        "hunters-prey"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 7,
                    "featureIds": [
                        "defensive-tactics"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 11,
                    "featureIds": [
                        "multiattack"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 15,
                    "featureIds": [
                        "superior-hunters-defense"
                    ],
                    "subclassSpecific": {}
                }
            ],
            "spells": []
        }
    ]
};
