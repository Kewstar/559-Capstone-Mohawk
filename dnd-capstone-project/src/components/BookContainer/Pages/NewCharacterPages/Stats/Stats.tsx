// Stats.tsx
import { NoFlip } from "@/components/BookContainer/Pages/hooks/NoFlip"
import { useNewCharacterData } from "../useNewCharacterData"

export function StatsBlock1() {
    const { str, dex, con, int, wis, cha, setStat } = useNewCharacterData();

    return <>
        <h1 className="OutlineBlue Stylized">STATS</h1>
        <p className="UnderlineGray">Core attributes that describe the physical and mental characteristics of your character.</p>

        <NoFlip>
            <form className="PageForm">

                <div className="LabelInputBox Sticker">
                    <label htmlFor="CharacterStr" className="PageLabel">
                        <span className="LabelText OutlineWhite Stylized">Strength</span>
                    </label>
                    <input type="text" className="PageInput" id="CharacterStr" 
                        placeholder="10" value={str}
                        onChange={ (e) => setStat("str", e.target.value) }
                        />
                </div>

                <div className="LabelInputBox Sticker">
                    <label htmlFor="CharacterDex" className="PageLabel">
                        <span className="LabelText OutlineWhite Stylized">Dexterity</span>
                    </label>
                    <input type="text" className="PageInput" id="CharacterDex" 
                        placeholder="10" value={dex}
                        onChange={ (e) => setStat("dex", e.target.value) }
                        />
                </div>

                <div className="LabelInputBox Sticker">
                    <label htmlFor="CharacterCon" className="PageLabel">
                        <span className="LabelText OutlineWhite Stylized">Constitution</span>
                    </label>
                    <input type="text" className="PageInput" id="CharacterCon" 
                        placeholder="10" value={con}
                        onChange={ (e) => setStat("con", e.target.value) }
                        />
                </div>

                <div className="LabelInputBox Sticker">
                    <label htmlFor="CharacterInt" className="PageLabel">
                        <span className="LabelText OutlineWhite Stylized">Intelligence</span>
                    </label>
                    <input type="text" className="PageInput" id="CharacterInt" 
                        placeholder="10" value={str}
                        onChange={ (e) => setStat("int", e.target.value) }
                        />
                </div>

                <div className="LabelInputBox Sticker">
                    <label htmlFor="CharacterWis" className="PageLabel">
                        <span className="LabelText OutlineWhite Stylized">Wisdom</span>
                    </label>
                    <input type="text" className="PageInput" id="CharacterWis" 
                        placeholder="10" value={str}
                        onChange={ (e) => setStat("wis", e.target.value) }
                        />
                </div>

                <div className="LabelInputBox Sticker">
                    <label htmlFor="CharacterCha" className="PageLabel">
                        <span className="LabelText OutlineWhite Stylized">Charisma</span>
                    </label>
                    <input type="text" className="PageInput" id="CharacterStr" 
                        placeholder="10" value={cha}
                        onChange={ (e) => setStat("cha", e.target.value) }
                        />
                </div>

            </form>
        </NoFlip>
    
    </>
}

export function StatsBlock2() {
    return <>
        <h1>RIGHT SIDE STATS</h1>
    </>
}