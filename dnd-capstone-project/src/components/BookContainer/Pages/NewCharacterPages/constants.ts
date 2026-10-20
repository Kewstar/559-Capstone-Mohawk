// constants.ts
import type { AbilityKey } from "../../types";

// Level & Class Constants 
export const LEVEL_MIN = 1;
export const LEVEL_MAX = 20;

// Ability Constants 
export const ABILITY_KEYS: AbilityKey[] = [
    "str", "dex", "con", "int", "wis", "cha"
];
export const ABILITY_DEFAULT_VALUE = 10;
export const ABILITY_ABSOLUTE_MIN_VALUE = 1;
export const ABILITY_DEFAULT_MAX_VALUE = 20;
export const ABILITY_ABSOLUTE_MAX_VALUE = 30;
// export const ABILITY_VALUE_MAX = 30;

export const ABILITY_INPUT_MIN = 1;
export const ABILITY_INPUT_MAX = 18;