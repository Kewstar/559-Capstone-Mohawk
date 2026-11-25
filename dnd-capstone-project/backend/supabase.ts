// supabase.ts
import 'dotenv/config';

import { createClient } from '@supabase/supabase-js';


const url = process.env.VITE_SUPABASE_URL!;
const key = process.env.VITE_SUPABASE_PUBLISHABLE_KEY!;


/** Clients here are made per request, so they never store or refresh a session. */
const auth = {
    persistSession: false,
    autoRefreshToken: false,
};


/**
 * Creates a client with no user signed in. Use for routes where there is no session yet (e.g. sign up).
 *
 * @returns a Supabase client using the publishable key.
 */
export function createAnonClient() {
    return createClient(url, key, { auth } );
}


/**
 * Creates a client that acts as the signed-in user, so RLS policies see their `auth.uid()`.
 *
 * @param accessToken the user's access token from the `Authorization` header.
 *
 * @returns a Supabase client that sends the user's token on every request.
 */
export function createUserClient(accessToken: string) {
    return createClient(url, key, {
        auth,
        global: { headers: { Authorization: `Bearer ${accessToken}` } }
    });
}