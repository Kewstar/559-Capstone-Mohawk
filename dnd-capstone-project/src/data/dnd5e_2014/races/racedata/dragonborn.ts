import type { RaceDetails } from "../types";

export const dragonborn: RaceDetails = {
    "name": "dragonborn",
    "label": "Dragonborn",
    "speed": 30,
    "size": "Medium",
    "sizeDescription": "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
    "age": "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
    "alignment": "Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.",
    "languageDescription": "You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.",
    "darkvision": 0,
    "abilityBonuses": [
        {
            "ability": "str",
            "bonus": 2
        },
        {
            "ability": "cha",
            "bonus": 1
        }
    ],
    "languages": [
        "common",
        "draconic"
    ],
    "traitIds": [
        "breath-weapon",
        "damage-resistance",
        "draconic-ancestry"
    ],
    "subraces": [],
    "traits": {
        "breath-weapon": {
            "id": "breath-weapon",
            "name": "Breath Weapon",
            "proficiencies": [],
            "uses": {
                "max": {
                    "type": "fixed",
                    "value": 1
                },
                "refresh": "shortOrLong"
            }
        },
        "damage-resistance": {
            "id": "damage-resistance",
            "name": "Damage Resistance",
            "proficiencies": []
        },
        "draconic-ancestry": {
            "id": "draconic-ancestry",
            "name": "Draconic Ancestry",
            "proficiencies": [],
            "subtraitChoice": {
                "choose": 1,
                "optionIds": [
                    "draconic-ancestry-black",
                    "draconic-ancestry-blue",
                    "draconic-ancestry-brass",
                    "draconic-ancestry-bronze",
                    "draconic-ancestry-copper",
                    "draconic-ancestry-gold",
                    "draconic-ancestry-green",
                    "draconic-ancestry-red",
                    "draconic-ancestry-silver",
                    "draconic-ancestry-white"
                ]
            }
        },
        "draconic-ancestry-black": {
            "id": "draconic-ancestry-black",
            "name": "Draconic Ancestry (Black)",
            "parentId": "draconic-ancestry",
            "proficiencies": [],
            "damageType": "acid",
            "breathWeapon": {
                "damageType": "acid",
                "saveAbility": "dex",
                "saveSuccess": "half"
            }
        },
        "draconic-ancestry-blue": {
            "id": "draconic-ancestry-blue",
            "name": "Draconic Ancestry (Blue)",
            "parentId": "draconic-ancestry",
            "proficiencies": [],
            "damageType": "lightning",
            "breathWeapon": {
                "damageType": "lightning",
                "saveAbility": "dex",
                "saveSuccess": "half"
            }
        },
        "draconic-ancestry-brass": {
            "id": "draconic-ancestry-brass",
            "name": "Draconic Ancestry (Brass)",
            "parentId": "draconic-ancestry",
            "proficiencies": [],
            "damageType": "fire",
            "breathWeapon": {
                "damageType": "fire",
                "saveAbility": "dex",
                "saveSuccess": "half"
            }
        },
        "draconic-ancestry-bronze": {
            "id": "draconic-ancestry-bronze",
            "name": "Draconic Ancestry (Bronze)",
            "parentId": "draconic-ancestry",
            "proficiencies": [],
            "damageType": "lightning",
            "breathWeapon": {
                "damageType": "lightning",
                "saveAbility": "dex",
                "saveSuccess": "half"
            }
        },
        "draconic-ancestry-copper": {
            "id": "draconic-ancestry-copper",
            "name": "Draconic Ancestry (Copper)",
            "parentId": "draconic-ancestry",
            "proficiencies": [],
            "damageType": "acid",
            "breathWeapon": {
                "damageType": "acid",
                "saveAbility": "dex",
                "saveSuccess": "half"
            }
        },
        "draconic-ancestry-gold": {
            "id": "draconic-ancestry-gold",
            "name": "Draconic Ancestry (Gold)",
            "parentId": "draconic-ancestry",
            "proficiencies": [],
            "damageType": "fire",
            "breathWeapon": {
                "damageType": "fire",
                "saveAbility": "dex",
                "saveSuccess": "half"
            }
        },
        "draconic-ancestry-green": {
            "id": "draconic-ancestry-green",
            "name": "Draconic Ancestry (Green)",
            "parentId": "draconic-ancestry",
            "proficiencies": [],
            "damageType": "poison",
            "breathWeapon": {
                "damageType": "poison",
                "saveAbility": "con",
                "saveSuccess": "half"
            }
        },
        "draconic-ancestry-red": {
            "id": "draconic-ancestry-red",
            "name": "Draconic Ancestry (Red)",
            "parentId": "draconic-ancestry",
            "proficiencies": [],
            "damageType": "fire",
            "breathWeapon": {
                "damageType": "fire",
                "saveAbility": "dex",
                "saveSuccess": "half"
            }
        },
        "draconic-ancestry-silver": {
            "id": "draconic-ancestry-silver",
            "name": "Draconic Ancestry (Silver)",
            "parentId": "draconic-ancestry",
            "proficiencies": [],
            "damageType": "cold",
            "breathWeapon": {
                "damageType": "cold",
                "saveAbility": "con",
                "saveSuccess": "half"
            }
        },
        "draconic-ancestry-white": {
            "id": "draconic-ancestry-white",
            "name": "Draconic Ancestry (White)",
            "parentId": "draconic-ancestry",
            "proficiencies": [],
            "damageType": "cold",
            "breathWeapon": {
                "damageType": "cold",
                "saveAbility": "con",
                "saveSuccess": "half"
            }
        }
    },
    "traitDescriptions": {
        "breath-weapon": [
            "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.",
            "When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level.",
            "After you use your breath weapon, you cannot use it again until you complete a short or long rest."
        ],
        "damage-resistance": [
            "You have resistance to the damage type associated with your draconic ancestry."
        ],
        "draconic-ancestry": [
            "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table."
        ],
        "draconic-ancestry-black": [
            "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table."
        ],
        "draconic-ancestry-blue": [
            "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table."
        ],
        "draconic-ancestry-brass": [
            "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table."
        ],
        "draconic-ancestry-bronze": [
            "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table."
        ],
        "draconic-ancestry-copper": [
            "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table."
        ],
        "draconic-ancestry-gold": [
            "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table."
        ],
        "draconic-ancestry-green": [
            "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table."
        ],
        "draconic-ancestry-red": [
            "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table."
        ],
        "draconic-ancestry-silver": [
            "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table."
        ],
        "draconic-ancestry-white": [
            "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table."
        ]
    }
};
