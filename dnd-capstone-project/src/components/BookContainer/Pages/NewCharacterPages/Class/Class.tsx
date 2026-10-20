// Class.tsx
import { NoFlip } from "@/components/BookContainer/Pages/hooks/NoFlip"
import { useNewCharacterData } from "../useNewCharacterData"
import { LEVEL_MAX } from "../constants"

export function ClassBlockLeft() {
    const { 
        totalLevel, attributes, 
        setTotalLevel
    } = useNewCharacterData();

    return <>
        <NoFlip>
            <h1 className="OutlineBlue Stylized">CLASS</h1>
            <p className="UnderlineGray">Pick your class and level, man.</p>

            <form className="PageForm" onSubmit={(e) => e.preventDefault()}>
                <select 
                    value={totalLevel} 
                    onChange={ (e) => setTotalLevel(Number(e.target.value)) }
                >
                    {Array.from({ length: LEVEL_MAX }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                        {n}
                        </option>
                    ))}
                </select>
            </form>

            <p>Proficiency Bonus: {attributes.proficiencyBonus}</p>

        </NoFlip>
    </>
}

export function ClassBlockRight() {
    return <>
        <h1>RIGHT SIDE CLASS</h1>
    </>
}