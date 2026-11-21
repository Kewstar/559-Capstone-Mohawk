import type { ClassDetails } from "../types";

export const rogue: ClassDetails = {
    "name": "rogue",
    "label": "Rogue",
    "hitDie": 8,
    "savingThrows": [
        "dex",
        "int"
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
        },
        {
            "index": "thieves-tools",
            "name": "Thieves' Tools",
            "type": "Other"
        }
    ],
    "proficiencyChoices": [
        {
            "choose": 4,
            "desc": "Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth",
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
                        "index": "skill-investigation",
                        "name": "Skill: Investigation",
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
                "quantity": 2,
                "category": "Weapon"
            },
            {
                "index": "thieves-tools",
                "name": "Thieves' Tools",
                "quantity": 1,
                "category": "Tool"
            }
        ],
        "choices": [
            {
                "choose": 1,
                "desc": "(a) a rapier or (b) a shortsword"
            },
            {
                "choose": 1,
                "desc": "(a) a shortbow and quiver of 20 arrows or (b) a shortsword"
            },
            {
                "choose": 1,
                "desc": "(a) a burglar’s pack, (b) a dungeoneer’s pack, or (c) an explorer’s pack"
            }
        ]
    },
    "multiclassing": {
        "prerequisites": [
            {
                "ability": "dex",
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
                "index": "thieves-tools",
                "name": "Thieves' Tools",
                "type": "Other"
            }
        ],
        "proficiencyChoices": [
            {
                "choose": 1,
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
                            "index": "skill-investigation",
                            "name": "Skill: Investigation",
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
                    }
                ]
            }
        ]
    },
    "primaryAbilities": [
        "dex"
    ],
    "classTable": [
        {
            "level": 1,
            "abilityScoreBonuses": 0,
            "featureIds": [
                "rogue-expertise-1",
                "sneak-attack",
                "thieves-cant"
            ],
            "classSpecific": {
                "sneakAttack": {
                    "diceCount": 1,
                    "diceValue": 6
                }
            }
        },
        {
            "level": 2,
            "abilityScoreBonuses": 0,
            "featureIds": [
                "cunning-action"
            ],
            "classSpecific": {
                "sneakAttack": {
                    "diceCount": 1,
                    "diceValue": 6
                }
            }
        },
        {
            "level": 3,
            "abilityScoreBonuses": 0,
            "featureIds": [
                "roguish-archetype"
            ],
            "classSpecific": {
                "sneakAttack": {
                    "diceCount": 2,
                    "diceValue": 6
                }
            }
        },
        {
            "level": 4,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "rogue-ability-score-improvement-1"
            ],
            "classSpecific": {
                "sneakAttack": {
                    "diceCount": 2,
                    "diceValue": 6
                }
            }
        },
        {
            "level": 5,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "uncanny-dodge"
            ],
            "classSpecific": {
                "sneakAttack": {
                    "diceCount": 3,
                    "diceValue": 6
                }
            }
        },
        {
            "level": 6,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "rogue-expertise-2"
            ],
            "classSpecific": {
                "sneakAttack": {
                    "diceCount": 3,
                    "diceValue": 6
                }
            }
        },
        {
            "level": 7,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "rogue-evasion"
            ],
            "classSpecific": {
                "sneakAttack": {
                    "diceCount": 4,
                    "diceValue": 6
                }
            }
        },
        {
            "level": 8,
            "abilityScoreBonuses": 2,
            "featureIds": [
                "rogue-ability-score-improvement-2"
            ],
            "classSpecific": {
                "sneakAttack": {
                    "diceCount": 4,
                    "diceValue": 6
                }
            }
        },
        {
            "level": 9,
            "abilityScoreBonuses": 2,
            "featureIds": [
                "roguish-archetype-improvement-1"
            ],
            "classSpecific": {
                "sneakAttack": {
                    "diceCount": 5,
                    "diceValue": 6
                }
            }
        },
        {
            "level": 10,
            "abilityScoreBonuses": 3,
            "featureIds": [
                "rogue-ability-score-improvement-3"
            ],
            "classSpecific": {
                "sneakAttack": {
                    "diceCount": 5,
                    "diceValue": 6
                }
            }
        },
        {
            "level": 11,
            "abilityScoreBonuses": 2,
            "featureIds": [
                "reliable-talent"
            ],
            "classSpecific": {
                "sneakAttack": {
                    "diceCount": 6,
                    "diceValue": 6
                }
            }
        },
        {
            "level": 12,
            "abilityScoreBonuses": 4,
            "featureIds": [
                "rogue-ability-score-improvement-4"
            ],
            "classSpecific": {
                "sneakAttack": {
                    "diceCount": 6,
                    "diceValue": 6
                }
            }
        },
        {
            "level": 13,
            "abilityScoreBonuses": 3,
            "featureIds": [
                "roguish-archetype-improvement-2"
            ],
            "classSpecific": {
                "sneakAttack": {
                    "diceCount": 7,
                    "diceValue": 6
                }
            }
        },
        {
            "level": 14,
            "abilityScoreBonuses": 3,
            "featureIds": [
                "blindsense"
            ],
            "classSpecific": {
                "sneakAttack": {
                    "diceCount": 7,
                    "diceValue": 6
                }
            }
        },
        {
            "level": 15,
            "abilityScoreBonuses": 3,
            "featureIds": [
                "slippery-mind"
            ],
            "classSpecific": {
                "sneakAttack": {
                    "diceCount": 8,
                    "diceValue": 6
                }
            }
        },
        {
            "level": 16,
            "abilityScoreBonuses": 5,
            "featureIds": [
                "rogue-ability-score-improvement-5"
            ],
            "classSpecific": {
                "sneakAttack": {
                    "diceCount": 8,
                    "diceValue": 6
                }
            }
        },
        {
            "level": 17,
            "abilityScoreBonuses": 4,
            "featureIds": [
                "roguish-archetype-improvement-3"
            ],
            "classSpecific": {
                "sneakAttack": {
                    "diceCount": 9,
                    "diceValue": 6
                }
            }
        },
        {
            "level": 18,
            "abilityScoreBonuses": 4,
            "featureIds": [
                "elusive"
            ],
            "classSpecific": {
                "sneakAttack": {
                    "diceCount": 9,
                    "diceValue": 6
                }
            }
        },
        {
            "level": 19,
            "abilityScoreBonuses": 6,
            "featureIds": [
                "rogue-ability-score-improvement-6"
            ],
            "classSpecific": {
                "sneakAttack": {
                    "diceCount": 10,
                    "diceValue": 6
                }
            }
        },
        {
            "level": 20,
            "abilityScoreBonuses": 5,
            "featureIds": [
                "stroke-of-luck"
            ],
            "classSpecific": {
                "sneakAttack": {
                    "diceCount": 10,
                    "diceValue": 6
                }
            }
        }
    ],
    "features": {
        "rogue-expertise-1": {
            "id": "rogue-expertise-1",
            "name": "Expertise",
            "level": 1
        },
        "sneak-attack": {
            "id": "sneak-attack",
            "name": "Sneak Attack",
            "level": 1
        },
        "thieves-cant": {
            "id": "thieves-cant",
            "name": "Thieves' Cant",
            "level": 1
        },
        "cunning-action": {
            "id": "cunning-action",
            "name": "Cunning Action",
            "level": 2
        },
        "roguish-archetype": {
            "id": "roguish-archetype",
            "name": "Roguish Archetype",
            "level": 3
        },
        "rogue-ability-score-improvement-1": {
            "id": "rogue-ability-score-improvement-1",
            "name": "Ability Score Improvement",
            "level": 4
        },
        "uncanny-dodge": {
            "id": "uncanny-dodge",
            "name": "Uncanny Dodge",
            "level": 5
        },
        "rogue-expertise-2": {
            "id": "rogue-expertise-2",
            "name": "Expertise",
            "level": 6
        },
        "rogue-evasion": {
            "id": "rogue-evasion",
            "name": "Evasion",
            "level": 7
        },
        "rogue-ability-score-improvement-2": {
            "id": "rogue-ability-score-improvement-2",
            "name": "Ability Score Improvement",
            "level": 8
        },
        "roguish-archetype-improvement-1": {
            "id": "roguish-archetype-improvement-1",
            "name": "Roguish Archetype feature",
            "level": 9
        },
        "rogue-ability-score-improvement-3": {
            "id": "rogue-ability-score-improvement-3",
            "name": "Ability Score Improvement",
            "level": 10
        },
        "reliable-talent": {
            "id": "reliable-talent",
            "name": "Reliable Talent",
            "level": 11
        },
        "rogue-ability-score-improvement-4": {
            "id": "rogue-ability-score-improvement-4",
            "name": "Ability Score Improvement",
            "level": 12
        },
        "roguish-archetype-improvement-2": {
            "id": "roguish-archetype-improvement-2",
            "name": "Roguish Archetype feature",
            "level": 13
        },
        "blindsense": {
            "id": "blindsense",
            "name": "Blindsense",
            "level": 14
        },
        "slippery-mind": {
            "id": "slippery-mind",
            "name": "Slippery Mind",
            "level": 15
        },
        "rogue-ability-score-improvement-5": {
            "id": "rogue-ability-score-improvement-5",
            "name": "Ability Score Improvement",
            "level": 16
        },
        "roguish-archetype-improvement-3": {
            "id": "roguish-archetype-improvement-3",
            "name": "Roguish Archetype feature",
            "level": 17
        },
        "elusive": {
            "id": "elusive",
            "name": "Elusive",
            "level": 18
        },
        "rogue-ability-score-improvement-6": {
            "id": "rogue-ability-score-improvement-6",
            "name": "Ability Score Improvement",
            "level": 19
        },
        "stroke-of-luck": {
            "id": "stroke-of-luck",
            "name": "Stroke of Luck",
            "level": 20
        },
        "fast-hands": {
            "id": "fast-hands",
            "name": "Fast Hands",
            "level": 3,
            "subclassId": "thief"
        },
        "second-story-work": {
            "id": "second-story-work",
            "name": "Second-Story Work",
            "level": 3,
            "subclassId": "thief"
        },
        "supreme-sneak": {
            "id": "supreme-sneak",
            "name": "Supreme Sneak",
            "level": 9,
            "subclassId": "thief"
        },
        "use-magic-device": {
            "id": "use-magic-device",
            "name": "Use Magic Device",
            "level": 13,
            "subclassId": "thief"
        },
        "thiefs-reflexes": {
            "id": "thiefs-reflexes",
            "name": "Thief's Reflexes",
            "level": 17,
            "subclassId": "thief"
        }
    },
    "featureDescriptions": {
        "rogue-expertise-1": [
            "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.",
            "At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit"
        ],
        "sneak-attack": [
            "Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.",
            "You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.",
            "The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table."
        ],
        "thieves-cant": [
            "During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.",
            "In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run."
        ],
        "cunning-action": [
            "Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action."
        ],
        "roguish-archetype": [
            "At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities, such as Thief. Additional archetypes are available in the original source material. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level."
        ],
        "rogue-ability-score-improvement-1": [
            "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "uncanny-dodge": [
            "Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you."
        ],
        "rogue-expertise-2": [
            "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.",
            "At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit"
        ],
        "rogue-evasion": [
            "Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or an ice storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
        ],
        "rogue-ability-score-improvement-2": [
            "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "roguish-archetype-improvement-1": [
            "At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities, such as Thief. Additional archetypes are available in the original source material. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level."
        ],
        "rogue-ability-score-improvement-3": [
            "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "reliable-talent": [
            "By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10."
        ],
        "rogue-ability-score-improvement-4": [
            "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "roguish-archetype-improvement-2": [
            "At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities, such as Thief. Additional archetypes are available in the original source material. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level."
        ],
        "blindsense": [
            "Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you."
        ],
        "slippery-mind": [
            "By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws."
        ],
        "rogue-ability-score-improvement-5": [
            "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "roguish-archetype-improvement-3": [
            "At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities, such as Thief. Additional archetypes are available in the original source material. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level."
        ],
        "elusive": [
            "Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated."
        ],
        "rogue-ability-score-improvement-6": [
            "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "stroke-of-luck": [
            "At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.",
            "Once you use this feature, you can't use it again until you finish a short or long rest."
        ],
        "fast-hands": [
            "Starting at 3rd level, you can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action."
        ],
        "second-story-work": [
            "When you choose this archetype at 3rd level, you gain the ability to climb faster than normal; climbing no longer costs you extra movement.",
            "In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier."
        ],
        "supreme-sneak": [
            "Starting at 9th level, you have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn."
        ],
        "use-magic-device": [
            "By 13th level, you have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items."
        ],
        "thiefs-reflexes": [
            "When you reach 17th level, you have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are surprised."
        ]
    },
    "subclasses": [
        {
            "id": "thief",
            "name": "Thief",
            "flavor": "Roguish Archetype",
            "description": [
                "You hone your skills in the larcenous arts. Burglars, bandits, cutpurses, and other criminals typically follow this archetype, but so do rogues who prefer to think of themselves as professional treasure seekers, explorers, delvers, and investigators. In addition to improving your agility and stealth, you learn skills useful for delving into ancient ruins, reading unfamiliar languages, and using magic items you normally couldn't employ."
            ],
            "levels": [
                {
                    "level": 3,
                    "featureIds": [
                        "fast-hands",
                        "second-story-work"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 9,
                    "featureIds": [
                        "supreme-sneak"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 13,
                    "featureIds": [
                        "use-magic-device"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 17,
                    "featureIds": [
                        "thiefs-reflexes"
                    ],
                    "subclassSpecific": {}
                }
            ],
            "spells": []
        }
    ]
};
