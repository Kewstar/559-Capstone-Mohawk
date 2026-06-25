// useSignUp.ts
import { useState, useRef } from "react";
import type { SignUpData, InputClassKey, signupErrorKey } from "../types";
import { inputClassMap } from "../constants";

export function useSignUp() {
    const [signUpData, setSignUpData] = useState<SignUpData>({
        username: "",
        email: "",
        password: "",
        role: "player",
    });

    const [signupErrorMsg, setSignupErrorMsg] = useState({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const [inputClasses, setInputClasses] = useState<Record<signupErrorKey, InputClassKey>>({
        username: "empty",
        email: "empty",
        password: "empty", 
        confirm_password: "empty"
    });

    const passwordRef = useRef("");

    

    // Username Validation 
    function validateUsername(incomingUsername: string) {
        setSignUpData({...signUpData, username: incomingUsername});
    
        const usernameRegex = /^[a-zA-Z0-9]{3,32}$/;
        const errorMsg = "Please enter a username of at least 3 characters.";

        console.log("incomingUsername: ", incomingUsername);

        inputValidationHelper(incomingUsername, 'username', usernameRegex, errorMsg)
    }


    // Email Validation 
    function validateEmail(incomingEmail: string) {
        setSignUpData({...signUpData, email: incomingEmail});

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const errorMsg = "Please enter a valid email."

        console.log("incomingUsername: ", incomingEmail);

        inputValidationHelper(incomingEmail, "email", emailRegex, errorMsg);
    }



    // Password Validation 
    function validatePassword(incomingPassword: string) {
        passwordRef.current = incomingPassword;

        setSignUpData({...signUpData, password: incomingPassword});

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const errorMsg = "Please enter a password that contains at least 8 characters, 1 or more uppercase letters, symbol, and number.";
        
        console.log("incomingPassword: ", incomingPassword);

        inputValidationHelper(incomingPassword, "password", passwordRegex, errorMsg);
    }


    // Confirm Password Validation 
    function validateConfirmPassword(incomingConfirmPassword: string) {
        const currentPassword = passwordRef.current;

        console.log("incomingConfirmPassword: ", incomingConfirmPassword);
        console.log("currentPassword: ", currentPassword);
        
        if (incomingConfirmPassword === currentPassword) {
            console.log("success!");
            setSignupErrorMsg(prev => ({ ...prev, confirm_password: "" }));
            setInputClasses(prev => ({ ...prev, confirm_password: "success", password: "success" }));
        } else {
            console.log("fails!");
            setSignupErrorMsg(prev => ({ ...prev, confirm_password: "Please match your Password to Confirm Password" }));
            setInputClasses(prev => ({ ...prev, confirm_password: "error", password: "error" }));
        }
    };

    
    function inputValidationHelper(userInput: string, inputType: signupErrorKey, inputRegex: RegExp, errorMsg: string) {
        
        if (userInput === null || userInput.length === 0) {
            console.log("empty!");
            setSignupErrorMsg(prev => ({ ...prev, [inputType]: "" }));
            // setInputClass(inputClassMap["empty"]);
            setInputClasses(prev => ({ ...prev, [inputType]: "empty" as InputClassKey }))
        }
        else if ( !inputRegex.test(userInput) ) {
            console.log("fails!");
            setSignupErrorMsg(prev => ({ ...prev, [inputType]: errorMsg }));
            // setInputClass(inputClassMap["error"]);
            setInputClasses(prev => ({ ...prev, [inputType]: "error" as InputClassKey }))
        }
        else {
            console.log("success!");
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

    
    async function handleUserSignUp(e: React.FormEvent) {
        e.preventDefault();

        if ( checkSignupDataHasError(inputClasses) ) {
            console.log("ERROR: Missing data fields");
            return;
        }
    
        const res = await fetch('http://localhost:8000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(signUpData)
        });
        const data = await res.json();
    
        console.log('Signup Response: ', data);
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