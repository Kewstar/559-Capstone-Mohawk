// Settings.tsx
import '@/components/BookContainer/Pages/Page.css'
import supabase from "@/lib/frontend-supabase"
import { useGetUserData } from './useGetUserData'

import axios from 'axios';

export function SettingsBlockLeft() {
    const { data, error, setData } = useGetUserData(); 

    if (error) 
        return <p>{error}</p>
    
    if (data === null) 
        return <p>loading!</p>

    async function switchRoles() {
        try {
            
            const res = await axios.patch(
                `http://localhost:8000/user/changeRole`,
                { userId: data?.id }
            );
            
            setData(prev => prev ? { ...prev, role: res.data.role } : prev);
    
        } catch (error) {
            console.error(error);
        }
    }

    return <>
        <h1>User Profile #1</h1>
        <h1>SETTINGS</h1>
        
        <p>Username: {data.username}</p>
        <p>Email: {data.email}</p>
        <p>Role: {data.role.toUpperCase()}</p>
        
        <button className='ChangeRoleButton Sticker' onClick={() => switchRoles()}>
            Become a {data.role === 'dm' ? 'Player' : 'DM'!}
        </button>

        <p>LEFT SIDE SETTINGS</p>
    </>
}

export function SettingsBlockRight() {
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