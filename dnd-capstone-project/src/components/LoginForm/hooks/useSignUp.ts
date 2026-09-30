// useSignUp.ts
import { useState, useRef } from "react";
import type { SignUpData, InputClassKey, signupErrorKey } from "../types";
import { inputClassMap } from "../constants";
import supabase from "@/lib/frontend-supabase";
// import { useNavigate } from 'react-router-dom';


/**
 * Handles the validation of inputs, error messages, and sends the the user's inputted data to the backend to register the user.  
 * When a user signs up successfully, they are automatically logged in and navigated to `/home`.
 * 
 * @returns an object containing the following:
 * - `username`, `email`, & `passsword`: the user's inputted data for the registration fields. 
 * - `usernameErrorMsg`, `emailErrorMsg`, `passwordErrorMsg`, & `confirmPasswordErrorMsg`: error message to render to user for each input field. 
 * - `usernameClass`, `emailClass`, `passwordClass`, & `confirmPasswordClass`: class that renders the input field's state to user
 * - `handleUserSignUp`: handler function for when the user submits the form. 
 * - `validateUsername`, `validateEmail`, `validatePassword`, `validateConfirmPassword`, `setRole`: handler functions to pass into the form to validate each input. 
 */
export function useSignUp() {
    /** State that contains the user's inputted data for each input field. */
    const [signUpData, setSignUpData] = useState<SignUpData>({
        username: "",
        email: "",
        password: "",
        role: "player",
    });

    /** State that contains the error message to render to user for each input field. When blank renders as no error. */
    const [signupErrorMsg, setSignupErrorMsg] = useState({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    /** State that contains the status of each input field's validaiton. Can be only `empty`, `error`, or `success` */
    const [inputClasses, setInputClasses] = useState<Record<signupErrorKey, InputClassKey>>({
        username: "empty",
        email: "empty",
        password: "empty", 
        confirm_password: "empty"
    });

    const passwordRef = useRef("");
    
    // const navigate = useNavigate();

    



    /**
     * Validates the user's attempted input for the `username` field is correct according to the regex rules, 
     * renders an error message to the user if not. 
     * 
     * @remarks Attached to a onChange event that calls this function as they type their input into the input field.
     * 
     * @param incomingUsername the user's inputted username
     */
    function validateUsername(incomingUsername: string) {
        setSignUpData({...signUpData, username: incomingUsername});
    
        const usernameRegex = /^[a-zA-Z0-9]{3,32}$/;
        const errorMsg = "Please enter a username of at least 3 characters.";

        // console.log("incomingUsername: ", incomingUsername);

        inputValidationHelper(incomingUsername, 'username', usernameRegex, errorMsg)
    }





    /**
     * Validates the user's attempted input for the `email` field is correct according to the regex rules, 
     * renders an error message to the user if not. 
     * 
     * @remarks Attached to a onChange event that calls this function as they type their input into the input field.
     * 
     * @param incomingEmail the user's inputted `email`
     */
    function validateEmail(incomingEmail: string) {
        setSignUpData({...signUpData, email: incomingEmail});

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const errorMsg = "Please enter a valid email."

        // console.log("incomingUsername: ", incomingEmail);

        inputValidationHelper(incomingEmail, "email", emailRegex, errorMsg);
    }





    /**
     * Validates the user's attempted input for the `password` field is correct according to the regex rules, 
     * renders an error message to the user if not. 
     * 
     * @remarks Attached to a onChange event that calls this function as they type their input into the input field.
     * 
     * @param incomingPassword the user's inputted `password`
     */
    function validatePassword(incomingPassword: string) {
        passwordRef.current = incomingPassword;

        setSignUpData({...signUpData, password: incomingPassword});

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const errorMsg = "Please enter a password that contains at least 8 characters, 1 or more uppercase letters, symbol, and number.";
        
        // console.log("incomingPassword: ", incomingPassword);

        inputValidationHelper(incomingPassword, "password", passwordRegex, errorMsg);
    }





    /**
     * Validates the user's attempted input for the `confirm password` field is correct according to the regex rules, 
     * renders an error message to the user if not. 
     * 
     * @remarks Attached to a onChange event that calls this function as they type their input into the input field.
     * 
     * @param incomingConfirmPassword the user's inputted `confirmedCassword`
     */
    function validateConfirmPassword(incomingConfirmPassword: string) {
        const currentPassword = passwordRef.current;

        // console.log("incomingConfirmPassword: ", incomingConfirmPassword);
        // console.log("currentPassword: ", currentPassword);
        
        if (incomingConfirmPassword === currentPassword) {
            // console.log("success!");
            setSignupErrorMsg(prev => ({ ...prev, confirm_password: "" }));
            setInputClasses(prev => ({ ...prev, confirm_password: "success", password: "success" }));
        } else {
            // console.log("fails!");
            setSignupErrorMsg(prev => ({ ...prev, confirm_password: "Please match your Password to Confirm Password" }));
            setInputClasses(prev => ({ ...prev, confirm_password: "error", password: "error" }));
        }
    };


    

    
    /**
     * Validates the user's input by assigning the appropriate field the `empty`, `error`, or `success` state. 
     * 
     * @param userInput the user's attempted input
     * @param inputType the type of input field that the user is sending input to.
     * @param inputRegex the regex for that input field.
     * @param errorMsg the error message rendered to the user 
     */
    function inputValidationHelper(userInput: string, inputType: signupErrorKey, inputRegex: RegExp, errorMsg: string) {
        
        if (userInput === null || userInput.length === 0) {
            // console.log("empty!");
            setSignupErrorMsg(prev => ({ ...prev, [inputType]: "" }));
            // setInputClass(inputClassMap["empty"]);
            setInputClasses(prev => ({ ...prev, [inputType]: "empty" as InputClassKey }))
        }
        else if ( !inputRegex.test(userInput) ) {
            // console.log("fails!");
            setSignupErrorMsg(prev => ({ ...prev, [inputType]: errorMsg }));
            // setInputClass(inputClassMap["error"]);
            setInputClasses(prev => ({ ...prev, [inputType]: "error" as InputClassKey }))
        }
        else {
            // console.log("success!");
            setSignupErrorMsg(prev => ({ ...prev, [inputType]: "" }));
            // setInputClass(inputClassMap["success"]);
            setInputClasses(prev => ({ ...prev, [inputType]: "success" as InputClassKey }))
        }
    };

    function checkSignupDataHasError(inputClasses: Record<signupErrorKey, InputClassKey>): boolean {
        return Object.values(inputClasses).some(
            value => value !== "success" 
        );
    };

    



    /**
     * When user attempts to submit their sign up, cross check their input data and if verified, 
     * send it to the backend to register data to supabase, then begin their session & navigate to the `home` page. 
     * 
     * @param e the form data event. 
     * @returns The Promise<void> for the async await. 
     */
    async function handleUserSignUp(e: React.FormEvent) {
        e.preventDefault();

        if ( checkSignupDataHasError(inputClasses) ) {
            // console.log("ERROR: Missing data fields");
            return;
        }
    
        const res = await fetch('http://localhost:8000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(signUpData)
        });
        
        const data = await res.json();
        if (res.ok && data.session) {
            await supabase.auth.setSession({ 
                access_token: data.session.access_token,  
                refresh_token: data.session.refresh_token,  
            });

            // navigate('/home');
        }

    };





    return {    
        username:   signUpData.username,
        email:      signUpData.email,
        password:   signUpData.password,

        usernameErrorMsg:           signupErrorMsg.username,
        emailErrorMsg:              signupErrorMsg.email,
        passwordErrorMsg:           signupErrorMsg.password,
        confirmPasswordErrorMsg:    signupErrorMsg.confirm_password,
        
        usernameClass:          inputClassMap[inputClasses.username],
        emailClass:             inputClassMap[inputClasses.email],
        passwordClass:          inputClassMap[inputClasses.password],
        confirmPasswordClass:   inputClassMap[inputClasses.confirm_password],

        handleUserSignUp,
        validateUsername,
        validateEmail, 
        validatePassword, 
        validateConfirmPassword, 
        setRole: (value: "dm" | "player") => setSignUpData(
            prev => ({ ... prev, role: value })
        )
    }; 

};