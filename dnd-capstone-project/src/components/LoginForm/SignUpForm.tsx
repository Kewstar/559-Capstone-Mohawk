// SignUpForm.tsx
import { useSignUp } from "./hooks/useSignUp"
import { imagePaths } from "./constants";
import { usePasswordVisibility } from "./hooks/usePasswordVisibility";
import { Field, FieldContent, FieldDescription, FieldTitle, FieldLabel } from '@/components/ui/field';
import { RadioGroup, RadioGroupItem } from '@/components/animate-ui/components/radix/radio-group';


export default function SignUpForm() {
    const { 
        username, email, password,
        usernameErrorMsg, emailErrorMsg, passwordErrorMsg, confirmPasswordErrorMsg,
        usernameClass, emailClass, passwordClass, confirmPasswordClass,
        validateUsername, validateEmail, validatePassword, validateConfirmPassword,
        handleUserSignUp, setRole
    } = useSignUp();
    const { togglePasswordVisibility, isVisible } = usePasswordVisibility();

    return (
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
                            className={`Input ${usernameClass}`} 
                            id="signup_username"  
                            placeholder="Enter Your Name..." value={username}
                            // onChange={(e) => setSignUpData({...signUpData, username: e.target.value})} 
                            onChange={(e) => validateUsername(e.target.value)} /> 
                        {/* <div className="Password-Icon-Btn"></div> */}
                    </div>
                </div>
    
                <span className="Input_Error_Message Stylized" id="signup_username_error">{usernameErrorMsg}</span>
    
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
                            className={`Input ${emailClass}`} 
                            id="signup-email" 
                            placeholder="Enter Your Email..." value={email} 
                            // onChange={(e) => setSignUpData({...signUpData, email: e.target.value})}  
                            onChange={(e) => validateEmail(e.target.value)} />  
                        {/* <div className="Password-Icon-Btn"></div> */}
                    </div>
                </div>
    
                <span className="Input_Error_Message Stylized" id="signUp_email_error">{emailErrorMsg}</span>
    
            </div>
    
            
            <div className="InputBox_Outer">
                <label className="Label" htmlFor="signup-password">
                    <span className="Label_Text Outline Stylized">Password</span>
                </label>
                
                <div className="InputBox_Inner"> 
                    <img src={imagePaths["nameplate"]} alt="A Nameplate" className="Nameplate" />
                    <div className="Input_Wrapper">
                        
                        <input 
                            type={isVisible("signup-password") ? "text" : "password"}
                            className={`Input ${passwordClass}`} 
                            id="signup-password" 
                            placeholder="Choose a Password..." value={password}
                            // onChange={(e) => setSignUpData({...signUpData, password: e.target.value})} />
                            onChange={(e) => validatePassword(e.target.value)} />  
                        {/* <div className="Password-Icon-Btn"> */}
    
                        <button type="button" className="Password_Icon_Btn" onClick={() => togglePasswordVisibility("signup-password")}>
                            <img src={isVisible("signup-password") ? imagePaths["eye_visible"] : imagePaths["eye_hidden"] } 
                                alt="Toggle Password Visibility" />
                        </button>
                        {/* </div> */}
    
                    </div>
                </div>
    
                <span className="Input_Error_Message Stylized" id="signUp_password_error">{passwordErrorMsg}</span>
    
            </div>
            
            
            <div className="InputBox_Outer">
                <label className="Label" htmlFor="signup-password-confirm">
                    <span className="Label_Text Outline Stylized">Confirm Password</span>
                </label>
                
                <div className="InputBox_Inner"> 
                    <img src={imagePaths["nameplate"]} alt="A Nameplate" className="Nameplate" />
                    
                    <div className="Input_Wrapper">
                        
                        <input 
                            type={isVisible("signup-password-confirm") ? "text" : "password"}
                            className={`Input ${confirmPasswordClass}`} 
                            id="signup-password-confirm" 
                            placeholder="Confirm Password..." 
                            onChange={(e) => validateConfirmPassword(e.target.value)} />  
                        <button type="button" className="Password_Icon_Btn" onClick={() => togglePasswordVisibility("signup-password-confirm")}>
                            <img src={isVisible("signup-password-confirm") ? imagePaths["eye_visible"] : imagePaths["eye_hidden"] } 
                                alt="Toggle Password Visibility" />
                        </button>
    
                    </div>
    
                </div>
    
                <span className="Input_Error_Message Stylized" id="signUp_password_confirm_error">{confirmPasswordErrorMsg}</span>
    
            </div>
    
            <div className="InputBox_Outer">
                <span id="role-label" className="Label_Text Outline Stylized">I am a...</span>

                <RadioGroup 
                    aria-labelledby="role-label"
                    className="RoleSelectGroup"
                    defaultValue="player"
                    onValueChange={setRole}>

                    <FieldLabel htmlFor="dm" className="RoleSelect_Outer">
                        <Field orientation="horizontal">
                            <FieldContent className="RoleSelect_Inner">
                                <FieldTitle className="Label_Text Outline Stylized">DM</FieldTitle>
                                <FieldDescription className="Stylized Description">Can create characters and parties.</FieldDescription>
                            </FieldContent>
                            <RadioGroupItem value="dm" id="dm" />
                        </Field>
                    </FieldLabel>

                    <FieldLabel htmlFor="player" className="RoleSelect_Outer">
                        <Field orientation="horizontal">
                            <FieldContent className="RoleSelect_Inner">
                                <FieldTitle className='Label_Text Outline Stylized'>Player</FieldTitle>
                                <FieldDescription className="Stylized Description">Can create characters.</FieldDescription>
                            </FieldContent>
                            <RadioGroupItem value="player" id="player" />
                        </Field>
                    </FieldLabel>
                </RadioGroup>
    
            </div>
    
            <div className="rhombus_outer">
                <button type="submit" className="rhombus_inner">
                    <span className="Btn_Text Outline Stylized">SIGN UP</span>
                </button>
            </div>
        </form>
    )
};