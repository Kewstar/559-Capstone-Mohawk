// // import { input } from "motion/react-client";
// import styles from 'src/components/LoginForm/LoginForm.css'

// import { Tabs, TabsList, TabsTrigger, TabsContent, TabsContents } from "../animate-ui/primitives/radix/tabs";
// import { useState } from "react";
// import supabase from "src/frontend-supabase.ts";
// import { useNavigate } from 'react-router-dom';
// import clsx from 'clsx';

// export default function LoginForm() {
//     const navigate = useNavigate();


//     type ImageKey = "nameplate" | "eye_hidden" | "eye_visible"; 
//     const imagePaths: Record<ImageKey, string> = {
//         nameplate: "src/assets/loginform/book-nameplate-gold.png",
//         eye_hidden: "src/assets/loginform/eye-hidden.png",
//         eye_visible: "src/assets/loginform/eye-visible.png"
//     };

    
//     const [passwordVisibility, setPasswordVisibility] = useState({
//         "login-password": false,
//         "signup-password": false,
//         "signup-password-confirm": false,
//     });
    
//     type PasswordField = "login-password" | "signup-password" | "signup-password-confirm";
//     const togglePasswordVisibility = (fieldId: PasswordField) => {
//         setPasswordVisibility(prev => ({ ...prev, [fieldId]: !prev[fieldId] }));
//     };



//     const [signUpData, setSignUpData] = useState({
//         username: "",
//         email: "",
//         password: "",
//     });

//     async function handleUserSignUp(e: React.FormEvent) {
//         e.preventDefault();

//         const res = await fetch('http://localhost:8000/signup', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(signUpData)
//         });
//         const data = await res.json();

//         console.log('Signup Response: ', data);
//     }
    

//     const [signInData, setSignInData] = useState({
//         username: "",
//         email: "",
//         password: ""
//     });

    
//     async function handleUserSignIn(e: React.FormEvent) {
//         e.preventDefault();

//         const {data, error} = await supabase.auth.signInWithPassword({
//             email: signInData.email,
//             password: signInData.password
//         });

//         if (error) {
//             console.error("ERROR Logging in user! ", error);
//             return;
//         }

//         console.log("Login success! ", data);
        
//         navigate('/home');

//     }


//     const signInForm = (
//         <form className={styles.LoginFormBox} onSubmit={handleUserSignIn}>
//             <h2 className={clsx(styles.heading, styles.Stylized)}>Continue the Tale</h2>

//             <div className={styles.InputBox_Outer}>
//                 <label className={styles.Label} htmlFor="login-username">
//                     <span className={clsx(styles.Label_Text, styles.Outline, styles.Stylized)}>Username / Email</span>
//                 </label>

//                 <div className={styles.InputBox_Inner}> 
//                     <img src={imagePaths["nameplate"]} alt="A Nameplate" className={styles.Nameplate} />
//                     <div className={styles.Input_Wrapper}>
//                         <input 
//                             type="text" className={styles.Input} id="login-username" 
//                             placeholder="Username or Email..." value={signInData.email}
//                             onChange={(e) => setSignInData({...signInData, email: e.target.value})} /> 
//                         {/* <div className="Password-Icon-Btn"></div> */}
//                     </div>
//                 </div>
//             </div>

//             <div className={styles.InputBox_Outer}>
//                 <label className={styles.Label} htmlFor="login-password">
//                     <span className={clsx(styles.Label_Text, styles.Outline, styles.Stylized)}>Password</span>
//                 </label>

//                 <div className={styles.InputBox_Inner}> 
//                     <img src={imagePaths["nameplate"]} alt="A Nameplate" className={styles.Nameplate} />

//                     <div className={styles.Input_Wrapper}>
//                         <input 
//                             type={passwordVisibility["login-password"] ? "text" : "password"}
//                             className={styles.Input} id="login-password" 
//                             placeholder="Password..." value={signInData.password}
//                             onChange={(e) => setSignInData({...signInData, password: e.target.value})} />
                        
//                         <div className={styles.Password_Icon_Btn}>
//                             <button type="button" onClick={() => togglePasswordVisibility("login-password")}>
//                                 <img src={passwordVisibility["login-password"] 
//                                     ? imagePaths["eye_visible"] : imagePaths["eye_hidden"] } 
//                                     alt="Toggle Password Visibility" />
//                             </button>
//                         </div>

//                     </div>

//                 </div>
//             </div>

//             <div className={styles.rhombus_outer}>
//                 <button type="submit" className={styles.rhombus_inner}>
//                     <span className={clsx(styles.Btn_Text, styles.Outline, styles.Stylized)}>SIGN IN</span>
//                 </button>
//             </div>            
//         </form>
//     );



//     const signUpForm = (
//         <form className={styles.LoginFormBox} onSubmit={handleUserSignUp}>
//             <h2 className={clsx(styles.heading, styles.Stylized)}>Write a New Story</h2>

//             <div className={styles.InputBox_Outer}>
//                 <label className={styles.Label} htmlFor="signup-username">
//                     <span className={clsx(styles.Label_Text, styles.Outline, styles.Stylized)}>Username</span>
//                 </label>
                
//                 <div className={styles.InputBox_Inner}> 
//                     <img src={imagePaths["nameplate"]} alt="A Nameplate" className={styles.Nameplate} />
                    
//                     <div className={styles.Input_Wrapper}>
//                         <input 
//                             type="text" className={styles.Input} id="signup-username" 
//                             placeholder="Enter Your Name..." value={signUpData.username}
//                             onChange={(e) => setSignUpData({...signUpData, username: e.target.value})} /> 
//                         {/* <div className="Password-Icon-Btn"></div> */}
//                     </div>
//                 </div>
//             </div>
        
//             <div className={styles.InputBox_Outer}>
//                 <label className={styles.Label} htmlFor="signup-email">
//                     <span className={clsx(styles.Label_Text, styles.Outline, styles.Stylized)}>Email</span>
//                 </label>

//                 <div className={styles.InputBox_Inner}> 
//                     <img src={imagePaths["nameplate"]} alt="A Nameplate" className={styles.Nameplate} />
//                     <div className={styles.Input_Wrapper}>
//                         <input 
//                             type="email" className={styles.Input} id="signup-email" 
//                             placeholder="Enter Your Email..." value={signUpData.email} 
//                             onChange={(e) => setSignUpData({...signUpData, email: e.target.value})}  /> 
//                         {/* <div className="Password-Icon-Btn"></div> */}
//                     </div>
//                 </div>
//             </div>

            
//             <div className={styles.InputBox_Outer}>
//                 <label className={styles.Label} htmlFor="signup-password">
//                     <span className={clsx(styles.Label_Text, styles.Outline, styles.Stylized)}>Password</span>
//                 </label>
                
//                 <div className={styles.InputBox_Inner}> 
//                     <img src={imagePaths["nameplate"]} alt="A Nameplate" className={styles.Nameplate} />
//                     <div className={styles.Input_Wrapper}>
                        
//                         <input 
//                             type={passwordVisibility["signup-password"] ? "text" : "password"}
//                             className={styles.Input} id="signup-password" 
//                             placeholder="Choose a Password..." value={signUpData.password}
//                             onChange={(e) => setSignUpData({...signUpData, password: e.target.value})} />
//                         {/* <div className="Password-Icon-Btn"> */}

//                         <button type="button" className={styles.Password_Icon_Btn} onClick={() => togglePasswordVisibility("signup-password")}>
//                             <img src={passwordVisibility["signup-password"] 
//                                 ? imagePaths["eye_visible"] : imagePaths["eye_hidden"] } 
//                                 alt="Toggle Password Visibility" />
//                         </button>
//                         {/* </div> */}

//                     </div>
//                 </div>
//             </div>
            
            
//             <div className={styles.InputBox_Outer}>
//                 <label className={styles.Label} htmlFor="signup-password">
//                     <span className={clsx(styles.Label_Text, styles.Outline, styles.Stylized)}>Confirm Password</span>
//                 </label>
                
//                 <div className={styles.InputBox_Inner}> 
//                     <img src={imagePaths["nameplate"]} alt="A Nameplate" className={styles.Nameplate} />
                    
//                     <div className={styles.Input_Wrapper}>
                        
//                         <input 
//                             type={passwordVisibility["signup-password-confirm"] ? "text" : "password"}
//                             className={styles.Input} id="signup-password-confirm" 
//                             placeholder="Confirm Password..." />
//                         <button type="button" className={styles.Password_Icon_Btn} onClick={() => togglePasswordVisibility("signup-password-confirm")}>
//                             <img src={passwordVisibility["signup-password-confirm"] 
//                                 ? imagePaths["eye_visible"] : imagePaths["eye_hidden"] } 
//                                 alt="Toggle Password Visibility" />
//                         </button>

//                     </div>

//                 </div>
//             </div>

//             <div className={styles.InputBox_Outer}>
//                 <label className={styles.Label} htmlFor="signup-password">
//                     <span className={clsx(styles.Label_Text, styles.Outline, styles.Stylized)}>I am a... DM / Player</span>
//                 </label>
//             </div>

//             <div className={styles.rhombus_outer}>
//                 <button type="submit" className={styles.rhombus_inner}>
//                     <span className={clsx(styles.Btn_Text, styles.Outline, styles.Stylized)}>SIGN UP</span>
//                 </button>
//             </div>
//         </form>
//     )



//     return (
//         <div className={styles.TabsRoot}>
//             <Tabs defaultValue="sign-in">
            

//                 <TabsList className={styles.login}>
//                     <TabsTrigger className={styles.TabsTrigger} value="sign-in">Sign In</TabsTrigger>
//                     <TabsTrigger className={styles.TabsTrigger} value="sign-up">Sign Up</TabsTrigger>
//                 </TabsList>
                

//                 <TabsContents>
//                     <TabsContent className={styles.TabsContent} value="sign-in">
//                         {signInForm}
//                     </TabsContent>
                    

//                     <TabsContent className={styles.TabsContent} value="sign-up">
//                         {signUpForm}
//                     </TabsContent>
//                 </TabsContents>

//             </Tabs>
//         </div>
//     );
// };