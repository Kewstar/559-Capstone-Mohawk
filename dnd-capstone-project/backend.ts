// backend.ts
import express from 'express';
import cors from 'cors';
import type { NextFunction, Request, Response } from 'express';
import type { SupabaseClient, User } from '@supabase/supabase-js';
import { createAnonClient, createUserClient } from './backend-supabase';

const PORT = Number(process.env.PORT) || 8000;

const ALLOWED_ROLES = [ 'dm', 'player' ];

const app = express();

app.use(cors({ 
    origin: [
        'http://localhost:5173',
        process.env.FRONTEND_URL,
    ].filter((o): o is string => Boolean(o)),
 })); 
app.use(express.json()) 


 
// —— AUTH MIDDLEWARE —— //

/**
 * Protects a route through reading the `Authorization: Bearer <access_token>` header 
 * & asking Supabase Auth to verifiy the token. If valid attaches the verified user and client acting as the user.
 * 
 * @param req the incoming request, read for the `Authorization` header. 
 * @param res the response. Used to send error if token is invalid and to carry `user` and `supabase` forward in chain. 
 * @param next calls the next handler in chain once token is verified. 
 * 
 * @returns a Promise<void> resolved after responding with error or calling next(). 
 */
async function requireAuth(req: Request, res: Response, next: NextFunction) {
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


// —— CRUD OPERATIONS —— //

//  #region — CREATE — // 
app.post('/signup', async (req, res) => {
    // console.log("/signup");
    
    const { username, email, password, role } = req.body;

    if (!ALLOWED_ROLES.includes(role)) {
        res.status(400).json({ message: 'Error: Invalid Role.' });
        return; 
    }

    const supabase = createAnonClient();

    const {data, error} = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    // console.log(data);
    

    if (error) {
        console.error("ERROR: Could not Sign Up! ", error);
        res.status(400).json({ message: "Signup Error ", error: error.message});
        return;
    }
    // console.log("Authenticated User Created ", data.user?.id);

    const { error: insertError } = await supabase
        .from('users')
        .insert({
            id: data.user?.id,
            username: username,
            email: email,
            role: role,
        });
    
    if (insertError) {
        console.error("ERROR: Could not Insert User Data: ", insertError.message);
        res.status(400).json({ message: 'ERROR: User Signup Failed', error: insertError.message });
        return;
    }

    // console.log("signup attempt: ", { username, email, password });
    res.json({ message: "Signup Success!", session: data.session })
});

// #endregion CREATE

//  #region — READ — // 
app.get('/getEmail', async (req, res) => {
    // console.log("/getEmail");
    const { username } = req.query;

    if (typeof username !== 'string' || !username) {
        res.status(400).json({ message: 'ERROR: Missing Username.' });
        return; 
    }

    const supabase = createAnonClient();

    const { data, error } = await supabase
        .from('users')
        .select('email')
        .eq('username', username)
        .single();
    

    if (error || !data) {
        console.error("ERROR: Could not Read User Data: ", error?.message);
        res.status(400).json({ message: 'ERROR: User not found' });
        return; 
    }

    res.json(data.email);
});


app.get('/getUserData', requireAuth, async (_req, res) => {
    // console.log('/getUserData');
    const user = res.locals.user as User;
    const supabase = res.locals.supabase as SupabaseClient;

    const { data, error } = await supabase
        .from('users')
        .select('username, email, role')
        .eq('id', user.id)
        .single();
    
    if (error || !data) {
        console.error("ERROR: Could not Read User Data:", error?.message);
        res.status(400).json({ message: 'ERROR: Could Not Read User Data.', error: error?.message });
        return;
    }

    return res.json( {
        id: user.id,
        username: data.username, 
        email: data.email,
        role: data.role
    } );
});
//#endregion READ


//#region — UPDATE —
app.patch('/user/changeRole', requireAuth, async (_req, res) => {
    // console.log('/user/changeRole');
    const user = res.locals.user as User;
    const supabase = res.locals.supabase as SupabaseClient;

    const { data, error: readError } = await supabase
        .from('users')
        .select('role')
        .eq('id', user.id)
        .single();

    if (readError || !data) {
        console.error("ERROR: Could not Read User Data:", readError?.message);
        res.status(400).json({ message: 'ERROR: Could Not Read User Data', error: readError?.message });
        return; 
    }

    // console.log("old", data.role);
    const newRole = data.role === 'dm' ? 'player' : 'dm';
    // console.log("new", newRole);

    const { data: updated, error: updateError } = await supabase
        .from('users')
        .update({ role: newRole })
        .eq('id', user.id)
        .select('role')
        .single();

    if (updateError || !updated) {
        res.status(500).json({ message: updateError?.message ?? 'ERROR: Role Was Not Updated.' });
        return; 
    }

    res.json({ role: updated.role });
});
//#endregion UPDATE


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});