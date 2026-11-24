import type { ArmorClassResult } from "../armorClassHelpers";


/** A heater-shield outline in a 100 x 120 box. */
const SHIELD_PATH = "M50 4 C65 14 80 16 92 16 V58 C92 88 72 108 50 116 C28 108 8 88 8 58 V16 C20 16 35 14 50 4 Z";


/**
 * Renders one warning as a list item.
 *
 * @param warning the warning text.
 *
 * @returns a list item.
 */
function renderWarning(warning: string) {
    return <li key={warning}>{warning}</li>;
}


type ArmorClassShieldProps = {
    armorClass: ArmorClassResult;
};

/** The character's armor class on a shield, with where it comes from and any warnings. */
export function ArmorClassShield({ armorClass }: ArmorClassShieldProps) {
    return (
        <div className="ArmorClassShield">
            <svg
                className="ShieldSvg"
                viewBox="0 0 100 120"
                role="img"
                aria-label={`Armor class ${armorClass.total}`}
            >
                <path className="ShieldBody" d={SHIELD_PATH} />
                <path className="ShieldRim" d={SHIELD_PATH} transform="translate(50 60) scale(0.86) translate(-50 -60)" />
                <text className="ShieldLabel" x="50" y="34">AC</text>
                <text className="ShieldNumber" x="50" y="66">{armorClass.total}</text>
            </svg>

            <p className="ArmorClassSource">{armorClass.source}</p>
            <p className="ArmorClassBreakdown">{armorClass.breakdown}</p>

            {armorClass.warnings.length > 0 && (
                <ul className="ArmorClassWarnings">{armorClass.warnings.map(renderWarning)}</ul>
            )}
        </div>
    );
}