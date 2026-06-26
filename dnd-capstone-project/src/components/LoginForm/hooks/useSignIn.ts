// useSignIn.ts
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import supabase from "@/frontend-supabase";


export function useSignIn() {
    const navigate = useNavigate();
    
    const [signInData, setSignInData] = useState({
        email: "",
        password: ""
    });
    

    async function handleUserSignIn(e: React.FormEvent) {
        e.preventDefault();
        
        if ( checkSigninDataIsEmpty(signInData) ) {
            // console.log("ERROR: Missing data fields");
            return;
        }
        
        
        // console.log("attempting signin");
        let loginName = "";
        
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if ( signInData.email && emailRegex.test(signInData.email) ) {
            // user signs in with email 
            loginName = signInData.email;
        } else {

            try {
                // user signs in with username
                loginName = await getEmailFromUsername(signInData.email);
            } catch (error) {
                // console.error(`ERROR: Could not resolve username ${error}`);
                return;
            }

        }
        
        const {data, error} = await supabase.auth.signInWithPassword({
            email: loginName,
            password: signInData.password
        });
        
        if (error) {
            console.error("ERROR Logging in user! ", error);
            return;
        }
        
        // console.log("Login success! ", data);
        
        navigate('/home');
    }
    
    function checkSigninDataIsEmpty(data: Record<string, string>): boolean {
        return Object.values(data).some( value => value.length === 0 || value === null );
    }

    async function getEmailFromUsername(username: string) {
        // console.log("getemailfromusername");
        
        const res = await fetch(`http://localhost:8000/getEmail?username=${encodeURIComponent(username)}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!res.ok) {
            throw new Error(`ERROR: User not found: ${username}`);
        }

        const userEmail = await res.json();
        // console.log(`signinWithUsername Response: ${userEmail}`);
        
        return userEmail;
    }


    return { 
        handleUserSignIn, 
        email: signInData.email,
        password: signInData.password,
        setEmail: (value: string) => setSignInData(
            prev => ({ ...prev, email: value })
        ),
        setPassword: (value: string) => setSignInData(
            prev => ({ ...prev, password: value })
        ),
    };
};