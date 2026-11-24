import type { ClassDetails } from "../types";

export const fighter: ClassDetails = {
    "name": "fighter",
    "label": "Fighter",
    "hitDie": 10,
    "savingThrows": [
        "str",
        "con"
    ],
    "proficiencies": [
        {
            "index": "all-armor",
            "name": "All armor",
            "type": "Armor"
        },
        {
            "index": "martial-weapons",
            "name": "Martial Weapons",
            "type": "Weapons"
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
            "choose": 2,
            "desc": "Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival",
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
                        "index": "skill-athletics",
                        "name": "Skill: Athletics",
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
                        "index": "skill-perception",
                        "name": "Skill: Perception",
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
        "items": [],
        "choices": [
            {
                "choose": 1,
                "desc": "(a) chain mail or (b) leather armor, longbow, and 20 arrows",
                "options": [
                    {
                        "parts": [
                            {
                                "kind": "item",
                                "itemIndex": "chain-mail",
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
                            },
                            {
                                "kind": "item",
                                "itemIndex": "longbow",
                                "quantity": 1
                            },
                            {
                                "kind": "item",
                                "itemIndex": "arrow",
                                "quantity": 20
                            }
                        ]
                    }
                ]
            },
            {
                "choose": 1,
                "desc": "(a) a martial weapon and a shield or (b) two martial weapons",
                "options": [
                    {
                        "parts": [
                            {
                                "kind": "category",
                                "categoryIndex": "martial-weapons",
                                "choose": 1
                            },
                            {
                                "kind": "item",
                                "itemIndex": "shield",
                                "quantity": 1
                            }
                        ]
                    },
                    {
                        "parts": [
                            {
                                "kind": "category",
                                "categoryIndex": "martial-weapons",
                                "choose": 2
                            }
                        ]
                    }
                ]
            },
            {
                "choose": 1,
                "desc": "(a) a light crossbow and 20 bolts or (b) two handaxes",
                "options": [
                    {
                        "parts": [
                            {
                                "kind": "item",
                                "itemIndex": "crossbow-light",
                                "quantity": 1
                            },
                            {
                                "kind": "item",
                                "itemIndex": "crossbow-bolt",
                                "quantity": 20
                            }
                        ]
                    },
                    {
                        "parts": [
                            {
                                "kind": "item",
                                "itemIndex": "handaxe",
                                "quantity": 2
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
        "prerequisites": [],
        "prerequisiteChoice": {
            "choose": 1,
            "options": [
                {
                    "ability": "str",
                    "minimum": 13
                },
                {
                    "ability": "dex",
                    "minimum": 13
                }
            ]
        },
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
        "proficiencyChoices": []
    },
    "primaryAbilities": [
        "str",
        "dex"
    ],
    "classTable": [
        {
            "level": 1,
            "abilityScoreBonuses": 0,
            "featureIds": [
                "fighter-fighting-style",
                "second-wind"
            ],
            "classSpecific": {
                "actionSurges": 0,
                "extraAttacks": 0,
                "indomitableUses": 0
            }
        },
        {
            "level": 2,
            "abilityScoreBonuses": 0,
            "featureIds": [
                "action-surge-1-use"
            ],
            "classSpecific": {
                "actionSurges": 1,
                "extraAttacks": 0,
                "indomitableUses": 0
            }
        },
        {
            "level": 3,
            "abilityScoreBonuses": 0,
            "featureIds": [
                "martial-archetype"
            ],
            "classSpecific": {
                "actionSurges": 1,
                "extraAttacks": 0,
                "indomitableUses": 0
            }
        },
        {
            "level": 4,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "fighter-ability-score-improvement-1"
            ],
            "classSpecific": {
                "actionSurges": 1,
                "extraAttacks": 0,
                "indomitableUses": 0
            }
        },
        {
            "level": 5,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "extra-attack-1"
            ],
            "classSpecific": {
                "actionSurges": 1,
                "extraAttacks": 1,
                "indomitableUses": 0
            }
        },
        {
            "level": 6,
            "abilityScoreBonuses": 2,
            "featureIds": [
                "fighter-ability-score-improvement-2"
            ],
            "classSpecific": {
                "actionSurges": 1,
                "extraAttacks": 1,
                "indomitableUses": 0
            }
        },
        {
            "level": 7,
            "abilityScoreBonuses": 2,
            "featureIds": [
                "martial-archetype-improvement-1"
            ],
            "classSpecific": {
                "actionSurges": 1,
                "extraAttacks": 1,
                "indomitableUses": 0
            }
        },
        {
            "level": 8,
            "abilityScoreBonuses": 3,
            "featureIds": [
                "fighter-ability-score-improvement-3"
            ],
            "classSpecific": {
                "actionSurges": 1,
                "extraAttacks": 1,
                "indomitableUses": 0
            }
        },
        {
            "level": 9,
            "abilityScoreBonuses": 3,
            "featureIds": [
                "indomitable-1-use"
            ],
            "classSpecific": {
                "actionSurges": 1,
                "extraAttacks": 1,
                "indomitableUses": 1
            }
        },
        {
            "level": 10,
            "abilityScoreBonuses": 3,
            "featureIds": [
                "martial-archetype-improvement-2"
            ],
            "classSpecific": {
                "actionSurges": 1,
                "extraAttacks": 1,
                "indomitableUses": 1
            }
        },
        {
            "level": 11,
            "abilityScoreBonuses": 3,
            "featureIds": [
                "extra-attack-2"
            ],
            "classSpecific": {
                "actionSurges": 1,
                "extraAttacks": 2,
                "indomitableUses": 1
            }
        },
        {
            "level": 12,
            "abilityScoreBonuses": 4,
            "featureIds": [
                "fighter-ability-score-improvement-4"
            ],
            "classSpecific": {
                "actionSurges": 1,
                "extraAttacks": 2,
                "indomitableUses": 1
            }
        },
        {
            "level": 13,
            "abilityScoreBonuses": 4,
            "featureIds": [
                "indomitable-2-uses"
            ],
            "classSpecific": {
                "actionSurges": 1,
                "extraAttacks": 2,
                "indomitableUses": 2
            }
        },
        {
            "level": 14,
            "abilityScoreBonuses": 5,
            "featureIds": [
                "fighter-ability-score-improvement-5"
            ],
            "classSpecific": {
                "actionSurges": 1,
                "extraAttacks": 2,
                "indomitableUses": 2
            }
        },
        {
            "level": 15,
            "abilityScoreBonuses": 5,
            "featureIds": [
                "martial-archetype-improvement-3"
            ],
            "classSpecific": {
                "actionSurges": 1,
                "extraAttacks": 2,
                "indomitableUses": 2
            }
        },
        {
            "level": 16,
            "abilityScoreBonuses": 6,
            "featureIds": [
                "fighter-ability-score-improvement-6"
            ],
            "classSpecific": {
                "actionSurges": 1,
                "extraAttacks": 2,
                "indomitableUses": 2
            }
        },
        {
            "level": 17,
            "abilityScoreBonuses": 6,
            "featureIds": [
                "action-surge-2-uses",
                "indomitable-3-uses"
            ],
            "classSpecific": {
                "actionSurges": 2,
                "extraAttacks": 2,
                "indomitableUses": 3
            }
        },
        {
            "level": 18,
            "abilityScoreBonuses": 6,
            "featureIds": [
                "martial-archetype-improvement-4"
            ],
            "classSpecific": {
                "actionSurges": 2,
                "extraAttacks": 2,
                "indomitableUses": 3
            }
        },
        {
            "level": 19,
            "abilityScoreBonuses": 7,
            "featureIds": [
                "fighter-ability-score-improvement-7"
            ],
            "classSpecific": {
                "actionSurges": 2,
                "extraAttacks": 2,
                "indomitableUses": 3
            }
        },
        {
            "level": 20,
            "abilityScoreBonuses": 7,
            "featureIds": [
                "extra-attack-3"
            ],
            "classSpecific": {
                "actionSurges": 2,
                "extraAttacks": 3,
                "indomitableUses": 3
            }
        }
    ],
    "features": {
        "fighter-fighting-style": {
            "id": "fighter-fighting-style",
            "name": "Fighting Style",
            "level": 1
        },
        "second-wind": {
            "id": "second-wind",
            "name": "Second Wind",
            "level": 1
        },
        "action-surge-1-use": {
            "id": "action-surge-1-use",
            "name": "Action Surge (1 use)",
            "level": 2
        },
        "martial-archetype": {
            "id": "martial-archetype",
            "name": "Martial Archetype",
            "level": 3
        },
        "fighter-ability-score-improvement-1": {
            "id": "fighter-ability-score-improvement-1",
            "name": "Ability Score Improvement",
            "level": 4
        },
        "extra-attack-1": {
            "id": "extra-attack-1",
            "name": "Extra Attack",
            "level": 5
        },
        "fighter-ability-score-improvement-2": {
            "id": "fighter-ability-score-improvement-2",
            "name": "Ability Score Improvement",
            "level": 6
        },
        "martial-archetype-improvement-1": {
            "id": "martial-archetype-improvement-1",
            "name": "Martial Archetype feature",
            "level": 7
        },
        "fighter-ability-score-improvement-3": {
            "id": "fighter-ability-score-improvement-3",
            "name": "Ability Score Improvement",
            "level": 8
        },
        "indomitable-1-use": {
            "id": "indomitable-1-use",
            "name": "Indomitable (1 use)",
            "level": 9
        },
        "martial-archetype-improvement-2": {
            "id": "martial-archetype-improvement-2",
            "name": "Martial Archetype feature",
            "level": 10
        },
        "extra-attack-2": {
            "id": "extra-attack-2",
            "name": "Extra Attack (2)",
            "level": 11
        },
        "fighter-ability-score-improvement-4": {
            "id": "fighter-ability-score-improvement-4",
            "name": "Ability Score Improvement",
            "level": 12
        },
        "indomitable-2-uses": {
            "id": "indomitable-2-uses",
            "name": "Indomitable (2 uses)",
            "level": 13
        },
        "fighter-ability-score-improvement-5": {
            "id": "fighter-ability-score-improvement-5",
            "name": "Ability Score Improvement",
            "level": 14
        },
        "martial-archetype-improvement-3": {
            "id": "martial-archetype-improvement-3",
            "name": "Martial Archetype feature",
            "level": 15
        },
        "fighter-ability-score-improvement-6": {
            "id": "fighter-ability-score-improvement-6",
            "name": "Ability Score Improvement",
            "level": 16
        },
        "action-surge-2-uses": {
            "id": "action-surge-2-uses",
            "name": "Action Surge (2 uses)",
            "level": 17
        },
        "indomitable-3-uses": {
            "id": "indomitable-3-uses",
            "name": "Indomitable (3 uses)",
            "level": 17
        },
        "martial-archetype-improvement-4": {
            "id": "martial-archetype-improvement-4",
            "name": "Martial Archetype feature",
            "level": 18
        },
        "fighter-ability-score-improvement-7": {
            "id": "fighter-ability-score-improvement-7",
            "name": "Ability Score Improvement",
            "level": 19
        },
        "extra-attack-3": {
            "id": "extra-attack-3",
            "name": "Extra Attack (3)",
            "level": 20
        },
        "improved-critical": {
            "id": "improved-critical",
            "name": "Improved Critical",
            "level": 3,
            "subclassId": "champion"
        },
        "remarkable-athlete": {
            "id": "remarkable-athlete",
            "name": "Remarkable Athlete",
            "level": 7,
            "subclassId": "champion"
        },
        "additional-fighting-style": {
            "id": "additional-fighting-style",
            "name": "Additional Fighting Style",
            "level": 10,
            "subclassId": "champion"
        },
        "superior-critical": {
            "id": "superior-critical",
            "name": "Superior Critical",
            "level": 15,
            "subclassId": "champion"
        },
        "survivor": {
            "id": "survivor",
            "name": "Survivor",
            "level": 18,
            "subclassId": "champion"
        }
    },
    "featureDescriptions": {
        "fighter-fighting-style": [
            "You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again."
        ],
        "second-wind": [
            "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again."
        ],
        "action-surge-1-use": [
            "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.",
            "Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
        ],
        "martial-archetype": [
            "At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques, such as Champion. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level."
        ],
        "fighter-ability-score-improvement-1": [
            "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "extra-attack-1": [
            "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class."
        ],
        "fighter-ability-score-improvement-2": [
            "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "martial-archetype-improvement-1": [
            "At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques, such as Champion. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level."
        ],
        "fighter-ability-score-improvement-3": [
            "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "indomitable-1-use": [
            "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
        ],
        "martial-archetype-improvement-2": [
            "At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques, such as Champion. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level."
        ],
        "extra-attack-2": [
            "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class."
        ],
        "fighter-ability-score-improvement-4": [
            "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "indomitable-2-uses": [
            "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
        ],
        "fighter-ability-score-improvement-5": [
            "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "martial-archetype-improvement-3": [
            "At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques, such as Champion. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level."
        ],
        "fighter-ability-score-improvement-6": [
            "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "action-surge-2-uses": [
            "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.",
            "Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
        ],
        "indomitable-3-uses": [
            "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
        ],
        "martial-archetype-improvement-4": [
            "At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques, such as Champion. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level."
        ],
        "fighter-ability-score-improvement-7": [
            "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "extra-attack-3": [
            "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class."
        ],
        "improved-critical": [
            "Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20."
        ],
        "remarkable-athlete": [
            "Starting at 7th level, you can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn't already use your proficiency bonus. In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier."
        ],
        "additional-fighting-style": [
            "At 10th level, you can choose a second option from the Fighting Style class feature."
        ],
        "superior-critical": [
            "Starting at 15th level, your weapon attacks score a critical hit on a roll of 18-20."
        ],
        "survivor": [
            "At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don't gain this benefit if you have 0 hit points."
        ]
    },
    "subclasses": [
        {
            "id": "champion",
            "name": "Champion",
            "flavor": "Martial Archetype",
            "description": [
                "The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows."
            ],
            "levels": [
                {
                    "level": 3,
                    "featureIds": [
                        "improved-critical"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 7,
                    "featureIds": [
                        "remarkable-athlete"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 10,
                    "featureIds": [
                        "additional-fighting-style"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 15,
                    "featureIds": [
                        "superior-critical"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 18,
                    "featureIds": [
                        "survivor"
                    ],
                    "subclassSpecific": {}
                }
            ],
            "spells": []
        }
    ]
};
