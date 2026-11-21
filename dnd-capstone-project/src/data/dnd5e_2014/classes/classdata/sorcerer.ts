import type { ClassDetails } from "../types";

export const sorcerer: ClassDetails = {
    "name": "sorcerer",
    "label": "Sorcerer",
    "hitDie": 6,
    "savingThrows": [
        "con",
        "cha"
    ],
    "proficiencies": [
        {
            "index": "crossbows-light",
            "name": "Crossbows, light",
            "type": "Weapons"
        },
        {
            "index": "daggers",
            "name": "Daggers",
            "type": "Weapons"
        },
        {
            "index": "darts",
            "name": "Darts",
            "type": "Weapons"
        },
        {
            "index": "quarterstaffs",
            "name": "Quarterstaffs",
            "type": "Weapons"
        },
        {
            "index": "slings",
            "name": "Slings",
            "type": "Weapons"
        }
    ],
    "proficiencyChoices": [
        {
            "choose": 2,
            "desc": "Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion",
            "options": [
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
                        "index": "skill-deception",
                        "name": "Skill: Deception",
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
                "desc": "(a) a dungeoneer’s pack or (b) an explorer’s pack"
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
        "proficiencies": [],
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
                "sorcerous-origin",
                "spellcasting-sorcerer"
            ],
            "classSpecific": {
                "creatingSpellSlots": [],
                "metamagicKnown": 0,
                "sorceryPoints": 0
            },
            "spellcasting": {
                "cantripsKnown": 4,
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
            "level": 2,
            "abilityScoreBonuses": 0,
            "featureIds": [
                "flexible-casting-converting-spell-slot",
                "flexible-casting-creating-spell-slots",
                "font-of-magic"
            ],
            "classSpecific": {
                "creatingSpellSlots": [
                    {
                        "sorceryPointCost": 2,
                        "spellSlotLevel": 1
                    },
                    {
                        "sorceryPointCost": 3,
                        "spellSlotLevel": 2
                    },
                    {
                        "sorceryPointCost": 5,
                        "spellSlotLevel": 3
                    },
                    {
                        "sorceryPointCost": 6,
                        "spellSlotLevel": 4
                    },
                    {
                        "sorceryPointCost": 7,
                        "spellSlotLevel": 5
                    }
                ],
                "metamagicKnown": 0,
                "sorceryPoints": 2
            },
            "spellcasting": {
                "cantripsKnown": 4,
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
            "level": 3,
            "abilityScoreBonuses": 0,
            "featureIds": [
                "metamagic-1"
            ],
            "classSpecific": {
                "creatingSpellSlots": [
                    {
                        "sorceryPointCost": 2,
                        "spellSlotLevel": 1
                    },
                    {
                        "sorceryPointCost": 3,
                        "spellSlotLevel": 2
                    },
                    {
                        "sorceryPointCost": 5,
                        "spellSlotLevel": 3
                    },
                    {
                        "sorceryPointCost": 6,
                        "spellSlotLevel": 4
                    },
                    {
                        "sorceryPointCost": 7,
                        "spellSlotLevel": 5
                    }
                ],
                "metamagicKnown": 2,
                "sorceryPoints": 3
            },
            "spellcasting": {
                "cantripsKnown": 4,
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
            "level": 4,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "sorcerer-ability-score-improvement-1"
            ],
            "classSpecific": {
                "creatingSpellSlots": [
                    {
                        "sorceryPointCost": 2,
                        "spellSlotLevel": 1
                    },
                    {
                        "sorceryPointCost": 3,
                        "spellSlotLevel": 2
                    },
                    {
                        "sorceryPointCost": 5,
                        "spellSlotLevel": 3
                    },
                    {
                        "sorceryPointCost": 6,
                        "spellSlotLevel": 4
                    },
                    {
                        "sorceryPointCost": 7,
                        "spellSlotLevel": 5
                    }
                ],
                "metamagicKnown": 2,
                "sorceryPoints": 4
            },
            "spellcasting": {
                "cantripsKnown": 5,
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
            "level": 5,
            "abilityScoreBonuses": 1,
            "featureIds": [],
            "classSpecific": {
                "creatingSpellSlots": [
                    {
                        "sorceryPointCost": 2,
                        "spellSlotLevel": 1
                    },
                    {
                        "sorceryPointCost": 3,
                        "spellSlotLevel": 2
                    },
                    {
                        "sorceryPointCost": 5,
                        "spellSlotLevel": 3
                    },
                    {
                        "sorceryPointCost": 6,
                        "spellSlotLevel": 4
                    },
                    {
                        "sorceryPointCost": 7,
                        "spellSlotLevel": 5
                    }
                ],
                "metamagicKnown": 2,
                "sorceryPoints": 5
            },
            "spellcasting": {
                "cantripsKnown": 5,
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
            "level": 6,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "sorcerous-origin-improvement-1"
            ],
            "classSpecific": {
                "creatingSpellSlots": [
                    {
                        "sorceryPointCost": 2,
                        "spellSlotLevel": 1
                    },
                    {
                        "sorceryPointCost": 3,
                        "spellSlotLevel": 2
                    },
                    {
                        "sorceryPointCost": 5,
                        "spellSlotLevel": 3
                    },
                    {
                        "sorceryPointCost": 6,
                        "spellSlotLevel": 4
                    },
                    {
                        "sorceryPointCost": 7,
                        "spellSlotLevel": 5
                    }
                ],
                "metamagicKnown": 2,
                "sorceryPoints": 6
            },
            "spellcasting": {
                "cantripsKnown": 5,
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
            "level": 7,
            "abilityScoreBonuses": 1,
            "featureIds": [],
            "classSpecific": {
                "creatingSpellSlots": [
                    {
                        "sorceryPointCost": 2,
                        "spellSlotLevel": 1
                    },
                    {
                        "sorceryPointCost": 3,
                        "spellSlotLevel": 2
                    },
                    {
                        "sorceryPointCost": 5,
                        "spellSlotLevel": 3
                    },
                    {
                        "sorceryPointCost": 6,
                        "spellSlotLevel": 4
                    },
                    {
                        "sorceryPointCost": 7,
                        "spellSlotLevel": 5
                    }
                ],
                "metamagicKnown": 2,
                "sorceryPoints": 7
            },
            "spellcasting": {
                "cantripsKnown": 5,
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
            "level": 8,
            "abilityScoreBonuses": 2,
            "featureIds": [
                "sorcerer-ability-score-improvement-2"
            ],
            "classSpecific": {
                "creatingSpellSlots": [
                    {
                        "sorceryPointCost": 2,
                        "spellSlotLevel": 1
                    },
                    {
                        "sorceryPointCost": 3,
                        "spellSlotLevel": 2
                    },
                    {
                        "sorceryPointCost": 5,
                        "spellSlotLevel": 3
                    },
                    {
                        "sorceryPointCost": 6,
                        "spellSlotLevel": 4
                    },
                    {
                        "sorceryPointCost": 7,
                        "spellSlotLevel": 5
                    }
                ],
                "metamagicKnown": 2,
                "sorceryPoints": 8
            },
            "spellcasting": {
                "cantripsKnown": 5,
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
            "level": 9,
            "abilityScoreBonuses": 2,
            "featureIds": [],
            "classSpecific": {
                "creatingSpellSlots": [
                    {
                        "sorceryPointCost": 2,
                        "spellSlotLevel": 1
                    },
                    {
                        "sorceryPointCost": 3,
                        "spellSlotLevel": 2
                    },
                    {
                        "sorceryPointCost": 5,
                        "spellSlotLevel": 3
                    },
                    {
                        "sorceryPointCost": 6,
                        "spellSlotLevel": 4
                    },
                    {
                        "sorceryPointCost": 7,
                        "spellSlotLevel": 5
                    }
                ],
                "metamagicKnown": 2,
                "sorceryPoints": 9
            },
            "spellcasting": {
                "cantripsKnown": 5,
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
            "level": 10,
            "abilityScoreBonuses": 2,
            "featureIds": [
                "metamagic-2"
            ],
            "classSpecific": {
                "creatingSpellSlots": [
                    {
                        "sorceryPointCost": 2,
                        "spellSlotLevel": 1
                    },
                    {
                        "sorceryPointCost": 3,
                        "spellSlotLevel": 2
                    },
                    {
                        "sorceryPointCost": 5,
                        "spellSlotLevel": 3
                    },
                    {
                        "sorceryPointCost": 6,
                        "spellSlotLevel": 4
                    },
                    {
                        "sorceryPointCost": 7,
                        "spellSlotLevel": 5
                    }
                ],
                "metamagicKnown": 3,
                "sorceryPoints": 10
            },
            "spellcasting": {
                "cantripsKnown": 6,
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
            "level": 11,
            "abilityScoreBonuses": 2,
            "featureIds": [],
            "classSpecific": {
                "creatingSpellSlots": [
                    {
                        "sorceryPointCost": 2,
                        "spellSlotLevel": 1
                    },
                    {
                        "sorceryPointCost": 3,
                        "spellSlotLevel": 2
                    },
                    {
                        "sorceryPointCost": 5,
                        "spellSlotLevel": 3
                    },
                    {
                        "sorceryPointCost": 6,
                        "spellSlotLevel": 4
                    },
                    {
                        "sorceryPointCost": 7,
                        "spellSlotLevel": 5
                    }
                ],
                "metamagicKnown": 3,
                "sorceryPoints": 11
            },
            "spellcasting": {
                "cantripsKnown": 6,
                "spellsKnown": 12,
                "spellSlots": [
                    4,
                    3,
                    3,
                    3,
                    2,
                    1,
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
                "sorcerer-ability-score-improvement-3"
            ],
            "classSpecific": {
                "creatingSpellSlots": [
                    {
                        "sorceryPointCost": 2,
                        "spellSlotLevel": 1
                    },
                    {
                        "sorceryPointCost": 3,
                        "spellSlotLevel": 2
                    },
                    {
                        "sorceryPointCost": 5,
                        "spellSlotLevel": 3
                    },
                    {
                        "sorceryPointCost": 6,
                        "spellSlotLevel": 4
                    },
                    {
                        "sorceryPointCost": 7,
                        "spellSlotLevel": 5
                    }
                ],
                "metamagicKnown": 3,
                "sorceryPoints": 12
            },
            "spellcasting": {
                "cantripsKnown": 6,
                "spellsKnown": 12,
                "spellSlots": [
                    4,
                    3,
                    3,
                    3,
                    2,
                    1,
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
                "creatingSpellSlots": [
                    {
                        "sorceryPointCost": 2,
                        "spellSlotLevel": 1
                    },
                    {
                        "sorceryPointCost": 3,
                        "spellSlotLevel": 2
                    },
                    {
                        "sorceryPointCost": 5,
                        "spellSlotLevel": 3
                    },
                    {
                        "sorceryPointCost": 6,
                        "spellSlotLevel": 4
                    },
                    {
                        "sorceryPointCost": 7,
                        "spellSlotLevel": 5
                    }
                ],
                "metamagicKnown": 3,
                "sorceryPoints": 13
            },
            "spellcasting": {
                "cantripsKnown": 6,
                "spellsKnown": 13,
                "spellSlots": [
                    4,
                    3,
                    3,
                    3,
                    2,
                    1,
                    1,
                    0,
                    0
                ]
            }
        },
        {
            "level": 14,
            "abilityScoreBonuses": 3,
            "featureIds": [
                "sorcerous-origin-improvement-2"
            ],
            "classSpecific": {
                "creatingSpellSlots": [
                    {
                        "sorceryPointCost": 2,
                        "spellSlotLevel": 1
                    },
                    {
                        "sorceryPointCost": 3,
                        "spellSlotLevel": 2
                    },
                    {
                        "sorceryPointCost": 5,
                        "spellSlotLevel": 3
                    },
                    {
                        "sorceryPointCost": 6,
                        "spellSlotLevel": 4
                    },
                    {
                        "sorceryPointCost": 7,
                        "spellSlotLevel": 5
                    }
                ],
                "metamagicKnown": 3,
                "sorceryPoints": 14
            },
            "spellcasting": {
                "cantripsKnown": 6,
                "spellsKnown": 13,
                "spellSlots": [
                    4,
                    3,
                    3,
                    3,
                    2,
                    1,
                    1,
                    0,
                    0
                ]
            }
        },
        {
            "level": 15,
            "abilityScoreBonuses": 3,
            "featureIds": [],
            "classSpecific": {
                "creatingSpellSlots": [
                    {
                        "sorceryPointCost": 2,
                        "spellSlotLevel": 1
                    },
                    {
                        "sorceryPointCost": 3,
                        "spellSlotLevel": 2
                    },
                    {
                        "sorceryPointCost": 5,
                        "spellSlotLevel": 3
                    },
                    {
                        "sorceryPointCost": 6,
                        "spellSlotLevel": 4
                    },
                    {
                        "sorceryPointCost": 7,
                        "spellSlotLevel": 5
                    }
                ],
                "metamagicKnown": 3,
                "sorceryPoints": 15
            },
            "spellcasting": {
                "cantripsKnown": 6,
                "spellsKnown": 14,
                "spellSlots": [
                    4,
                    3,
                    3,
                    3,
                    2,
                    1,
                    1,
                    1,
                    0
                ]
            }
        },
        {
            "level": 16,
            "abilityScoreBonuses": 4,
            "featureIds": [
                "sorcerer-ability-score-improvement-4"
            ],
            "classSpecific": {
                "creatingSpellSlots": [
                    {
                        "sorceryPointCost": 2,
                        "spellSlotLevel": 1
                    },
                    {
                        "sorceryPointCost": 3,
                        "spellSlotLevel": 2
                    },
                    {
                        "sorceryPointCost": 5,
                        "spellSlotLevel": 3
                    },
                    {
                        "sorceryPointCost": 6,
                        "spellSlotLevel": 4
                    },
                    {
                        "sorceryPointCost": 7,
                        "spellSlotLevel": 5
                    }
                ],
                "metamagicKnown": 4,
                "sorceryPoints": 16
            },
            "spellcasting": {
                "cantripsKnown": 6,
                "spellsKnown": 14,
                "spellSlots": [
                    4,
                    3,
                    3,
                    3,
                    2,
                    1,
                    1,
                    1,
                    0
                ]
            }
        },
        {
            "level": 17,
            "abilityScoreBonuses": 4,
            "featureIds": [
                "metamagic-3"
            ],
            "classSpecific": {
                "creatingSpellSlots": [
                    {
                        "sorceryPointCost": 2,
                        "spellSlotLevel": 1
                    },
                    {
                        "sorceryPointCost": 3,
                        "spellSlotLevel": 2
                    },
                    {
                        "sorceryPointCost": 5,
                        "spellSlotLevel": 3
                    },
                    {
                        "sorceryPointCost": 6,
                        "spellSlotLevel": 4
                    },
                    {
                        "sorceryPointCost": 7,
                        "spellSlotLevel": 5
                    }
                ],
                "metamagicKnown": 4,
                "sorceryPoints": 17
            },
            "spellcasting": {
                "cantripsKnown": 6,
                "spellsKnown": 15,
                "spellSlots": [
                    4,
                    3,
                    3,
                    3,
                    2,
                    1,
                    1,
                    1,
                    1
                ]
            }
        },
        {
            "level": 18,
            "abilityScoreBonuses": 4,
            "featureIds": [
                "sorcerous-origin-improvement-3"
            ],
            "classSpecific": {
                "creatingSpellSlots": [
                    {
                        "sorceryPointCost": 2,
                        "spellSlotLevel": 1
                    },
                    {
                        "sorceryPointCost": 3,
                        "spellSlotLevel": 2
                    },
                    {
                        "sorceryPointCost": 5,
                        "spellSlotLevel": 3
                    },
                    {
                        "sorceryPointCost": 6,
                        "spellSlotLevel": 4
                    },
                    {
                        "sorceryPointCost": 7,
                        "spellSlotLevel": 5
                    }
                ],
                "metamagicKnown": 4,
                "sorceryPoints": 18
            },
            "spellcasting": {
                "cantripsKnown": 6,
                "spellsKnown": 15,
                "spellSlots": [
                    4,
                    3,
                    3,
                    3,
                    3,
                    1,
                    1,
                    1,
                    1
                ]
            }
        },
        {
            "level": 19,
            "abilityScoreBonuses": 5,
            "featureIds": [
                "sorcerer-ability-score-improvement-5"
            ],
            "classSpecific": {
                "creatingSpellSlots": [
                    {
                        "sorceryPointCost": 2,
                        "spellSlotLevel": 1
                    },
                    {
                        "sorceryPointCost": 3,
                        "spellSlotLevel": 2
                    },
                    {
                        "sorceryPointCost": 5,
                        "spellSlotLevel": 3
                    },
                    {
                        "sorceryPointCost": 6,
                        "spellSlotLevel": 4
                    },
                    {
                        "sorceryPointCost": 7,
                        "spellSlotLevel": 5
                    }
                ],
                "metamagicKnown": 4,
                "sorceryPoints": 19
            },
            "spellcasting": {
                "cantripsKnown": 6,
                "spellsKnown": 15,
                "spellSlots": [
                    4,
                    3,
                    3,
                    3,
                    3,
                    2,
                    1,
                    1,
                    1
                ]
            }
        },
        {
            "level": 20,
            "abilityScoreBonuses": 5,
            "featureIds": [
                "sorcerous-restoration"
            ],
            "classSpecific": {
                "creatingSpellSlots": [
                    {
                        "sorceryPointCost": 2,
                        "spellSlotLevel": 1
                    },
                    {
                        "sorceryPointCost": 3,
                        "spellSlotLevel": 2
                    },
                    {
                        "sorceryPointCost": 5,
                        "spellSlotLevel": 3
                    },
                    {
                        "sorceryPointCost": 6,
                        "spellSlotLevel": 4
                    },
                    {
                        "sorceryPointCost": 7,
                        "spellSlotLevel": 5
                    }
                ],
                "metamagicKnown": 4,
                "sorceryPoints": 20
            },
            "spellcasting": {
                "cantripsKnown": 6,
                "spellsKnown": 15,
                "spellSlots": [
                    4,
                    3,
                    3,
                    3,
                    3,
                    2,
                    2,
                    1,
                    1
                ]
            }
        }
    ],
    "features": {
        "sorcerous-origin": {
            "id": "sorcerous-origin",
            "name": "Sorcerous Origin",
            "level": 1
        },
        "spellcasting-sorcerer": {
            "id": "spellcasting-sorcerer",
            "name": "Spellcasting: Sorcerer",
            "level": 1
        },
        "flexible-casting-converting-spell-slot": {
            "id": "flexible-casting-converting-spell-slot",
            "name": "Flexible Casting: Converting Spell Slot",
            "level": 2
        },
        "flexible-casting-creating-spell-slots": {
            "id": "flexible-casting-creating-spell-slots",
            "name": "Flexible Casting: Creating Spell Slots",
            "level": 2
        },
        "font-of-magic": {
            "id": "font-of-magic",
            "name": "Font of Magic",
            "level": 2
        },
        "metamagic-1": {
            "id": "metamagic-1",
            "name": "Metamagic",
            "level": 3
        },
        "sorcerer-ability-score-improvement-1": {
            "id": "sorcerer-ability-score-improvement-1",
            "name": "Ability Score Improvement",
            "level": 4
        },
        "sorcerous-origin-improvement-1": {
            "id": "sorcerous-origin-improvement-1",
            "name": "Sorcerous Origin feature",
            "level": 6
        },
        "sorcerer-ability-score-improvement-2": {
            "id": "sorcerer-ability-score-improvement-2",
            "name": "Ability Score Improvement",
            "level": 8
        },
        "metamagic-2": {
            "id": "metamagic-2",
            "name": "Metamagic",
            "level": 10
        },
        "sorcerer-ability-score-improvement-3": {
            "id": "sorcerer-ability-score-improvement-3",
            "name": "Ability Score Improvement",
            "level": 12
        },
        "sorcerous-origin-improvement-2": {
            "id": "sorcerous-origin-improvement-2",
            "name": "Sorcerous Origin feature",
            "level": 14
        },
        "sorcerer-ability-score-improvement-4": {
            "id": "sorcerer-ability-score-improvement-4",
            "name": "Ability Score Improvement",
            "level": 16
        },
        "metamagic-3": {
            "id": "metamagic-3",
            "name": "Metamagic",
            "level": 17
        },
        "sorcerous-origin-improvement-3": {
            "id": "sorcerous-origin-improvement-3",
            "name": "Sorcerous Origin feature",
            "level": 18
        },
        "sorcerer-ability-score-improvement-5": {
            "id": "sorcerer-ability-score-improvement-5",
            "name": "Ability Score Improvement",
            "level": 19
        },
        "sorcerous-restoration": {
            "id": "sorcerous-restoration",
            "name": "Sorcerous Restoration",
            "level": 20
        },
        "draconic-resilience": {
            "id": "draconic-resilience",
            "name": "Draconic Resilience",
            "level": 1,
            "subclassId": "draconic"
        },
        "dragon-ancestor": {
            "id": "dragon-ancestor",
            "name": "Dragon Ancestor",
            "level": 1,
            "subclassId": "draconic"
        },
        "elemental-affinity": {
            "id": "elemental-affinity",
            "name": "Elemental Affinity",
            "level": 6,
            "subclassId": "draconic"
        },
        "dragon-wings": {
            "id": "dragon-wings",
            "name": "Dragon Wings",
            "level": 14,
            "subclassId": "draconic"
        },
        "draconic-presence": {
            "id": "draconic-presence",
            "name": "Draconic Presence",
            "level": 18,
            "subclassId": "draconic"
        }
    },
    "featureDescriptions": {
        "sorcerous-origin": [
            "Choose a sorcerous origin, which describes the source of your innate magical power, such as Draconic Bloodline.",
            "Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level."
        ],
        "spellcasting-sorcerer": [
            "An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells."
        ],
        "flexible-casting-converting-spell-slot": [
            "As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot's level.."
        ],
        "flexible-casting-creating-spell-slots": [
            "You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th.",
            "Any spell slot you create with this feature vanishes when you finish a long rest."
        ],
        "font-of-magic": [
            "At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.",
            "Sorcery Points",
            "You have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest."
        ],
        "metamagic-1": [
            "At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.",
            "You can use only one Metamagic option on a spell when you cast it, unless otherwise noted."
        ],
        "sorcerer-ability-score-improvement-1": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "sorcerous-origin-improvement-1": [
            "Choose a sorcerous origin, which describes the source of your innate magical power, such as Draconic Bloodline.",
            "Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level."
        ],
        "sorcerer-ability-score-improvement-2": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "metamagic-2": [
            "At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.",
            "You can use only one Metamagic option on a spell when you cast it, unless otherwise noted."
        ],
        "sorcerer-ability-score-improvement-3": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "sorcerous-origin-improvement-2": [
            "Choose a sorcerous origin, which describes the source of your innate magical power, such as Draconic Bloodline.",
            "Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level."
        ],
        "sorcerer-ability-score-improvement-4": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "metamagic-3": [
            "At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.",
            "You can use only one Metamagic option on a spell when you cast it, unless otherwise noted."
        ],
        "sorcerous-origin-improvement-3": [
            "Choose a sorcerous origin, which describes the source of your innate magical power, such as Draconic Bloodline.",
            "Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level."
        ],
        "sorcerer-ability-score-improvement-5": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "sorcerous-restoration": [
            "At 20th level, you regain 4 expended sorcery points whenever you finish a short rest."
        ],
        "draconic-resilience": [
            "As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class.",
            "Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Dexterity modifier."
        ],
        "dragon-ancestor": [
            "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
            "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
        ],
        "elemental-affinity": [
            "Starting at 6th level, when you cast a spell that deals damage of the type associated with your draconic ancestry, you can add your Charisma modifier to one damage roll of that spell. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour."
        ],
        "dragon-wings": [
            "At 14th level, you gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn.",
            "You can't manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them."
        ],
        "draconic-presence": [
            "Beginning at 18th level, you can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or frightened. As an action, you can spend 5 sorcery points to draw on this power and exude an aura of awe or fear (your choice) to a distance of 60 feet. For 1 minute or until you lose your concentration (as if you were casting a concentration spell), each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw or be charmed (if you chose awe) or frightened (if you chose fear) until the aura ends. A creature that succeeds on this saving throw is immune to your aura for 24 hours."
        ]
    },
    "spellcasting": {
        "ability": "cha",
        "startLevel": 1,
        "info": [
            {
                "name": "Cantrips",
                "desc": [
                    "At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table."
                ]
            },
            {
                "name": "Spell Slots",
                "desc": [
                    "The Sorcerer table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                    "For example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell slot available, you can cast burning hands using either slot."
                ]
            },
            {
                "name": "Spells Known of 1st Level and Higher",
                "desc": [
                    "You know two 1st-level spells of your choice from the sorcerer spell list.",
                    "The Spells Known column of the Sorcerer table shows when you learn more sorcerer spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.",
                    "Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots."
                ]
            },
            {
                "name": "Spellcasting Ability",
                "desc": [
                    "Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.",
                    "Spell save DC = 8 + your proficiency bonus + your Charisma modifier.",
                    "Spell attack modifier = your proficiency bonus + your Charisma modifier."
                ]
            },
            {
                "name": "Spellcasting Focus",
                "desc": [
                    "You can use an arcane focus as a spellcasting focus for your sorcerer spells."
                ]
            }
        ],
        "spellList": [
            {
                "index": "acid-splash",
                "name": "Acid Splash",
                "level": 0
            },
            {
                "index": "chill-touch",
                "name": "Chill Touch",
                "level": 0
            },
            {
                "index": "dancing-lights",
                "name": "Dancing Lights",
                "level": 0
            },
            {
                "index": "fire-bolt",
                "name": "Fire Bolt",
                "level": 0
            },
            {
                "index": "light",
                "name": "Light",
                "level": 0
            },
            {
                "index": "mage-hand",
                "name": "Mage Hand",
                "level": 0
            },
            {
                "index": "mending",
                "name": "Mending",
                "level": 0
            },
            {
                "index": "message",
                "name": "Message",
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
                "index": "ray-of-frost",
                "name": "Ray of Frost",
                "level": 0
            },
            {
                "index": "shocking-grasp",
                "name": "Shocking Grasp",
                "level": 0
            },
            {
                "index": "true-strike",
                "name": "True Strike",
                "level": 0
            },
            {
                "index": "burning-hands",
                "name": "Burning Hands",
                "level": 1
            },
            {
                "index": "charm-person",
                "name": "Charm Person",
                "level": 1
            },
            {
                "index": "color-spray",
                "name": "Color Spray",
                "level": 1
            },
            {
                "index": "comprehend-languages",
                "name": "Comprehend Languages",
                "level": 1
            },
            {
                "index": "detect-magic",
                "name": "Detect Magic",
                "level": 1
            },
            {
                "index": "disguise-self",
                "name": "Disguise Self",
                "level": 1
            },
            {
                "index": "expeditious-retreat",
                "name": "Expeditious Retreat",
                "level": 1
            },
            {
                "index": "false-life",
                "name": "False Life",
                "level": 1
            },
            {
                "index": "feather-fall",
                "name": "Feather Fall",
                "level": 1
            },
            {
                "index": "fog-cloud",
                "name": "Fog Cloud",
                "level": 1
            },
            {
                "index": "jump",
                "name": "Jump",
                "level": 1
            },
            {
                "index": "mage-armor",
                "name": "Mage Armor",
                "level": 1
            },
            {
                "index": "magic-missile",
                "name": "Magic Missile",
                "level": 1
            },
            {
                "index": "shield",
                "name": "Shield",
                "level": 1
            },
            {
                "index": "silent-image",
                "name": "Silent Image",
                "level": 1
            },
            {
                "index": "sleep",
                "name": "Sleep",
                "level": 1
            },
            {
                "index": "thunderwave",
                "name": "Thunderwave",
                "level": 1
            },
            {
                "index": "alter-self",
                "name": "Alter Self",
                "level": 2
            },
            {
                "index": "blindness-deafness",
                "name": "Blindness/Deafness",
                "level": 2
            },
            {
                "index": "blur",
                "name": "Blur",
                "level": 2
            },
            {
                "index": "darkness",
                "name": "Darkness",
                "level": 2
            },
            {
                "index": "darkvision",
                "name": "Darkvision",
                "level": 2
            },
            {
                "index": "detect-thoughts",
                "name": "Detect Thoughts",
                "level": 2
            },
            {
                "index": "enhance-ability",
                "name": "Enhance Ability",
                "level": 2
            },
            {
                "index": "enlarge-reduce",
                "name": "Enlarge/Reduce",
                "level": 2
            },
            {
                "index": "gust-of-wind",
                "name": "Gust of Wind",
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
                "index": "knock",
                "name": "Knock",
                "level": 2
            },
            {
                "index": "levitate",
                "name": "Levitate",
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
                "index": "scorching-ray",
                "name": "Scorching Ray",
                "level": 2
            },
            {
                "index": "see-invisibility",
                "name": "See Invisibility",
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
                "index": "web",
                "name": "Web",
                "level": 2
            },
            {
                "index": "blink",
                "name": "Blink",
                "level": 3
            },
            {
                "index": "clairvoyance",
                "name": "Clairvoyance",
                "level": 3
            },
            {
                "index": "counterspell",
                "name": "Counterspell",
                "level": 3
            },
            {
                "index": "daylight",
                "name": "Daylight",
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
                "index": "fireball",
                "name": "Fireball",
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
                "index": "haste",
                "name": "Haste",
                "level": 3
            },
            {
                "index": "hypnotic-pattern",
                "name": "Hypnotic Pattern",
                "level": 3
            },
            {
                "index": "lightning-bolt",
                "name": "Lightning Bolt",
                "level": 3
            },
            {
                "index": "major-image",
                "name": "Major Image",
                "level": 3
            },
            {
                "index": "protection-from-energy",
                "name": "Protection From Energy",
                "level": 3
            },
            {
                "index": "sleet-storm",
                "name": "Sleet Storm",
                "level": 3
            },
            {
                "index": "slow",
                "name": "Slow",
                "level": 3
            },
            {
                "index": "stinking-cloud",
                "name": "Stinking Cloud",
                "level": 3
            },
            {
                "index": "tongues",
                "name": "Tongues",
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
                "index": "confusion",
                "name": "Confusion",
                "level": 4
            },
            {
                "index": "dimension-door",
                "name": "Dimension Door",
                "level": 4
            },
            {
                "index": "dominate-beast",
                "name": "Dominate Beast",
                "level": 4
            },
            {
                "index": "greater-invisibility",
                "name": "Greater Invisibility",
                "level": 4
            },
            {
                "index": "ice-storm",
                "name": "Ice Storm",
                "level": 4
            },
            {
                "index": "polymorph",
                "name": "Polymorph",
                "level": 4
            },
            {
                "index": "stoneskin",
                "name": "Stoneskin",
                "level": 4
            },
            {
                "index": "wall-of-fire",
                "name": "Wall of Fire",
                "level": 4
            },
            {
                "index": "animate-objects",
                "name": "Animate Objects",
                "level": 5
            },
            {
                "index": "cloudkill",
                "name": "Cloudkill",
                "level": 5
            },
            {
                "index": "cone-of-cold",
                "name": "Cone of Cold",
                "level": 5
            },
            {
                "index": "creation",
                "name": "Creation",
                "level": 5
            },
            {
                "index": "dominate-person",
                "name": "Dominate Person",
                "level": 5
            },
            {
                "index": "hold-monster",
                "name": "Hold Monster",
                "level": 5
            },
            {
                "index": "insect-plague",
                "name": "Insect Plague",
                "level": 5
            },
            {
                "index": "seeming",
                "name": "Seeming",
                "level": 5
            },
            {
                "index": "telekinesis",
                "name": "Telekinesis",
                "level": 5
            },
            {
                "index": "teleportation-circle",
                "name": "Teleportation Circle",
                "level": 5
            },
            {
                "index": "wall-of-stone",
                "name": "Wall of Stone",
                "level": 5
            },
            {
                "index": "chain-lightning",
                "name": "Chain Lightning",
                "level": 6
            },
            {
                "index": "circle-of-death",
                "name": "Circle of Death",
                "level": 6
            },
            {
                "index": "disintegrate",
                "name": "Disintegrate",
                "level": 6
            },
            {
                "index": "eyebite",
                "name": "Eyebite",
                "level": 6
            },
            {
                "index": "globe-of-invulnerability",
                "name": "Globe of Invulnerability",
                "level": 6
            },
            {
                "index": "mass-suggestion",
                "name": "Mass Suggestion",
                "level": 6
            },
            {
                "index": "move-earth",
                "name": "Move Earth",
                "level": 6
            },
            {
                "index": "sunbeam",
                "name": "Sunbeam",
                "level": 6
            },
            {
                "index": "true-seeing",
                "name": "True Seeing",
                "level": 6
            },
            {
                "index": "delayed-blast-fireball",
                "name": "Delayed Blast Fireball",
                "level": 7
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
                "index": "fire-storm",
                "name": "Fire Storm",
                "level": 7
            },
            {
                "index": "plane-shift",
                "name": "Plane Shift",
                "level": 7
            },
            {
                "index": "prismatic-spray",
                "name": "Prismatic Spray",
                "level": 7
            },
            {
                "index": "reverse-gravity",
                "name": "Reverse Gravity",
                "level": 7
            },
            {
                "index": "teleport",
                "name": "Teleport",
                "level": 7
            },
            {
                "index": "dominate-monster",
                "name": "Dominate Monster",
                "level": 8
            },
            {
                "index": "earthquake",
                "name": "Earthquake",
                "level": 8
            },
            {
                "index": "incendiary-cloud",
                "name": "Incendiary Cloud",
                "level": 8
            },
            {
                "index": "power-word-stun",
                "name": "Power Word Stun",
                "level": 8
            },
            {
                "index": "sunburst",
                "name": "Sunburst",
                "level": 8
            },
            {
                "index": "gate",
                "name": "Gate",
                "level": 9
            },
            {
                "index": "meteor-swarm",
                "name": "Meteor Swarm",
                "level": 9
            },
            {
                "index": "power-word-kill",
                "name": "Power Word Kill",
                "level": 9
            },
            {
                "index": "time-stop",
                "name": "Time Stop",
                "level": 9
            },
            {
                "index": "wish",
                "name": "Wish",
                "level": 9
            }
        ]
    },
    "subclasses": [
        {
            "id": "draconic",
            "name": "Draconic",
            "flavor": "Sorcerous Origin",
            "description": [
                "Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance."
            ],
            "levels": [
                {
                    "level": 1,
                    "featureIds": [
                        "draconic-resilience",
                        "dragon-ancestor"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 6,
                    "featureIds": [
                        "elemental-affinity"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 14,
                    "featureIds": [
                        "dragon-wings"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 18,
                    "featureIds": [
                        "draconic-presence"
                    ],
                    "subclassSpecific": {}
                }
            ],
            "spells": []
        }
    ]
};
