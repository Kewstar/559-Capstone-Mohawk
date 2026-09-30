// Settings.tsx
import '@/components/BookContainer/Pages/Page.css'
import supabase from "@/lib/frontend-supabase"

export function SettingsBlock1() {
    return <>
        <h1>User Profile #1</h1>
        <h1>SETTINGS</h1>
        <p>LEFT SIDE SETTINGS</p>
    </>
}

export function SettingsBlock2() {
    return <>
        <h1>RIGHT SIDE SETTINGS</h1>
        <button className="SignOutButton Sticker" onClick={() => handleSignOut()}>
            Sign Out!
        </button>
    </>
}


async function handleSignOut() {
    await supabase.auth.signOut()
}