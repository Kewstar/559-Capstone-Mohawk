// Core.tsx
import "./Core.css";
import { NoFlip } from "../../hooks/NoFlip";
import type { IdentityField } from "@/components/BookContainer/types";
import { useNewCharacterData } from "../useNewCharacterData";
import { preventSubmit } from "../../HTMLRenderHelpers";

/** How many of the grid's six columns a field takes: 2 is a third of a row, 3 a half, 6 the whole row. */
type FieldSpan = 2 | 3 | 6;

type CoreTextFieldProps = {
    id: string;
    label: string;
    value: string;
    placeholder?: string;
    span?: FieldSpan;
    onChange: (value: string) => void;
};

/** A labelled text input in the page's sticker style. */
function CoreTextField({ id, label, value, placeholder, span = 6, onChange }: CoreTextFieldProps) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        onChange(e.target.value);
    }

    return (
        <div className={`LabelInputBox Sticker FieldSpan${span}`}>
            <label htmlFor={id} className="PageLabel">
                <span className="LabelText OutlineWhite Stylized">{label}</span>
            </label>
            <input type="text" className="PageInput" id={id} placeholder={placeholder} value={value} onChange={handleChange} />
        </div>
    );
}

type IdentityFieldInputProps = {
    field: IdentityField;
    label: string;
    placeholder?: string;
    span?: FieldSpan;
};

/** A text input bound to one identity field. */
function IdentityFieldInput({ field, label, placeholder, span = 6 }: IdentityFieldInputProps) {
    const { identity, setIdentityField } = useNewCharacterData();

    function handleOnChange(value: string) {
        setIdentityField(field, value);
    }

    return (
        <CoreTextField
            id={`Identity_${field}`}
            label={label}
            value={identity[field]}
            placeholder={placeholder}
            onChange={handleOnChange}
            span={span}
        />
    );
}

export function CoreBlockLeft() {
    const { name, alignment, setName, setAlignment } = useNewCharacterData();

    return <>
        <h1 className="OutlineBlue Stylized">CORE</h1>
        <p className="UnderlineGray">Define the core traits of your character, who they are, and what they wish for.</p>

        <NoFlip>
            <form className="PageForm CoreFieldGrid" onSubmit={preventSubmit}>
                <div className="CharacterImgBox Sticker FieldSpan6"><h1>+</h1></div>

                <CoreTextField id="CharacterName" label="Character Name" value={name} placeholder="Nameless Hero..." span={6} onChange={setName} />
                <CoreTextField id="CharacterAlignment" label="Alignment" value={alignment} span={3} onChange={setAlignment} />
                <IdentityFieldInput field="playerName" label="Player" span={3} />
                <IdentityFieldInput field="pronouns" label="Pronouns" span={3} />
                <IdentityFieldInput field="deity" label="Deity or Faith" span={3} />

                <IdentityFieldInput field="age" label="Age" span={2} />
                <IdentityFieldInput field="height" label="Height" span={2} />
                <IdentityFieldInput field="weight" label="Weight" span={2} />
                <IdentityFieldInput field="eyes" label="Eyes" span={2} />
                <IdentityFieldInput field="hair" label="Hair" span={2} />
                <IdentityFieldInput field="skin" label="Skin" span={2} />
            </form>
        </NoFlip>
    </>
}


//  TO FILL CoreRightBlock at a later time: 
//      - homebrew setting toggles (heroic saves, rule settings, etc) 
//      - character image (large) to take up bigger area of right page
export function CoreBlockRight() {
    return <>
    </>
}