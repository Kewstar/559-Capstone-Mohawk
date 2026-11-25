// requireAuth.ts
import type { NextFunction, Request, Response } from 'express';
import { createUserClient } from '../supabase';


/**
 * Protects a route through reading the `Authorization: Bearer <access_token>` header
 * & asking Supabase Auth to verify the token. If valid, attaches the verified user and a client acting as the user.
 *
 * @param req the incoming request, read for the `Authorization` header.
 * @param res the response. Used to send an error if the token is invalid, and to carry `user` and `supabase` forward in the chain.
 * @param next calls the next handler in the chain once the token is verified.
 *
 * @returns a Promise<void> resolved after responding with an error or calling next().
 */
export async function requireAuth(req: Request, res: Response, next: NextFunction) {
    const header = req.headers.authorization;
    const token = header?.startsWith('Bearer ') ? header.slice(7) : undefined;

    if (!token) {
        res.status(401).json({ message: 'ERROR: Not Signed In.' });
        return;
    }

    const userClient = createUserClient(token);
    const { data, error } = await userClient.auth.getUser(token);

    if (error || !data.user) {
        res.status(401).json({ message: 'ERROR: Invalid or Expired Session.' });
        return;
    }

    res.locals.user = data.user;
    res.locals.supabase = userClient;

    next();
}