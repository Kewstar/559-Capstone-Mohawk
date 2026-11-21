import type { ClassDetails } from "../types";

export const bard: ClassDetails = {
    "name": "bard",
    "label": "Bard",
    "hitDie": 8,
    "savingThrows": [
        "dex",
        "cha"
    ],
    "proficiencies": [
        {
            "index": "hand-crossbows",
            "name": "Hand crossbows",
            "type": "Weapons"
        },
        {
            "index": "light-armor",
            "name": "Light Armor",
            "type": "Armor"
        },
        {
            "index": "longswords",
            "name": "Longswords",
            "type": "Weapons"
        },
        {
            "index": "rapiers",
            "name": "Rapiers",
            "type": "Weapons"
        },
        {
            "index": "shortswords",
            "name": "Shortswords",
            "type": "Weapons"
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
            "desc": "Choose any three",
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
        },
        {
            "choose": 3,
            "desc": "Three musical instruments of your choice",
            "options": [
                {
                    "type": "reference",
                    "proficiency": {
                        "index": "bagpipes",
                        "name": "Bagpipes",
                        "type": "Musical Instruments"
                    }
                },
                {
                    "type": "reference",
                    "proficiency": {
                        "index": "drum",
                        "name": "Drum",
                        "type": "Musical Instruments"
                    }
                },
                {
                    "type": "reference",
                    "proficiency": {
                        "index": "dulcimer",
                        "name": "Dulcimer",
                        "type": "Musical Instruments"
                    }
                },
                {
                    "type": "reference",
                    "proficiency": {
                        "index": "flute",
                        "name": "Flute",
                        "type": "Musical Instruments"
                    }
                },
                {
                    "type": "reference",
                    "proficiency": {
                        "index": "lute",
                        "name": "Lute",
                        "type": "Musical Instruments"
                    }
                },
                {
                    "type": "reference",
                    "proficiency": {
                        "index": "lyre",
                        "name": "Lyre",
                        "type": "Musical Instruments"
                    }
                },
                {
                    "type": "reference",
                    "proficiency": {
                        "index": "horn",
                        "name": "Horn",
                        "type": "Musical Instruments"
                    }
                },
                {
                    "type": "reference",
                    "proficiency": {
                        "index": "pan-flute",
                        "name": "Pan flute",
                        "type": "Musical Instruments"
                    }
                },
                {
                    "type": "reference",
                    "proficiency": {
                        "index": "shawm",
                        "name": "Shawm",
                        "type": "Musical Instruments"
                    }
                },
                {
                    "type": "reference",
                    "proficiency": {
                        "index": "viol",
                        "name": "Viol",
                        "type": "Musical Instruments"
                    }
                }
            ]
        }
    ],
    "startingEquipment": {
        "items": [
            {
                "index": "leather-armor",
                "name": "Leather Armor",
                "quantity": 1,
                "category": "Armor"
            },
            {
                "index": "dagger",
                "name": "Dagger",
                "quantity": 1,
                "category": "Weapon"
            }
        ],
        "choices": [
            {
                "choose": 1,
                "desc": "(a) a rapier, (b) a longsword, or (c) any simple weapon"
            },
            {
                "choose": 1,
                "desc": "(a) a diplomat’s pack or (b) an entertainer’s pack"
            },
            {
                "choose": 1,
                "desc": "(a) a lute or (b) any other musical instrument"
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
            }
        ],
        "proficiencyChoices": [
            {
                "choose": 1,
                "desc": "skill",
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
            },
            {
                "choose": 1,
                "desc": "musical instrument",
                "options": [
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "bagpipes",
                            "name": "Bagpipes",
                            "type": "Musical Instruments"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "drum",
                            "name": "Drum",
                            "type": "Musical Instruments"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "dulcimer",
                            "name": "Dulcimer",
                            "type": "Musical Instruments"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "flute",
                            "name": "Flute",
                            "type": "Musical Instruments"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "lute",
                            "name": "Lute",
                            "type": "Musical Instruments"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "lyre",
                            "name": "Lyre",
                            "type": "Musical Instruments"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "horn",
                            "name": "Horn",
                            "type": "Musical Instruments"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "pan-flute",
                            "name": "Pan flute",
                            "type": "Musical Instruments"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "shawm",
                            "name": "Shawm",
                            "type": "Musical Instruments"
                        }
                    },
                    {
                        "type": "reference",
                        "proficiency": {
                            "index": "viol",
                            "name": "Viol",
                            "type": "Musical Instruments"
                        }
                    }
                ]
            }
        ]
    },
    "primaryAbilities": [
        "cha"
    ],
    "classTable": [
        {
            "level": 1,
            "abilityScoreBonuses": 0,
            "featureIds": [
                "bardic-inspiration-d6",
                "spellcasting-bard"
            ],
            "classSpecific": {
                "bardicInspirationDie": 6,
                "magicalSecretsMax5": 0,
                "magicalSecretsMax7": 0,
                "magicalSecretsMax9": 0,
                "songOfRestDie": 0
            },
            "spellcasting": {
                "cantripsKnown": 2,
                "spellsKnown": 4,
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
                "jack-of-all-trades",
                "song-of-rest-d6"
            ],
            "classSpecific": {
                "bardicInspirationDie": 6,
                "magicalSecretsMax5": 0,
                "magicalSecretsMax7": 0,
                "magicalSecretsMax9": 0,
                "songOfRestDie": 6
            },
            "spellcasting": {
                "cantripsKnown": 2,
                "spellsKnown": 5,
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
                "bard-college",
                "bard-expertise-1"
            ],
            "classSpecific": {
                "bardicInspirationDie": 6,
                "magicalSecretsMax5": 0,
                "magicalSecretsMax7": 0,
                "magicalSecretsMax9": 0,
                "songOfRestDie": 6
            },
            "spellcasting": {
                "cantripsKnown": 2,
                "spellsKnown": 6,
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
                "bard-ability-score-improvement-1"
            ],
            "classSpecific": {
                "bardicInspirationDie": 6,
                "magicalSecretsMax5": 0,
                "magicalSecretsMax7": 0,
                "magicalSecretsMax9": 0,
                "songOfRestDie": 6
            },
            "spellcasting": {
                "cantripsKnown": 3,
                "spellsKnown": 7,
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
            "featureIds": [
                "bardic-inspiration-d8",
                "font-of-inspiration"
            ],
            "classSpecific": {
                "bardicInspirationDie": 8,
                "magicalSecretsMax5": 0,
                "magicalSecretsMax7": 0,
                "magicalSecretsMax9": 0,
                "songOfRestDie": 6
            },
            "spellcasting": {
                "cantripsKnown": 3,
                "spellsKnown": 8,
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
                "bard-college-improvement-1",
                "countercharm"
            ],
            "classSpecific": {
                "bardicInspirationDie": 8,
                "magicalSecretsMax5": 0,
                "magicalSecretsMax7": 0,
                "magicalSecretsMax9": 0,
                "songOfRestDie": 6
            },
            "spellcasting": {
                "cantripsKnown": 3,
                "spellsKnown": 9,
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
                "bardicInspirationDie": 8,
                "magicalSecretsMax5": 0,
                "magicalSecretsMax7": 0,
                "magicalSecretsMax9": 0,
                "songOfRestDie": 6
            },
            "spellcasting": {
                "cantripsKnown": 3,
                "spellsKnown": 10,
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
                "bard-ability-score-improvement-2"
            ],
            "classSpecific": {
                "bardicInspirationDie": 8,
                "magicalSecretsMax5": 0,
                "magicalSecretsMax7": 0,
                "magicalSecretsMax9": 0,
                "songOfRestDie": 6
            },
            "spellcasting": {
                "cantripsKnown": 3,
                "spellsKnown": 11,
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
            "featureIds": [
                "song-of-rest-d8"
            ],
            "classSpecific": {
                "bardicInspirationDie": 8,
                "magicalSecretsMax5": 0,
                "magicalSecretsMax7": 0,
                "magicalSecretsMax9": 0,
                "songOfRestDie": 8
            },
            "spellcasting": {
                "cantripsKnown": 3,
                "spellsKnown": 12,
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
                "bard-expertise-2",
                "bardic-inspiration-d10",
                "magical-secrets-1"
            ],
            "classSpecific": {
                "bardicInspirationDie": 10,
                "magicalSecretsMax5": 2,
                "magicalSecretsMax7": 0,
                "magicalSecretsMax9": 0,
                "songOfRestDie": 8
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 14,
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
                "bardicInspirationDie": 10,
                "magicalSecretsMax5": 2,
                "magicalSecretsMax7": 0,
                "magicalSecretsMax9": 0,
                "songOfRestDie": 8
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 15,
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
                "bard-ability-score-improvement-3"
            ],
            "classSpecific": {
                "bardicInspirationDie": 10,
                "magicalSecretsMax5": 2,
                "magicalSecretsMax7": 0,
                "magicalSecretsMax9": 0,
                "songOfRestDie": 8
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 15,
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
            "featureIds": [
                "song-of-rest-d10"
            ],
            "classSpecific": {
                "bardicInspirationDie": 10,
                "magicalSecretsMax5": 2,
                "magicalSecretsMax7": 0,
                "magicalSecretsMax9": 0,
                "songOfRestDie": 10
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 16,
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
                "bard-college-improvement-2",
                "magical-secrets-2"
            ],
            "classSpecific": {
                "bardicInspirationDie": 10,
                "magicalSecretsMax5": 2,
                "magicalSecretsMax7": 2,
                "magicalSecretsMax9": 0,
                "songOfRestDie": 10
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 18,
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
            "featureIds": [
                "bardic-inspiration-d12"
            ],
            "classSpecific": {
                "bardicInspirationDie": 12,
                "magicalSecretsMax5": 2,
                "magicalSecretsMax7": 2,
                "magicalSecretsMax9": 0,
                "songOfRestDie": 10
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 19,
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
                "bard-ability-score-improvement-4"
            ],
            "classSpecific": {
                "bardicInspirationDie": 12,
                "magicalSecretsMax5": 2,
                "magicalSecretsMax7": 2,
                "magicalSecretsMax9": 0,
                "songOfRestDie": 10
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 19,
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
                "song-of-rest-d12"
            ],
            "classSpecific": {
                "bardicInspirationDie": 12,
                "magicalSecretsMax5": 2,
                "magicalSecretsMax7": 2,
                "magicalSecretsMax9": 0,
                "songOfRestDie": 12
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 20,
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
                "magical-secrets-3"
            ],
            "classSpecific": {
                "bardicInspirationDie": 12,
                "magicalSecretsMax5": 2,
                "magicalSecretsMax7": 2,
                "magicalSecretsMax9": 2,
                "songOfRestDie": 12
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 22,
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
                "bard-ability-score-improvement-5"
            ],
            "classSpecific": {
                "bardicInspirationDie": 12,
                "magicalSecretsMax5": 2,
                "magicalSecretsMax7": 2,
                "magicalSecretsMax9": 2,
                "songOfRestDie": 12
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 22,
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
                "superior-inspiration"
            ],
            "classSpecific": {
                "bardicInspirationDie": 12,
                "magicalSecretsMax5": 2,
                "magicalSecretsMax7": 2,
                "magicalSecretsMax9": 2,
                "songOfRestDie": 12
            },
            "spellcasting": {
                "cantripsKnown": 4,
                "spellsKnown": 22,
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
        "bardic-inspiration-d6": {
            "id": "bardic-inspiration-d6",
            "name": "Bardic Inspiration (d6)",
            "level": 1
        },
        "spellcasting-bard": {
            "id": "spellcasting-bard",
            "name": "Spellcasting: Bard",
            "level": 1
        },
        "jack-of-all-trades": {
            "id": "jack-of-all-trades",
            "name": "Jack of All Trades",
            "level": 2
        },
        "song-of-rest-d6": {
            "id": "song-of-rest-d6",
            "name": "Song of Rest (d6)",
            "level": 2
        },
        "bard-college": {
            "id": "bard-college",
            "name": "Bard College",
            "level": 3
        },
        "bard-expertise-1": {
            "id": "bard-expertise-1",
            "name": "Expertise",
            "level": 3
        },
        "bard-ability-score-improvement-1": {
            "id": "bard-ability-score-improvement-1",
            "name": "Ability Score Improvement",
            "level": 4
        },
        "bardic-inspiration-d8": {
            "id": "bardic-inspiration-d8",
            "name": "Bardic Inspiration (d8)",
            "level": 5
        },
        "font-of-inspiration": {
            "id": "font-of-inspiration",
            "name": "Font of Inspiration",
            "level": 5
        },
        "bard-college-improvement-1": {
            "id": "bard-college-improvement-1",
            "name": "Bard College feature",
            "level": 6
        },
        "countercharm": {
            "id": "countercharm",
            "name": "Countercharm",
            "level": 6
        },
        "bard-ability-score-improvement-2": {
            "id": "bard-ability-score-improvement-2",
            "name": "Ability Score Improvement",
            "level": 8
        },
        "song-of-rest-d8": {
            "id": "song-of-rest-d8",
            "name": "Song of Rest (d8)",
            "level": 9
        },
        "bard-expertise-2": {
            "id": "bard-expertise-2",
            "name": "Expertise",
            "level": 10
        },
        "bardic-inspiration-d10": {
            "id": "bardic-inspiration-d10",
            "name": "Bardic Inspiration (d10)",
            "level": 10
        },
        "magical-secrets-1": {
            "id": "magical-secrets-1",
            "name": "Magical Secrets",
            "level": 10
        },
        "bard-ability-score-improvement-3": {
            "id": "bard-ability-score-improvement-3",
            "name": "Ability Score Improvement",
            "level": 12
        },
        "song-of-rest-d10": {
            "id": "song-of-rest-d10",
            "name": "Song of Rest (d10)",
            "level": 13
        },
        "bard-college-improvement-2": {
            "id": "bard-college-improvement-2",
            "name": "Bard College feature",
            "level": 14
        },
        "magical-secrets-2": {
            "id": "magical-secrets-2",
            "name": "Magical Secrets",
            "level": 14
        },
        "bardic-inspiration-d12": {
            "id": "bardic-inspiration-d12",
            "name": "Bardic Inspiration (d12)",
            "level": 15
        },
        "bard-ability-score-improvement-4": {
            "id": "bard-ability-score-improvement-4",
            "name": "Ability Score Improvement",
            "level": 16
        },
        "song-of-rest-d12": {
            "id": "song-of-rest-d12",
            "name": "Song of Rest (d12)",
            "level": 17
        },
        "magical-secrets-3": {
            "id": "magical-secrets-3",
            "name": "Magical Secrets",
            "level": 18
        },
        "bard-ability-score-improvement-5": {
            "id": "bard-ability-score-improvement-5",
            "name": "Ability Score Improvement",
            "level": 19
        },
        "superior-inspiration": {
            "id": "superior-inspiration",
            "name": "Superior Inspiration",
            "level": 20
        },
        "bonus-proficiencies": {
            "id": "bonus-proficiencies",
            "name": "Bonus Proficiencies",
            "level": 3,
            "subclassId": "lore"
        },
        "cutting-words": {
            "id": "cutting-words",
            "name": "Cutting Words",
            "level": 3,
            "subclassId": "lore"
        },
        "additional-magical-secrets": {
            "id": "additional-magical-secrets",
            "name": "Additional Magical Secrets",
            "level": 6,
            "subclassId": "lore"
        },
        "peerless-skill": {
            "id": "peerless-skill",
            "name": "Peerless Skill",
            "level": 14,
            "subclassId": "lore"
        }
    },
    "featureDescriptions": {
        "bardic-inspiration-d6": [
            "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.",
            "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.",
            "Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
        ],
        "spellcasting-bard": [
            "You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations."
        ],
        "jack-of-all-trades": [
            "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus."
        ],
        "song-of-rest-d6": [
            "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.",
            "The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
        ],
        "bard-college": [
            "At 3rd level, you delve into the advanced techniques of a bard college of your choice, such as the College of Lore. Your choice grants you features at 3rd level and again at 6th and 14th level."
        ],
        "bard-expertise-1": [
            "At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 10th level, you can choose another two skill proficiencies to gain this benefit."
        ],
        "bard-ability-score-improvement-1": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "bardic-inspiration-d8": [
            "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.",
            "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.",
            "Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
        ],
        "font-of-inspiration": [
            "Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest."
        ],
        "bard-college-improvement-1": [
            "At 3rd level, you delve into the advanced techniques of a bard college of your choice, such as the College of Lore. Your choice grants you features at 3rd level and again at 6th and 14th level."
        ],
        "countercharm": [
            "At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required)."
        ],
        "bard-ability-score-improvement-2": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "song-of-rest-d8": [
            "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.",
            "The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
        ],
        "bard-expertise-2": [
            "At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 10th level, you can choose another two skill proficiencies to gain this benefit."
        ],
        "bardic-inspiration-d10": [
            "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.",
            "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.",
            "Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
        ],
        "magical-secrets-1": [
            "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.",
            "The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.",
            "You learn two additional spells from any class at 14th level and again at 18th level."
        ],
        "bard-ability-score-improvement-3": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "song-of-rest-d10": [
            "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.",
            "The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
        ],
        "bard-college-improvement-2": [
            "At 3rd level, you delve into the advanced techniques of a bard college of your choice, such as the College of Lore. Your choice grants you features at 3rd level and again at 6th and 14th level."
        ],
        "magical-secrets-2": [
            "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.",
            "The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.",
            "You learn two additional spells from any class at 14th level and again at 18th level."
        ],
        "bardic-inspiration-d12": [
            "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.",
            "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.",
            "Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
        ],
        "bard-ability-score-improvement-4": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "song-of-rest-d12": [
            "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.",
            "The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
        ],
        "magical-secrets-3": [
            "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.",
            "The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.",
            "You learn two additional spells from any class at 14th level and again at 18th level."
        ],
        "bard-ability-score-improvement-5": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "superior-inspiration": [
            "At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use."
        ],
        "bonus-proficiencies": [
            "When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice."
        ],
        "cutting-words": [
            "Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others.",
            "When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature's roll.",
            "You can choose to use this feature after the creature makes its roll, but before the GM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being charmed."
        ],
        "additional-magical-secrets": [
            "At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don't count against the number of bard spells you know."
        ],
        "peerless-skill": [
            "Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the GM tells you whether you succeed or fail."
        ]
    },
    "spellcasting": {
        "ability": "cha",
        "startLevel": 1,
        "info": [
            {
                "name": "Cantrips",
                "desc": [
                    "You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table."
                ]
            },
            {
                "name": "Spell Slots",
                "desc": [
                    "The Bard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                    "For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot."
                ]
            },
            {
                "name": "Spells Known of 1st Level and Higher",
                "desc": [
                    "You know four 1st-level spells of your choice from the bard spell list.",
                    "The Spells Known column of the Bard table shows when you learn more bard spells of your choice.",
                    "Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.",
                    "Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots."
                ]
            },
            {
                "name": "Spellcasting Ability",
                "desc": [
                    "Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.",
                    "Spell save DC = 8 + your proficiency bonus + your Charisma modifier.",
                    "Spell attack modifier = your proficiency bonus + your Charisma modifier."
                ]
            },
            {
                "name": "Ritual Casting",
                "desc": [
                    "You can cast any bard spell you know as a ritual if that spell has the ritual tag."
                ]
            },
            {
                "name": "Spellcasting Focus",
                "desc": [
                    "You can use a musical instrument (see Equipment) as a spellcasting focus for your bard spells."
                ]
            }
        ],
        "spellList": [
            {
                "index": "dancing-lights",
                "name": "Dancing Lights",
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
                "index": "vicious-mockery",
                "name": "Vicious Mockery",
                "level": 0
            },
            {
                "index": "animal-friendship",
                "name": "Animal Friendship",
                "level": 1
            },
            {
                "index": "bane",
                "name": "Bane",
                "level": 1
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
                "index": "disguise-self",
                "name": "Disguise Self",
                "level": 1
            },
            {
                "index": "feather-fall",
                "name": "Feather Fall",
                "level": 1
            },
            {
                "index": "healing-word",
                "name": "Healing Word",
                "level": 1
            },
            {
                "index": "heroism",
                "name": "Heroism",
                "level": 1
            },
            {
                "index": "hideous-laughter",
                "name": "Hideous Laughter",
                "level": 1
            },
            {
                "index": "identify",
                "name": "Identify",
                "level": 1
            },
            {
                "index": "illusory-script",
                "name": "Illusory Script",
                "level": 1
            },
            {
                "index": "longstrider",
                "name": "Longstrider",
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
                "index": "speak-with-animals",
                "name": "Speak with Animals",
                "level": 1
            },
            {
                "index": "thunderwave",
                "name": "Thunderwave",
                "level": 1
            },
            {
                "index": "unseen-servant",
                "name": "Unseen Servant",
                "level": 1
            },
            {
                "index": "animal-messenger",
                "name": "Animal Messenger",
                "level": 2
            },
            {
                "index": "blindness-deafness",
                "name": "Blindness/Deafness",
                "level": 2
            },
            {
                "index": "calm-emotions",
                "name": "Calm Emotions",
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
                "index": "enthrall",
                "name": "Enthrall",
                "level": 2
            },
            {
                "index": "heat-metal",
                "name": "Heat Metal",
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
                "index": "magic-mouth",
                "name": "Magic Mouth",
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
                "index": "silence",
                "name": "Silence",
                "level": 2
            },
            {
                "index": "suggestion",
                "name": "Suggestion",
                "level": 2
            },
            {
                "index": "zone-of-truth",
                "name": "Zone of Truth",
                "level": 2
            },
            {
                "index": "bestow-curse",
                "name": "Bestow Curse",
                "level": 3
            },
            {
                "index": "clairvoyance",
                "name": "Clairvoyance",
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
                "index": "glyph-of-warding",
                "name": "Glyph of Warding",
                "level": 3
            },
            {
                "index": "hypnotic-pattern",
                "name": "Hypnotic Pattern",
                "level": 3
            },
            {
                "index": "major-image",
                "name": "Major Image",
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
                "index": "sending",
                "name": "Sending",
                "level": 3
            },
            {
                "index": "speak-with-dead",
                "name": "Speak with Dead",
                "level": 3
            },
            {
                "index": "speak-with-plants",
                "name": "Speak with Plants",
                "level": 3
            },
            {
                "index": "stinking-cloud",
                "name": "Stinking Cloud",
                "level": 3
            },
            {
                "index": "tiny-hut",
                "name": "Tiny Hut",
                "level": 3
            },
            {
                "index": "tongues",
                "name": "Tongues",
                "level": 3
            },
            {
                "index": "compulsion",
                "name": "Compulsion",
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
                "index": "freedom-of-movement",
                "name": "Freedom of Movement",
                "level": 4
            },
            {
                "index": "greater-invisibility",
                "name": "Greater Invisibility",
                "level": 4
            },
            {
                "index": "hallucinatory-terrain",
                "name": "Hallucinatory Terrain",
                "level": 4
            },
            {
                "index": "locate-creature",
                "name": "Locate Creature",
                "level": 4
            },
            {
                "index": "polymorph",
                "name": "Polymorph",
                "level": 4
            },
            {
                "index": "animate-objects",
                "name": "Animate Objects",
                "level": 5
            },
            {
                "index": "awaken",
                "name": "Awaken",
                "level": 5
            },
            {
                "index": "dominate-person",
                "name": "Dominate Person",
                "level": 5
            },
            {
                "index": "dream",
                "name": "Dream",
                "level": 5
            },
            {
                "index": "geas",
                "name": "Geas",
                "level": 5
            },
            {
                "index": "greater-restoration",
                "name": "Greater Restoration",
                "level": 5
            },
            {
                "index": "hold-monster",
                "name": "Hold Monster",
                "level": 5
            },
            {
                "index": "legend-lore",
                "name": "Legend Lore",
                "level": 5
            },
            {
                "index": "mass-cure-wounds",
                "name": "Mass Cure Wounds",
                "level": 5
            },
            {
                "index": "mislead",
                "name": "Mislead",
                "level": 5
            },
            {
                "index": "modify-memory",
                "name": "Modify Memory",
                "level": 5
            },
            {
                "index": "planar-binding",
                "name": "Planar Binding",
                "level": 5
            },
            {
                "index": "raise-dead",
                "name": "Raise Dead",
                "level": 5
            },
            {
                "index": "scrying",
                "name": "Scrying",
                "level": 5
            },
            {
                "index": "seeming",
                "name": "Seeming",
                "level": 5
            },
            {
                "index": "teleportation-circle",
                "name": "Teleportation Circle",
                "level": 5
            },
            {
                "index": "eyebite",
                "name": "Eyebite",
                "level": 6
            },
            {
                "index": "find-the-path",
                "name": "Find the Path",
                "level": 6
            },
            {
                "index": "guards-and-wards",
                "name": "Guards and Wards",
                "level": 6
            },
            {
                "index": "irresistible-dance",
                "name": "Irresistible Dance",
                "level": 6
            },
            {
                "index": "mass-suggestion",
                "name": "Mass Suggestion",
                "level": 6
            },
            {
                "index": "programmed-illusion",
                "name": "Programmed Illusion",
                "level": 6
            },
            {
                "index": "true-seeing",
                "name": "True Seeing",
                "level": 6
            },
            {
                "index": "arcane-sword",
                "name": "Arcane Sword",
                "level": 7
            },
            {
                "index": "etherealness",
                "name": "Etherealness",
                "level": 7
            },
            {
                "index": "forcecage",
                "name": "Forcecage",
                "level": 7
            },
            {
                "index": "magnificent-mansion",
                "name": "Magnificent Mansion",
                "level": 7
            },
            {
                "index": "mirage-arcane",
                "name": "Mirage Arcane",
                "level": 7
            },
            {
                "index": "project-image",
                "name": "Project Image",
                "level": 7
            },
            {
                "index": "regenerate",
                "name": "Regenerate",
                "level": 7
            },
            {
                "index": "resurrection",
                "name": "Resurrection",
                "level": 7
            },
            {
                "index": "symbol",
                "name": "Symbol",
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
                "index": "mind-blank",
                "name": "Mind Blank",
                "level": 8
            },
            {
                "index": "power-word-stun",
                "name": "Power Word Stun",
                "level": 8
            },
            {
                "index": "foresight",
                "name": "Foresight",
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
            "id": "lore",
            "name": "Lore",
            "flavor": "Bard College",
            "description": [
                "Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king. The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic. The college's members gather in libraries and sometimes in actual colleges, complete with classrooms and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self-important figures of authority."
            ],
            "levels": [
                {
                    "level": 3,
                    "featureIds": [
                        "bonus-proficiencies",
                        "cutting-words"
                    ],
                    "subclassSpecific": {
                        "additionalMagicalSecretsMaxLvl": 0
                    }
                },
                {
                    "level": 6,
                    "featureIds": [
                        "additional-magical-secrets"
                    ],
                    "subclassSpecific": {
                        "additionalMagicalSecretsMaxLvl": 3
                    }
                },
                {
                    "level": 14,
                    "featureIds": [
                        "peerless-skill"
                    ],
                    "subclassSpecific": {
                        "additionalMagicalSecretsMaxLvl": 3
                    }
                }
            ],
            "spells": []
        }
    ]
};
