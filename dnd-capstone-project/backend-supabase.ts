import { config } from "dotenv";

config();

import { createClient } from "@supabase/supabase-js"

const url = process.env.VITE_SUPABASE_URL!; 
const key = process.env.VITE_SUPABASE_PUBLISHABLE_KEY!;


const auth = { 
    persistSessio: false, 
    autoRefreshToken: false, 
}; 


export function createAnonClient() {
    return createClient(url, key, { auth } );
}


export function createUserClient(accessToken: string) {
    return createClient(url, key, {
        auth, 
        global: { headers: { Authorization: `Bearer ${accessToken}` } }
    });
}