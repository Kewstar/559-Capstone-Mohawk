// SpellCard.tsx
import { ABILITY_LABELS } from "@/data/dnd5e_2014/abilities";
import { formatSpellSchool, formatSpellLevel } from "@/data/dnd5e_2014/spells";
import type { LevelValue, SpellDamage, SpellDetails } from "@/data/dnd5e_2014/spells";
import { renderParagraph } from "../../HTMLRenderHelpers";



/**
 * Formats one spell's scaling, joining its level and value. 
 * 
 * @param levelValue The level and value.
 * 
 * @returns properly scaled text. Ex. "5: 2d10" 
 */
function formatLevelValue(levelValue: LevelValue): string {
    return `${levelValue.level}: ${levelValue.value}`;
}



/**
 * Renders one SpellDamage with its scaling. 
 * 
 * @param spellDamage The damage to render. 
 * @param index Its position. 
 * 
 * @returns A <p>, or null if there is no scaling data. 
 */
function renderSpellDamage(spellDamage: SpellDamage, index: number) {
    const bySlot = spellDamage.atSlotLevel.length > 0;
    const scale = bySlot ? spellDamage.atSlotLevel : spellDamage.atCharacterLevel;

    if (scale.length === 0)
        return null;

    return  <p key={index}>
                <strong>Damage{spellDamage.damageType ? ` (${spellDamage.damageType})` : ""}</strong>
                {bySlot ? " by slot level" : " by character level"}: {scale.map(formatLevelValue).join(", ")}
            </p>;
}


/**
 * Lists a spell's components, with the materials if it has one. 
 * 
 * @param spellDetails The SpellDetails data of the spell. 
 * 
 * @returns A string of of the spell's components. Ex. "V, S, M (a bit of fleece)".
 */
function describeSpellComponents(spellDetails: SpellDetails): string {
    const components = spellDetails.components.join(", ");

    if (spellDetails.material) 
        return `${components} (${spellDetails.material})` 
    else 
        return components;
}


type SpellCardProps = {
    spellDetails: SpellDetails
}

/**
 * Renders the details of the spell: casting stats, save, damage, description, and at higher levels text.
 * @returns <div> containing the casting time, range, components, duration, save, damage, description, and upscasting effects.
 */
export function SpellBody({ spellDetails }: SpellCardProps) {
    return (
        <div className="SpellBody">
            <p><strong>Casting time:</strong> {spellDetails.castingTime}{spellDetails.ritual  && " (ritual)"}</p>
            <p><strong>Range:</strong> {spellDetails.range}</p>
            <p><strong>Components:</strong> {describeSpellComponents(spellDetails)}</p>
            <p><strong>Duration:</strong> {spellDetails.concentration && "Concentration, "}{spellDetails.duration}</p>
        
            {spellDetails.save && (
                <p><strong>Save:</strong> {ABILITY_LABELS[spellDetails.save.ability]} (on a success: {spellDetails.save.success})</p>
            )}

            {spellDetails.damage.map(renderSpellDamage)}
            {spellDetails.description.map(renderParagraph)}

            {spellDetails.higherLevel && <div>
                <p><strong><em>At Higher Levels.</em></strong></p> 
                {spellDetails.higherLevel.map(renderParagraph)}   
            </div>}
        </div>
    );
}


/**
 * A collapsable spell with its name, level, and school as the heading. Its details are beneath.
 * @returns a <details> <summary> HTML element. `<SpellBody>` component as its body text. 
 */
export function SpellCard({ spellDetails }: SpellCardProps) {
    return (
        <details className="SpellCard">
            <summary>
                {spellDetails.name} <em>({formatSpellLevel(spellDetails.level)}, {formatSpellSchool(spellDetails.school)})</em>
            </summary>
            <SpellBody spellDetails={spellDetails} />
        </details>
    );
}