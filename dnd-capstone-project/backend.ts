// backend.ts
import express from 'express';
import cors from 'cors';
// import { log } from 'console';
import supabase from './backend-supabase';
import { log } from 'console';

const PORT = 8000;

const app = express();

app.use(cors({ origin: 'http://localhost:5173' })) 
app.use(express.json()) 


// —— CRUD OPERATIONS —— //

//  #region — CREATE — // 
app.post('/signup', async (req, res) => {
    console.log("/signup");
    
    const { username, email, password, role } = req.body;

    const {data, error} = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    console.log(data);
    

    if (error) {
        console.error("ERROR: Could not Sign Up! ", error);
        
        return res.status(400).json({ message: "Signup Error ", error: error.message});
    }
    console.log("Authenticated User Created ", data.user?.id);

    const { error: insertError } = await supabase
        .from('users')
        .insert({
            id: data.user?.id,
            username: username,
            email: email,
            role: role,
        });
    
    if (insertError) {
        console.error("ERROR: Could not Insert User Data: ", insertError);
        
        return res.status(400).json({ message: 'ERROR: User Signup Failed', error: insertError.message });
    }

    console.log("signup attempt: ", { username, email, password });
    res.json({ message: "Signup Success!", session: data.session })
});

// #endregion CREATE

//  #region — READ — // 
app.get('/getEmail', async (req, res) => {
    console.log("/getEmail");
    const { username } = req.query;

    const { data, error } = await supabase
        .from('users')
        .select('email')
        .eq('username', username)
        .single();
    

    if (error || !data || !('email' in data)) {
        console.error("ERROR: Could not Read User Data: ", error);
        return res.status(400).json({ message: 'ERROR: User not found', error: error?.message });
    }

    return res.json(data.email);
});

app.get('/getUserData', async (req, res) => {
    console.log('/getUserData');
    const { userId } = req.query;

    if (typeof userId !== 'string' || !userId) {
        return res.status(400).json({ message: 'ERROR: Missing id' });
    }

    const { data, error } = await supabase
        .from('users')
        .select('username, email, role')
        .eq('id', userId)
        .single();
    
    if (error || !data) {
        console.error("ERROR: Could not Read User Data:", error);
        return res.status(400).json({ message: 'Missing userId query param', error: error?.message });
    }

    return res.json( {
        id: userId,
        username: data.username, 
        email: data.email,
        role: data.role
    } );
});
//#endregion READ


//#region — UPDATE —
app.patch('/user/changeRole', async (req, res) => {
    console.log('/user/changeRole');
    const { userId } = req.body;

    const { data, error: readError } = await supabase
        .from('users')
        .select('role')
        .eq('id', userId)
        .single();

    if (readError || !data) {
        console.error("ERROR: Could not Read User Data:", readError);
        return res.status(400).json({ message: 'Missing userId query param', error: readError?.message });
    }

    console.log("old", data.role);
    const newRole = data.role === 'dm' ? 'player' : 'dm';
    console.log("new", newRole);

    const { error: updateError } = await supabase
        .from('users')
        .update({ role: newRole })
        .eq('id', userId);

    if (updateError) {
        return res.status(500).json({ message: updateError.message })
    }

    return res.json({ role: newRole })
})
//#endregion UPDATE


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

