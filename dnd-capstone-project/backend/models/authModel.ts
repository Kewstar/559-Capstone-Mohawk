// auth.model.ts
import type { SupabaseClient } from '@supabase/supabase-js';


/**
 * Creates a Supabase Auth account.
 *
 * @param supabase a client with no user signed in.
 * @param email the new user's email.
 * @param password the new user's password.
 *
 * @returns Supabase's `{ data, error }`. `data.user` and `data.session` are set on success.
 */
export async function registerAuthUser(supabase: SupabaseClient, email: string, password: string) {
    return supabase.auth.signUp({ email, password });
}