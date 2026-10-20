// Settings.tsx
import '@/components/BookContainer/Pages/Page.css'
import supabase from "@/lib/frontend-supabase"
import { NoFlip } from '../../hooks/NoFlip';
import { authFetch } from '@/lib/api';
// import { getUserSettingsData } from './GetUserSettingsData'
import { useUserData } from '@/context/UserDataContext';

export function SettingsBlockLeft() {
    const { data, error, setData } = useUserData(); 

    if (error) 
        return <p>{error}</p>
    
    if (data === null) 
        return <p>loading!</p>

    async function switchRoles() {
        try {
            
            const res = await authFetch(
                `/user/changeRole`, { method: 'PATCH' }
            );

            if (!res.ok) {
                throw new Error('ERROR: Could Not Change Role.');
            }

            const { role } = await res.json();
            
            setData(prev => prev ? { ...prev, role } : prev);
    
        } catch (error) {
            console.error(error);
        }
    }

    return <>
        <NoFlip>
            <h1>User Profile #1</h1>
            <h1>SETTINGS</h1>
            
            <p>Username: {data.username}</p>
            <p>Email: {data.email}</p>
            <p>Role: {data.role.toUpperCase()}</p>
            
            <button className='ChangeRoleButton StickerBtn' onClick={() => switchRoles()}>
                Become a {data.role === 'dm' ? 'Player' : 'DM'!}
            </button>

            <p>LEFT SIDE SETTINGS</p>
        </NoFlip>
    </>
}

export function SettingsBlockRight() {
    return <>
        <NoFlip>
            <h1>RIGHT SIDE SETTINGS</h1>
            <button className="SignOutButton StickerBtn" onClick={() => handleSignOut()}>
                Sign Out!
            </button>
        </NoFlip>
    </>
}


async function handleSignOut() {
    await supabase.auth.signOut()
}