// Stats.tsx
import { NoFlip } from "@/components/BookContainer/Pages/hooks/NoFlip"
import { useNewCharacterData } from "../useNewCharacterData"
import type { StatKey, StatWithMod } from "@/components/BookContainer/types";


export function StatsBlockLeft() {
    const { stats, setStat, validateStat } = useNewCharacterData();
    
    return <>
        <h1 className="OutlineBlue Stylized">STATS</h1>
        <p className="UnderlineGray">Core attributes that describe the physical and mental characteristics of your character.</p>

        <NoFlip>
            <form className="PageForm">
                <div className="StatBubbleBox">
                    {Object.values(stats).map((stat) => (
                        <StatBubble key={stat.id} stat={stat} setStat={setStat} validateStat={validateStat} />
                    ))}
                </div>
            </form>
        </NoFlip>
    
    </>
}

export function StatsBlockRight() {
    const { stats } = useNewCharacterData();

    return <>
        <h1>RIGHT SIDE STATS</h1>
        
        <NoFlip>
            <form className="PageForm">
                <div className="StatBubbleBox">
                    {Object.values(stats).map((stat) => (
                        <StatBubbleFinal key={stat.id} stat={stat} />
                    ))}
                </div>
            </form>
        </NoFlip>
    </>
}

type SetStat = (statKey: StatKey, value: string) => void;

type StatBubbleProps = {
    stat: StatWithMod;
    setStat: SetStat;
    validateStat: (statKey: StatKey) => void;
}
function StatBubble(
    { stat, setStat, validateStat }: StatBubbleProps
) {
    const inputId = `Character_${stat.id}`;
    
    return (
        <div className="StatBubble Sticker">
            <label htmlFor={inputId} className="PageLabel">
                <span className="LabelText OutlineWhite Stylized">{stat.label}</span>
            </label>
            <input type="number" className="PageInput" id={inputId}
                min={1} max={18} 
                placeholder="10" value={stat.value}
                onChange={ (e) => setStat(stat.id, e.target.value) }
                onBlur={ () => validateStat(stat.id) }
            />
            <label htmlFor={inputId} className="PageLabel">
                <span className="LabelText OutlineWhite Stylized">Modifier: {stat.mod}</span>
            </label>
        </div>
    )
    
}

type StatBubbleFinalProps = { stat: StatWithMod }
function StatBubbleFinal({stat}: StatBubbleFinalProps ) {
    const inputId = `Character_${stat.id}`;
    
    return (
        <div className="StatBubble Sticker">
            <label htmlFor={inputId} className="PageLabel">
                <span className="LabelText OutlineWhite Stylized">{stat.label}</span>
            </label>
            <label htmlFor={inputId} className="PageLabel">
                <span className="LabelText OutlineWhite Stylized">Total Score: {stat.value}</span>
            </label>
            <label htmlFor={inputId} className="PageLabel">
                <span className="LabelText OutlineWhite Stylized">Modifier: {stat.mod}</span>
            </label>
        </div>
    )
    
}