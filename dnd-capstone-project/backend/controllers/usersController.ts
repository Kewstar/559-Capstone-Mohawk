// users.controller.ts
import { Router } from 'express';
import type { Request, Response } from 'express';
import type { SupabaseClient, User } from '@supabase/supabase-js';
import { requireAuth } from '../middleware/requireAuth';
import { getUserProfile, getUserRole, updateUserRole } from '../models/usersModel';
import type { UserRole } from '../models/usersModel';


const usersController = Router();

// Every route in this controller needs a signed-in user.
usersController.use(requireAuth);



/**
 * Gets the opposite role, for toggling between DM and player.
 *
 * @param role the current role.
 *
 * @returns the other role.
 */
function getOtherRole(role: UserRole): UserRole {
    return role === 'dm' ? 'player' : 'dm';
}


/**
 * Reads the signed-in user's profile.
 *
 * @param _req unused.
 * @param res carries the verified user and client from requireAuth. Responds with the profile, or an error.
 */
async function getUserData(_req: Request, res: Response) {
    const user = res.locals.user as User;
    const supabase = res.locals.supabase as SupabaseClient;

    const { data, error } = await getUserProfile(supabase, user.id);

    if (error || !data) {
        console.error("ERROR: Could not Read User Data:", error?.message);
        res.status(400).json({ message: 'ERROR: Could Not Read User Data.', error: error?.message });
        return;
    }

    res.json({
        id: user.id,
        username: data.username,
        email: data.email,
        role: data.role,
    });
}


/**
 * Switches the signed-in user's role between `dm` and `player`.
 *
 * @param _req unused.
 * @param res carries the verified user and client from requireAuth. Responds with the new role, or an error.
 */
async function changeRole(_req: Request, res: Response) {
    const user = res.locals.user as User;
    const supabase = res.locals.supabase as SupabaseClient;

    const { data, error: readError } = await getUserRole(supabase, user.id);

    if (readError || !data) {
        console.error("ERROR: Could not Read User Data:", readError?.message);
        res.status(400).json({ message: 'ERROR: Could Not Read User Data', error: readError?.message });
        return;
    }

    const { data: updated, error: updateError } = await updateUserRole(supabase, user.id, getOtherRole(data.role));

    if (updateError || !updated) {
        res.status(500).json({ message: updateError?.message ?? 'ERROR: Role Was Not Updated.' });
        return;
    }

    res.json({ role: updated.role });
}



usersController.get('/data', getUserData);
usersController.patch('/changeRole', changeRole);

export default usersController;