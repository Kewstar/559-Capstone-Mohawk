// users.model.ts
import type { SupabaseClient } from '@supabase/supabase-js';


export type UserRole = 'dm' | 'player';

/** A row in the `users` table. */
export interface UserProfile {
    id: string;
    username: string;
    email: string;
    role: UserRole;
}



//#region — CREATE —

/**
 * Stores a new user's profile.
 *
 * @param supabase the client to query with.
 * @param profile the profile to insert.
 *
 * @returns Supabase's `{ data, error }`.
 */
export async function insertUserProfile(supabase: SupabaseClient, profile: UserProfile) {
    return supabase.from('users').insert(profile);
}

//#endregion



//#region — READ —

/**
 * Finds the email for a username.
 *
 * @param supabase the client to query with.
 * @param username the username to look up.
 *
 * @returns Supabase's `{ data, error }`, where data is `{ email }` or null.
 */
export async function getEmailByUsername(supabase: SupabaseClient, username: string) {
    return supabase
        .from('users')
        .select('email')
        .eq('username', username)
        .single();
}


/**
 * Reads a user's profile.
 *
 * @param supabase the client acting as the signed-in user.
 * @param userId the user's id.
 *
 * @returns Supabase's `{ data, error }`, where data is `{ username, email, role }` or null.
 */
export async function getUserProfile(supabase: SupabaseClient, userId: string) {
    return supabase
        .from('users')
        .select('username, email, role')
        .eq('id', userId)
        .single();
}


/**
 * Reads a user's role.
 *
 * @param supabase the client acting as the signed-in user.
 * @param userId the user's id.
 *
 * @returns Supabase's `{ data, error }`, where data is `{ role }` or null.
 */
export async function getUserRole(supabase: SupabaseClient, userId: string) {
    return supabase
        .from('users')
        .select('role')
        .eq('id', userId)
        .single();
}

//#endregion



//#region — UPDATE —

/**
 * Sets a user's role.
 *
 * @param supabase the client acting as the signed-in user.
 * @param userId the user's id.
 * @param role the new role.
 *
 * @returns Supabase's `{ data, error }`, where data is the updated `{ role }` or null.
 */
export async function updateUserRole(supabase: SupabaseClient, userId: string, role: UserRole) {
    return supabase
        .from('users')
        .update({ role })
        .eq('id', userId)
        .select('role')
        .single();
}

//#endregion