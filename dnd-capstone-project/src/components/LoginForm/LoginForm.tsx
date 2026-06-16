// import { input } from "motion/react-client";

// #region —— Imports Section —— //
import '@/components/LoginForm/LoginForm.css'

import { Tabs, TabsList, TabsTrigger, TabsContent, TabsContents } from "../animate-ui/primitives/radix/tabs";
import { ToggleGroup, ToggleGroupItem } from '@/components/animate-ui/components/radix/toggle-group';
import { useState } from "react";

import supabase from "@/frontend-supabase";
import { useNavigate } from 'react-router-dom';
// #endregion



// #region —— Exported LoginForm —— //
export default function LoginForm() {
    // #region —— Elements Used Across Both Forms —— //
    const navigate = useNavigate();
    
    
    type ImageKey = "nameplate" | "eye_hidden" | "eye_visible"; 
    const imagePaths: Record<ImageKey, string> = {
        nameplate: "src/assets/loginform/book-nameplate-gold-1600x200.png",
        eye_hidden: "src/assets/loginform/eye-hidden.png",
        eye_visible: "src/assets/loginform/eye-visible.png"
    };
    
    
    const [passwordVisibility, setPasswordVisibility] = useState({
        "login-password": false,
        "signup-password": false,
        "signup-password-confirm": false,
    });
    
    type PasswordField = "login-password" | "signup-password" | "signup-password-confirm";
    const togglePasswordVisibility = (fieldId: PasswordField) => {
        setPasswordVisibility(prev => ({ ...prev, [fieldId]: !prev[fieldId] }));
    };

    // #endregion
    
    
    
    
    // #region —— Sign In Form Section —— //
    // interface SignInData {
    //     email: string;
    //     password: string;
    // }
    
    const [signInData, setSignInData] = useState({
        email: "",
        password: ""
    });
    

    function checkSigninDataIsEmpty(data: Record<string, string>): boolean {
        return Object.values(data).some( value => value.length === 0 || value === null );
    }
    
    async function handleUserSignIn(e: React.FormEvent) {
        e.preventDefault();
        
        if ( checkSigninDataIsEmpty(signInData) ) {
            console.log("ERROR: Missing data fields");
            return;
        }


        console.log("attempting signin");
        let loginName = "";

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (signInData.email.length === 0 || signInData.email === null) {
            console.log("blank if state");
            
        }
        else if ( emailRegex.test(signInData.email) ) {
            // user signs in with email 
            loginName = signInData.email;
        } else {
            // user signs in with username
            loginName = await getEmailFromUsername(signInData.email);
        }

        
        const {data, error} = await supabase.auth.signInWithPassword({
            email: loginName,
            password: signInData.password
        });
    
        if (error) {
            console.error("ERROR Logging in user! ", error);
            return;
        }
    
        console.log("Login success! ", data);
        
        navigate('/home');
    
    }

    async function getEmailFromUsername(username: string) {
        console.log("getemailfromusername");
        
        
        const res = await fetch(`http://localhost:8000/getEmail?username=${encodeURIComponent(username)}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        const userEmail = await res.json();
    
        console.log('signinWithUsername Response: ', userEmail);

        return userEmail;
    }
    
    
    
    const signInForm = (
        <form className="LoginFormBox" onSubmit={handleUserSignIn}>
            <h2 className="heading Stylized">Continue the Tale</h2>
    
            <div className="InputBox_Outer">
                <label className="Label" htmlFor="login-username">
                    <span className="Label_Text Outline Stylized">Username / Email</span>
                </label>
    
                <div className="InputBox_Inner"> 
                    <img src={imagePaths["nameplate"]} alt="A Nameplate" className="Nameplate" />
                    <div className="Input_Wrapper">
                        <input 
                            type="text" className="Input" id="login-username" 
                            placeholder="Username or Email..." value={signInData.email}
                            onChange={(e) => setSignInData({...signInData, email: e.target.value})} /> 
                        {/* <div className="Password-Icon-Btn"></div> */}
                    </div>
                </div>
            </div>
    
            <div className="InputBox_Outer">
                <label className="Label" htmlFor="login-password">
                    <span className="Label_Text Outline Stylized">Password</span>
                </label>
    
                <div className="InputBox_Inner"> 
                    <img src={imagePaths["nameplate"]} alt="A Nameplate" className="Nameplate" />
    
                    <div className="Input_Wrapper">
                        <input 
                            type={passwordVisibility["login-password"] ? "text" : "password"}
                            className="Input" id="login-password" 
                            placeholder="Password..." value={signInData.password}
                            onChange={(e) => setSignInData({...signInData, password: e.target.value})} />
                        
                        <div className="Password_Icon_Btn">
                            <button type="button" onClick={() => togglePasswordVisibility("login-password")}>
                                <img src={passwordVisibility["login-password"] 
                                    ? imagePaths["eye_visible"] : imagePaths["eye_hidden"] } 
                                    alt="Toggle Password Visibility" />
                            </button>
                        </div>
    
                    </div>
    
                </div>
            </div>
    
            <div className="rhombus_outer">
                <button type="submit" className="rhombus_inner">
                    <span className="Btn_Text Outline Stylized">SIGN IN</span>
                </button>
            </div>         
        </form>
    );
    // #endregion
    
    
    
    
    // #region —— Sign Up Form Section —— //    
    // interface SignUpData {
    //     username: string;
    //     email: string;
    //     password: string;
    //     role: "dm | player";
    // }

    const [signUpData, setSignUpData] = useState({
        username: "",
        email: "",
        password: "",
        role: "dm | player",
    });

    const [signupErrorMsg, setSignupErrorMsg] = useState({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    });
    type signupErrorKey = keyof typeof signupErrorMsg; // "username" | "email" | "password" | "confirm_password"; 

    // const [inputClassMap, setInputClassMap] = useState({
    //     empty: "",
    //     error: "Input_Error",
    //     success: "Input_Success",
    // });

    type InputClassKey = "empty" | "error" | "success"; 
    const inputClassMap: Record<InputClassKey, string> = {
        empty: "",
        error: "Input_Error",
        success: "Input_Success",
    };
    // const [inputClass, setInputClass] = useState(inputClassMap["empty"]);


    const [inputClasses, setInputClasses] = useState<Record<signupErrorKey, InputClassKey>>({
        username: "empty",
        email: "empty",
        password: "empty", 
        confirm_password: "empty"
    });


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
        setSignUpData({...signUpData, password: incomingPassword});

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const errorMsg = "Please enter a password that contains at least 8 characters, 1 or more uppercase letters, symbol, and number.";
        
        console.log("incomingPassword: ", incomingPassword);

        inputValidationHelper(incomingPassword, "password", passwordRegex, errorMsg);
    }


    // Confirm Password Validation 
    function validateConfirmPassword(incomingConfirmPassword: string) {
        const currentPassword = signUpData.password; 

        console.log("incomingConfirmPassword: ", incomingConfirmPassword);
        console.log("currentPassword: ", currentPassword);
        

        if (incomingConfirmPassword === currentPassword) {
            console.log("success!");
            setSignupErrorMsg({...signupErrorMsg, "confirm_password": ""});
            setInputClasses({...inputClasses, "confirm_password": "success"})
        }
        else {
            console.log("fails!");
            setSignupErrorMsg({...signupErrorMsg, "confirm_password": "Please match your Password to Confirm Password"});
            // setInputClass(inputClassMap["error"]);
            setInputClasses({...inputClasses, "confirm_password": "error"})
            setInputClasses({...inputClasses, "password": "error"})
        }  
    }


    function inputValidationHelper(userInput: string, inputType: signupErrorKey, inputRegex: RegExp, errorMsg: string) {
        
        if (userInput === null || userInput.length === 0) {
            console.log("empty!");
            setSignupErrorMsg({...signupErrorMsg, [inputType]: ""});
            // setInputClass(inputClassMap["empty"]);
            setInputClasses({...inputClasses, [inputType]: "empty"})
        }
        else if ( !inputRegex.test(userInput) ) {
            console.log("fails!");
            setSignupErrorMsg({...signupErrorMsg, [inputType]: errorMsg});
            // setInputClass(inputClassMap["error"]);
            setInputClasses({...inputClasses, [inputType]: "error"})
        }
        else {
            console.log("success!");
            setSignupErrorMsg({...signupErrorMsg, [inputType]: ""});
            // setInputClass(inputClassMap["success"]);
            setInputClasses({...inputClasses, [inputType]: "success"})
        }
        
    }

    function checkSignupDataIsError(inputClasses: Record<signupErrorKey, InputClassKey>): boolean {
        return Object.values(inputClasses).some(
            value => value !== "success" 
        );
    }

    
    async function handleUserSignUp(e: React.FormEvent) {
        e.preventDefault();

        if ( checkSignupDataIsError(inputClasses) ) {
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
    }
    


    const signUpForm = (
        <form className="LoginFormBox" onSubmit={handleUserSignUp}>
            <h2 className="heading Stylized">Write a New Story</h2>
    
            <div className="InputBox_Outer">
                <label className="Label" htmlFor="signup_username">
                    <span className="Label_Text Outline Stylized">Username</span>
                </label>
                
                <div className="InputBox_Inner"> 
                    <img src={imagePaths["nameplate"]} alt="A Nameplate" className="Nameplate" />
                    
                    <div className="Input_Wrapper">
                        <input 
                            type="text" 
                            className={`Input ${inputClassMap[inputClasses.username]}`} 
                            id="signup_username"  
                            placeholder="Enter Your Name..." value={signUpData.username}
                            // onChange={(e) => setSignUpData({...signUpData, username: e.target.value})} 
                            onChange={(e) => validateUsername(e.target.value)} /> 
                        {/* <div className="Password-Icon-Btn"></div> */}
                    </div>
                </div>
    
                <span className="Input_Error_Message Stylized" id="signup_username_error">{signupErrorMsg.username}</span>
    
            </div>
        
            <div className="InputBox_Outer">
                <label className="Label" htmlFor="signup-email">
                    <span className="Label_Text Outline Stylized">Email</span>
                </label>
    
                <div className="InputBox_Inner"> 
                    <img src={imagePaths["nameplate"]} alt="A Nameplate" className="Nameplate" />
                    <div className="Input_Wrapper">
                        <input 
                            type="email" 
                            className={`Input ${inputClassMap[inputClasses.email]}`} 
                            id="signup-email" 
                            placeholder="Enter Your Email..." value={signUpData.email} 
                            // onChange={(e) => setSignUpData({...signUpData, email: e.target.value})}  
                            onChange={(e) => validateEmail(e.target.value)} />  
                        {/* <div className="Password-Icon-Btn"></div> */}
                    </div>
                </div>
    
                <span className="Input_Error_Message Stylized" id="signUp_email_error">{signupErrorMsg.email}</span>
    
            </div>
    
            
            <div className="InputBox_Outer">
                <label className="Label" htmlFor="signup-password">
                    <span className="Label_Text Outline Stylized">Password</span>
                </label>
                
                <div className="InputBox_Inner"> 
                    <img src={imagePaths["nameplate"]} alt="A Nameplate" className="Nameplate" />
                    <div className="Input_Wrapper">
                        
                        <input 
                            type={passwordVisibility["signup-password"] ? "text" : "password"}
                            className={`Input ${inputClassMap[inputClasses.password]}`} 
                            id="signup-password" 
                            placeholder="Choose a Password..." value={signUpData.password}
                            // onChange={(e) => setSignUpData({...signUpData, password: e.target.value})} />
                            onChange={(e) => validatePassword(e.target.value)} />  
                        {/* <div className="Password-Icon-Btn"> */}
    
                        <button type="button" className="Password_Icon_Btn" onClick={() => togglePasswordVisibility("signup-password")}>
                            <img src={passwordVisibility["signup-password"] 
                                ? imagePaths["eye_visible"] : imagePaths["eye_hidden"] } 
                                alt="Toggle Password Visibility" />
                        </button>
                        {/* </div> */}
    
                    </div>
                </div>
    
                <span className="Input_Error_Message Stylized" id="signUp_password_error">{signupErrorMsg.password}</span>
    
            </div>
            
            
            <div className="InputBox_Outer">
                <label className="Label" htmlFor="signup-password">
                    <span className="Label_Text Outline Stylized">Confirm Password</span>
                </label>
                
                <div className="InputBox_Inner"> 
                    <img src={imagePaths["nameplate"]} alt="A Nameplate" className="Nameplate" />
                    
                    <div className="Input_Wrapper">
                        
                        <input 
                            type={passwordVisibility["signup-password-confirm"] ? "text" : "password"}
                            className={`Input ${inputClassMap[inputClasses.confirm_password]}`} 
                            id="signup-password-confirm" 
                            placeholder="Confirm Password..." 
                            onChange={(e) => validateConfirmPassword(e.target.value)} />  
                        <button type="button" className="Password_Icon_Btn" onClick={() => togglePasswordVisibility("signup-password-confirm")}>
                            <img src={passwordVisibility["signup-password-confirm"] 
                                ? imagePaths["eye_visible"] : imagePaths["eye_hidden"] } 
                                alt="Toggle Password Visibility" />
                        </button>
    
                    </div>
    
                </div>
    
                <span className="Input_Error_Message Stylized" id="signUp_password_confirm_error">{signupErrorMsg.confirm_password}</span>
    
            </div>
    
            <div className="InputBox_Outer">
                <span id="role-label" className="Label_Text Outline Stylized">I am a...</span>
    
                <ToggleGroup aria-labelledby="role-label" type="single" variant="outline" 
                    defaultValue="player" className="ToggleRoleGroup" size="sm" 
                    onValueChange={(value: string) => setSignUpData({...signUpData, role: value})}>
                    
                    <ToggleGroupItem value="dm" aria-label="Toggle DM Role" className='ToggleRoleItem'>
                        <span className='Label_Text Outline Stylized'>DM</span>
                    </ToggleGroupItem>
    
                    <ToggleGroupItem value="player" aria-label="Toggle Player Role" className="ToggleRoleItem">
                        <span className='Label_Text Outline Stylized'>Player</span>
                    </ToggleGroupItem>
                </ToggleGroup>
    
            </div>
    
            <div className="rhombus_outer">
                <button type="submit" className="rhombus_inner">
                    <span className="Btn_Text Outline Stylized">SIGN UP</span>
                </button>
            </div>
        </form>
    )
    // #endregion
    
    
    
    return (
        <div className="TabsRoot" id="LoginPageRoot">
            <Tabs defaultValue="sign-in">
            

                <TabsList className="login">
                    <TabsTrigger className="TabsTrigger" value="sign-in">Sign In</TabsTrigger>
                    <TabsTrigger className="TabsTrigger" value="sign-up">Sign Up</TabsTrigger>
                </TabsList>
                

                <TabsContents>
                    <TabsContent className="TabsContent" value="sign-in">
                        {signInForm}
                    </TabsContent>
                    

                    <TabsContent className="TabsContent" value="sign-up">
                        {signUpForm}
                    </TabsContent>
                </TabsContents>

            </Tabs>
        </div>
    );
};
// #endregion