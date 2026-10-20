import { createContext, useContext, useEffect, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { authFetch } from "@/lib/api";
import { useAuth } from "./AuthContext";
import type { UserData } from "@/components/BookContainer/types";

type UserDataContextValue = {
    data: UserData | null;
    error: string | null;
    setData: Dispatch<SetStateAction<UserData | null>>;
}

const UserDataContext = createContext<UserDataContextValue | null>(null);


export function UserDataProvider({ children }: { children: ReactNode }) {
    const [storedData, setData] = useState<UserData | null>(null);
    const [error, setError] = useState<string | null>(null);

    const { user } = useAuth();
    const userId = user?.id;
        
    useEffect(() => {
        if (!userId) 
            return;

        const controller = new AbortController(); 
    
        async function getUserData() {
            try {
                setError(null);

                const res = await authFetch('/getUserData', { signal: controller.signal });
                
                if (!res.ok) {
                    throw new Error('ERROR: Could Not Load User Data.');
                }
                
                const userData = await res.json();
                setData(userData);
                
            } catch (error) {
                if ( (error as Error).name === 'AbortError' ) 
                    return;
                setError( (error as Error).message );
            }
        } 

        getUserData();

        return () => controller.abort();
    }, [user?.id]);


    function getCurrentUserData() {
        if (!userId) 
            return null;

        if (storedData?.id !== userId)
            return null;
        
        return storedData;
    }

    const data = getCurrentUserData();


    return (
        <UserDataContext value={{ data, error, setData }}>
            {children}
        </UserDataContext>
    );
}


/**
 * Acceesses the shared user data from `UserDataProvider`.
 * 
 * @returns object containing `data`, `error`, and `setData` for the signed-in user.
 */
export function useUserData() {
    const ctx = useContext(UserDataContext);

    if (!ctx) {
        throw new Error(`useUserData must be used inside <UserDataProvider`);
    }
    return ctx;
}