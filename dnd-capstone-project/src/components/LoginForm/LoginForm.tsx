// import { input } from "motion/react-client";

// #region —— Imports Section —— //
import '@/components/LoginForm/LoginForm.css'

import { Tabs, TabsList, TabsTrigger, TabsContent, TabsContents } from "../animate-ui/primitives/radix/tabs";
import { ToggleGroup, ToggleGroupItem } from '@/components/animate-ui/components/radix/toggle-group';
import { useState, useEffect } from "react";

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
    const [signInData, setSignInData] = useState({
        username: "",
        email: "",
        password: ""
    });
    
    
    async function handleUserSignIn(e: React.FormEvent) {
        e.preventDefault();
    
        const {data, error} = await supabase.auth.signInWithPassword({
            email: signInData.email,
            password: signInData.password
        });
    
        if (error) {
            console.error("ERROR Logging in user! ", error);
            return;
        }
    
        console.log("Login success! ", data);
        
        navigate('/home');
    
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
    const [signUpData, setSignUpData] = useState({
        username: "",
        email: "",
        password: "",
        role: "",
    });


    function validateUsername(incomingUsername: string) {
        setSignUpData({...signUpData, username: incomingUsername});
    
        // const [isValid, setIsValid] = useState(false);
        const usernameRestrictions = /^[a-zA-Z0-9]{3,32}$/;
        // const inputField = document.getElementById(inputElement.id);

        console.log("incomingUsername: ", incomingUsername);
        
        
        if (usernameRestrictions.test(incomingUsername)) {
            console.log("success!");
        }
        else {
            console.log("fails!");
        }
        

    }
    
    async function handleUserSignUp(e: React.FormEvent) {
        e.preventDefault();
    
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
                <label className="Label" htmlFor="signup-username">
                    <span className="Label_Text Outline Stylized">Username</span>
                </label>
                
                <div className="InputBox_Inner"> 
                    <img src={imagePaths["nameplate"]} alt="A Nameplate" className="Nameplate" />
                    
                    <div className="Input_Wrapper">
                        <input 
                            type="text" className="Input" id="signup-username" 
                            placeholder="Enter Your Name..." value={signUpData.username}
                            // onChange={(e) => setSignUpData({...signUpData, username: e.target.value})} 
                            onChange={(e) => validateUsername(e.target.value)} /> 
                        {/* <div className="Password-Icon-Btn"></div> */}
                    </div>
                </div>
    
                <span className="Input_Error Stylized" id="signUp_username_error">username error message</span>
    
            </div>
        
            <div className="InputBox_Outer">
                <label className="Label" htmlFor="signup-email">
                    <span className="Label_Text Outline Stylized">Email</span>
                </label>
    
                <div className="InputBox_Inner"> 
                    <img src={imagePaths["nameplate"]} alt="A Nameplate" className="Nameplate" />
                    <div className="Input_Wrapper">
                        <input 
                            type="email" className="Input" id="signup-email" 
                            placeholder="Enter Your Email..." value={signUpData.email} 
                            onChange={(e) => setSignUpData({...signUpData, email: e.target.value})}  /> 
                        {/* <div className="Password-Icon-Btn"></div> */}
                    </div>
                </div>
    
                <span className="Input_Error Stylized" id="signUp_email_error">email error message</span>
    
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
                            className="Input" id="signup-password" 
                            placeholder="Choose a Password..." value={signUpData.password}
                            onChange={(e) => setSignUpData({...signUpData, password: e.target.value})} />
                        {/* <div className="Password-Icon-Btn"> */}
    
                        <button type="button" className="Password_Icon_Btn" onClick={() => togglePasswordVisibility("signup-password")}>
                            <img src={passwordVisibility["signup-password"] 
                                ? imagePaths["eye_visible"] : imagePaths["eye_hidden"] } 
                                alt="Toggle Password Visibility" />
                        </button>
                        {/* </div> */}
    
                    </div>
                </div>
    
                <span className="Input_Error Stylized" id="signUp_password_error">password message</span>
    
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
                            className="Input" id="signup-password-confirm" 
                            placeholder="Confirm Password..." />
                        <button type="button" className="Password_Icon_Btn" onClick={() => togglePasswordVisibility("signup-password-confirm")}>
                            <img src={passwordVisibility["signup-password-confirm"] 
                                ? imagePaths["eye_visible"] : imagePaths["eye_hidden"] } 
                                alt="Toggle Password Visibility" />
                        </button>
    
                    </div>
    
                </div>
    
                <span className="Input_Error Stylized" id="signUp_password_confirm_error">confirm password error message</span>
    
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