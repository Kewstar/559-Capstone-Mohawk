// armorClassHelpers.ts
import type { AbilityKey } from "@/data/dnd5e_2014/abilities";
import type { ClassName } from "@/data/dnd5e_2014/classes";
import type { ArmorItem } from "@/data/dnd5e_2014/inventory/equipment";
import type { CharacterClass } from "@/components/BookContainer/types";
import type { EquippedItem } from "./Equipment/equipmentHelpers";
import { isProficientWith } from "./proficiencyHelpers";
import { formatSigned } from "../HTMLRenderHelpers";


/** One way of working out armor class: a base number plus ability modifiers. */
export interface AcFormula {
    label: string;
    base: number;
    /** Modifiers added to the base; `max` caps the modifier (medium armor caps Dexterity at 2). */
    mods: { ability: AbilityKey; max?: number }[];
    /** Whether a shield's bonus can be added to this formula. */
    allowsShield: boolean;
}


export interface ArmorClassResult {
    total: number;
    /** What produced the base, e.g. "Studded Leather Armor" or "Unarmored Defense". */
    source: string;
    /** The sum in text, e.g. "Base 12, DEX +2, Shield +2". */
    breakdown: string;
    warnings: string[];
}


type AbilityScores = Record<AbilityKey, { value: number; mod: number }>;


/** A formula, with the armor that produced it. Null when no armor is worn. */
interface Candidate {
    formula: AcFormula;
    armor: ArmorItem | null;
}


interface ScoredCandidate {
    candidate: Candidate;
    total: number;
    parts: string[];
    shieldUsed: boolean;
}

const UNARMORED: AcFormula = {
    label: "Unarmored",
    base: 10,
    mods: [{ ability: "dex" }],
    allowsShield: true,
};


/** Class features that grant "unarmored defense", give alternatives to wearing armor. */
const CLASS_UNARMORED: Partial< Record<ClassName, AcFormula> > = {
    barbarian: {
        label: "Unarmored Defense",
        base: 10,
        mods: [ { ability: "dex" }, { ability: "con" } ],
        allowsShield: true,
    },
    monk: {
        label: "Unarmored Defense",
        base: 10,
        mods: [ { ability: "dex" }, { ability: "wis" } ],
        allowsShield: false,
    },
};


/**
 * Splits the equipped items into body armors and shields.
 *
 * @param equipped the equipped stacks with their items.
 *
 * @returns the armors worn on the body, and the shields.
 */
function splitArmor(equipped: EquippedItem[]): { bodies: ArmorItem[]; shields: ArmorItem[] } {
    const bodies: ArmorItem[] = [];
    const shields: ArmorItem[] = [];

    for (const { itemDetails } of equipped) {
        if (itemDetails.type !== "armor") 
            continue;

        if (itemDetails.armorCategory === "Shield") 
            shields.push(itemDetails);
        else 
            bodies.push(itemDetails);
    }

    return { bodies, shields };
}


/**
 * Picks the shield with the highest bonus.
 *
 * @param shields the equipped shields.
 *
 * @returns the best shield, or null if none is equipped.
 */
function getBestShield(shields: ArmorItem[]): ArmorItem | null {
    let bestShield: ArmorItem | null = null;

    for (const shield of shields) {
        if ( (bestShield === null) || (shield.baseAc > bestShield.baseAc) ) 
            bestShield = shield;
    }

    return bestShield;
}


/**
 * Builds the formula an armor sets.
 *
 * @param armor the armor.
 *
 * @returns its base, with Dexterity (capped for medium armor) when the armor allows it.
 */
function toArmorCandidate(armor: ArmorItem): Candidate {
    const dexMod = armor.maxDexBonus !== undefined
        ? { ability: "dex" as const, max: armor.maxDexBonus }
        : { ability: "dex" as const };

    return {
        formula: { 
            label: armor.name, 
            base: armor.baseAc, 
            mods: armor.dexBonus ? [dexMod] : [], 
            allowsShield: true },
        armor,
    };
}


/**
 * Lists the formulas available when no armor is worn: plain, plus any class alternatives.
 *
 * @param classes the character's class entries.
 *
 * @returns the candidates, with the plain formula first.
 */
function getUnarmoredCandidates(classes: CharacterClass[]): Candidate[] {
    const candidates: Candidate[] = [{ formula: UNARMORED, armor: null }];

    for (const characterClass of classes) {
        const formula = CLASS_UNARMORED[characterClass.name];

        if (formula) 
            candidates.push({ formula, armor: null });
    }

    return candidates;
}

/**
 * Works out the armor class one formula gives.
 *
 * @param candidate the formula and its armor.
 * @param scores the character's ability scores and modifiers.
 * @param shield the best equipped shield, or null.
 *
 * @returns the total, a text breakdown, and whether the shield counted.
 */
function scoreCandidate(candidate: Candidate, scores: AbilityScores, shield: ArmorItem | null): ScoredCandidate {
    const { formula } = candidate;
    const parts = [`Base ${formula.base}`];
    let total = formula.base;

    for (const mod of formula.mods) {
        const raw = scores[mod.ability].mod;
        const applied = mod.max === undefined ? raw : Math.min(raw, mod.max);

        total += applied;
        parts.push(`${mod.ability.toUpperCase()} ${formatSigned(applied)}`);
    }

    const shieldUsed = shield !== null && formula.allowsShield;

    if (shield !== null && formula.allowsShield) {
        total += shield.baseAc;
        parts.push(`Shield ${formatSigned(shield.baseAc)}`);
    }

    return { candidate, total, parts, shieldUsed };
}


/**
 * Builds the warnings for the armor that counted.
 *
 * @param best the formula that won.
 * @param shield the best equipped shield, or null.
 * @param scores the character's ability scores.
 * @param proficiencies the character's proficiency indexes.
 * @param armorCount how many body armors are equipped.
 * @param shieldCount how many shields are equipped.
 *
 * @returns plain-text warnings; empty when nothing is wrong.
 */
function getACWarnings(
    best: ScoredCandidate, 
    shield: ArmorItem | null, 
    scores: AbilityScores,
    proficiencies: Set<string>, 
    armorCount: number, 
    shieldCount: number,
): string[] {
    const warnings: string[] = [];
    const armor = best.candidate.armor;

    if (armorCount > 1) 
        warnings.push("More than one armor is equipped; only the best one counts.");
    if (shieldCount > 1) 
        warnings.push("More than one shield is equipped; only one counts.");

    if (armor !== null) {
        if ( !isProficientWith(armor, proficiencies) ) 
            warnings.push(`Not proficient with ${armor.name}: disadvantage on Strength and Dexterity rolls, and no spellcasting.`);
        
        if ( (armor.strMinimum !== undefined) && (scores.str.value < armor.strMinimum) ) 
            warnings.push(`${armor.name} needs Strength ${armor.strMinimum}: speed is reduced by 10 ft.`);
        
        if (armor.stealthDisadvantage) 
            warnings.push(`${armor.name} gives disadvantage on Stealth checks.`);
    
    }

    if ( (best.shieldUsed) && (shield !== null) && (!isProficientWith(shield, proficiencies)) ) 
        warnings.push("Not proficient with shields: disadvantage on Strength and Dexterity rolls, and no spellcasting.");

    return warnings;
}


/**
 * Determines the character's armor class from what they have equipped.
 *
 * @remarks With armor worn, each armor is a candidate formula. 
 *          Without armor, plain unarmored and any class alternatives are. 
 *          The highest total wins, so equipping two armors is tolerated with a warning, and the best one counts. 
 *          A shield adds its bonus to any formula that allows it. 
 *          
 *          Not covered yet: 
 *              spells like Mage Armor, subclass formulas, 
 *              the Defense fighting style, & magic bonuses.
 *
 * @param equipped Array of the character's equipped items.
 * @param scores The character's ability scores and modifiers.
 * @param classes Array of the classes the character has taken levels in. 
 * @param proficiencies the character's proficiency indexes.
 *
 * @returns The calculated armor class, where it came from, and any warnings.
 */
export function calculateArmorClass(
    equipped: EquippedItem[], scores: AbilityScores, classes: CharacterClass[], proficiencies: Set<string>,
): ArmorClassResult {
    const { bodies, shields } = splitArmor(equipped);
    const shield = getBestShield(shields);
    const candidates = bodies.length > 0 ? bodies.map(toArmorCandidate) : getUnarmoredCandidates(classes);

    function score(candidate: Candidate): ScoredCandidate {
        return scoreCandidate(candidate, scores, shield);
    }

    const [first, ...others] = candidates.map(score);

    if (!first) 
        throw new Error("No armor class formula applies");

    let best = first;

    for (const scored of others) {
        if (scored.total > best.total) 
            best = scored;
    }

    return {
        total: best.total,
        source: best.candidate.formula.label,
        breakdown: best.parts.join(", "),
        warnings: getACWarnings(best, shield, scores, proficiencies, bodies.length, shields.length),
    };
}