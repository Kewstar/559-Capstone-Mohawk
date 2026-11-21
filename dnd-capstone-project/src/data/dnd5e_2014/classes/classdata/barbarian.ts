import type { ClassDetails } from "../types";

export const barbarian: ClassDetails = {
    "name": "barbarian",
    "label": "Barbarian",
    "hitDie": 12,
    "savingThrows": [
        "str",
        "con"
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
    "proficiencyChoices": [
        {
            "choose": 2,
            "desc": "Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival",
            "options": [
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
                        "index": "skill-intimidation",
                        "name": "Skill: Intimidation",
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
                "index": "explorers-pack",
                "name": "Explorer's Pack",
                "quantity": 1,
                "category": "Pack"
            },
            {
                "index": "javelin",
                "name": "Javelin",
                "quantity": 4,
                "category": "Weapon"
            }
        ],
        "choices": [
            {
                "choose": 1,
                "desc": "(a) a greataxe or (b) any martial melee weapon"
            },
            {
                "choose": 1,
                "desc": "(a) two handaxes or (b) any simple weapon"
            }
        ]
    },
    "multiclassing": {
        "prerequisites": [
            {
                "ability": "str",
                "minimum": 13
            }
        ],
        "proficiencies": [
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
        "proficiencyChoices": []
    },
    "primaryAbilities": [
        "str"
    ],
    "classTable": [
        {
            "level": 1,
            "abilityScoreBonuses": 0,
            "featureIds": [
                "barbarian-unarmored-defense",
                "rage"
            ],
            "classSpecific": {
                "brutalCriticalDice": 0,
                "rageCount": 2,
                "rageDamageBonus": 2
            }
        },
        {
            "level": 2,
            "abilityScoreBonuses": 0,
            "featureIds": [
                "danger-sense",
                "reckless-attack"
            ],
            "classSpecific": {
                "brutalCriticalDice": 0,
                "rageCount": 2,
                "rageDamageBonus": 2
            }
        },
        {
            "level": 3,
            "abilityScoreBonuses": 0,
            "featureIds": [
                "primal-path"
            ],
            "classSpecific": {
                "brutalCriticalDice": 0,
                "rageCount": 3,
                "rageDamageBonus": 2
            }
        },
        {
            "level": 4,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "barbarian-ability-score-improvement-1"
            ],
            "classSpecific": {
                "brutalCriticalDice": 0,
                "rageCount": 3,
                "rageDamageBonus": 2
            }
        },
        {
            "level": 5,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "barbarian-extra-attack",
                "fast-movement"
            ],
            "classSpecific": {
                "brutalCriticalDice": 0,
                "rageCount": 3,
                "rageDamageBonus": 2
            }
        },
        {
            "level": 6,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "primal-path-improvement-1"
            ],
            "classSpecific": {
                "brutalCriticalDice": 0,
                "rageCount": 4,
                "rageDamageBonus": 2
            }
        },
        {
            "level": 7,
            "abilityScoreBonuses": 1,
            "featureIds": [
                "feral-instinct"
            ],
            "classSpecific": {
                "brutalCriticalDice": 0,
                "rageCount": 4,
                "rageDamageBonus": 2
            }
        },
        {
            "level": 8,
            "abilityScoreBonuses": 2,
            "featureIds": [
                "barbarian-ability-score-improvement-2"
            ],
            "classSpecific": {
                "brutalCriticalDice": 0,
                "rageCount": 4,
                "rageDamageBonus": 2
            }
        },
        {
            "level": 9,
            "abilityScoreBonuses": 2,
            "featureIds": [
                "brutal-critical-1-die"
            ],
            "classSpecific": {
                "brutalCriticalDice": 1,
                "rageCount": 4,
                "rageDamageBonus": 3
            }
        },
        {
            "level": 10,
            "abilityScoreBonuses": 2,
            "featureIds": [
                "primal-path-improvement-2"
            ],
            "classSpecific": {
                "brutalCriticalDice": 1,
                "rageCount": 4,
                "rageDamageBonus": 3
            }
        },
        {
            "level": 11,
            "abilityScoreBonuses": 2,
            "featureIds": [
                "relentless-rage"
            ],
            "classSpecific": {
                "brutalCriticalDice": 1,
                "rageCount": 4,
                "rageDamageBonus": 3
            }
        },
        {
            "level": 12,
            "abilityScoreBonuses": 3,
            "featureIds": [
                "barbarian-ability-score-improvement-3"
            ],
            "classSpecific": {
                "brutalCriticalDice": 1,
                "rageCount": 5,
                "rageDamageBonus": 3
            }
        },
        {
            "level": 13,
            "abilityScoreBonuses": 3,
            "featureIds": [
                "brutal-critical-2-dice"
            ],
            "classSpecific": {
                "brutalCriticalDice": 2,
                "rageCount": 5,
                "rageDamageBonus": 3
            }
        },
        {
            "level": 14,
            "abilityScoreBonuses": 3,
            "featureIds": [
                "primal-path-improvement-3"
            ],
            "classSpecific": {
                "brutalCriticalDice": 2,
                "rageCount": 5,
                "rageDamageBonus": 3
            }
        },
        {
            "level": 15,
            "abilityScoreBonuses": 3,
            "featureIds": [
                "persistent-rage"
            ],
            "classSpecific": {
                "brutalCriticalDice": 2,
                "rageCount": 5,
                "rageDamageBonus": 3
            }
        },
        {
            "level": 16,
            "abilityScoreBonuses": 4,
            "featureIds": [
                "barbarian-ability-score-improvement-4"
            ],
            "classSpecific": {
                "brutalCriticalDice": 2,
                "rageCount": 5,
                "rageDamageBonus": 4
            }
        },
        {
            "level": 17,
            "abilityScoreBonuses": 4,
            "featureIds": [
                "brutal-critical-3-dice"
            ],
            "classSpecific": {
                "brutalCriticalDice": 3,
                "rageCount": 6,
                "rageDamageBonus": 4
            }
        },
        {
            "level": 18,
            "abilityScoreBonuses": 4,
            "featureIds": [
                "indomitable-might"
            ],
            "classSpecific": {
                "brutalCriticalDice": 3,
                "rageCount": 6,
                "rageDamageBonus": 4
            }
        },
        {
            "level": 19,
            "abilityScoreBonuses": 5,
            "featureIds": [
                "barbarian-ability-score-improvement-5"
            ],
            "classSpecific": {
                "brutalCriticalDice": 3,
                "rageCount": 6,
                "rageDamageBonus": 4
            }
        },
        {
            "level": 20,
            "abilityScoreBonuses": 5,
            "featureIds": [
                "primal-champion"
            ],
            "classSpecific": {
                "brutalCriticalDice": 3,
                "rageCount": 9999,
                "rageDamageBonus": 4
            }
        }
    ],
    "features": {
        "barbarian-unarmored-defense": {
            "id": "barbarian-unarmored-defense",
            "name": "Unarmored Defense",
            "level": 1
        },
        "rage": {
            "id": "rage",
            "name": "Rage",
            "level": 1,
            "uses": {
                "max": {
                    "type": "classSpecific",
                    "key": "rageCount"
                },
                "refresh": "long"
            }
        },
        "danger-sense": {
            "id": "danger-sense",
            "name": "Danger Sense",
            "level": 2
        },
        "reckless-attack": {
            "id": "reckless-attack",
            "name": "Reckless Attack",
            "level": 2
        },
        "primal-path": {
            "id": "primal-path",
            "name": "Primal Path",
            "level": 3
        },
        "barbarian-ability-score-improvement-1": {
            "id": "barbarian-ability-score-improvement-1",
            "name": "Ability Score Improvement",
            "level": 4
        },
        "barbarian-extra-attack": {
            "id": "barbarian-extra-attack",
            "name": "Extra Attack",
            "level": 5
        },
        "fast-movement": {
            "id": "fast-movement",
            "name": "Fast Movement",
            "level": 5
        },
        "primal-path-improvement-1": {
            "id": "primal-path-improvement-1",
            "name": "Path feature",
            "level": 6
        },
        "feral-instinct": {
            "id": "feral-instinct",
            "name": "Feral Instinct",
            "level": 7
        },
        "barbarian-ability-score-improvement-2": {
            "id": "barbarian-ability-score-improvement-2",
            "name": "Ability Score Improvement",
            "level": 8
        },
        "brutal-critical-1-die": {
            "id": "brutal-critical-1-die",
            "name": "Brutal Critical (1 die)",
            "level": 9
        },
        "primal-path-improvement-2": {
            "id": "primal-path-improvement-2",
            "name": "Path feature",
            "level": 10
        },
        "relentless-rage": {
            "id": "relentless-rage",
            "name": "Relentless Rage",
            "level": 11
        },
        "barbarian-ability-score-improvement-3": {
            "id": "barbarian-ability-score-improvement-3",
            "name": "Ability Score Improvement",
            "level": 12
        },
        "brutal-critical-2-dice": {
            "id": "brutal-critical-2-dice",
            "name": "Brutal Critical (2 dice)",
            "level": 13
        },
        "primal-path-improvement-3": {
            "id": "primal-path-improvement-3",
            "name": "Path feature",
            "level": 14
        },
        "persistent-rage": {
            "id": "persistent-rage",
            "name": "Persistent Rage",
            "level": 15
        },
        "barbarian-ability-score-improvement-4": {
            "id": "barbarian-ability-score-improvement-4",
            "name": "Ability Score Improvement",
            "level": 16
        },
        "brutal-critical-3-dice": {
            "id": "brutal-critical-3-dice",
            "name": "Brutal Critical (3 dice)",
            "level": 17
        },
        "indomitable-might": {
            "id": "indomitable-might",
            "name": "Indomitable Might",
            "level": 18
        },
        "barbarian-ability-score-improvement-5": {
            "id": "barbarian-ability-score-improvement-5",
            "name": "Ability Score Improvement",
            "level": 19
        },
        "primal-champion": {
            "id": "primal-champion",
            "name": "Primal Champion",
            "level": 20
        },
        "frenzy": {
            "id": "frenzy",
            "name": "Frenzy",
            "level": 3,
            "subclassId": "berserker"
        },
        "mindless-rage": {
            "id": "mindless-rage",
            "name": "Mindless Rage",
            "level": 6,
            "subclassId": "berserker"
        },
        "intimidating-presence": {
            "id": "intimidating-presence",
            "name": "Intimidating Presence",
            "level": 10,
            "subclassId": "berserker"
        },
        "retaliation": {
            "id": "retaliation",
            "name": "Retaliation",
            "level": 14,
            "subclassId": "berserker"
        }
    },
    "featureDescriptions": {
        "barbarian-unarmored-defense": [
            "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit."
        ],
        "rage": [
            "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren't wearing heavy armor:",
            "- You have advantage on Strength checks and Strength saving throws.",
            "- When you make a melee weapon Attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level.",
            "- You have Resistance to bludgeoning, piercing, and slashing damage.",
            "If you are able to cast Spells, you can't cast them or concentrate on them while raging.",
            "Your rage lasts for 1 minute. It ends early if you are knocked Unconscious or if Your Turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on Your Turn as a Bonus Action.",
            "Once you have raged the maximum number of times for your barbarian level, you must finish a Long Rest before you can rage again. You may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6 at 17th."
        ],
        "danger-sense": [
            "At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated."
        ],
        "reckless-attack": [
            "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn."
        ],
        "primal-path": [
            "At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels."
        ],
        "barbarian-ability-score-improvement-1": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "barbarian-extra-attack": [
            "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
        ],
        "fast-movement": [
            "Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor."
        ],
        "primal-path-improvement-1": [
            "At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels."
        ],
        "feral-instinct": [
            "By 7th level, your instincts are so honed that you have advantage on initiative rolls.",
            "Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn."
        ],
        "barbarian-ability-score-improvement-2": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "brutal-critical-1-die": [
            "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level."
        ],
        "primal-path-improvement-2": [
            "At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels."
        ],
        "relentless-rage": [
            "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.",
            "Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10."
        ],
        "barbarian-ability-score-improvement-3": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "brutal-critical-2-dice": [
            "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level."
        ],
        "primal-path-improvement-3": [
            "At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels."
        ],
        "persistent-rage": [
            "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it."
        ],
        "barbarian-ability-score-improvement-4": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "brutal-critical-3-dice": [
            "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level."
        ],
        "indomitable-might": [
            "Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total."
        ],
        "barbarian-ability-score-improvement-5": [
            "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ],
        "primal-champion": [
            "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24."
        ],
        "frenzy": [
            "Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion (as described in appendix A)."
        ],
        "mindless-rage": [
            "Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage."
        ],
        "intimidating-presence": [
            "Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.",
            "If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours."
        ],
        "retaliation": [
            "Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon Attack against that creature."
        ]
    },
    "subclasses": [
        {
            "id": "berserker",
            "name": "Berserker",
            "flavor": "Primal Path",
            "description": [
                "For some barbarians, rage is a means to an end--that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being."
            ],
            "levels": [
                {
                    "level": 3,
                    "featureIds": [
                        "frenzy"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 6,
                    "featureIds": [
                        "mindless-rage"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 10,
                    "featureIds": [
                        "intimidating-presence"
                    ],
                    "subclassSpecific": {}
                },
                {
                    "level": 14,
                    "featureIds": [
                        "retaliation"
                    ],
                    "subclassSpecific": {}
                }
            ],
            "spells": []
        }
    ]
};
