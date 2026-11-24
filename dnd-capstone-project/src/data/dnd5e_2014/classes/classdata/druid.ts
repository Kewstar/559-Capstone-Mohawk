import type { ClassDetails } from "../types";

export const druid: ClassDetails = {
    "name": "druid",
    "label": "Druid",
    "hitDie": 8,
    "savingThrows": [
        "int",
        "wis"
    ],
    "proficiencies": [
        {
            "index": "clubs",
            "name": "Clubs",
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
            "index": "herbalism-kit",
            "name": "Herbalism Kit",
            "type": "Other"
        },
        {
            "index": "javelins",
            "name": "Javelins",
            "type": "Weapons"
        },
        {
            "index": "light-armor",
            "name": "Light Armor",
            "type": "Armor"
        },
        {
            "index": "maces",
            "name": "Maces",
            "type": "Weapons"
        },
        {
            "index": "medium-armor",
            "name": "Medium Armor",
            "type": "Armor"
        },
        {
            "index": "quarterstaffs",
            "name": "Quarterstaffs",
            "type": "Weapons"
        },
        {
            "index": "scimitars",
            "name": "Scimitars",
            "type": "Weapons"
        },
        {
            "index": "shields",
            "name": "Shields",
            "type": "Armor"
        },
        {
            "index": "sickles",
            "name": "Sickles",
            "type": "Weapons"
        },
        {
            "index": "slings",
            "name": "Slings",
            "type": "Weapons"
        },
        {
            "index": "spears",
            "name": "Spears",
            "type": "Weapons"
        }
    ],
    "proficiencyChoices": [
        {
            "choose": 2,
            "desc": "Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival",
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
                        "index": "skill-animal-handling",
                        "name": "Skill: Animal Handling",
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
                        "index": "skill-religion",
                        "name": "Skill: Religion",
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
                "index": "leather-armor",
                "name": "Leather Armor",
                "quantity": 1,
                "category": "Armor"
            },
            {
                "index": "explorers-pack",
                "name": "Explorer's Pack",
                "quantity": 1,
                "category": "Pack"
            }
        ],
        "choices": [
            {
                "choose": 1,
                "desc": "(a) a wooden shield or (b) any simple weapon",
                "options": [
                    {
                        "parts": [
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
                                "categoryIndex": "simple-weapons",
                                "choose": 1
                            }
                        ]
                    }
                ]
            },
            {
                "choose": 1,
                "desc": "(a) a scimitar or (b) any simple melee weapon",
                "options": [
                    {
                        "parts": [
                            {
                                "kind": "item",
                                "itemIndex": "scimitar",
                                "quantity": 1
                            }
                        ]
                    },
                    {
                        "parts": [
                            {
                                "kind": "category",
                                "categoryIndex": "simple-melee-weapons",
                                "choose": 1
                            }
                        ]
                    }
                ]
            },
            {
                "choose": 1,
                "desc": "druidic focus",
                "options": [
                    {
                        "parts": [
                            {
                                "kind": "category",
                                "categoryIndex": "druidic-foci",
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
                "druidic",
                "spellcasting-druid"
            ],
            "classSpecific": {
                "wildShapeFly": false,
                "wildShapeMaxCr": 0,
                "wildShapeSwim": false
            },
            "spellcasting": {
                "cantripsKnown": 2,
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
                "druid-circle",
                "wild-shape-cr-1-4-or-below-no-flying-or-swim-speed"
            ],
            "classSpecific": {
                "wildShapeFly": false,
                "wildShapeMaxCr": 0.25,
                "wildShapeSwim": false
            },
            "spellcasting": {
                "cantripsKnown": 2,
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
                "wildShapeFly": false,
                "wildShapeMaxCr": 0.25,
                "wildShapeSwim": false
            },
            "spellcasting": {
                "cantripsKnown": 2,
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
                "druid-ability-score-improvement-1",
                "wild-shape-cr-1-2-or-below-no-flying-speed"
            ],
            "classSpecific": {
                "wildShapeFly": false,
                "wildShapeMaxCr": 0.5,
                "wildShapeSwim": true
            },
            "spellcasting": {
                "cantripsKnown": 3,
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
                "wildShapeFly": false,
                "wildShapeMaxCr": 0.5,
                "wildShapeSwim": true
            },
            "spellcasting": {
                "cantripsKnown": 3,
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
                "druid-circle-improvement-1"
            ],
            "classSpecific": {
                "wildShapeFly": false,
                "wildShapeMaxCr": 0.5,
                "wildShapeSwim": true
            },
            "spellcasting": {
                "cantripsKnown": 3,
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
                "wildShapeFly": false,
                "wildShapeMaxCr": 1,
                "wildShapeSwim": true
            },
            "spellcasting": {
                "cantripsKnown": 3,
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
                "druid-ability-score-improvement-2",
                "wild-shape-cr-1-or-below"
            ],
            "classSpecific": {
                "wildShapeFly": true,
                "wildShapeMaxCr": 1,
                "wildShapeSwim": true
            },
            "spellcasting": {
                "cantripsKnown": 3,
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
                "wildShapeFly": true,
                "wildShapeMaxCr": 1,
                "wildShapeSwim": true
            },
            "spellcasting": {
                "cantripsKnown": 3,
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
                "druid-circle-improvement-2"
            ],
            "classSpecific": {
                "wildShapeFly": true,
                "wildShapeMaxCr": 1,
                "wildShapeSwim": true
            },
            "spellcasting": {
                "cantripsKnown": 4,
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
                "wildShapeFly": true,
                "wildShapeMaxCr": 1,
                "wildShapeSwim": true
            },
            "spellcasting": {
                "cantripsKnown": 4,
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
                "druid-ability-score-improvement-3"
            ],
            "classSpecific": {
                "wildShapeFly": true,
                "wildShapeMaxCr": 1,
                "wildShapeSwim": true
            },
            "spellcasting": {
                "cantripsKnown": 4,
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
                "wildShapeFly": true,
                "wildShapeMaxCr": 1,
                "wildShapeSwim": true
            },
            "spellcasting": {
                "cantripsKnown": 4,
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
                "druid-circle-improvement-3"
            ],
            "classSpecific": {
                "wildShapeFly": true,
                "wildShapeMaxCr": 1,
                "wildShapeSwim": true
            },
            "spellcasting": {
                "cantripsKnown": 4,
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
                "wildShapeFly": true,
                "wildShapeMaxCr": 1,
                "wildShapeSwim": true
            },
            "spellcasting": {
                "cantripsKnown": 4,
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
                "druid-ability-score-improvement-4"
            ],
            "classSpecific": {
                "wildShapeFly": true,
                "wildShapeMaxCr": 1,
                "wildShapeSwim": true
            },
            "spellcasting": {
                "cantripsKnown": 4,
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
                "wildShapeFly": true,
                "wildShapeMaxCr": 1,
                "wildShapeSwim": true
            },
            "spellcasting": {
                "cantripsKnown": 4,
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
                "beast-spells",
                "druid-timeless-body"
            ],
            "classSpecific": {
                "wildShapeFly": true,
                "wildShapeMaxCr": 1,
                "wildShapeSwim": true
            },
            "spellcasting": {
                "cantripsKnown": 4,
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
                "druid-ability-score-improvement-5"
            ],
            "classSpecific": {
                "wildShapeFly": true,
                "wildShapeMaxCr": 1,
                "wildShapeSwim": true
            },
            "spellcasting": {
                "cantripsKnown": 4,
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
                "archdruid"
            ],
            "classSpecific": {
                "wildShapeFly": true,
                "wildShapeMaxCr": 1,
                "wildShapeSwim": true
            },
            "spellcasting": {
                "cantripsKnown": 4,
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
        "druidic": {
            "id": "druidic",
            "name": "Druidic",
            "level": 1
        },
        "spellcasting-druid": {
            "id": "spellcasting-druid",
            "name": "Spellcasting: Druid",
            "level": 1
        },
        "druid-circle": {
            "id": "druid-circle",
            "name": "Druid Circle",
            "level": 2
        },
        "wild-shape-cr-1-4-or-below-no-flying-or-swim-speed": {
            "id": "wild-shape-cr-1-4-or-below-no-flying-or-swim-speed",
            "name": "Wild Shape (CR 1/4 or below, no flying or swim speed)",
            "level": 2
        },
        "druid-ability-score-improvement-1": {
            "id": "druid-ability-score-improvement-1",
            "name": "Ability Score Improvement",
            "level": 4
        },
        "wild-shape-cr-1-2-or-below-no-flying-speed": {
            "id": "wild-shape-cr-1-2-or-below-no-flying-speed",
            "name": "Wild Shape (CR 1/2 or below, no flying speed)",
            "level": 4
        },
        "druid-circle-improvement-1": {
            "id": "druid-circle-improvement-1",
            "name": "Druid Circle feature",
            "level": 6
        },
        "druid-ability-score-improvement-2": {
            "id": "druid-ability-score-improvement-2",
            "name": "Ability Score Improvement",
            "level": 8
        },
        "wild-shape-cr-1-or-below": {
            "id": "wild-shape-cr-1-or-below",
            "name": "Wild Shape (CR 1 or below)",
            "level": 8
        },
        "druid-circle-improvement-2": {
            "id": "druid-circle-improvement-2",
            "name": "Druid Circle feature",
            "level": 10
        },
        "druid-ability-score-improvement-3": {
            "id": "druid-ability-score-improvement-3",
            "name": "Ability Score Improvement",
            "level": 12
        },
        "druid-circle-improvement-3": {
            "id": "druid-circle-improvement-3",
            "name": "Druid Circle feature",
            "level": 14
        },
        "druid-ability-score-improvement-4": {
            "id": "druid-ability-score-improvement-4",
            "name": "Ability Score Improvement",
            "level": 16
        },
        "beast-spells": {
            "id": "beast-spells",
            "name": "Beast Spells",
            "level": 18
        },
        "druid-timeless-body": {
            "id": "druid-timeless-body",
            "name": "Timeless Body",
            "level": 18
        },
        "druid-ability-score-improvement-5": {
            "id": "druid-ability-score-improvement-5",
            "name": "Ability Score Improvement",
            "level": 19
        },
        "archdruid": {
            "id": "archdruid",
            "name": "Archdruid",
            "level": 20
        },
        "bonus-cantrip": {
            "id": "bonus-cantrip",
            "name": "Bonus Cantrip",
            "level": 2,
            "subclassId": "land"
        },
        "natural-recovery": {
            "id": "natural-recovery",
            "name": "Natural Recovery",
            "level": 2,
            "subclassId": "land"
        },
        "druid-lands-stride": {
            "id": "druid-lands-stride",
            "name": "Land's Stride",
            "level": 6,
            "subclassId": "land"
        },
        "natures-ward": {
            "id": "natures-ward",
            "name": "Nature's Ward",
            "level": 10,
            "subclassId": "land"
        },
        "natures-sanctuary": {
            "id": "natures-sanctuary",
            "name": "Nature's Sanctuary",
            "level": 14,
            "subclassId": "land"
        }
    },
    "featureDescriptions": {
        "druidic": [
            "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic."
        ],
        "spellcasting-druid": [
            "Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will."
        ],
        "druid-circle": [
            "At 2nd level, you choose to identify with a circle of druids, such as the Circle of the Land. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
        ],
        "wild-shape-cr-1-4-or-below-no-flying-or-swim-speed": [
            "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.",
            "Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.",
            "You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.",
            "While you are transformed, the following rules apply:",
            "- Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.",
            "- When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
            "- You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.",
            "- You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.",
            "- You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
        ],
        "druid-ability-score-improvement-1": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "wild-shape-cr-1-2-or-below-no-flying-speed": [
            "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.",
            "Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.",
            "You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.",
            "While you are transformed, the following rules apply:",
            "- Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.",
            "- When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
            "- You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.",
            "- You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.",
            "- You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
        ],
        "druid-circle-improvement-1": [
            "At 2nd level, you choose to identify with a circle of druids, such as the Circle of the Land. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
        ],
        "druid-ability-score-improvement-2": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "wild-shape-cr-1-or-below": [
            "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.",
            "Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.",
            "You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.",
            "While you are transformed, the following rules apply:",
            "- Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.",
            "- When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
            "- You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.",
            "- You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.",
            "- You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
        ],
        "druid-circle-improvement-2": [
            "At 2nd level, you choose to identify with a circle of druids, such as the Circle of the Land. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
        ],
        "druid-ability-score-improvement-3": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "druid-circle-improvement-3": [
            "At 2nd level, you choose to identify with a circle of druids, such as the Circle of the Land. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
        ],
        "druid-ability-score-improvement-4": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "beast-spells": [
            "Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components."
        ],
        "druid-timeless-body": [
            "Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year."
        ],
        "druid-ability-score-improvement-5": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "archdruid": [
            "At 20th level, you can use your Wild Shape an unlimited number of times.",
            "Additionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren't consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape."
        ],
        "bonus-cantrip": [
            "When you choose this circle at 2nd level, you learn one additional druid cantrip of your choice."
        ],
        "natural-recovery": [
            "Starting at 2nd level, you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can't use this feature again until you finish a long rest.",
            "For example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots."
        ],
        "druid-lands-stride": [
            "Starting at 6th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.",
            "In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell."
        ],
        "natures-ward": [
            "When you reach 10th level, you can't be charmed or frightened by elementals or fey, and you are immune to poison and disease."
        ],
        "natures-sanctuary": [
            "When you reach 14th level, creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours. The creature is aware of this effect before it makes its attack against you."
        ]
    },
    "spellcasting": {
        "ability": "wis",
        "startLevel": 1,
        "info": [
            {
                "name": "Cantrips",
                "desc": [
                    "At 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table."
                ]
            },
            {
                "name": "Preparing and Casting Spells",
                "desc": [
                    "The Druid table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                    "You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots.",
                    "For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
                    "You can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list."
                ]
            },
            {
                "name": "Spellcasting Ability",
                "desc": [
                    "Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.",
                    "Spell save DC = 8 + your proficiency bonus + your Wisdom modifier.",
                    "Spell attack modifier = your proficiency bonus + your Wisdom modifier."
                ]
            },
            {
                "name": "Ritual Casting",
                "desc": [
                    "You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared."
                ]
            },
            {
                "name": "Spellcasting Focus",
                "desc": [
                    "You can use a druidic focus (see chapter 5, \"Equipment\") as a spellcasting focus for your druid spells."
                ]
            }
        ],
        "spellList": [
            {
                "index": "druidcraft",
                "name": "Druidcraft",
                "level": 0
            },
            {
                "index": "guidance",
                "name": "Guidance",
                "level": 0
            },
            {
                "index": "mending",
                "name": "Mending",
                "level": 0
            },
            {
                "index": "poison-spray",
                "name": "Poison Spray",
                "level": 0
            },
            {
                "index": "produce-flame",
                "name": "Produce Flame",
                "level": 0
            },
            {
                "index": "resistance",
                "name": "Resistance",
                "level": 0
            },
            {
                "index": "shillelagh",
                "name": "Shillelagh",
                "level": 0
            },
            {
                "index": "animal-friendship",
                "name": "Animal Friendship",
                "level": 1
            },
            {
                "index": "charm-person",
                "name": "Charm Person",
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
                "index": "entangle",
                "name": "Entangle",
                "level": 1
            },
            {
                "index": "faerie-fire",
                "name": "Faerie Fire",
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
                "index": "healing-word",
                "name": "Healing Word",
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
                "index": "purify-food-and-drink",
                "name": "Purify Food and Drink",
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
                "index": "flame-blade",
                "name": "Flame Blade",
                "level": 2
            },
            {
                "index": "flaming-sphere",
                "name": "Flaming Sphere",
                "level": 2
            },
            {
                "index": "gust-of-wind",
                "name": "Gust of Wind",
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
                "index": "moonbeam",
                "name": "Moonbeam",
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
                "index": "spike-growth",
                "name": "Spike Growth",
                "level": 2
            },
            {
                "index": "call-lightning",
                "name": "Call Lightning",
                "level": 3
            },
            {
                "index": "conjure-animals",
                "name": "Conjure Animals",
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
                "index": "sleet-storm",
                "name": "Sleet Storm",
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
                "index": "conjure-woodland-beings",
                "name": "Conjure Woodland Beings",
                "level": 4
            },
            {
                "index": "control-water",
                "name": "Control Water",
                "level": 4
            },
            {
                "index": "divination",
                "name": "Divination",
                "level": 4
            },
            {
                "index": "dominate-beast",
                "name": "Dominate Beast",
                "level": 4
            },
            {
                "index": "freedom-of-movement",
                "name": "Freedom of Movement",
                "level": 4
            },
            {
                "index": "giant-insect",
                "name": "Giant Insect",
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
                "index": "polymorph",
                "name": "Polymorph",
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
                "index": "antilife-shell",
                "name": "Antilife Shell",
                "level": 5
            },
            {
                "index": "awaken",
                "name": "Awaken",
                "level": 5
            },
            {
                "index": "commune-with-nature",
                "name": "Commune With Nature",
                "level": 5
            },
            {
                "index": "conjure-elemental",
                "name": "Conjure Elemental",
                "level": 5
            },
            {
                "index": "contagion",
                "name": "Contagion",
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
                "index": "insect-plague",
                "name": "Insect Plague",
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
                "index": "reincarnate",
                "name": "Reincarnate",
                "level": 5
            },
            {
                "index": "scrying",
                "name": "Scrying",
                "level": 5
            },
            {
                "index": "tree-stride",
                "name": "Tree Stride",
                "level": 5
            },
            {
                "index": "wall-of-stone",
                "name": "Wall of Stone",
                "level": 5
            },
            {
                "index": "conjure-fey",
                "name": "Conjure Fey",
                "level": 6
            },
            {
                "index": "find-the-path",
                "name": "Find the Path",
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
                "index": "transport-via-plants",
                "name": "Transport via Plants",
                "level": 6
            },
            {
                "index": "wall-of-thorns",
                "name": "Wall of Thorns",
                "level": 6
            },
            {
                "index": "wind-walk",
                "name": "Wind Walk",
                "level": 6
            },
            {
                "index": "fire-storm",
                "name": "Fire Storm",
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
                "index": "regenerate",
                "name": "Regenerate",
                "level": 7
            },
            {
                "index": "reverse-gravity",
                "name": "Reverse Gravity",
                "level": 7
            },
            {
                "index": "animal-shapes",
                "name": "Animal Shapes",
                "level": 8
            },
            {
                "index": "antipathy-sympathy",
                "name": "Antipathy/Sympathy",
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
                "index": "feeblemind",
                "name": "Feeblemind",
                "level": 8
            },
            {
                "index": "sunburst",
                "name": "Sunburst",
                "level": 8
            },
            {
                "index": "foresight",
                "name": "Foresight",
                "level": 9
            },
            {
                "index": "shapechange",
                "name": "Shapechange",
                "level": 9
            },
            {
                "index": "storm-of-vengeance",
                "name": "Storm of Vengeance",
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
            "id": "land",
            "name": "Land",
            "flavor": "Druid Circle",
            "description": [
                "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites."
            ],
            "levels": [
                {
                    "level": 2,
                    "featureIds": [
                        "bonus-cantrip",
                        "natural-recovery"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 6,
                    "featureIds": [
                        "druid-lands-stride"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 10,
                    "featureIds": [
                        "natures-ward"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 14,
                    "featureIds": [
                        "natures-sanctuary"
                    ],
                    "subclassSpecific": {}
                }
            ],
            "spells": [
                {
                    "spell": {
                        "index": "hold-person",
                        "name": "Hold Person",
                        "level": 2
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 3
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-arctic"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "spike-growth",
                        "name": "Spike Growth",
                        "level": 2
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 3
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-arctic"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "sleet-storm",
                        "name": "Sleet Storm",
                        "level": 3
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 5
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-arctic"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "slow",
                        "name": "Slow",
                        "level": 3
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 5
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-arctic"
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
                            "level": 7
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-arctic"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "ice-storm",
                        "name": "Ice Storm",
                        "level": 4
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 7
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-arctic"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "commune-with-nature",
                        "name": "Commune With Nature",
                        "level": 5
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 9
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-arctic"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "cone-of-cold",
                        "name": "Cone of Cold",
                        "level": 5
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 9
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-arctic"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "mirror-image",
                        "name": "Mirror Image",
                        "level": 2
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 3
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-coast"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "misty-step",
                        "name": "Misty Step",
                        "level": 2
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 3
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-coast"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "water-breathing",
                        "name": "Water Breathing",
                        "level": 3
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 5
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-coast"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "water-walk",
                        "name": "Water Walk",
                        "level": 3
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 5
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-coast"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "control-water",
                        "name": "Control Water",
                        "level": 4
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 7
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-coast"
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
                            "level": 7
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-coast"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "conjure-elemental",
                        "name": "Conjure Elemental",
                        "level": 5
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 9
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-coast"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "scrying",
                        "name": "Scrying",
                        "level": 5
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 9
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-coast"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "blur",
                        "name": "Blur",
                        "level": 2
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 3
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-desert"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "silence",
                        "name": "Silence",
                        "level": 2
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 3
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-desert"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "create-food-and-water",
                        "name": "Create Food and Water",
                        "level": 3
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 5
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-desert"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "protection-from-energy",
                        "name": "Protection From Energy",
                        "level": 3
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 5
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-desert"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "blight",
                        "name": "Blight",
                        "level": 4
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 7
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-desert"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "hallucinatory-terrain",
                        "name": "Hallucinatory Terrain",
                        "level": 4
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 7
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-desert"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "insect-plague",
                        "name": "Insect Plague",
                        "level": 5
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 9
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-desert"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "wall-of-stone",
                        "name": "Wall of Stone",
                        "level": 5
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 9
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-desert"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "barkskin",
                        "name": "Barkskin",
                        "level": 2
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 3
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-forest"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "spider-climb",
                        "name": "Spider Climb",
                        "level": 2
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 3
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-forest"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "call-lightning",
                        "name": "Call Lightning",
                        "level": 3
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 5
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-forest"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "plant-growth",
                        "name": "Plant Growth",
                        "level": 3
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 5
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-forest"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "divination",
                        "name": "Divination",
                        "level": 4
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 7
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-forest"
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
                            "level": 7
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-forest"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "commune-with-nature",
                        "name": "Commune With Nature",
                        "level": 5
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 9
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-forest"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "tree-stride",
                        "name": "Tree Stride",
                        "level": 5
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 9
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-forest"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "invisibility",
                        "name": "Invisibility",
                        "level": 2
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 3
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-grassland"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "pass-without-trace",
                        "name": "Pass Without Trace",
                        "level": 2
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 3
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-grassland"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "daylight",
                        "name": "Daylight",
                        "level": 3
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 5
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-grassland"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "haste",
                        "name": "Haste",
                        "level": 3
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 5
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-grassland"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "divination",
                        "name": "Divination",
                        "level": 4
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 7
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-grassland"
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
                            "level": 7
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-grassland"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "dream",
                        "name": "Dream",
                        "level": 5
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 9
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-grassland"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "insect-plague",
                        "name": "Insect Plague",
                        "level": 5
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 9
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-grassland"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "spider-climb",
                        "name": "Spider Climb",
                        "level": 2
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 3
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-mountain"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "spike-growth",
                        "name": "Spike Growth",
                        "level": 2
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 3
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-mountain"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "lightning-bolt",
                        "name": "Lightning Bolt",
                        "level": 3
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 5
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-mountain"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "meld-into-stone",
                        "name": "Meld Into Stone",
                        "level": 3
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 5
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-mountain"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "stone-shape",
                        "name": "Stone Shape",
                        "level": 4
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 7
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-mountain"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "stoneskin",
                        "name": "Stoneskin",
                        "level": 4
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 7
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-mountain"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "passwall",
                        "name": "Passwall",
                        "level": 5
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 9
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-mountain"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "wall-of-stone",
                        "name": "Wall of Stone",
                        "level": 5
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 9
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-mountain"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "acid-arrow",
                        "name": "Acid Arrow",
                        "level": 2
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 3
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-swamp"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "darkness",
                        "name": "Darkness",
                        "level": 2
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 3
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-swamp"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "water-walk",
                        "name": "Water Walk",
                        "level": 3
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 5
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-swamp"
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
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-swamp"
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
                            "level": 7
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-swamp"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "locate-creature",
                        "name": "Locate Creature",
                        "level": 4
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 7
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-swamp"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "insect-plague",
                        "name": "Insect Plague",
                        "level": 5
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 9
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-swamp"
                        }
                    ]
                },
                {
                    "spell": {
                        "index": "scrying",
                        "name": "Scrying",
                        "level": 5
                    },
                    "prerequisites": [
                        {
                            "kind": "level",
                            "level": 9
                        },
                        {
                            "kind": "feature",
                            "index": "circle-of-the-land-swamp"
                        }
                    ]
                }
            ]
        }
    ]
};
