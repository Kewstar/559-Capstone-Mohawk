import type { ClassDetails } from "../types";

export const warlock: ClassDetails = {
    "name": "warlock",
    "label": "Warlock",
    "hitDie": 8,
    "savingThrows": [
        "wis",
        "cha"
    ],
    "proficiencies": [
        {
            "index": "light-armor",
            "name": "Light Armor",
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
            "desc": "Choose two skills from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion",
            "options": [
                {
                    "kind": "reference",
                    "proficiency": {
                        "index": "skill-arcana",
                        "name": "Skill: Arcana",
                        "type": "Skills"
                    }
                },
                {
                    "kind": "reference",
                    "proficiency": {
                        "index": "skill-deception",
                        "name": "Skill: Deception",
                        "type": "Skills"
                    }
                },
                {
                    "kind": "reference",
                    "proficiency": {
                        "index": "skill-history",
                        "name": "Skill: History",
                        "type": "Skills"
                    }
                },
                {
                    "kind": "reference",
                    "proficiency": {
                        "index": "skill-intimidation",
                        "name": "Skill: Intimidation",
                        "type": "Skills"
                    }
                },
                {
                    "kind": "reference",
                    "proficiency": {
                        "index": "skill-investigation",
                        "name": "Skill: Investigation",
                        "type": "Skills"
                    }
                },
                {
                    "kind": "reference",
                    "proficiency": {
                        "index": "skill-nature",
                        "name": "Skill: Nature",
                        "type": "Skills"
                    }
                },
                {
                    "kind": "reference",
                    "proficiency": {
                        "index": "skill-religion",
                        "name": "Skill: Religion",
                        "type": "Skills"
                    }
                }
            ]
        }
    ],
    "startingEquipment": {
        "items": [
            {
                "index": "dagger",
                "name": "Dagger",
                "quantity": 2,
                "category": "Weapon"
            },
            {
                "index": "leather-armor",
                "name": "Leather Armor",
                "quantity": 1,
                "category": "Armor"
            }
        ],
        "choices": [
            {
                "choose": 1,
                "desc": "(a) a light crossbow and 20 bolts or (b) any simple weapon"
            },
            {
                "choose": 1,
                "desc": "(a) a component pouch or (b) an arcane focus"
            },
            {
                "choose": 1,
                "desc": "(a) a scholar’s pack or (b) a dungeoneer’s pack"
            },
            {
                "choose": 1,
                "desc": "any simple weapon"
            }
        ]
    },
    "multiclassing": {
        "prerequisites": [
            {
                "ability": "cha",
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
                "index": "simple-weapons",
                "name": "Simple Weapons",
                "type": "Weapons"
            }
        ],
        "proficiencyChoices": []
    },
    "primaryAbilities": [
        "cha"
    ],
    "classTable": [
        {
            "level": 1,
            "abilityScoreBonuses": 0,
            "featureIds": [
                "otherworldly-patron",
                "pact-magic"
            ],
            "classSpecific": {
                "invocationsKnown": 0,
                "mysticArcanumLevel6": 0,
                "mysticArcanumLevel7": 0,
                "mysticArcanumLevel8": 0,
                "mysticArcanumLevel9": 0
            },
            "spellcasting": {
                "cantripsKnown": 2,
                "spellsKnown": 2,
                "spellSlots": [
                    1,
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
                "eldritch-invocations"
            ],
            "classSpecific": {
                "invocationsKnown": 2,
                "mysticArcanumLevel6": 0,
                "mysticArcanumLevel7": 0,
                "mysticArcanumLevel8": 0,
                "mysticArcanumLevel9": 0
            },
            "spellcasting": {
                "cantripsKnown": 2,
                "spellsKnown": 3,
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
                "pact-boon"
            ],
            "classSpecific": {
                "invocationsKnown": 2,
                "mysticArcanumLevel6": 0,
                "mysticArcanumLevel7": 0,
                "mysticArcanumLevel8": 0,
                "mysticArcanumLevel9": 0
            },
            "spellcasting": {
                "cantripsKnown": 2,
                "spellsKnown": 4,
                "spellSlots": [
                    0,
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
            "level": 4,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "warlock-ability-score-improvement-1"
            ],
            "classSpecific": {
                "invocationsKnown": 3,
                "mysticArcanumLevel6": 0,
                "mysticArcanumLevel7": 0,
                "mysticArcanumLevel8": 0,
                "mysticArcanumLevel9": 0
            },
            "spellcasting": {
                "cantripsKnown": 3,
                "spellsKnown": 5,
                "spellSlots": [
                    0,
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
            "level": 5,
            "abilityScoreBonuses": 1,
            "featureIds": [],
            "classSpecific": {
                "invocationsKnown": 3,
                "mysticArcanumLevel6": 0,
                "mysticArcanumLevel7": 0,
                "mysticArcanumLevel8": 0,
                "mysticArcanumLevel9": 0
            },
            "spellcasting": {
                "cantripsKnown": 3,
                "spellsKnown": 6,
                "spellSlots": [
                    0,
                    0,
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
            "level": 6,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "otherworldly-patron-improvement-1"
            ],
            "classSpecific": {
                "invocationsKnown": 4,
                "mysticArcanumLevel6": 0,
                "mysticArcanumLevel7": 0,
                "mysticArcanumLevel8": 0,
                "mysticArcanumLevel9": 0
            },
            "spellcasting": {
                "cantripsKnown": 3,
                "spellsKnown": 7,
                "spellSlots": [
                    0,
                    0,
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
            "level": 7,
            "abilityScoreBonuses": 1,
            "featureIds": [],
            "classSpecific": {
                "invocationsKnown": 4,
                "mysticArcanumLevel6": 0,
                "mysticArcanumLevel7": 0,
                "mysticArcanumLevel8": 0,
                "mysticArcanumLevel9": 0
            },
            "spellcasting": {
                "cantripsKnown": 3,
                "spellsKnown": 8,
                "spellSlots": [
                    0,
                    0,
                    0,
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
            "level": 8,
            "abilityScoreBonuses": 2,
            "featureIds": [
                "warlock-ability-score-improvement-2"
            ],
            "classSpecific": {
                "invocationsKnown": 4,
                "mysticArcanumLevel6": 0,
                "mysticArcanumLevel7": 0,
                "mysticArcanumLevel8": 0,
                "mysticArcanumLevel9": 0
            },
            "spellcasting": {
                "cantripsKnown": 3,
                "spellsKnown": 9,
                "spellSlots": [
                    0,
                    0,
                    0,
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
            "level": 9,
            "abilityScoreBonuses": 2,
            "featureIds": [],
            "classSpecific": {
                "invocationsKnown": 5,
                "mysticArcanumLevel6": 0,
                "mysticArcanumLevel7": 0,
                "mysticArcanumLevel8": 0,
                "mysticArcanumLevel9": 0
            },
            "spellcasting": {
                "cantripsKnown": 3,
                "spellsKnown": 10,
                "spellSlots": [
                    0,
                    0,
                    0,
                    0,
                    2,
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
                "otherworldly-patron-improvement-2"
            ],
            "classSpecific": {
                "invocationsKnown": 5,
                "mysticArcanumLevel6": 0,
                "mysticArcanumLevel7": 0,
                "mysticArcanumLevel8": 0,
                "mysticArcanumLevel9": 0
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 10,
                "spellSlots": [
                    0,
                    0,
                    0,
                    0,
                    2,
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
                "mystic-arcanum-6th-level"
            ],
            "classSpecific": {
                "invocationsKnown": 5,
                "mysticArcanumLevel6": 1,
                "mysticArcanumLevel7": 0,
                "mysticArcanumLevel8": 0,
                "mysticArcanumLevel9": 0
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 11,
                "spellSlots": [
                    0,
                    0,
                    0,
                    0,
                    3,
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
                "warlock-ability-score-improvement-3"
            ],
            "classSpecific": {
                "invocationsKnown": 6,
                "mysticArcanumLevel6": 1,
                "mysticArcanumLevel7": 0,
                "mysticArcanumLevel8": 0,
                "mysticArcanumLevel9": 0
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 11,
                "spellSlots": [
                    0,
                    0,
                    0,
                    0,
                    3,
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
            "featureIds": [
                "mystic-arcanum-7th-level"
            ],
            "classSpecific": {
                "invocationsKnown": 6,
                "mysticArcanumLevel6": 1,
                "mysticArcanumLevel7": 1,
                "mysticArcanumLevel8": 0,
                "mysticArcanumLevel9": 0
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 12,
                "spellSlots": [
                    0,
                    0,
                    0,
                    0,
                    3,
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
                "otherworldly-patron-improvement-3"
            ],
            "classSpecific": {
                "invocationsKnown": 6,
                "mysticArcanumLevel6": 1,
                "mysticArcanumLevel7": 1,
                "mysticArcanumLevel8": 0,
                "mysticArcanumLevel9": 0
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 12,
                "spellSlots": [
                    0,
                    0,
                    0,
                    0,
                    3,
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
                "mystic-arcanum-8th-level"
            ],
            "classSpecific": {
                "invocationsKnown": 7,
                "mysticArcanumLevel6": 1,
                "mysticArcanumLevel7": 1,
                "mysticArcanumLevel8": 1,
                "mysticArcanumLevel9": 0
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 13,
                "spellSlots": [
                    0,
                    0,
                    0,
                    0,
                    3,
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
                "warlock-ability-score-improvement-4"
            ],
            "classSpecific": {
                "invocationsKnown": 7,
                "mysticArcanumLevel6": 1,
                "mysticArcanumLevel7": 1,
                "mysticArcanumLevel8": 1,
                "mysticArcanumLevel9": 0
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 13,
                "spellSlots": [
                    0,
                    0,
                    0,
                    0,
                    3,
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
            "featureIds": [
                "mystic-arcanum-9th-level"
            ],
            "classSpecific": {
                "invocationsKnown": 7,
                "mysticArcanumLevel6": 1,
                "mysticArcanumLevel7": 1,
                "mysticArcanumLevel8": 1,
                "mysticArcanumLevel9": 1
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 14,
                "spellSlots": [
                    0,
                    0,
                    0,
                    0,
                    4,
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
            "featureIds": [],
            "classSpecific": {
                "invocationsKnown": 8,
                "mysticArcanumLevel6": 1,
                "mysticArcanumLevel7": 1,
                "mysticArcanumLevel8": 1,
                "mysticArcanumLevel9": 1
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 14,
                "spellSlots": [
                    0,
                    0,
                    0,
                    0,
                    4,
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
                "warlock-ability-score-improvement-5"
            ],
            "classSpecific": {
                "invocationsKnown": 8,
                "mysticArcanumLevel6": 1,
                "mysticArcanumLevel7": 1,
                "mysticArcanumLevel8": 1,
                "mysticArcanumLevel9": 1
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 15,
                "spellSlots": [
                    0,
                    0,
                    0,
                    0,
                    4,
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
                "eldritch-master"
            ],
            "classSpecific": {
                "invocationsKnown": 8,
                "mysticArcanumLevel6": 1,
                "mysticArcanumLevel7": 1,
                "mysticArcanumLevel8": 1,
                "mysticArcanumLevel9": 1
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 15,
                "spellSlots": [
                    0,
                    0,
                    0,
                    0,
                    4,
                    0,
                    0,
                    0,
                    0
                ]
            }
        }
    ],
    "features": {
        "otherworldly-patron": {
            "id": "otherworldly-patron",
            "name": "Otherworldly Patron",
            "level": 1
        },
        "pact-magic": {
            "id": "pact-magic",
            "name": "Pact Magic",
            "level": 1
        },
        "eldritch-invocations": {
            "id": "eldritch-invocations",
            "name": "Eldritch Invocations",
            "level": 2
        },
        "pact-boon": {
            "id": "pact-boon",
            "name": "Pact Boon",
            "level": 3
        },
        "warlock-ability-score-improvement-1": {
            "id": "warlock-ability-score-improvement-1",
            "name": "Ability Score Improvement",
            "level": 4
        },
        "otherworldly-patron-improvement-1": {
            "id": "otherworldly-patron-improvement-1",
            "name": "Otherworldly Patron feature",
            "level": 6
        },
        "warlock-ability-score-improvement-2": {
            "id": "warlock-ability-score-improvement-2",
            "name": "Ability Score Improvement",
            "level": 8
        },
        "otherworldly-patron-improvement-2": {
            "id": "otherworldly-patron-improvement-2",
            "name": "Otherworldly Patron feature",
            "level": 10
        },
        "mystic-arcanum-6th-level": {
            "id": "mystic-arcanum-6th-level",
            "name": "Mystic Arcanum (6th level)",
            "level": 11
        },
        "warlock-ability-score-improvement-3": {
            "id": "warlock-ability-score-improvement-3",
            "name": "Ability Score Improvement",
            "level": 12
        },
        "mystic-arcanum-7th-level": {
            "id": "mystic-arcanum-7th-level",
            "name": "Mystic Arcanum (7th level)",
            "level": 13
        },
        "otherworldly-patron-improvement-3": {
            "id": "otherworldly-patron-improvement-3",
            "name": "Otherworldly Patron feature",
            "level": 14
        },
        "mystic-arcanum-8th-level": {
            "id": "mystic-arcanum-8th-level",
            "name": "Mystic Arcanum (8th level)",
            "level": 15
        },
        "warlock-ability-score-improvement-4": {
            "id": "warlock-ability-score-improvement-4",
            "name": "Ability Score Improvement",
            "level": 16
        },
        "mystic-arcanum-9th-level": {
            "id": "mystic-arcanum-9th-level",
            "name": "Mystic Arcanum (9th level)",
            "level": 17
        },
        "warlock-ability-score-improvement-5": {
            "id": "warlock-ability-score-improvement-5",
            "name": "Ability Score Improvement",
            "level": 19
        },
        "eldritch-master": {
            "id": "eldritch-master",
            "name": "Eldritch Master",
            "level": 20
        },
        "dark-ones-blessing": {
            "id": "dark-ones-blessing",
            "name": "Dark One's Blessing",
            "level": 1,
            "subclassId": "fiend"
        },
        "dark-ones-own-luck": {
            "id": "dark-ones-own-luck",
            "name": "Dark One's Own Luck",
            "level": 6,
            "subclassId": "fiend"
        },
        "fiendish-resilience": {
            "id": "fiendish-resilience",
            "name": "Fiendish Resilience",
            "level": 10,
            "subclassId": "fiend"
        },
        "hurl-through-hell": {
            "id": "hurl-through-hell",
            "name": "Hurl Through Hell",
            "level": 14,
            "subclassId": "fiend"
        }
    },
    "featureDescriptions": {
        "otherworldly-patron": [
            "At 1st level, you have struck a bargain with an otherworldly being of your choice, such as the Fiend. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level."
        ],
        "pact-magic": [
            "Your arcane research and the magic bestowed on you by your patron have given you facility with spells."
        ],
        "eldritch-invocations": [
            "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.",
            "At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.",
            "Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level."
        ],
        "pact-boon": [
            "At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice."
        ],
        "warlock-ability-score-improvement-1": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "otherworldly-patron-improvement-1": [
            "At 1st level, you have struck a bargain with an otherworldly being of your choice, such as the Fiend. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level."
        ],
        "warlock-ability-score-improvement-2": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "otherworldly-patron-improvement-2": [
            "At 1st level, you have struck a bargain with an otherworldly being of your choice, such as the Fiend. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level."
        ],
        "mystic-arcanum-6th-level": [
            "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum.",
            "You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.",
            "At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
        ],
        "warlock-ability-score-improvement-3": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "mystic-arcanum-7th-level": [
            "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum.",
            "You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.",
            "At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
        ],
        "otherworldly-patron-improvement-3": [
            "At 1st level, you have struck a bargain with an otherworldly being of your choice, such as the Fiend. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level."
        ],
        "mystic-arcanum-8th-level": [
            "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum.",
            "You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.",
            "At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
        ],
        "warlock-ability-score-improvement-4": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "mystic-arcanum-9th-level": [
            "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum.",
            "You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.",
            "At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
        ],
        "warlock-ability-score-improvement-5": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "eldritch-master": [
            "At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature.",
            "Once you regain spell slots with this feature, you must finish a long rest before you can do so again."
        ],
        "dark-ones-blessing": [
            "Starting at 1st level, when you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1)."
        ],
        "dark-ones-own-luck": [
            "Starting at 6th level, you can call on your patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add a d10 to your roll. You can do so after seeing the initial roll but before any of the roll's effects occur.",
            "Once you use this feature, you can't use it again until you finish a short or long rest."
        ],
        "fiendish-resilience": [
            "Starting at 10th level, you can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one with this feature. Damage from magical weapons or silver weapons ignores this resistance."
        ],
        "hurl-through-hell": [
            "Starting at 14th level, when you hit a creature with an attack, you can use this feature to instantly transport the target through the lower planes. The creature disappears and hurtles through a nightmare landscape.",
            "At the end of your next turn, the target returns to the space it previously occupied, or the nearest unoccupied space. If the target is not a fiend, it takes 10d10 psychic damage as it reels from its horrific experience.",
            "Once you use this feature, you can't use it again until you finish a long rest."
        ]
    },
    "spellcasting": {
        "ability": "cha",
        "startLevel": 1,
        "info": [
            {
                "name": "Cantrips",
                "desc": [
                    "You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table."
                ]
            },
            {
                "name": "Spell Slots",
                "desc": [
                    "The Warlock table shows how many spell slots you have. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.",
                    "For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell thunderwave, you must spend one of those slots, and you cast it as a 3rd-level spell."
                ]
            },
            {
                "name": "Spells Known of 1st Level and Higher",
                "desc": [
                    "At 1st level, you know two 1st-level spells of your choice from the warlock spell list.",
                    "The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level and higher.",
                    "A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.",
                    "Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots."
                ]
            },
            {
                "name": "Spellcasting Ability",
                "desc": [
                    "Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.",
                    "Spell save DC = 8 + your proficiency bonus + your Charisma modifier.",
                    "Spell attack modifier = your proficiency bonus + your Charisma modifier."
                ]
            },
            {
                "name": "Spellcasting Focus",
                "desc": [
                    "You can use an arcane focus as a spellcasting focus for your warlock spells."
                ]
            }
        ],
        "spellList": [
            {
                "index": "chill-touch",
                "name": "Chill Touch",
                "level": 0
            },
            {
                "index": "eldritch-blast",
                "name": "Eldritch Blast",
                "level": 0
            },
            {
                "index": "mage-hand",
                "name": "Mage Hand",
                "level": 0
            },
            {
                "index": "minor-illusion",
                "name": "Minor Illusion",
                "level": 0
            },
            {
                "index": "poison-spray",
                "name": "Poison Spray",
                "level": 0
            },
            {
                "index": "prestidigitation",
                "name": "Prestidigitation",
                "level": 0
            },
            {
                "index": "true-strike",
                "name": "True Strike",
                "level": 0
            },
            {
                "index": "charm-person",
                "name": "Charm Person",
                "level": 1
            },
            {
                "index": "comprehend-languages",
                "name": "Comprehend Languages",
                "level": 1
            },
            {
                "index": "expeditious-retreat",
                "name": "Expeditious Retreat",
                "level": 1
            },
            {
                "index": "hellish-rebuke",
                "name": "Hellish Rebuke",
                "level": 1
            },
            {
                "index": "illusory-script",
                "name": "Illusory Script",
                "level": 1
            },
            {
                "index": "protection-from-evil-and-good",
                "name": "Protection from Evil and Good",
                "level": 1
            },
            {
                "index": "unseen-servant",
                "name": "Unseen Servant",
                "level": 1
            },
            {
                "index": "darkness",
                "name": "Darkness",
                "level": 2
            },
            {
                "index": "enthrall",
                "name": "Enthrall",
                "level": 2
            },
            {
                "index": "hold-person",
                "name": "Hold Person",
                "level": 2
            },
            {
                "index": "invisibility",
                "name": "Invisibility",
                "level": 2
            },
            {
                "index": "mirror-image",
                "name": "Mirror Image",
                "level": 2
            },
            {
                "index": "misty-step",
                "name": "Misty Step",
                "level": 2
            },
            {
                "index": "ray-of-enfeeblement",
                "name": "Ray of Enfeeblement",
                "level": 2
            },
            {
                "index": "shatter",
                "name": "Shatter",
                "level": 2
            },
            {
                "index": "spider-climb",
                "name": "Spider Climb",
                "level": 2
            },
            {
                "index": "suggestion",
                "name": "Suggestion",
                "level": 2
            },
            {
                "index": "counterspell",
                "name": "Counterspell",
                "level": 3
            },
            {
                "index": "dispel-magic",
                "name": "Dispel Magic",
                "level": 3
            },
            {
                "index": "fear",
                "name": "Fear",
                "level": 3
            },
            {
                "index": "fly",
                "name": "Fly",
                "level": 3
            },
            {
                "index": "gaseous-form",
                "name": "Gaseous Form",
                "level": 3
            },
            {
                "index": "hypnotic-pattern",
                "name": "Hypnotic Pattern",
                "level": 3
            },
            {
                "index": "magic-circle",
                "name": "Magic Circle",
                "level": 3
            },
            {
                "index": "major-image",
                "name": "Major Image",
                "level": 3
            },
            {
                "index": "remove-curse",
                "name": "Remove Curse",
                "level": 3
            },
            {
                "index": "tongues",
                "name": "Tongues",
                "level": 3
            },
            {
                "index": "vampiric-touch",
                "name": "Vampiric Touch",
                "level": 3
            },
            {
                "index": "banishment",
                "name": "Banishment",
                "level": 4
            },
            {
                "index": "blight",
                "name": "Blight",
                "level": 4
            },
            {
                "index": "dimension-door",
                "name": "Dimension Door",
                "level": 4
            },
            {
                "index": "hallucinatory-terrain",
                "name": "Hallucinatory Terrain",
                "level": 4
            },
            {
                "index": "contact-other-plane",
                "name": "Contact Other Plane",
                "level": 5
            },
            {
                "index": "dream",
                "name": "Dream",
                "level": 5
            },
            {
                "index": "hold-monster",
                "name": "Hold Monster",
                "level": 5
            },
            {
                "index": "scrying",
                "name": "Scrying",
                "level": 5
            },
            {
                "index": "circle-of-death",
                "name": "Circle of Death",
                "level": 6
            },
            {
                "index": "conjure-fey",
                "name": "Conjure Fey",
                "level": 6
            },
            {
                "index": "create-undead",
                "name": "Create Undead",
                "level": 6
            },
            {
                "index": "eyebite",
                "name": "Eyebite",
                "level": 6
            },
            {
                "index": "flesh-to-stone",
                "name": "Flesh to Stone",
                "level": 6
            },
            {
                "index": "mass-suggestion",
                "name": "Mass Suggestion",
                "level": 6
            },
            {
                "index": "true-seeing",
                "name": "True Seeing",
                "level": 6
            },
            {
                "index": "etherealness",
                "name": "Etherealness",
                "level": 7
            },
            {
                "index": "finger-of-death",
                "name": "Finger of Death",
                "level": 7
            },
            {
                "index": "forcecage",
                "name": "Forcecage",
                "level": 7
            },
            {
                "index": "plane-shift",
                "name": "Plane Shift",
                "level": 7
            },
            {
                "index": "demiplane",
                "name": "Demiplane",
                "level": 8
            },
            {
                "index": "dominate-monster",
                "name": "Dominate Monster",
                "level": 8
            },
            {
                "index": "feeblemind",
                "name": "Feeblemind",
                "level": 8
            },
            {
                "index": "glibness",
                "name": "Glibness",
                "level": 8
            },
            {
                "index": "power-word-stun",
                "name": "Power Word Stun",
                "level": 8
            },
            {
                "index": "astral-projection",
                "name": "Astral Projection",
                "level": 9
            },
            {
                "index": "foresight",
                "name": "Foresight",
                "level": 9
            },
            {
                "index": "imprisonment",
                "name": "Imprisonment",
                "level": 9
            },
            {
                "index": "power-word-kill",
                "name": "Power Word Kill",
                "level": 9
            },
            {
                "index": "true-polymorph",
                "name": "True Polymorph",
                "level": 9
            }
        ]
    },
    "subclasses": [
        {
            "id": "fiend",
            "name": "Fiend",
            "flavor": "Otherworldly Patron",
            "description": [
                "You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths."
            ],
            "levels": [
                {
                    "level": 1,
                    "featureIds": [
                        "dark-ones-blessing"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 6,
                    "featureIds": [
                        "dark-ones-own-luck"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 10,
                    "featureIds": [
                        "fiendish-resilience"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 14,
                    "featureIds": [
                        "hurl-through-hell"
                    ],
                    "subclassSpecific": {}
                }
            ],
            "spells": [
                {
                    "spell": {
                        "index": "burning-hands",
                        "name": "Burning Hands",
                        "level": 1
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 1
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "command",
                        "name": "Command",
                        "level": 1
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 1
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "blindness-deafness",
                        "name": "Blindness/Deafness",
                        "level": 2
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 3
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "scorching-ray",
                        "name": "Scorching Ray",
                        "level": 2
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 3
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "fireball",
                        "name": "Fireball",
                        "level": 3
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 5
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "stinking-cloud",
                        "name": "Stinking Cloud",
                        "level": 3
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 5
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "fire-shield",
                        "name": "Fire Shield",
                        "level": 4
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 7
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "wall-of-fire",
                        "name": "Wall of Fire",
                        "level": 4
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 7
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "flame-strike",
                        "name": "Flame Strike",
                        "level": 5
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 9
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "hallow",
                        "name": "Hallow",
                        "level": 5
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 9
                        }
                    ]
                }
            ]
        }
    ]
};
