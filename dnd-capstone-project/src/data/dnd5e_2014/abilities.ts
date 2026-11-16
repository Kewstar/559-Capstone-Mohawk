/** D&D5E's Six Ability Scores */
export const ABILITY_KEYS = ['str', 'dex', 'con', 'int', 'wis', 'cha']

/** Union of valid ability keys as strings. */
export type AbilityKey = (typeof ABILITY_KEYS)[number];

/** Lists the display names for each ability, tied to {@link AbilityKey}. */
export const ABILITY_LABELS: Record<AbilityKey, string> = {
    str: 'Strength',
    dex: 'Dexterity',
    con: 'Constitution',
    int: 'Intelligence',
    wis: 'Wisdom',
    cha: 'Charisma',
};


/** The base score every ability starts at before the user changes it. */
export const ABILITY_DEFAULT_VALUE = 10;

/** The lowest total score an ability can ever have. */
export const ABILITY_ABSOLUTE_MIN_VALUE = 1;

/** The default maximum total score for an ability, before anything raises it. */
export const ABILITY_DEFAULT_MAX_VALUE = 20;

/** The highest total score an ability can ever have, even if its max is raised. */
export const ABILITY_ABSOLUTE_MAX_VALUE = 30;


/**
 * Computes the calculated value of the Ability's modifier from its total score. 
 * 
 * @param abilityScore the value of the ability to compute the modifier for. 
 * 
 * @returns The calculated modifier for the ability.
 */
export function getAbilityModifier(abilityScore: number): number {
    return Math.floor( (abilityScore - 10) / 2 );
};

/**
 * Computes the final value for an ability field, after adding the base value and racial bonus. 
 * 
 * @param ability the ability object to compute the value for. 
 * 
 * @returns The calculated final value for the ability.  
 */
export function getAbilityScore( base: number, bonus: number, max: number ): number {
    // ensure final value is between the absolute min and max 
    return Math.min( max, Math.max(ABILITY_ABSOLUTE_MIN_VALUE, base + bonus) );
};