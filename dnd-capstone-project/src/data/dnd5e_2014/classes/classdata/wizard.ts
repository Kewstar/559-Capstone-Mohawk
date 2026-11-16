import type { ClassDetails } from "../types";

export const wizard: ClassDetails = {
    "name": "wizard",
    "label": "Wizard",
    "hitDie": 6,
    "savingThrows": [
        "int",
        "wis"
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
            "desc": "Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion",
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
                        "index": "skill-history",
                        "name": "Skill: History",
                        "type": "Skills"
                    }
                },
                {
                    "kind": "reference",
                    "proficiency": {
                        "index": "skill-insight",
                        "name": "Skill: Insight",
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
                        "index": "skill-medicine",
                        "name": "Skill: Medicine",
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
                "index": "spellbook",
                "name": "Spellbook",
                "quantity": 1,
                "category": "Gear"
            }
        ],
        "choices": [
            {
                "choose": 1,
                "desc": "(a) a quarterstaff or (b) a dagger"
            },
            {
                "choose": 1,
                "desc": "(a) a component pouch or (b) an arcane focus"
            },
            {
                "choose": 1,
                "desc": "(a) a scholar’s pack or (b) an explorer’s pack"
            }
        ]
    },
    "multiclassing": {
        "prerequisites": [
            {
                "ability": "int",
                "minimum": 13
            }
        ],
        "proficiencies": [],
        "proficiencyChoices": []
    },
    "primaryAbilities": [
        "int"
    ],
    "classTable": [
        {
            "level": 1,
            "abilityScoreBonuses": 0,
            "featureIds": [
                "arcane-recovery",
                "spellcasting-wizard"
            ],
            "classSpecific": {
                "arcaneRecoveryLevels": 1
            },
            "spellcasting": {
                "cantripsKnown": 3,
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
                "arcane-tradition"
            ],
            "classSpecific": {
                "arcaneRecoveryLevels": 1
            },
            "spellcasting": {
                "cantripsKnown": 3,
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
            "featureIds": [],
            "classSpecific": {
                "arcaneRecoveryLevels": 2
            },
            "spellcasting": {
                "cantripsKnown": 3,
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
                "wizard-ability-score-improvement-1"
            ],
            "classSpecific": {
                "arcaneRecoveryLevels": 2
            },
            "spellcasting": {
                "cantripsKnown": 4,
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
                "arcaneRecoveryLevels": 3
            },
            "spellcasting": {
                "cantripsKnown": 4,
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
                "arcane-tradition-improvement-1"
            ],
            "classSpecific": {
                "arcaneRecoveryLevels": 3
            },
            "spellcasting": {
                "cantripsKnown": 4,
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
                "arcaneRecoveryLevels": 4
            },
            "spellcasting": {
                "cantripsKnown": 4,
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
                "wizard-ability-score-improvement-2"
            ],
            "classSpecific": {
                "arcaneRecoveryLevels": 4
            },
            "spellcasting": {
                "cantripsKnown": 4,
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
                "arcaneRecoveryLevels": 5
            },
            "spellcasting": {
                "cantripsKnown": 4,
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
                "arcane-tradition-improvement-2"
            ],
            "classSpecific": {
                "arcaneRecoveryLevels": 5
            },
            "spellcasting": {
                "cantripsKnown": 5,
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
                "arcaneRecoveryLevels": 6
            },
            "spellcasting": {
                "cantripsKnown": 5,
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
                "wizard-ability-score-improvement-3"
            ],
            "classSpecific": {
                "arcaneRecoveryLevels": 6
            },
            "spellcasting": {
                "cantripsKnown": 5,
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
                "arcaneRecoveryLevels": 7
            },
            "spellcasting": {
                "cantripsKnown": 5,
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
                "arcane-tradition-improvement-3"
            ],
            "classSpecific": {
                "arcaneRecoveryLevels": 7
            },
            "spellcasting": {
                "cantripsKnown": 5,
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
                "arcaneRecoveryLevels": 8
            },
            "spellcasting": {
                "cantripsKnown": 5,
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
                "wizard-ability-score-improvement-4"
            ],
            "classSpecific": {
                "arcaneRecoveryLevels": 8
            },
            "spellcasting": {
                "cantripsKnown": 5,
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
            "featureIds": [],
            "classSpecific": {
                "arcaneRecoveryLevels": 9
            },
            "spellcasting": {
                "cantripsKnown": 5,
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
                "spell-mastery"
            ],
            "classSpecific": {
                "arcaneRecoveryLevels": 9
            },
            "spellcasting": {
                "cantripsKnown": 5,
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
                "wizard-ability-score-improvement-5"
            ],
            "classSpecific": {
                "arcaneRecoveryLevels": 10
            },
            "spellcasting": {
                "cantripsKnown": 5,
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
                "signature-spell"
            ],
            "classSpecific": {
                "arcaneRecoveryLevels": 10
            },
            "spellcasting": {
                "cantripsKnown": 5,
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
        "arcane-recovery": {
            "id": "arcane-recovery",
            "name": "Arcane Recovery",
            "level": 1,
            "uses": {
                "max": {
                    "type": "fixed",
                    "value": 1
                },
                "refresh": "long"
            }
        },
        "spellcasting-wizard": {
            "id": "spellcasting-wizard",
            "name": "Spellcasting: Wizard",
            "level": 1
        },
        "arcane-tradition": {
            "id": "arcane-tradition",
            "name": "Arcane Tradition",
            "level": 2
        },
        "wizard-ability-score-improvement-1": {
            "id": "wizard-ability-score-improvement-1",
            "name": "Ability Score Improvement",
            "level": 4
        },
        "arcane-tradition-improvement-1": {
            "id": "arcane-tradition-improvement-1",
            "name": "Arcane Tradition feature",
            "level": 6
        },
        "wizard-ability-score-improvement-2": {
            "id": "wizard-ability-score-improvement-2",
            "name": "Ability Score Improvement",
            "level": 8
        },
        "arcane-tradition-improvement-2": {
            "id": "arcane-tradition-improvement-2",
            "name": "Arcane Tradition feature",
            "level": 10
        },
        "wizard-ability-score-improvement-3": {
            "id": "wizard-ability-score-improvement-3",
            "name": "Ability Score Improvement",
            "level": 12
        },
        "arcane-tradition-improvement-3": {
            "id": "arcane-tradition-improvement-3",
            "name": "Arcane Tradition feature",
            "level": 14
        },
        "wizard-ability-score-improvement-4": {
            "id": "wizard-ability-score-improvement-4",
            "name": "Ability Score Improvement",
            "level": 16
        },
        "spell-mastery": {
            "id": "spell-mastery",
            "name": "Spell Mastery",
            "level": 18
        },
        "wizard-ability-score-improvement-5": {
            "id": "wizard-ability-score-improvement-5",
            "name": "Ability Score Improvement",
            "level": 19
        },
        "signature-spell": {
            "id": "signature-spell",
            "name": "Signature Spell",
            "level": 20
        },
        "evocation-savant": {
            "id": "evocation-savant",
            "name": "Evocation Savant",
            "level": 2,
            "subclassId": "evocation"
        },
        "sculpt-spells": {
            "id": "sculpt-spells",
            "name": "Sculpt Spells",
            "level": 2,
            "subclassId": "evocation"
        },
        "potent-cantrip": {
            "id": "potent-cantrip",
            "name": "Potent Cantrip",
            "level": 6,
            "subclassId": "evocation"
        },
        "empowered-evocation": {
            "id": "empowered-evocation",
            "name": "Empowered Evocation",
            "level": 10,
            "subclassId": "evocation"
        },
        "overchannel": {
            "id": "overchannel",
            "name": "Overchannel",
            "level": 14,
            "subclassId": "evocation"
        }
    },
    "featureDescriptions": {
        "arcane-recovery": [
            "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.",
            "For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots."
        ],
        "spellcasting-wizard": [
            "As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power."
        ],
        "arcane-tradition": [
            "When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools, such as Evocation.",
            "Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
        ],
        "wizard-ability-score-improvement-1": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "arcane-tradition-improvement-1": [
            "When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools, such as Evocation.",
            "Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
        ],
        "wizard-ability-score-improvement-2": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "arcane-tradition-improvement-2": [
            "When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools, such as Evocation.",
            "Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
        ],
        "wizard-ability-score-improvement-3": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "arcane-tradition-improvement-3": [
            "When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools, such as Evocation.",
            "Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
        ],
        "wizard-ability-score-improvement-4": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "spell-mastery": [
            "At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.",
            "By spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels."
        ],
        "wizard-ability-score-improvement-5": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "signature-spell": [
            "When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest.",
            "If you want to cast either spell at a higher level, you must expend a spell slot as normal."
        ],
        "evocation-savant": [
            "Beginning when you select this school at 2nd level, the gold and time you must spend to copy an evocation spell into your spellbook is halved."
        ],
        "sculpt-spells": [
            "Beginning at 2nd level, you can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save."
        ],
        "potent-cantrip": [
            "Starting at 6th level, your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip."
        ],
        "empowered-evocation": [
            "Beginning at 10th level, you can add your Intelligence modifier to one damage roll of any wizard evocation spell you cast."
        ],
        "overchannel": [
            "Starting at 14th level, you can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th level that deals damage, you can deal maximum damage with that spell.",
            "The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity."
        ]
    },
    "spellcasting": {
        "ability": "int",
        "startLevel": 1,
        "info": [
            {
                "name": "Cantrips",
                "desc": [
                    "At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table."
                ]
            },
            {
                "name": "Spellbook",
                "desc": [
                    "At 1st level, you have a spellbook containing six 1st- level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind."
                ]
            },
            {
                "name": "Preparing and Casting Spells",
                "desc": [
                    "The Wizard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                    "You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.",
                    "For example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell magic missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
                    "You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list."
                ]
            },
            {
                "name": "Spellcasting Ability",
                "desc": [
                    "Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.",
                    "Spell save DC = 8 + your proficiency bonus + your Intelligence modifier.",
                    "Spell attack modifier = your proficiency bonus + your Intelligence modifier."
                ]
            },
            {
                "name": "Ritual Casting",
                "desc": [
                    "You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared."
                ]
            },
            {
                "name": "Spellcasting Focus",
                "desc": [
                    "You can use an arcane focus as a spellcasting focus for your wizard spells."
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
                "index": "alarm",
                "name": "Alarm",
                "level": 1
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
                "index": "find-familiar",
                "name": "Find Familiar",
                "level": 1
            },
            {
                "index": "floating-disk",
                "name": "Floating Disk",
                "level": 1
            },
            {
                "index": "fog-cloud",
                "name": "Fog Cloud",
                "level": 1
            },
            {
                "index": "grease",
                "name": "Grease",
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
                "index": "protection-from-evil-and-good",
                "name": "Protection from Evil and Good",
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
                "index": "unseen-servant",
                "name": "Unseen Servant",
                "level": 1
            },
            {
                "index": "acid-arrow",
                "name": "Acid Arrow",
                "level": 2
            },
            {
                "index": "alter-self",
                "name": "Alter Self",
                "level": 2
            },
            {
                "index": "arcane-lock",
                "name": "Arcane Lock",
                "level": 2
            },
            {
                "index": "arcanists-magic-aura",
                "name": "Arcanist's Magic Aura",
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
                "index": "continual-flame",
                "name": "Continual Flame",
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
                "index": "enlarge-reduce",
                "name": "Enlarge/Reduce",
                "level": 2
            },
            {
                "index": "flaming-sphere",
                "name": "Flaming Sphere",
                "level": 2
            },
            {
                "index": "gentle-repose",
                "name": "Gentle Repose",
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
                "index": "magic-weapon",
                "name": "Magic Weapon",
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
                "index": "rope-trick",
                "name": "Rope Trick",
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
                "index": "animate-dead",
                "name": "Animate Dead",
                "level": 3
            },
            {
                "index": "bestow-curse",
                "name": "Bestow Curse",
                "level": 3
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
                "index": "glyph-of-warding",
                "name": "Glyph of Warding",
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
                "index": "nondetection",
                "name": "Nondetection",
                "level": 3
            },
            {
                "index": "phantom-steed",
                "name": "Phantom Steed",
                "level": 3
            },
            {
                "index": "protection-from-energy",
                "name": "Protection From Energy",
                "level": 3
            },
            {
                "index": "remove-curse",
                "name": "Remove Curse",
                "level": 3
            },
            {
                "index": "sending",
                "name": "Sending",
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
                "index": "vampiric-touch",
                "name": "Vampiric Touch",
                "level": 3
            },
            {
                "index": "water-breathing",
                "name": "Water Breathing",
                "level": 3
            },
            {
                "index": "arcane-eye",
                "name": "Arcane Eye",
                "level": 4
            },
            {
                "index": "banishment",
                "name": "Banishment",
                "level": 4
            },
            {
                "index": "black-tentacles",
                "name": "Black Tentacles",
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
                "index": "conjure-minor-elementals",
                "name": "Conjure Minor Elementals",
                "level": 4
            },
            {
                "index": "control-water",
                "name": "Control Water",
                "level": 4
            },
            {
                "index": "dimension-door",
                "name": "Dimension Door",
                "level": 4
            },
            {
                "index": "fabricate",
                "name": "Fabricate",
                "level": 4
            },
            {
                "index": "faithful-hound",
                "name": "Faithful Hound",
                "level": 4
            },
            {
                "index": "fire-shield",
                "name": "Fire Shield",
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
                "index": "ice-storm",
                "name": "Ice Storm",
                "level": 4
            },
            {
                "index": "locate-creature",
                "name": "Locate Creature",
                "level": 4
            },
            {
                "index": "phantasmal-killer",
                "name": "Phantasmal Killer",
                "level": 4
            },
            {
                "index": "polymorph",
                "name": "Polymorph",
                "level": 4
            },
            {
                "index": "private-sanctum",
                "name": "Private Sanctum",
                "level": 4
            },
            {
                "index": "resilient-sphere",
                "name": "Resilient Sphere",
                "level": 4
            },
            {
                "index": "secret-chest",
                "name": "Secret Chest",
                "level": 4
            },
            {
                "index": "stone-shape",
                "name": "Stone Shape",
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
                "index": "arcane-hand",
                "name": "Arcane Hand",
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
                "index": "conjure-elemental",
                "name": "Conjure Elemental",
                "level": 5
            },
            {
                "index": "contact-other-plane",
                "name": "Contact Other Plane",
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
                "index": "passwall",
                "name": "Passwall",
                "level": 5
            },
            {
                "index": "planar-binding",
                "name": "Planar Binding",
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
                "index": "telekinesis",
                "name": "Telekinesis",
                "level": 5
            },
            {
                "index": "telepathic-bond",
                "name": "Telepathic Bond",
                "level": 5
            },
            {
                "index": "teleportation-circle",
                "name": "Teleportation Circle",
                "level": 5
            },
            {
                "index": "wall-of-force",
                "name": "Wall of Force",
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
                "index": "contingency",
                "name": "Contingency",
                "level": 6
            },
            {
                "index": "create-undead",
                "name": "Create Undead",
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
                "index": "flesh-to-stone",
                "name": "Flesh to Stone",
                "level": 6
            },
            {
                "index": "freezing-sphere",
                "name": "Freezing Sphere",
                "level": 6
            },
            {
                "index": "globe-of-invulnerability",
                "name": "Globe of Invulnerability",
                "level": 6
            },
            {
                "index": "guards-and-wards",
                "name": "Guards and Wards",
                "level": 6
            },
            {
                "index": "instant-summons",
                "name": "Instant Summons",
                "level": 6
            },
            {
                "index": "irresistible-dance",
                "name": "Irresistible Dance",
                "level": 6
            },
            {
                "index": "magic-jar",
                "name": "Magic Jar",
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
                "index": "programmed-illusion",
                "name": "Programmed Illusion",
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
                "index": "wall-of-ice",
                "name": "Wall of Ice",
                "level": 6
            },
            {
                "index": "arcane-sword",
                "name": "Arcane Sword",
                "level": 7
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
                "index": "project-image",
                "name": "Project Image",
                "level": 7
            },
            {
                "index": "reverse-gravity",
                "name": "Reverse Gravity",
                "level": 7
            },
            {
                "index": "sequester",
                "name": "Sequester",
                "level": 7
            },
            {
                "index": "simulacrum",
                "name": "Simulacrum",
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
                "index": "antimagic-field",
                "name": "Antimagic Field",
                "level": 8
            },
            {
                "index": "antipathy-sympathy",
                "name": "Antipathy/Sympathy",
                "level": 8
            },
            {
                "index": "clone",
                "name": "Clone",
                "level": 8
            },
            {
                "index": "control-weather",
                "name": "Control Weather",
                "level": 8
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
                "index": "incendiary-cloud",
                "name": "Incendiary Cloud",
                "level": 8
            },
            {
                "index": "maze",
                "name": "Maze",
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
                "index": "sunburst",
                "name": "Sunburst",
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
                "index": "gate",
                "name": "Gate",
                "level": 9
            },
            {
                "index": "imprisonment",
                "name": "Imprisonment",
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
                "index": "prismatic-wall",
                "name": "Prismatic Wall",
                "level": 9
            },
            {
                "index": "shapechange",
                "name": "Shapechange",
                "level": 9
            },
            {
                "index": "time-stop",
                "name": "Time Stop",
                "level": 9
            },
            {
                "index": "true-polymorph",
                "name": "True Polymorph",
                "level": 9
            },
            {
                "index": "weird",
                "name": "Weird",
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
            "id": "evocation",
            "name": "Evocation",
            "flavor": "Arcane Tradition",
            "description": [
                "You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants."
            ],
            "levels": [
                {
                    "level": 2,
                    "featureIds": [
                        "evocation-savant",
                        "sculpt-spells"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 6,
                    "featureIds": [
                        "potent-cantrip"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 10,
                    "featureIds": [
                        "empowered-evocation"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 14,
                    "featureIds": [
                        "overchannel"
                    ],
                    "subclassSpecific": {}
                }
            ],
            "spells": []
        }
    ]
};
