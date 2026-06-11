import express from 'express';
import cors from 'cors';
import { log } from 'console';
import supabase from './backend-supabase';

const PORT = 8000;

const app = express();

app.use(cors({ origin: 'http://localhost:5173' })) 
app.use(express.json()) 


// —— CRUD OPERATIONS —— //

//  — CREATE — // 
app.post('/signup', async (req, res) => {
    const { username, email, password, role } = req.body;

    const {data, error} = await supabase.auth.signUp({
        email: email,
        password: password,
    });

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
    res.json({ message: "Signup Success!" })
});

// 

// ==========


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

