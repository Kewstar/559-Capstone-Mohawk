// Core.tsx
import { useNewCharacterData } from "../useNewCharacterData"
import '../../Page.css'
import { NoFlip } from "../../hooks/NoFlip";

export function CoreBlock1() {
    const { name, alignment, setName, setAlignment } = useNewCharacterData();

    return <> {/* Left Side */} 
        <h1 className="OutlineBlue Stylized">CORE</h1>
        <p className="UnderlineGray">Define the core traits of your character, who they are, and what they wish for.</p>

        <NoFlip>
            <form className="PageForm">
                <div className="CharacterImgBox Sticker">
                    <h1>+</h1>
                </div>

                <div className="LabelInputBox Sticker">
                    <label htmlFor="CharacterName" className="PageLabel">
                        <span className="LabelText OutlineWhite Stylized">Character Name</span>
                    </label>
                    <input type="text" className="PageInput" id="CharacterName" 
                        placeholder="Nameless Hero..." value={name}
                        onChange={ (e) => setName(e.target.value) }
                        />
                </div>

                <div className="LabelInputBox Sticker">
                    <label htmlFor="CharacterAlignment" className="PageLabel">
                        <span className="LabelText OutlineWhite Stylized">Alignment</span>
                    </label>
                    <input type="text" className="PageInput" id="CharacterAlignment" 
                        placeholder="" value={alignment}
                        onChange={ (e) => setAlignment(e.target.value) }
                        />
                </div>


            </form>
        </NoFlip>
    </>
}

export function CoreBlock2() {
    return <> {/* Right Side */} 

    </>
}