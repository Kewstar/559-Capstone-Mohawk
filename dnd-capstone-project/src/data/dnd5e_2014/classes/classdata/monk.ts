import type { ClassDetails } from "../types";

export const monk: ClassDetails = {
    "name": "monk",
    "label": "Monk",
    "hitDie": 8,
    "savingThrows": [
        "str",
        "dex"
    ],
    "proficiencies": [
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
            "choose": 2,
            "desc": "Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth",
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
                        "index": "skill-religion",
                        "name": "Skill: Religion",
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
                }
            ]
        },
        {
            "choose": 1,
            "desc": "Choose one type of artisan’s tools or one musical instrument",
            "options": [
                {
                    "type": "choice",
                    "choice": {
                        "choose": 1,
                        "desc": "artisan's tools",
                        "options": [
                            {
                                "type": "reference",
                                "proficiency": {
                                    "index": "alchemists-supplies",
                                    "name": "Alchemist's Supplies",
                                    "type": "Artisan's Tools"
                                }
                            },
                            {
                                "type": "reference",
                                "proficiency": {
                                    "index": "brewers-supplies",
                                    "name": "Brewer's Supplies",
                                    "type": "Artisan's Tools"
                                }
                            },
                            {
                                "type": "reference",
                                "proficiency": {
                                    "index": "calligraphers-supplies",
                                    "name": "Calligrapher's Supplies",
                                    "type": "Artisan's Tools"
                                }
                            },
                            {
                                "type": "reference",
                                "proficiency": {
                                    "index": "carpenters-tools",
                                    "name": "Carpenter's Tools",
                                    "type": "Artisan's Tools"
                                }
                            },
                            {
                                "type": "reference",
                                "proficiency": {
                                    "index": "cartographers-tools",
                                    "name": "Cartographer's Tools",
                                    "type": "Artisan's Tools"
                                }
                            },
                            {
                                "type": "reference",
                                "proficiency": {
                                    "index": "cobblers-tools",
                                    "name": "Cobbler's Tools",
                                    "type": "Artisan's Tools"
                                }
                            },
                            {
                                "type": "reference",
                                "proficiency": {
                                    "index": "cooks-utensils",
                                    "name": "Cook's utensils",
                                    "type": "Artisan's Tools"
                                }
                            },
                            {
                                "type": "reference",
                                "proficiency": {
                                    "index": "glassblowers-tools",
                                    "name": "Glassblower's Tools",
                                    "type": "Artisan's Tools"
                                }
                            },
                            {
                                "type": "reference",
                                "proficiency": {
                                    "index": "jewelers-tools",
                                    "name": "Jeweler's Tools",
                                    "type": "Artisan's Tools"
                                }
                            },
                            {
                                "type": "reference",
                                "proficiency": {
                                    "index": "leatherworkers-tools",
                                    "name": "Leatherworker's Tools",
                                    "type": "Artisan's Tools"
                                }
                            },
                            {
                                "type": "reference",
                                "proficiency": {
                                    "index": "masons-tools",
                                    "name": "Mason's Tools",
                                    "type": "Artisan's Tools"
                                }
                            },
                            {
                                "type": "reference",
                                "proficiency": {
                                    "index": "painters-supplies",
                                    "name": "Painter's Supplies",
                                    "type": "Artisan's Tools"
                                }
                            },
                            {
                                "type": "reference",
                                "proficiency": {
                                    "index": "potters-tools",
                                    "name": "Potter's Tools",
                                    "type": "Artisan's Tools"
                                }
                            },
                            {
                                "type": "reference",
                                "proficiency": {
                                    "index": "smiths-tools",
                                    "name": "Smith's Tools",
                                    "type": "Artisan's Tools"
                                }
                            },
                            {
                                "type": "reference",
                                "proficiency": {
                                    "index": "tinkers-tools",
                                    "name": "Tinker's Tools",
                                    "type": "Artisan's Tools"
                                }
                            },
                            {
                                "type": "reference",
                                "proficiency": {
                                    "index": "weavers-tools",
                                    "name": "Weaver's Tools",
                                    "type": "Artisan's Tools"
                                }
                            },
                            {
                                "type": "reference",
                                "proficiency": {
                                    "index": "woodcarvers-tools",
                                    "name": "Woodcarver's Tools",
                                    "type": "Artisan's Tools"
                                }
                            },
                            {
                                "type": "reference",
                                "proficiency": {
                                    "index": "disguise-kit",
                                    "name": "Disguise Kit",
                                    "type": "Artisan's Tools"
                                }
                            },
                            {
                                "type": "reference",
                                "proficiency": {
                                    "index": "forgery-kit",
                                    "name": "Forgery Kit",
                                    "type": "Artisan's Tools"
                                }
                            }
                        ]
                    }
                },
                {
                    "type": "choice",
                    "choice": {
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
                }
            ]
        }
    ],
    "startingEquipment": {
        "items": [
            {
                "index": "dart",
                "name": "Dart",
                "quantity": 10,
                "category": "Weapon"
            }
        ],
        "choices": [
            {
                "choose": 1,
                "desc": "(a) a shortsword or (b) any simple weapon",
                "options": [
                    {
                        "parts": [
                            {
                                "kind": "item",
                                "itemIndex": "shortsword",
                                "quantity": 1
                            }
                        ]
                    },
                    {
                        "parts": [
                            {
                                "kind": "category",
                                "categoryIndex": "simple-weapons",
                                "choose": 1
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
        "proficiencyChoices": []
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
                "martial-arts",
                "monk-unarmored-defense"
            ],
            "classSpecific": {
                "kiPoints": 0,
                "martialArts": {
                    "diceCount": 1,
                    "diceValue": 4
                },
                "unarmoredMovement": 0
            }
        },
        {
            "level": 2,
            "abilityScoreBonuses": 0,
            "featureIds": [
                "flurry-of-blows",
                "ki",
                "patient-defense",
                "step-of-the-wind",
                "unarmored-movement-1"
            ],
            "classSpecific": {
                "kiPoints": 2,
                "martialArts": {
                    "diceCount": 1,
                    "diceValue": 4
                },
                "unarmoredMovement": 10
            }
        },
        {
            "level": 3,
            "abilityScoreBonuses": 0,
            "featureIds": [
                "deflect-missiles",
                "monastic-tradition"
            ],
            "classSpecific": {
                "kiPoints": 3,
                "martialArts": {
                    "diceCount": 1,
                    "diceValue": 4
                },
                "unarmoredMovement": 10
            }
        },
        {
            "level": 4,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "monk-ability-score-improvement-1",
                "slow-fall"
            ],
            "classSpecific": {
                "kiPoints": 4,
                "martialArts": {
                    "diceCount": 1,
                    "diceValue": 4
                },
                "unarmoredMovement": 10
            }
        },
        {
            "level": 5,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "monk-extra-attack",
                "stunning-strike"
            ],
            "classSpecific": {
                "kiPoints": 5,
                "martialArts": {
                    "diceCount": 1,
                    "diceValue": 6
                },
                "unarmoredMovement": 10
            }
        },
        {
            "level": 6,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "ki-empowered-strikes",
                "monastic-tradition-improvement-1"
            ],
            "classSpecific": {
                "kiPoints": 6,
                "martialArts": {
                    "diceCount": 1,
                    "diceValue": 6
                },
                "unarmoredMovement": 15
            }
        },
        {
            "level": 7,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "monk-evasion",
                "stillness-of-mind"
            ],
            "classSpecific": {
                "kiPoints": 7,
                "martialArts": {
                    "diceCount": 1,
                    "diceValue": 6
                },
                "unarmoredMovement": 15
            }
        },
        {
            "level": 8,
            "abilityScoreBonuses": 2,
            "featureIds": [
                "monk-ability-score-improvement-2"
            ],
            "classSpecific": {
                "kiPoints": 8,
                "martialArts": {
                    "diceCount": 1,
                    "diceValue": 6
                },
                "unarmoredMovement": 15
            }
        },
        {
            "level": 9,
            "abilityScoreBonuses": 2,
            "featureIds": [
                "unarmored-movement-2"
            ],
            "classSpecific": {
                "kiPoints": 9,
                "martialArts": {
                    "diceCount": 1,
                    "diceValue": 6
                },
                "unarmoredMovement": 15
            }
        },
        {
            "level": 10,
            "abilityScoreBonuses": 2,
            "featureIds": [
                "purity-of-body"
            ],
            "classSpecific": {
                "kiPoints": 10,
                "martialArts": {
                    "diceCount": 1,
                    "diceValue": 6
                },
                "unarmoredMovement": 20
            }
        },
        {
            "level": 11,
            "abilityScoreBonuses": 2,
            "featureIds": [
                "monastic-tradition-improvement-2"
            ],
            "classSpecific": {
                "kiPoints": 11,
                "martialArts": {
                    "diceCount": 1,
                    "diceValue": 8
                },
                "unarmoredMovement": 20
            }
        },
        {
            "level": 12,
            "abilityScoreBonuses": 3,
            "featureIds": [
                "monk-ability-score-improvement-3"
            ],
            "classSpecific": {
                "kiPoints": 12,
                "martialArts": {
                    "diceCount": 1,
                    "diceValue": 8
                },
                "unarmoredMovement": 20
            }
        },
        {
            "level": 13,
            "abilityScoreBonuses": 3,
            "featureIds": [
                "tongue-of-the-sun-and-moon"
            ],
            "classSpecific": {
                "kiPoints": 13,
                "martialArts": {
                    "diceCount": 1,
                    "diceValue": 8
                },
                "unarmoredMovement": 20
            }
        },
        {
            "level": 14,
            "abilityScoreBonuses": 3,
            "featureIds": [
                "diamond-soul"
            ],
            "classSpecific": {
                "kiPoints": 14,
                "martialArts": {
                    "diceCount": 1,
                    "diceValue": 8
                },
                "unarmoredMovement": 25
            }
        },
        {
            "level": 15,
            "abilityScoreBonuses": 3,
            "featureIds": [
                "monk-timeless-body"
            ],
            "classSpecific": {
                "kiPoints": 15,
                "martialArts": {
                    "diceCount": 1,
                    "diceValue": 8
                },
                "unarmoredMovement": 25
            }
        },
        {
            "level": 16,
            "abilityScoreBonuses": 4,
            "featureIds": [
                "monk-ability-score-improvement-4"
            ],
            "classSpecific": {
                "kiPoints": 16,
                "martialArts": {
                    "diceCount": 1,
                    "diceValue": 8
                },
                "unarmoredMovement": 25
            }
        },
        {
            "level": 17,
            "abilityScoreBonuses": 4,
            "featureIds": [
                "monastic-tradition-improvement-3"
            ],
            "classSpecific": {
                "kiPoints": 17,
                "martialArts": {
                    "diceCount": 1,
                    "diceValue": 10
                },
                "unarmoredMovement": 25
            }
        },
        {
            "level": 18,
            "abilityScoreBonuses": 4,
            "featureIds": [
                "empty-body"
            ],
            "classSpecific": {
                "kiPoints": 18,
                "martialArts": {
                    "diceCount": 1,
                    "diceValue": 10
                },
                "unarmoredMovement": 30
            }
        },
        {
            "level": 19,
            "abilityScoreBonuses": 5,
            "featureIds": [
                "monk-ability-score-improvement-5"
            ],
            "classSpecific": {
                "kiPoints": 19,
                "martialArts": {
                    "diceCount": 1,
                    "diceValue": 10
                },
                "unarmoredMovement": 30
            }
        },
        {
            "level": 20,
            "abilityScoreBonuses": 5,
            "featureIds": [
                "perfect-self"
            ],
            "classSpecific": {
                "kiPoints": 20,
                "martialArts": {
                    "diceCount": 1,
                    "diceValue": 10
                },
                "unarmoredMovement": 30
            }
        }
    ],
    "features": {
        "martial-arts": {
            "id": "martial-arts",
            "name": "Martial Arts",
            "level": 1
        },
        "monk-unarmored-defense": {
            "id": "monk-unarmored-defense",
            "name": "Unarmored Defense",
            "level": 1
        },
        "flurry-of-blows": {
            "id": "flurry-of-blows",
            "name": "Flurry of Blows",
            "level": 2
        },
        "ki": {
            "id": "ki",
            "name": "Ki",
            "level": 2,
            "uses": {
                "max": {
                    "type": "classSpecific",
                    "key": "kiPoints"
                },
                "refresh": "short"
            }
        },
        "patient-defense": {
            "id": "patient-defense",
            "name": "Patient Defense",
            "level": 2
        },
        "step-of-the-wind": {
            "id": "step-of-the-wind",
            "name": "Step of the Wind",
            "level": 2
        },
        "unarmored-movement-1": {
            "id": "unarmored-movement-1",
            "name": "Unarmored Movement",
            "level": 2
        },
        "deflect-missiles": {
            "id": "deflect-missiles",
            "name": "Deflect Missiles",
            "level": 3
        },
        "monastic-tradition": {
            "id": "monastic-tradition",
            "name": "Monastic Tradition",
            "level": 3
        },
        "monk-ability-score-improvement-1": {
            "id": "monk-ability-score-improvement-1",
            "name": "Ability Score Improvement",
            "level": 4
        },
        "slow-fall": {
            "id": "slow-fall",
            "name": "Slow Fall",
            "level": 4
        },
        "monk-extra-attack": {
            "id": "monk-extra-attack",
            "name": "Extra Attack",
            "level": 5
        },
        "stunning-strike": {
            "id": "stunning-strike",
            "name": "Stunning Strike",
            "level": 5
        },
        "ki-empowered-strikes": {
            "id": "ki-empowered-strikes",
            "name": "Ki Empowered Strikes",
            "level": 6
        },
        "monastic-tradition-improvement-1": {
            "id": "monastic-tradition-improvement-1",
            "name": "Monastic Tradition feature",
            "level": 6
        },
        "monk-evasion": {
            "id": "monk-evasion",
            "name": "Evasion",
            "level": 7
        },
        "stillness-of-mind": {
            "id": "stillness-of-mind",
            "name": "Stillness of Mind",
            "level": 7
        },
        "monk-ability-score-improvement-2": {
            "id": "monk-ability-score-improvement-2",
            "name": "Ability Score Improvement",
            "level": 8
        },
        "unarmored-movement-2": {
            "id": "unarmored-movement-2",
            "name": "Unarmored Movement",
            "level": 9
        },
        "purity-of-body": {
            "id": "purity-of-body",
            "name": "Purity of Body",
            "level": 10
        },
        "monastic-tradition-improvement-2": {
            "id": "monastic-tradition-improvement-2",
            "name": "Monastic Tradition feature",
            "level": 11
        },
        "monk-ability-score-improvement-3": {
            "id": "monk-ability-score-improvement-3",
            "name": "Ability Score Improvement",
            "level": 12
        },
        "tongue-of-the-sun-and-moon": {
            "id": "tongue-of-the-sun-and-moon",
            "name": "Tongue of the Sun and Moon",
            "level": 13
        },
        "diamond-soul": {
            "id": "diamond-soul",
            "name": "Diamond Soul",
            "level": 14
        },
        "monk-timeless-body": {
            "id": "monk-timeless-body",
            "name": "Timeless Body",
            "level": 15
        },
        "monk-ability-score-improvement-4": {
            "id": "monk-ability-score-improvement-4",
            "name": "Ability Score Improvement",
            "level": 16
        },
        "monastic-tradition-improvement-3": {
            "id": "monastic-tradition-improvement-3",
            "name": "Monastic Tradition feature",
            "level": 17
        },
        "empty-body": {
            "id": "empty-body",
            "name": "Empty Body",
            "level": 18
        },
        "monk-ability-score-improvement-5": {
            "id": "monk-ability-score-improvement-5",
            "name": "Ability Score Improvement",
            "level": 19
        },
        "perfect-self": {
            "id": "perfect-self",
            "name": "Perfect Self",
            "level": 20
        },
        "open-hand-technique": {
            "id": "open-hand-technique",
            "name": "Open Hand Technique",
            "level": 3,
            "subclassId": "open-hand"
        },
        "wholeness-of-body": {
            "id": "wholeness-of-body",
            "name": "Wholeness of Body",
            "level": 6,
            "subclassId": "open-hand"
        },
        "tranquility": {
            "id": "tranquility",
            "name": "Tranquility",
            "level": 11,
            "subclassId": "open-hand"
        },
        "quivering-palm": {
            "id": "quivering-palm",
            "name": "Quivering Palm",
            "level": 17,
            "subclassId": "open-hand"
        }
    },
    "featureDescriptions": {
        "martial-arts": [
            "At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two- handed or heavy property.",
            "You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield:",
            "- You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.",
            "- You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of Table: The Monk.",
            "- When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.",
            "Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon."
        ],
        "monk-unarmored-defense": [
            "Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier."
        ],
        "flurry-of-blows": [
            "Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action."
        ],
        "ki": [
            "Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of Table: The Monk.",
            "You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.",
            "When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.",
            "Some of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows:",
            "Ki save DC = 8 + your proficiency bonus + your Wisdom modifier"
        ],
        "patient-defense": [
            "You can spend 1 ki point to take the Dodge action as a bonus action on your turn."
        ],
        "step-of-the-wind": [
            "You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn."
        ],
        "unarmored-movement-1": [
            "Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in Table: The Monk.",
            "At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move."
        ],
        "deflect-missiles": [
            "Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.",
            "If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack, which has a normal range of 20 feet and a long range of 60 feet."
        ],
        "monastic-tradition": [
            "When you reach 3rd level, you commit yourself to a monastic tradition, such as the Way of the Open Hand. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level."
        ],
        "monk-ability-score-improvement-1": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "slow-fall": [
            "Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level."
        ],
        "monk-extra-attack": [
            "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
        ],
        "stunning-strike": [
            "Starting at 5th level, you can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn."
        ],
        "ki-empowered-strikes": [
            "Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
        ],
        "monastic-tradition-improvement-1": [
            "When you reach 3rd level, you commit yourself to a monastic tradition, such as the Way of the Open Hand. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level."
        ],
        "monk-evasion": [
            "At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
        ],
        "stillness-of-mind": [
            "Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened."
        ],
        "monk-ability-score-improvement-2": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "unarmored-movement-2": [
            "Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in Table: The Monk.",
            "At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move."
        ],
        "purity-of-body": [
            "At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison."
        ],
        "monastic-tradition-improvement-2": [
            "When you reach 3rd level, you commit yourself to a monastic tradition, such as the Way of the Open Hand. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level."
        ],
        "monk-ability-score-improvement-3": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "tongue-of-the-sun-and-moon": [
            "Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say."
        ],
        "diamond-soul": [
            "Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.",
            "Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result."
        ],
        "monk-timeless-body": [
            "At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You can still die of old age, however. In addition, you no longer need food or water."
        ],
        "monk-ability-score-improvement-4": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "monastic-tradition-improvement-3": [
            "When you reach 3rd level, you commit yourself to a monastic tradition, such as the Way of the Open Hand. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level."
        ],
        "empty-body": [
            "Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.",
            "Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can't take any other creatures with you."
        ],
        "monk-ability-score-improvement-5": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "perfect-self": [
            "At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points."
        ],
        "open-hand-technique": [
            "Starting when you choose this tradition at 3rd level, you can manipulate your enemy's ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target:",
            "- It must succeed on a Dexterity saving throw or be knocked prone.",
            "- It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.",
            "- It can't take reactions until the end of your next turn."
        ],
        "wholeness-of-body": [
            "At 6th level, you gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again."
        ],
        "tranquility": [
            "Beginning at 11th level, you can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your proficiency bonus."
        ],
        "quivering-palm": [
            "At 17th level, you gain the ability to set up lethal vibrations in someone's body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage.",
            "You can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action."
        ]
    },
    "subclasses": [
        {
            "id": "open-hand",
            "name": "Open Hand",
            "flavor": "Monastic Tradition",
            "description": [
                "Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed. They learn techniques to push and trip their opponents, manipulate ki to heal damage to their bodies, and practice advanced meditation that can protect them from harm."
            ],
            "levels": [
                {
                    "level": 3,
                    "featureIds": [
                        "open-hand-technique"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 6,
                    "featureIds": [
                        "wholeness-of-body"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 11,
                    "featureIds": [
                        "tranquility"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 17,
                    "featureIds": [
                        "quivering-palm"
                    ],
                    "subclassSpecific": {}
                }
            ],
            "spells": []
        }
    ]
};
