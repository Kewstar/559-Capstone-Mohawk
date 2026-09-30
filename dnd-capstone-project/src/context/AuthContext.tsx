// AuthContext.tsx 
import { createContext, useContext, useEffect, useState } from "react";
import supabase from "@/lib/frontend-supabase";
import type { Session, User } from "@supabase/supabase-js";

/** Rules for a Supabase session; either a `Session` or `null` */
type SupaSession = Session | null;


/** The value of `AuthProvider` */
interface AuthContextValue {
    /** The Supabase session. `null` when signed out. */
    supaSession: SupaSession;
    /** The signed in user from Supabase's session. `null` when signed out. */
    user: User | null;
    /** Used for initial page load before the session object exists. True until `getSession()` is finished. */
    loadingSessionFlag: boolean;
};




/** Default values for AuthContext */
const AuthContext = createContext<AuthContextValue>({
    supaSession: null,
    user: null,
    loadingSessionFlag: true
});





/**
 * Provides the Supabase session to the app. 
 * 
 * @param children Everything between the AuthProvider tags, which is the entire app. 
 * @returns 
 */
export function AuthProvider(
    { children }: { children: React.ReactNode }
) {
    const [supaSession, setSupaSession] = useState<SupaSession>(null); 
    const [loadingSessionFlag, setLoadingSessionFlag] = useState(true);

    useEffect( function() {
        // For initial load
        supabase.auth.getSession().then( ({ data }) => {
            setSupaSession(data.session)
            setLoadingSessionFlag(false)
        })
        
        // Then sync state after initial load & unsub 
        const { data: listener } = supabase.auth.onAuthStateChange( (_event, session) => {
            setSupaSession(session)
        })

        return () => listener.subscription.unsubscribe() 
    }, []);


    return (
        <AuthContext.Provider value={{
            supaSession, 
            user: supaSession?.user ?? null, 
            loadingSessionFlag 
        }}>
            {children}
        </AuthContext.Provider>
    )
};


/**
 * Reads the supabase session auth state from the {@link AuthProvider}
 * 
 * @returns The current session, user, and loading flag.  
 */
export const useAuth = () => useContext(AuthContext);