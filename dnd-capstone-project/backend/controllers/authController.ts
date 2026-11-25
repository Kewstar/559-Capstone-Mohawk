// auth.controller.ts
import { Router } from 'express';
import type { Request, Response } from 'express';
import { createAnonClient } from '../supabase';
import { registerAuthUser } from '../models/authModel';
import { getEmailByUsername, insertUserProfile } from '../models/usersModel';
import type { UserRole } from '../models/usersModel';


const ALLOWED_ROLES: UserRole[] = [ 'dm', 'player' ];

const authController = Router();



/**
 * Checks that a value is one of the allowed roles.
 *
 * @param role the value from the request.
 *
 * @returns true when the role is allowed.
 */
function isUserRole(role: unknown): role is UserRole {
    return ALLOWED_ROLES.includes(role as UserRole);
}


/**
 * Registers a new user with Supabase Auth, then stores their profile in the `users` table.
 *
 * @param req body contains `username`, `email`, `password`, and `role`.
 * @param res responds with the new session, or an error.
 */
async function signUp(req: Request, res: Response) {
    const { username, email, password, role } = req.body;

    if (!isUserRole(role)) {
        res.status(400).json({ message: 'Error: Invalid Role.' });
        return;
    }

    const supabase = createAnonClient();

    const { data, error } = await registerAuthUser(supabase, email, password);

    if (error || !data.user) {
        console.error("ERROR: Could not Sign Up! ", error);
        res.status(400).json({ message: "Signup Error ", error: error?.message });
        return;
    }

    const { error: insertError } = await insertUserProfile(supabase, {
        id: data.user.id,
        username,
        email,
        role,
    });

    if (insertError) {
        console.error("ERROR: Could not Insert User Data: ", insertError.message);
        res.status(400).json({ message: 'ERROR: User Signup Failed', error: insertError.message });
        return;
    }

    res.json({ message: "Signup Success!", session: data.session });
}


/**
 * Looks up a user's email from their username, so users can sign in with a username.
 *
 * @param req query contains `username`.
 * @param res responds with the email, or an error.
 */
async function getEmail(req: Request, res: Response) {
    const { username } = req.query;

    if (typeof username !== 'string' || !username) {
        res.status(400).json({ message: 'ERROR: Missing Username.' });
        return;
    }

    const { data, error } = await getEmailByUsername(createAnonClient(), username);

    if (error || !data) {
        console.error("ERROR: Could not Read User Data: ", error?.message);
        res.status(400).json({ message: 'ERROR: User not found' });
        return;
    }

    res.json(data.email);
}



authController.post('/signup', signUp);
authController.get('/getEmail', getEmail);

export default authController;