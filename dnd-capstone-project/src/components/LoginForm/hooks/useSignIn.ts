// useSignIn.ts
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import supabase from "@/frontend-supabase";


/**
 * Handles the validation of inputs, error messages, and sends the the user's inputted data to the backend to sign in the user.  
 * When a user signs up successfully, they are automatically logged in and navigated to `/home`.
 * 
 * @returns an object containing the following:
 * - `handleUserSignIn`: handler function for when the user submits the form. 
 * - `email`, `password`: the user's inputted data for the sign in fields.
 * - `setEmail`, `setPassword`: handler functions to pass into the form to validate their input. 
 */
export function useSignIn() {
    const navigate = useNavigate();
    
    /** State that contains the user's inputted data for both input fields.  */
    const [signInData, setSignInData] = useState({
        email: "",
        password: ""
    });
    

    /**
     * When user attempts to submit their sign in, cross check their input data & get their email if signed in with username, 
     * once the user is verified, send the data to the backend to sign in with supabase and navigate to the `home` page.  
     * 
     * @param e the form data event. 
     * @returns The Promise<void> for the async await. 
     */
    async function handleUserSignIn(e: React.FormEvent) {
        e.preventDefault();
        
        if ( checkSigninDataIsEmpty(/*signInData*/) ) {
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
        
        const {/* data, */ error} = await supabase.auth.signInWithPassword({
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
    




    /**
     * Determines if signInData contains any empty fields.  
     * 
     * @param signInData 
     * 
     * @returns a boolean value for if `signInData` has any field that is empty.  
     */
    function checkSigninDataIsEmpty(/*signInData: Record<string, string>*/): boolean {
        return Object.values(signInData).some( value => value.length === 0 || value === null );
    }





    /**
     * Retrives a user's email from the database in the event they attempt to sign in with their username. 
     * 
     * @remarks Supabase requires email (or phone) as a credential sign in for `signInWithPassword`. 
     * 
     * @param username A string representing the user's username which they entered to sign in. 
     * @returns The Promise for the async await that contains the retrieved email. 
     */
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