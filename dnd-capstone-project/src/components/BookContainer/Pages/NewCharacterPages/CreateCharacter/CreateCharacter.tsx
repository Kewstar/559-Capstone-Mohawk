import { useNewCharacterData } from "../useNewCharacterData";
import { describeBuild } from "./createCharacterHelpers";
import type { ChecklistItem } from "./createCharacterHelpers";


/**
 * Renders one item in the checklist of choices to select. 
 * 
 * @param item The checklist item.  
 * 
 * @returns A `<li>` item showing if the choice has been made or not. 
 */
function renderChecklistItem(item: ChecklistItem) {
    return (
        <li key={item.key} className={item.done ? "ChecklistDone" : "ChecklistTodo"}>
            <span aria-hidden="true">{item.done ? "✔" : "○"}</span>
            <span className="VisuallyHidden">{item.done ? "Done: " : "To do: "}</span>
            {item.label}{item.detail && ` (${item.detail})`}
        </li>
    );
}


export function CreateCharacterBlockLeft() {
    const { name, classes, race, background, totalLevel, attributes, checklist, canCreateCharacter } = useNewCharacterData();
    
    return <div className="PageBlockRight">
        <div className="DisplayBubble Stylized Sticker">
            <h1>{name.trim() !== "" ? name : "Nameless Hero"}</h1>
            <h2>{describeBuild({ classes, race, background })}</h2>
        </div>

        <div className="ChoiceBubble Stylized Sticker">
            <p><strong>Level:</strong> {totalLevel} · <strong>Proficiency bonus:</strong> +{attributes.proficiencyBonus}</p>
            <p><strong>Armor class:</strong> {attributes.armorClass.total}</p>
        </div>

        <div className="ChoiceBubble Stylized Sticker">
            <h3>{canCreateCharacter ? "Your character is ready" : "Still to do"}</h3>
            <ul className="BuildChecklist">{checklist.map(renderChecklistItem)}</ul>
        </div>
    </div>;
}


// TO ADD: 
//      Submit button: once everything is checked off, allows creating character,
//      collects all the character data, and sends it to the backend. 
export function CreateCharacterBlockRight() {
    return <>
    </>;
}