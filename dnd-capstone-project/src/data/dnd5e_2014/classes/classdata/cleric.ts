import type { ClassDetails } from "../types";

export const cleric: ClassDetails = {
    "name": "cleric",
    "label": "Cleric",
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
            "choose": 2,
            "desc": "Choose two from History, Insight, Medicine, Persuasion, and Religion",
            "options": [
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
                        "index": "skill-medicine",
                        "name": "Skill: Medicine",
                        "type": "Skills"
                    }
                },
                {
                    "kind": "reference",
                    "proficiency": {
                        "index": "skill-persuasion",
                        "name": "Skill: Persuasion",
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
                "index": "shield",
                "name": "Shield",
                "quantity": 1,
                "category": "Armor"
            }
        ],
        "choices": [
            {
                "choose": 1,
                "desc": "(a) a mace or (b) a warhammer (if proficient)"
            },
            {
                "choose": 1,
                "desc": "(a) scale mail, (b) leather armor, or (c) chain mail (if proficient)"
            },
            {
                "choose": 1,
                "desc": "(a) a light crossbow and 20 bolts or (b) any simple weapon"
            },
            {
                "choose": 1,
                "desc": "(a) a priest’s pack or (b) an explorer’s pack"
            },
            {
                "choose": 1,
                "desc": "holy symbol"
            }
        ]
    },
    "multiclassing": {
        "prerequisites": [
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
                "index": "medium-armor",
                "name": "Medium Armor",
                "type": "Armor"
            },
            {
                "index": "shields",
                "name": "Shields",
                "type": "Armor"
            }
        ],
        "proficiencyChoices": []
    },
    "primaryAbilities": [
        "wis"
    ],
    "classTable": [
        {
            "level": 1,
            "abilityScoreBonuses": 0,
            "featureIds": [
                "divine-domain",
                "domain-spells-1",
                "spellcasting-cleric"
            ],
            "classSpecific": {
                "channelDivinityCharges": 0,
                "destroyUndeadCr": 0
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
                "channel-divinity-1-rest",
                "channel-divinity-turn-undead",
                "divine-domain-improvement-1"
            ],
            "classSpecific": {
                "channelDivinityCharges": 1,
                "destroyUndeadCr": 0
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
            "featureIds": [
                "domain-spells-2"
            ],
            "classSpecific": {
                "channelDivinityCharges": 1,
                "destroyUndeadCr": 0
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
                "cleric-ability-score-improvement-1"
            ],
            "classSpecific": {
                "channelDivinityCharges": 1,
                "destroyUndeadCr": 0
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
            "featureIds": [
                "destroy-undead-cr-1-2-or-below",
                "domain-spells-3"
            ],
            "classSpecific": {
                "channelDivinityCharges": 1,
                "destroyUndeadCr": 0.5
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
                "channel-divinity-2-rest",
                "divine-domain-improvement-2"
            ],
            "classSpecific": {
                "channelDivinityCharges": 2,
                "destroyUndeadCr": 0.5
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
            "featureIds": [
                "domain-spells-4"
            ],
            "classSpecific": {
                "channelDivinityCharges": 2,
                "destroyUndeadCr": 0.5
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
                "cleric-ability-score-improvement-2",
                "destroy-undead-cr-1-or-below",
                "divine-domain-improvement-3"
            ],
            "classSpecific": {
                "channelDivinityCharges": 2,
                "destroyUndeadCr": 1
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
            "featureIds": [
                "domain-spells-5"
            ],
            "classSpecific": {
                "channelDivinityCharges": 2,
                "destroyUndeadCr": 1
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
                "divine-intervention"
            ],
            "classSpecific": {
                "channelDivinityCharges": 2,
                "destroyUndeadCr": 1
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
            "featureIds": [
                "destroy-undead-cr-2-or-below"
            ],
            "classSpecific": {
                "channelDivinityCharges": 2,
                "destroyUndeadCr": 2
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
                "cleric-ability-score-improvement-3"
            ],
            "classSpecific": {
                "channelDivinityCharges": 2,
                "destroyUndeadCr": 2
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
                "channelDivinityCharges": 2,
                "destroyUndeadCr": 2
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
                "destroy-undead-cr-3-or-below"
            ],
            "classSpecific": {
                "channelDivinityCharges": 2,
                "destroyUndeadCr": 3
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
                "channelDivinityCharges": 2,
                "destroyUndeadCr": 3
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
                "cleric-ability-score-improvement-4"
            ],
            "classSpecific": {
                "channelDivinityCharges": 2,
                "destroyUndeadCr": 3
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
            "featureIds": [
                "destroy-undead-cr-4-or-below",
                "divine-domain-improvement-4"
            ],
            "classSpecific": {
                "channelDivinityCharges": 2,
                "destroyUndeadCr": 4
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
                "channel-divinity-3-rest"
            ],
            "classSpecific": {
                "channelDivinityCharges": 3,
                "destroyUndeadCr": 4
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
                "cleric-ability-score-improvement-5"
            ],
            "classSpecific": {
                "channelDivinityCharges": 3,
                "destroyUndeadCr": 4
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
                "divine-intervention-improvement"
            ],
            "classSpecific": {
                "channelDivinityCharges": 3,
                "destroyUndeadCr": 4
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
        "divine-domain": {
            "id": "divine-domain",
            "name": "Divine Domain",
            "level": 1
        },
        "domain-spells-1": {
            "id": "domain-spells-1",
            "name": "Domain Spells",
            "level": 1
        },
        "spellcasting-cleric": {
            "id": "spellcasting-cleric",
            "name": "Spellcasting: Cleric",
            "level": 1
        },
        "channel-divinity-1-rest": {
            "id": "channel-divinity-1-rest",
            "name": "Channel Divinity (1/rest)",
            "level": 2
        },
        "channel-divinity-turn-undead": {
            "id": "channel-divinity-turn-undead",
            "name": "Channel Divinity: Turn Undead",
            "level": 2
        },
        "divine-domain-improvement-1": {
            "id": "divine-domain-improvement-1",
            "name": "Divine Domain feature",
            "level": 2
        },
        "domain-spells-2": {
            "id": "domain-spells-2",
            "name": "Domain Spells",
            "level": 3
        },
        "cleric-ability-score-improvement-1": {
            "id": "cleric-ability-score-improvement-1",
            "name": "Ability Score Improvement",
            "level": 4
        },
        "destroy-undead-cr-1-2-or-below": {
            "id": "destroy-undead-cr-1-2-or-below",
            "name": "Destroy Undead (CR 1/2 or below)",
            "level": 5
        },
        "domain-spells-3": {
            "id": "domain-spells-3",
            "name": "Domain Spells",
            "level": 5
        },
        "channel-divinity-2-rest": {
            "id": "channel-divinity-2-rest",
            "name": "Channel Divinity (2/rest)",
            "level": 6
        },
        "divine-domain-improvement-2": {
            "id": "divine-domain-improvement-2",
            "name": "Divine Domain feature",
            "level": 6
        },
        "domain-spells-4": {
            "id": "domain-spells-4",
            "name": "Domain Spells",
            "level": 7
        },
        "cleric-ability-score-improvement-2": {
            "id": "cleric-ability-score-improvement-2",
            "name": "Ability Score Improvement",
            "level": 8
        },
        "destroy-undead-cr-1-or-below": {
            "id": "destroy-undead-cr-1-or-below",
            "name": "Destroy Undead (CR 1 or below)",
            "level": 8
        },
        "divine-domain-improvement-3": {
            "id": "divine-domain-improvement-3",
            "name": "Divine Domain feature",
            "level": 8
        },
        "domain-spells-5": {
            "id": "domain-spells-5",
            "name": "Domain Spells",
            "level": 9
        },
        "divine-intervention": {
            "id": "divine-intervention",
            "name": "Divine Intervention",
            "level": 10
        },
        "destroy-undead-cr-2-or-below": {
            "id": "destroy-undead-cr-2-or-below",
            "name": "Destroy Undead (CR 2 or below)",
            "level": 11
        },
        "cleric-ability-score-improvement-3": {
            "id": "cleric-ability-score-improvement-3",
            "name": "Ability Score Improvement",
            "level": 12
        },
        "destroy-undead-cr-3-or-below": {
            "id": "destroy-undead-cr-3-or-below",
            "name": "Destroy Undead (CR 3 or below)",
            "level": 14
        },
        "cleric-ability-score-improvement-4": {
            "id": "cleric-ability-score-improvement-4",
            "name": "Ability Score Improvement",
            "level": 16
        },
        "destroy-undead-cr-4-or-below": {
            "id": "destroy-undead-cr-4-or-below",
            "name": "Destroy Undead (CR 4 or below)",
            "level": 17
        },
        "divine-domain-improvement-4": {
            "id": "divine-domain-improvement-4",
            "name": "Divine Domain feature",
            "level": 17
        },
        "channel-divinity-3-rest": {
            "id": "channel-divinity-3-rest",
            "name": "Channel Divinity (3/rest)",
            "level": 18
        },
        "cleric-ability-score-improvement-5": {
            "id": "cleric-ability-score-improvement-5",
            "name": "Ability Score Improvement",
            "level": 19
        },
        "divine-intervention-improvement": {
            "id": "divine-intervention-improvement",
            "name": "Divine Intervention Improvement",
            "level": 20
        },
        "bonus-proficiency": {
            "id": "bonus-proficiency",
            "name": "Bonus Proficiency",
            "level": 1,
            "subclassId": "life"
        },
        "disciple-of-life": {
            "id": "disciple-of-life",
            "name": "Disciple of Life",
            "level": 1,
            "subclassId": "life"
        },
        "channel-divinity-preserve-life": {
            "id": "channel-divinity-preserve-life",
            "name": "Channel Divinity: Preserve Life",
            "level": 2,
            "subclassId": "life"
        },
        "blessed-healer": {
            "id": "blessed-healer",
            "name": "Blessed Healer",
            "level": 6,
            "subclassId": "life"
        },
        "divine-strike": {
            "id": "divine-strike",
            "name": "Divine Strike",
            "level": 8,
            "subclassId": "life"
        },
        "supreme-healing": {
            "id": "supreme-healing",
            "name": "Supreme Healing",
            "level": 17,
            "subclassId": "life"
        }
    },
    "featureDescriptions": {
        "divine-domain": [
            "Choose one domain related to your deity, such as Knowledge, Life, Light, Nature, Tempest, Trickery, or War. Only the Life domain is detailed in the Open Game Licensed SRD. Additional Domains are described in the official rulebooks or products from other publishers.",
            "Your domain grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels."
        ],
        "domain-spells-1": [
            "Each domain has a list of spells--its domain spells--that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.",
            "If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
        ],
        "spellcasting-cleric": [
            "As a conduit for divine power, you can cast cleric spells."
        ],
        "channel-divinity-1-rest": [
            "At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.",
            "When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.",
            "Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.",
            "Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses."
        ],
        "channel-divinity-turn-undead": [
            "As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.",
            "A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action."
        ],
        "divine-domain-improvement-1": [
            "Choose one domain related to your deity, such as Knowledge, Life, Light, Nature, Tempest, Trickery, or War. Only the Life domain is detailed in the Open Game Licensed SRD. Additional Domains are described in the official rulebooks or products from other publishers.",
            "Your domain grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels."
        ],
        "domain-spells-2": [
            "Each domain has a list of spells--its domain spells--that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.",
            "If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
        ],
        "cleric-ability-score-improvement-1": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "destroy-undead-cr-1-2-or-below": [
            "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
        ],
        "domain-spells-3": [
            "Each domain has a list of spells--its domain spells--that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.",
            "If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
        ],
        "channel-divinity-2-rest": [
            "Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses."
        ],
        "divine-domain-improvement-2": [
            "Choose one domain related to your deity, such as Knowledge, Life, Light, Nature, Tempest, Trickery, or War. Only the Life domain is detailed in the Open Game Licensed SRD. Additional Domains are described in the official rulebooks or products from other publishers.",
            "Your domain grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels."
        ],
        "domain-spells-4": [
            "Each domain has a list of spells--its domain spells--that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.",
            "If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
        ],
        "cleric-ability-score-improvement-2": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "destroy-undead-cr-1-or-below": [
            "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
        ],
        "divine-domain-improvement-3": [
            "Choose one domain related to your deity, such as Knowledge, Life, Light, Nature, Tempest, Trickery, or War. Only the Life domain is detailed in the Open Game Licensed SRD. Additional Domains are described in the official rulebooks or products from other publishers.",
            "Your domain grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels."
        ],
        "domain-spells-5": [
            "Each domain has a list of spells--its domain spells--that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.",
            "If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
        ],
        "divine-intervention": [
            "Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.",
            "Imploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The GM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate.",
            "If your deity intervenes, you can't use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.",
            "At 20th level, your call for intervention succeeds automatically, no roll required."
        ],
        "destroy-undead-cr-2-or-below": [
            "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
        ],
        "cleric-ability-score-improvement-3": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "destroy-undead-cr-3-or-below": [
            "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
        ],
        "cleric-ability-score-improvement-4": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "destroy-undead-cr-4-or-below": [
            "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
        ],
        "divine-domain-improvement-4": [
            "Choose one domain related to your deity, such as Knowledge, Life, Light, Nature, Tempest, Trickery, or War. Only the Life domain is detailed in the Open Game Licensed SRD. Additional Domains are described in the official rulebooks or products from other publishers.",
            "Your domain grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels."
        ],
        "channel-divinity-3-rest": [
            "Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses."
        ],
        "cleric-ability-score-improvement-5": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "divine-intervention-improvement": [
            "At 20th level, your call for intervention succeeds automatically, no roll required."
        ],
        "bonus-proficiency": [
            "When you choose this domain at 1st level, you gain proficiency with heavy armor."
        ],
        "disciple-of-life": [
            "Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level."
        ],
        "channel-divinity-preserve-life": [
            "Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.",
            "As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level.",
            "Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct."
        ],
        "blessed-healer": [
            "Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level."
        ],
        "divine-strike": [
            "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8."
        ],
        "supreme-healing": [
            "Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12."
        ]
    },
    "spellcasting": {
        "ability": "wis",
        "startLevel": 1,
        "info": [
            {
                "name": "Cantrips",
                "desc": [
                    "At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table."
                ]
            },
            {
                "name": "Preparing and Casting Spells",
                "desc": [
                    "The Cleric table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                    "You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.",
                    "For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
                    "You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list."
                ]
            },
            {
                "name": "Spellcasting Ability",
                "desc": [
                    "Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.",
                    "Spell save DC = 8 + your proficiency bonus + your Wisdom modifier",
                    "Spell attack modifier = your proficiency bonus + your Wisdom modifier"
                ]
            },
            {
                "name": "Ritual Casting",
                "desc": [
                    "You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared."
                ]
            },
            {
                "name": "Spellcasting Focus",
                "desc": [
                    "You can use a holy symbol (see Equipment) as a spellcasting focus for your cleric spells."
                ]
            }
        ],
        "spellList": [
            {
                "index": "guidance",
                "name": "Guidance",
                "level": 0
            },
            {
                "index": "light",
                "name": "Light",
                "level": 0
            },
            {
                "index": "mending",
                "name": "Mending",
                "level": 0
            },
            {
                "index": "resistance",
                "name": "Resistance",
                "level": 0
            },
            {
                "index": "sacred-flame",
                "name": "Sacred Flame",
                "level": 0
            },
            {
                "index": "spare-the-dying",
                "name": "Spare the Dying",
                "level": 0
            },
            {
                "index": "thaumaturgy",
                "name": "Thaumaturgy",
                "level": 0
            },
            {
                "index": "bane",
                "name": "Bane",
                "level": 1
            },
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
                "index": "create-or-destroy-water",
                "name": "Create or Destroy Water",
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
                "index": "guiding-bolt",
                "name": "Guiding Bolt",
                "level": 1
            },
            {
                "index": "healing-word",
                "name": "Healing Word",
                "level": 1
            },
            {
                "index": "inflict-wounds",
                "name": "Inflict Wounds",
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
                "index": "sanctuary",
                "name": "Sanctuary",
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
                "index": "augury",
                "name": "Augury",
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
                "index": "continual-flame",
                "name": "Continual Flame",
                "level": 2
            },
            {
                "index": "enhance-ability",
                "name": "Enhance Ability",
                "level": 2
            },
            {
                "index": "find-traps",
                "name": "Find Traps",
                "level": 2
            },
            {
                "index": "gentle-repose",
                "name": "Gentle Repose",
                "level": 2
            },
            {
                "index": "hold-person",
                "name": "Hold Person",
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
                "index": "prayer-of-healing",
                "name": "Prayer of Healing",
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
                "index": "spiritual-weapon",
                "name": "Spiritual Weapon",
                "level": 2
            },
            {
                "index": "warding-bond",
                "name": "Warding Bond",
                "level": 2
            },
            {
                "index": "zone-of-truth",
                "name": "Zone of Truth",
                "level": 2
            },
            {
                "index": "animate-dead",
                "name": "Animate Dead",
                "level": 3
            },
            {
                "index": "beacon-of-hope",
                "name": "Beacon of Hope",
                "level": 3
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
                "index": "glyph-of-warding",
                "name": "Glyph of Warding",
                "level": 3
            },
            {
                "index": "magic-circle",
                "name": "Magic Circle",
                "level": 3
            },
            {
                "index": "mass-healing-word",
                "name": "Mass Healing Word",
                "level": 3
            },
            {
                "index": "meld-into-stone",
                "name": "Meld Into Stone",
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
                "index": "revivify",
                "name": "Revivify",
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
                "index": "spirit-guardians",
                "name": "Spirit Guardians",
                "level": 3
            },
            {
                "index": "tongues",
                "name": "Tongues",
                "level": 3
            },
            {
                "index": "water-walk",
                "name": "Water Walk",
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
                "index": "control-water",
                "name": "Control Water",
                "level": 4
            },
            {
                "index": "death-ward",
                "name": "Death Ward",
                "level": 4
            },
            {
                "index": "freedom-of-movement",
                "name": "Freedom of Movement",
                "level": 4
            },
            {
                "index": "guardian-of-faith",
                "name": "Guardian of Faith",
                "level": 4
            },
            {
                "index": "locate-creature",
                "name": "Locate Creature",
                "level": 4
            },
            {
                "index": "stone-shape",
                "name": "Stone Shape",
                "level": 4
            },
            {
                "index": "commune",
                "name": "Commune",
                "level": 5
            },
            {
                "index": "contagion",
                "name": "Contagion",
                "level": 5
            },
            {
                "index": "dispel-evil-and-good",
                "name": "Dispel Evil and Good",
                "level": 5
            },
            {
                "index": "flame-strike",
                "name": "Flame Strike",
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
                "index": "hallow",
                "name": "Hallow",
                "level": 5
            },
            {
                "index": "insect-plague",
                "name": "Insect Plague",
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
                "index": "blade-barrier",
                "name": "Blade Barrier",
                "level": 6
            },
            {
                "index": "create-undead",
                "name": "Create Undead",
                "level": 6
            },
            {
                "index": "find-the-path",
                "name": "Find the Path",
                "level": 6
            },
            {
                "index": "forbiddance",
                "name": "Forbiddance",
                "level": 6
            },
            {
                "index": "harm",
                "name": "Harm",
                "level": 6
            },
            {
                "index": "heal",
                "name": "Heal",
                "level": 6
            },
            {
                "index": "heroes-feast",
                "name": "Heroes' Feast",
                "level": 6
            },
            {
                "index": "planar-ally",
                "name": "Planar Ally",
                "level": 6
            },
            {
                "index": "true-seeing",
                "name": "True Seeing",
                "level": 6
            },
            {
                "index": "word-of-recall",
                "name": "Word of Recall",
                "level": 6
            },
            {
                "index": "conjure-celestial",
                "name": "Conjure Celestial",
                "level": 7
            },
            {
                "index": "divine-word",
                "name": "Divine Word",
                "level": 7
            },
            {
                "index": "etherealness",
                "name": "Etherealness",
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
                "index": "antimagic-field",
                "name": "Antimagic Field",
                "level": 8
            },
            {
                "index": "control-weather",
                "name": "Control Weather",
                "level": 8
            },
            {
                "index": "earthquake",
                "name": "Earthquake",
                "level": 8
            },
            {
                "index": "holy-aura",
                "name": "Holy Aura",
                "level": 8
            },
            {
                "index": "astral-projection",
                "name": "Astral Projection",
                "level": 9
            },
            {
                "index": "gate",
                "name": "Gate",
                "level": 9
            },
            {
                "index": "mass-heal",
                "name": "Mass Heal",
                "level": 9
            },
            {
                "index": "true-resurrection",
                "name": "True Resurrection",
                "level": 9
            }
        ]
    },
    "subclasses": [
        {
            "id": "life",
            "name": "Life",
            "flavor": "Divine Domain",
            "description": [
                "The Life domain focuses on the vibrant positive energy--one of the fundamental forces of the universe--that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities, sun gods, gods of healing or endurance, and gods of home and community."
            ],
            "levels": [
                {
                    "level": 1,
                    "featureIds": [
                        "bonus-proficiency",
                        "disciple-of-life"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 2,
                    "featureIds": [
                        "channel-divinity-preserve-life"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 6,
                    "featureIds": [
                        "blessed-healer"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 8,
                    "featureIds": [
                        "divine-strike"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 17,
                    "featureIds": [
                        "supreme-healing"
                    ],
                    "subclassSpecific": {}
                }
            ],
            "spells": [
                {
                    "spell": {
                        "index": "bless",
                        "name": "Bless",
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
                        "index": "cure-wounds",
                        "name": "Cure Wounds",
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
                        "index": "lesser-restoration",
                        "name": "Lesser Restoration",
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
                        "index": "spiritual-weapon",
                        "name": "Spiritual Weapon",
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
                        "index": "beacon-of-hope",
                        "name": "Beacon of Hope",
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
                        "index": "revivify",
                        "name": "Revivify",
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
                        "index": "death-ward",
                        "name": "Death Ward",
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
                        "index": "mass-cure-wounds",
                        "name": "Mass Cure Wounds",
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
                        "index": "raise-dead",
                        "name": "Raise Dead",
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
