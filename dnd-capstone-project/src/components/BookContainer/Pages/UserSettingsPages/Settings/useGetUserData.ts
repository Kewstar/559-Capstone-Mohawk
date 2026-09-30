// useGetUserData.ts 
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import type { UserData } from "@/components/BookContainer/types";


export function useGetUserData() {
    const [data, setData] = useState<UserData | null>(null);
    const [error, setError] = useState<string | null>(null);
    
    const { user } = useAuth();
 
    useEffect(() => {
        if (!user?.id) return;        
        let cancelledFlag = false;

        getUserData(user.id, cancelledFlag);
        
        return () => {
            cancelledFlag = true;
        };
    }, [user?.id])
    
    return {data, error, setData};
    
    
    async function getUserData(userId: string, cancelledFlag: boolean) {
        try {
            const res = await fetch(`http://localhost:8000/getUserData?userId=${encodeURIComponent(userId)}`);
            
            if (!res.ok) {
                throw new Error(`ERROR: User not found: ${userId}`);
            }
            
            const username = await res.json();
            
            if (!cancelledFlag) {
                setData(username);
            }
            
        } catch (error) {
            if (!cancelledFlag) {
                setError((error as Error).message);
            }
        }
    } 
    
}