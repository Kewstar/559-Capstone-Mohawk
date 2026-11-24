import type { ClassDetails } from "../types";

export const paladin: ClassDetails = {
    "name": "paladin",
    "label": "Paladin",
    "hitDie": 10,
    "savingThrows": [
        "wis",
        "cha"
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
            "desc": "Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion",
            "options": [
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
                        "index": "skill-intimidation",
                        "name": "Skill: Intimidation",
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
                "index": "chain-mail",
                "name": "Chain Mail",
                "quantity": 1,
                "category": "Armor"
            }
        ],
        "choices": [
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
                "desc": "(a) five javelins or (b) any simple melee weapon",
                "options": [
                    {
                        "parts": [
                            {
                                "kind": "item",
                                "itemIndex": "javelin",
                                "quantity": 5
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
                "desc": "(a) a priest’s pack or (b) an explorer’s pack",
                "options": [
                    {
                        "parts": [
                            {
                                "kind": "item",
                                "itemIndex": "priests-pack",
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
            },
            {
                "choose": 1,
                "desc": "holy symbol",
                "options": [
                    {
                        "parts": [
                            {
                                "kind": "category",
                                "categoryIndex": "holy-symbols",
                                "choose": 1
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
                "ability": "str",
                "minimum": 13
            },
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
        "cha"
    ],
    "classTable": [
        {
            "level": 1,
            "abilityScoreBonuses": 0,
            "featureIds": [
                "divine-sense",
                "lay-on-hands"
            ],
            "classSpecific": {
                "auraRange": 0
            },
            "spellcasting": {
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
                "divine-smite",
                "paladin-fighting-style",
                "spellcasting-paladin"
            ],
            "classSpecific": {
                "auraRange": 0
            },
            "spellcasting": {
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
                "channel-divinity",
                "divine-health",
                "oath-spells",
                "sacred-oath"
            ],
            "classSpecific": {
                "auraRange": 0
            },
            "spellcasting": {
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
                "paladin-ability-score-improvement-1"
            ],
            "classSpecific": {
                "auraRange": 0
            },
            "spellcasting": {
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
                "paladin-extra-attack"
            ],
            "classSpecific": {
                "auraRange": 0
            },
            "spellcasting": {
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
                "aura-of-protection"
            ],
            "classSpecific": {
                "auraRange": 10
            },
            "spellcasting": {
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
                "sacred-oath-improvement-1"
            ],
            "classSpecific": {
                "auraRange": 10
            },
            "spellcasting": {
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
                "paladin-ability-score-improvement-2"
            ],
            "classSpecific": {
                "auraRange": 10
            },
            "spellcasting": {
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
                "auraRange": 10
            },
            "spellcasting": {
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
                "aura-of-courage"
            ],
            "classSpecific": {
                "auraRange": 10
            },
            "spellcasting": {
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
                "improved-divine-smite"
            ],
            "classSpecific": {
                "auraRange": 10
            },
            "spellcasting": {
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
                "paladin-ability-score-improvement-3"
            ],
            "classSpecific": {
                "auraRange": 10
            },
            "spellcasting": {
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
                "auraRange": 10
            },
            "spellcasting": {
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
                "cleansing-touch"
            ],
            "classSpecific": {
                "auraRange": 10
            },
            "spellcasting": {
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
                "sacred-oath-improvement-2"
            ],
            "classSpecific": {
                "auraRange": 10
            },
            "spellcasting": {
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
                "paladin-ability-score-improvement-4"
            ],
            "classSpecific": {
                "auraRange": 10
            },
            "spellcasting": {
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
                "auraRange": 10
            },
            "spellcasting": {
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
                "aura-improvements"
            ],
            "classSpecific": {
                "auraRange": 30
            },
            "spellcasting": {
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
                "paladin-ability-score-improvement-5"
            ],
            "classSpecific": {
                "auraRange": 30
            },
            "spellcasting": {
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
                "sacred-oath-improvement-3"
            ],
            "classSpecific": {
                "auraRange": 30
            },
            "spellcasting": {
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
        "divine-sense": {
            "id": "divine-sense",
            "name": "Divine Sense",
            "level": 1
        },
        "lay-on-hands": {
            "id": "lay-on-hands",
            "name": "Lay on Hands",
            "level": 1
        },
        "divine-smite": {
            "id": "divine-smite",
            "name": "Divine Smite",
            "level": 2
        },
        "paladin-fighting-style": {
            "id": "paladin-fighting-style",
            "name": "Fighting Style",
            "level": 2
        },
        "spellcasting-paladin": {
            "id": "spellcasting-paladin",
            "name": "Spellcasting: Paladin",
            "level": 2
        },
        "channel-divinity": {
            "id": "channel-divinity",
            "name": "Channel Divinity",
            "level": 3
        },
        "divine-health": {
            "id": "divine-health",
            "name": "Divine Health",
            "level": 3
        },
        "oath-spells": {
            "id": "oath-spells",
            "name": "Oath Spells",
            "level": 3
        },
        "sacred-oath": {
            "id": "sacred-oath",
            "name": "Sacred Oath",
            "level": 3
        },
        "paladin-ability-score-improvement-1": {
            "id": "paladin-ability-score-improvement-1",
            "name": "Ability Score Improvement",
            "level": 4
        },
        "paladin-extra-attack": {
            "id": "paladin-extra-attack",
            "name": "Extra Attack",
            "level": 5
        },
        "aura-of-protection": {
            "id": "aura-of-protection",
            "name": "Aura of Protection",
            "level": 6
        },
        "sacred-oath-improvement-1": {
            "id": "sacred-oath-improvement-1",
            "name": "Sacred Oath feature",
            "level": 7
        },
        "paladin-ability-score-improvement-2": {
            "id": "paladin-ability-score-improvement-2",
            "name": "Ability Score Improvement",
            "level": 8
        },
        "aura-of-courage": {
            "id": "aura-of-courage",
            "name": "Aura of Courage",
            "level": 10
        },
        "improved-divine-smite": {
            "id": "improved-divine-smite",
            "name": "Improved Divine Smite",
            "level": 11
        },
        "paladin-ability-score-improvement-3": {
            "id": "paladin-ability-score-improvement-3",
            "name": "Ability Score Improvement",
            "level": 12
        },
        "cleansing-touch": {
            "id": "cleansing-touch",
            "name": "Cleansing Touch",
            "level": 14
        },
        "sacred-oath-improvement-2": {
            "id": "sacred-oath-improvement-2",
            "name": "Sacred Oath feature",
            "level": 15
        },
        "paladin-ability-score-improvement-4": {
            "id": "paladin-ability-score-improvement-4",
            "name": "Ability Score Improvement",
            "level": 16
        },
        "aura-improvements": {
            "id": "aura-improvements",
            "name": "Aura improvements",
            "level": 18
        },
        "paladin-ability-score-improvement-5": {
            "id": "paladin-ability-score-improvement-5",
            "name": "Ability Score Improvement",
            "level": 19
        },
        "sacred-oath-improvement-3": {
            "id": "sacred-oath-improvement-3",
            "name": "Sacred Oath feature",
            "level": 20
        },
        "channel-divinity-sacred-weapon": {
            "id": "channel-divinity-sacred-weapon",
            "name": "Channel Divinity: Sacred Weapon",
            "level": 3,
            "subclassId": "devotion"
        },
        "channel-divinity-turn-the-unholy": {
            "id": "channel-divinity-turn-the-unholy",
            "name": "Channel Divinity: Turn the Unholy",
            "level": 3,
            "subclassId": "devotion"
        },
        "aura-of-devotion": {
            "id": "aura-of-devotion",
            "name": "Aura of Devotion",
            "level": 7,
            "subclassId": "devotion"
        },
        "purity-of-spirit": {
            "id": "purity-of-spirit",
            "name": "Purity of Spirit",
            "level": 15,
            "subclassId": "devotion"
        },
        "holy-nimbus": {
            "id": "holy-nimbus",
            "name": "Holy Nimbus",
            "level": 20,
            "subclassId": "devotion"
        }
    },
    "featureDescriptions": {
        "divine-sense": [
            "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.",
            "You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses."
        ],
        "lay-on-hands": [
            "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.",
            "As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.",
            "Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.",
            "This feature has no effect on undead and constructs."
        ],
        "divine-smite": [
            "Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend."
        ],
        "paladin-fighting-style": [
            "At 2nd level, you adopt a style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again."
        ],
        "spellcasting-paladin": [
            "By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does."
        ],
        "channel-divinity": [
            "Your oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it.",
            "When you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again.",
            "Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC."
        ],
        "divine-health": [
            "By 3rd level, the divine magic flowing through you makes you immune to disease."
        ],
        "oath-spells": [
            "Each oath has a list of associated spells. You gain access to these spells at the levels specified in the oath description. Once you gain access to an oath spell, you always have it prepared. Oath spells don't count against the number of spells you can prepare each day.",
            "If you gain an oath spell that doesn't appear on the paladin spell list, the spell is nonetheless a paladin spell for you."
        ],
        "sacred-oath": [
            "When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose an oath, such as the Oath of Devotion.",
            "Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature."
        ],
        "paladin-ability-score-improvement-1": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "paladin-extra-attack": [
            "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
        ],
        "aura-of-protection": [
            "Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.",
            "At 18th level, the range of this aura increases to 30 feet."
        ],
        "sacred-oath-improvement-1": [
            "When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose an oath, such as the Oath of Devotion.",
            "Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature."
        ],
        "paladin-ability-score-improvement-2": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "aura-of-courage": [
            "Starting at 10th level, you and friendly creatures within 10 feet of you can't be frightened while you are conscious.",
            "At 18th level, the range of this aura increases to 30 feet."
        ],
        "improved-divine-smite": [
            "By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage. If you also use your Divine Smite with an attack, you add this damage to the extra damage of your Divine Smite."
        ],
        "paladin-ability-score-improvement-3": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "cleansing-touch": [
            "Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.",
            "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest."
        ],
        "sacred-oath-improvement-2": [
            "When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose an oath, such as the Oath of Devotion.",
            "Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature."
        ],
        "paladin-ability-score-improvement-4": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "aura-improvements": [
            "At 18th level, the range of your auras increase to 30 feet."
        ],
        "paladin-ability-score-improvement-5": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "sacred-oath-improvement-3": [
            "When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose an oath, such as the Oath of Devotion.",
            "Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature."
        ],
        "channel-divinity-sacred-weapon": [
            "As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration.",
            "You can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends."
        ],
        "channel-divinity-turn-the-unholy": [
            "As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.",
            "A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action."
        ],
        "aura-of-devotion": [
            "Starting at 7th level, you and friendly creatures within 10 feet of you can't be charmed while you are conscious.",
            "At 18th level, the range of this aura increases to 30 feet."
        ],
        "purity-of-spirit": [
            "Beginning at 15th level, you are always under the effects of a protection from evil and good spell."
        ],
        "holy-nimbus": [
            "At 20th level, as an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that.",
            "Whenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage.",
            "In addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead."
        ]
    },
    "spellcasting": {
        "ability": "cha",
        "startLevel": 2,
        "info": [
            {
                "name": "Preparing and Casting Spells",
                "desc": [
                    "The Paladin table shows how many spell slots you have to cast your spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                    "You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.",
                    "For example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or a 2nd- level slot. Casting the spell doesn't remove it from your list of prepared spells.",
                    "You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list."
                ]
            },
            {
                "name": "Spellcasting Ability",
                "desc": [
                    "Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.",
                    "Spell save DC = 8 + your proficiency bonus + your Charisma modifier.",
                    "Spell attack modifier = your proficiency bonus + your Charisma modifier."
                ]
            },
            {
                "name": "Spellcasting Focus",
                "desc": [
                    "You can use a holy symbol as a spellcasting focus for your paladin spells."
                ]
            }
        ],
        "spellList": [
            {
                "index": "bless",
                "name": "Bless",
                "level": 1
            },
            {
                "index": "command",
                "name": "Command",
                "level": 1
            },
            {
                "index": "cure-wounds",
                "name": "Cure Wounds",
                "level": 1
            },
            {
                "index": "detect-evil-and-good",
                "name": "Detect Evil and Good",
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
                "index": "divine-favor",
                "name": "Divine Favor",
                "level": 1
            },
            {
                "index": "heroism",
                "name": "Heroism",
                "level": 1
            },
            {
                "index": "protection-from-evil-and-good",
                "name": "Protection from Evil and Good",
                "level": 1
            },
            {
                "index": "purify-food-and-drink",
                "name": "Purify Food and Drink",
                "level": 1
            },
            {
                "index": "shield-of-faith",
                "name": "Shield of Faith",
                "level": 1
            },
            {
                "index": "aid",
                "name": "Aid",
                "level": 2
            },
            {
                "index": "branding-smite",
                "name": "Branding Smite",
                "level": 2
            },
            {
                "index": "find-steed",
                "name": "Find Steed",
                "level": 2
            },
            {
                "index": "lesser-restoration",
                "name": "Lesser Restoration",
                "level": 2
            },
            {
                "index": "locate-object",
                "name": "Locate Object",
                "level": 2
            },
            {
                "index": "magic-weapon",
                "name": "Magic Weapon",
                "level": 2
            },
            {
                "index": "protection-from-poison",
                "name": "Protection from Poison",
                "level": 2
            },
            {
                "index": "zone-of-truth",
                "name": "Zone of Truth",
                "level": 2
            },
            {
                "index": "create-food-and-water",
                "name": "Create Food and Water",
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
                "index": "magic-circle",
                "name": "Magic Circle",
                "level": 3
            },
            {
                "index": "remove-curse",
                "name": "Remove Curse",
                "level": 3
            },
            {
                "index": "revivify",
                "name": "Revivify",
                "level": 3
            },
            {
                "index": "banishment",
                "name": "Banishment",
                "level": 4
            },
            {
                "index": "death-ward",
                "name": "Death Ward",
                "level": 4
            },
            {
                "index": "locate-creature",
                "name": "Locate Creature",
                "level": 4
            },
            {
                "index": "dispel-evil-and-good",
                "name": "Dispel Evil and Good",
                "level": 5
            },
            {
                "index": "geas",
                "name": "Geas",
                "level": 5
            },
            {
                "index": "raise-dead",
                "name": "Raise Dead",
                "level": 5
            }
        ]
    },
    "subclasses": [
        {
            "id": "devotion",
            "name": "Devotion",
            "flavor": "Sacred Oath",
            "description": [
                "The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometimes called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor, acting with honor in pursuit of justice and the greater good. They hold themselves to the highest standards of conduct, and some, for better or worse, hold the rest of the world to the same standards. Many who swear this oath are devoted to gods of law and good and use their gods' tenets as the measure of their devotion. They hold angels--the perfect servants of good--as their ideals, and incorporate images of angelic wings into their helmets or coats of arms."
            ],
            "levels": [
                {
                    "level": 3,
                    "featureIds": [
                        "channel-divinity-sacred-weapon",
                        "channel-divinity-turn-the-unholy"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 7,
                    "featureIds": [
                        "aura-of-devotion"
                    ],
                    "subclassSpecific": {
                        "auraRange": 10
                    }
                },
                {
                    "level": 15,
                    "featureIds": [
                        "purity-of-spirit"
                    ],
                    "subclassSpecific": {
                        "auraRange": 10
                    }
                },
                {
                    "level": 18,
                    "featureIds": [],
                    "subclassSpecific": {
                        "auraRange": 30
                    }
                },
                {
                    "level": 20,
                    "featureIds": [
                        "holy-nimbus"
                    ],
                    "subclassSpecific": {
                        "auraRange": 30
                    }
                }
            ],
            "spells": [
                {
                    "spell": {
                        "index": "protection-from-evil-and-good",
                        "name": "Protection from Evil and Good",
                        "level": 1
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
                        "index": "sanctuary",
                        "name": "Sanctuary",
                        "level": 1
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
                        "index": "lesser-restoration",
                        "name": "Lesser Restoration",
                        "level": 2
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
                        "index": "zone-of-truth",
                        "name": "Zone of Truth",
                        "level": 2
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
                        "index": "beacon-of-hope",
                        "name": "Beacon of Hope",
                        "level": 3
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
                        "index": "dispel-magic",
                        "name": "Dispel Magic",
                        "level": 3
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
                        "index": "freedom-of-movement",
                        "name": "Freedom of Movement",
                        "level": 4
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 13
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "guardian-of-faith",
                        "name": "Guardian of Faith",
                        "level": 4
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 13
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "commune",
                        "name": "Commune",
                        "level": 5
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 17
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
                            "level": 17
                        }
                    ]
                }
            ]
        }
    ]
};
