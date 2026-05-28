// import { input } from "motion/react-client";
import { Tabs, TabsList, TabsTrigger, TabsContent, TabsContents } from "../animate-ui/primitives/radix/tabs";
import './LoginForm.css'
import { useState } from "react";

export default function LoginForm() {
    type ImageKey = "nameplate" | "eye_hidden" | "eye_visible"; 
    const imagePaths: Record<ImageKey, string> = {
        nameplate: "src/assets/loginform/book-nameplate-gold.png",
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



    const [signUpData, setSignUpData] = useState({
        username: "",
        email: "",
        password: "",
    })


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



    const signInForm = (
        <form className="LoginFormBox">
            <h2 className="Stylized">Continue the Tale</h2>

            <div className="InputBox-Outer">
                <label className="Label" htmlFor="login-username">
                    <span className="Label-Text Outline Stylized" >Username / Email</span>
                </label>

                <div className="InputBox-Inner"> 
                    <img src={imagePaths["nameplate"]} alt="A Nameplate" className="Nameplate" />
                    <div className="Input-Wrapper">
                        <input type="text" className="Input" id="login-username" placeholder="Username or Email..." /> 
                        {/* <div className="Password-Icon-Btn"></div> */}
                    </div>
                </div>
            </div>

            <div className="InputBox-Outer">
                <label className="Label" htmlFor="login-password">
                    <span className="Label-Text Outline Stylized">Password</span>
                </label>

                <div className="InputBox-Inner"> 
                    <img src={imagePaths["nameplate"]} alt="A Nameplate" className="Nameplate" />

                    <div className="Input-Wrapper">
                        <input 
                            type={passwordVisibility["login-password"] ? "text" : "password"}
                            className="Input" id="login-password" placeholder="Password..." />
                        
                        <div className="Password-Icon-Btn">
                            <button type="button" className="" onClick={() => togglePasswordVisibility("login-password")}>
                                <img src={passwordVisibility["login-password"] 
                                    ? imagePaths["eye_visible"] : imagePaths["eye_hidden"] } 
                                    alt="Toggle Password Visibility" />
                            </button>
                        </div>

                    </div>

                </div>
            </div>

            <div className="rhombus-outer">
                <button type="submit" className="rhombus-inner">
                    <span className="Btn-Text Outline Stylized">SIGN IN</span>
                </button>
            </div>            
        </form>
    );



    const signUpForm = (
        <form className="LoginFormBox" onSubmit={handleUserSignUp}>
            <h2 className="Stylized">Write a New Story</h2>

            <div className="InputBox-Outer">
                <label className="Label" htmlFor="signup-username">
                    <span className="Label-Text Outline Stylized">Username</span>
                </label>
                
                <div className="InputBox-Inner"> 
                    <img src={imagePaths["nameplate"]} alt="A Nameplate" className="Nameplate" />
                    
                    <div className="Input-Wrapper">
                        <input 
                            type="text" className="Input" id="signup-username" 
                            placeholder="Enter Your Name..." value={signUpData.username}
                            onChange={(e) => setSignUpData({...signUpData, username: e.target.value})} /> 
                        {/* <div className="Password-Icon-Btn"></div> */}
                    </div>
                </div>
            </div>
        
            <div className="InputBox-Outer">
                <label className="Label" htmlFor="signup-email">
                    <span className="Label-Text Outline Stylized">Email</span>
                </label>

                <div className="InputBox-Inner"> 
                    <img src={imagePaths["nameplate"]} alt="A Nameplate" className="Nameplate" />
                    <div className="Input-Wrapper">
                        <input 
                            type="email" className="Input" id="signup-email" 
                            placeholder="Enter Your Email..." value={signUpData.email} 
                            onChange={(e) => setSignUpData({...signUpData, email: e.target.value})}  /> 
                        {/* <div className="Password-Icon-Btn"></div> */}
                    </div>
                </div>
            </div>

            
            <div className="InputBox-Outer">
                <label className="Label" htmlFor="signup-password">
                    <span className="Label-Text Outline Stylized">Password</span>
                </label>
                
                <div className="InputBox-Inner"> 
                    <img src={imagePaths["nameplate"]} alt="A Nameplate" className="Nameplate" />
                    <div className="Input-Wrapper">
                        
                        <input 
                            type={passwordVisibility["signup-password"] ? "text" : "password"}
                            className="Input" id="signup-password" 
                            placeholder="Choose a Password..." value={signUpData.password}
                            onChange={(e) => setSignUpData({...signUpData, password: e.target.value})} />
                        {/* <div className="Password-Icon-Btn"> */}

                        <button type="button" className="Password-Icon-Btn" onClick={() => togglePasswordVisibility("signup-password")}>
                            <img src={passwordVisibility["signup-password"] 
                                ? imagePaths["eye_visible"] : imagePaths["eye_hidden"] } 
                                alt="Toggle Password Visibility" />
                        </button>
                        {/* </div> */}

                    </div>
                </div>
            </div>
            
            
            <div className="InputBox-Outer">
                <label className="Label" htmlFor="signup-password">
                    <span className="Label-Text Outline Stylized">Confirm Password</span>
                </label>
                
                <div className="InputBox-Inner"> 
                    <img src={imagePaths["nameplate"]} alt="A Nameplate" className="Nameplate" />
                    
                    <div className="Input-Wrapper">
                        
                        <input 
                            type={passwordVisibility["signup-password-confirm"] ? "text" : "password"}
                            className="Input" id="signup-password-confirm" 
                            placeholder="Confirm Password..." />
                        <button type="button" className="Password-Icon-Btn" onClick={() => togglePasswordVisibility("signup-password-confirm")}>
                            <img src={passwordVisibility["signup-password-confirm"] 
                                ? imagePaths["eye_visible"] : imagePaths["eye_hidden"] } 
                                alt="Toggle Password Visibility" />
                        </button>

                    </div>

                </div>
            </div>

            <div className="InputBox-Outer">
                <label className="Label" htmlFor="signup-password">
                    <span className="Label-Text Outline Stylized">I am a... DM / Player</span>
                </label>
            </div>

            <div className="rhombus-outer">
                <button type="submit" className="rhombus-inner">
                    <span className="Btn-Text Outline Stylized">SIGN UP</span>
                </button>
            </div>
        </form>
    )



    return (
        <div className="TabsRoot">
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