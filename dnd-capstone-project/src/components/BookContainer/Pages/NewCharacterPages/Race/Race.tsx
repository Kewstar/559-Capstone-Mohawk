// import { NoFlip } from "../../hooks/NoFlip"
// import { useNewCharacterData } from "../useNewCharacterData"

// Race.tsx
export function RaceBlockLeft() {
    // const {
        //     setAbilityRacialBonus, setAbilityMax, 
        // } = useNewCharacterData();
        
    return <>
         <h1>LEFT SIDE RACE</h1>
         {/* <NoFlip></NoFlip>
         <select value={race ?? ""} onChange={e => setRace((e.target.value || null) as RaceId | null)}>
             <option value="">--</option>
             {Object.entries(RACES).map(([id, r]) => <option key={id} value={id}>{r.name}</option>)}
         </select> */}
    </>
}

export function RaceBlockRight() {
    return <>
        <h1>RIGHT SIDE RACE</h1>
    </>
}