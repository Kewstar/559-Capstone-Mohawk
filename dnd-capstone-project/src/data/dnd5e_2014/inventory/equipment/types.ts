import type { CurrencyName } from "../currency";

export type ArmorCategory = "Light" | "Medium" | "Heavy" | "Shield";
export type WeaponCategory = "Simple" | "Martial";
export type WeaponRange = "Melee" | "Ranged";
export type ToolCategory = "artisans-tools" | "gaming-sets" | "musical-instruments" | "other-tools";

export interface ItemCost {
    quantity: number;
    unit: CurrencyName;
}

/** Fields shared by every item. */
export interface ItemBase {
    index: string;
    name: string;
    description: string[];
    /** Every category the item belongs to, e.g. "martial-weapons" and "melee-weapons". */
    categories: string[];
}

/** Fields shared by mundane items. Magic items will have a rarity and no cost, so these stay off ItemBase. */
export interface MundaneBase extends ItemBase {
    cost: ItemCost;
    /** In pounds; 0 when the API gives none. */
    weight: number;
}

export interface Damage {
    dice: string;
    type?: string;
}

export interface ArmorItem extends MundaneBase {
    type: "armor";
    armorCategory: ArmorCategory;
    baseAc: number;
    dexBonus: boolean;
    /** Cap on the Dexterity modifier (medium armor); absent when there is no cap. */
    maxDexBonus?: number;
    /** Minimum Strength score; absent when there is none. */
    strMinimum?: number;
    stealthDisadvantage: boolean;
}

export interface WeaponItem extends MundaneBase {
    type: "weapon";
    weaponCategory: WeaponCategory;
    weaponRange: WeaponRange;
    /** Absent for the net. */
    damage?: Damage;
    /** Damage when wielded in two hands (versatile weapons). */
    twoHandedDamage?: Damage;
    /** Property indexes, e.g. "finesse", "versatile". */
    properties: string[];
    range?: { normal: number; long?: number };
    throwRange?: { normal: number; long: number };
}

export interface AmmunitionItem extends MundaneBase {
    type: "ammunition";
    /** How many pieces the listed cost and weight cover. */
    bundleSize: number;
}

export interface PackItem extends MundaneBase {
    type: "pack";
    contents: { itemIndex: string; quantity: number }[];
}

export interface ToolItem extends MundaneBase {
    type: "tool";
    toolCategory: ToolCategory;
}


export interface GearItem extends MundaneBase {
    type: "gear";
    /** e.g. "holy-symbols", "kits", "arcane-foci"; absent for plain gear. */
    gearCategory?: string;
}

export type ItemDetails = ArmorItem | WeaponItem | AmmunitionItem | PackItem | ToolItem | GearItem;