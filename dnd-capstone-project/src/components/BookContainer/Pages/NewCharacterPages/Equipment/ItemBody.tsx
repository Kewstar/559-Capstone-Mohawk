// ItemBody.tsx
import { formatCost } from "@/data/dnd5e_2014/inventory/currency";
import type { ItemDetails } from "@/data/dnd5e_2014/inventory/equipment";
import { renderParagraph } from "../../HTMLRenderHelpers";
import type { ArmorItem, Damage, WeaponItem } from "@/data/dnd5e_2014/inventory/equipment";



/** The details of one item, depending on what kind it is. */
export function ItemBody({ itemDetails: itemDetails }: { itemDetails: ItemDetails }) {
    return (
        <div className="ItemBody">
            <p>{formatCost(itemDetails.cost)}, {itemDetails.weight} lb</p>
            {itemDetails.type === "weapon" && <WeaponStats item={itemDetails} />}
            {itemDetails.type === "armor" && <ArmorStats item={itemDetails} />}
            {itemDetails.type === "ammunition" && <p>Sold in bundles of {itemDetails.bundleSize}.</p>}
            {itemDetails.description.map(renderParagraph)}
        </div>
    );
}


/**
 * Turns an index into readable text, e.g. "two-handed" becomes "Two handed".
 *
 * @param index the index, with words joined by hyphens.
 *
 * @returns the text with spaces and a capital first letter.
 */
function formatIndex(index: string): string {
    const spaced = index.replace(/-/g, " ");

    return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}


/**
 * Formats a damage entry, e.g. "1d8 slashing".
 *
 * @param damage the damage.
 *
 * @returns the dice, followed by the damage type when there is one.
 */
function formatDamage(damage: Damage): string {
    return damage.type ? `${damage.dice} ${damage.type}` : damage.dice;
}


/**
 * Formats a range in feet, e.g. "80/320 ft.".
 *
 * @param range the normal range, and the long range when the weapon has one.
 *
 * @returns the text.
 */
function formatRange(range: { normal: number; long?: number }): string {
    return range.long !== undefined ? `${range.normal}/${range.long} ft.` : `${range.normal} ft.`;
}


/**
 * Renders one weapon property as a list item.
 *
 * @param property the property's index, e.g. "finesse".
 *
 * @returns a list item with readable text.
 */
function renderProperty(property: string) {
    return <li key={property}>{formatIndex(property)}</li>;
}


type WeaponStatsProps = {
    item: WeaponItem;
};

/** A weapon's category, damage, range and properties. */
export function WeaponStats({ item }: WeaponStatsProps) {
    return (
        <div className="ItemStats">
            <p>
                <strong>{item.weaponCategory} {item.weaponRange.toLowerCase()} weapon</strong>
            </p>

            {item.damage
                ? <p><strong>Damage:</strong> {formatDamage(item.damage)}</p>
                : <p><strong>Damage:</strong> none</p>}

            {item.twoHandedDamage && (
                <p><strong>Two-handed:</strong> {formatDamage(item.twoHandedDamage)}</p>
            )}

            {item.range && <p><strong>Range:</strong> {formatRange(item.range)}</p>}
            {item.throwRange && <p><strong>Thrown:</strong> {formatRange(item.throwRange)}</p>}

            {item.properties.length > 0 && (
                <p><strong>Properties:</strong></p>
            )}
            {item.properties.length > 0 && <ul>{item.properties.map(renderProperty)}</ul>}
        </div>
    );
}


/**
 * Describes how armor sets a character's armor class.
 *
 * @param item the armor.
 *
 * @returns "+2" for a shield, otherwise e.g. "12 + Dex", "14 + Dex (max 2)" or "18".
 */
function formatArmorClass(item: ArmorItem): string {
    if (item.armorCategory === "Shield") 
        return `+${item.baseAc}`;

    if (!item.dexBonus) 
        return `${item.baseAc}`;

    if (item.maxDexBonus !== undefined)
        return `${item.baseAc} + Dex (max ${item.maxDexBonus})`
    else 
        return `${item.baseAc} + Dex`;
}


type ArmorStatsProps = {
    item: ArmorItem;
};

/** Armor's category, armor class and its penalties. */
export function ArmorStats({ item }: ArmorStatsProps) {
    return (
        <div className="ItemStats">
            <p><strong>{item.armorCategory === "Shield" ? "Shield" : `${item.armorCategory} armor`}</strong></p>
            <p><strong>Armor class:</strong> {formatArmorClass(item)}</p>

            {item.strMinimum !== undefined && (
                <p><strong>Strength required:</strong> {item.strMinimum}</p>
            )}

            {item.stealthDisadvantage && <p><strong>Stealth:</strong> disadvantage</p>}
        </div>
    );
}