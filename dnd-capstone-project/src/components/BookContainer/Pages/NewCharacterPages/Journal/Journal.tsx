// Journal.tsx
import { useId } from "react";
import { NoFlip } from "@/components/BookContainer/Pages/hooks/NoFlip";
import type { JournalField } from "@/components/BookContainer/types";
import { useNewCharacterData } from "../useNewCharacterData";
import { preventSubmit } from "../../HTMLRenderHelpers";

type JournalTextAreaProps = {
    field: JournalField;
    label: string;
    rows: number;
    hint?: string;
    maxLength: number;
};

/** A labelled textarea bound to one journal field. */
function JournalTextArea({ field, label, rows, hint, maxLength }: JournalTextAreaProps) {
    const { journal, setJournalField } = useNewCharacterData();
    const id = useId();

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setJournalField(field, e.target.value);
    }

    return (
        <div className="JournalBox Sticker">
            <label htmlFor={id} className="PageLabel">
                <span className="LabelText OutlineWhite Stylized">{label}</span>
            </label>
            {hint && <p className="SubDetail">{hint}</p>}
            <textarea
                id={id}
                className="PageInput RuledLines JournalTextArea Stylized"
                rows={rows}
                value={journal[field]}
                onChange={handleChange}
                maxLength={maxLength}
            />
        </div>
    );
}


export function JournalBlockLeft() {
    return <>
        <NoFlip>
            <h1 className="OutlineBlue Stylized">JOURNAL</h1>
            <p className="UnderlineGray">Your character's story, in your own words.</p>

            <form className="PageForm" onSubmit={preventSubmit}>
                <JournalTextArea field="appearance" label="Appearance" rows={6} maxLength={4000} />
                <JournalTextArea field="backstory" label="Backstory" rows={12} maxLength={4000} />
            </form>
        </NoFlip>
    </>
}


export function JournalBlockRight() {
    return <NoFlip>
        <div className="PageBlockRight">
            <form className="PageForm" onSubmit={preventSubmit}>
                <JournalTextArea
                    field="allies"
                    label="Allies & Organizations"
                    rows={8}
                    hint="People, groups and places of interest."
                    maxLength={4000}
                />
                <JournalTextArea field="notes" label="Notes" rows={12} maxLength={4000} />
            </form>
        </div>
    </NoFlip>;
}