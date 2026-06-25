// SignInForm.tsx 
import { useSignIn } from "./hooks/useSignIn";
import { imagePaths } from "./constants";
import { usePasswordVisibility } from "./hooks/usePasswordVisibility";

export default function SignInForm() {
    const { handleUserSignIn, email, password, setEmail, setPassword } = useSignIn();
    const { togglePasswordVisibility, isVisible } = usePasswordVisibility();

    return (
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
                            placeholder="Username or Email..." value={email}
                            onChange={(e) => setEmail(e.target.value)} /> 
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
                            type={isVisible("login-password") ? "text" : "password"}
                            className="Input" id="login-password" 
                            placeholder="Password..." value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        
                        <div className="Password_Icon_Btn">
                            <button type="button" onClick={() => togglePasswordVisibility("login-password")}>
                                <img src={isVisible("login-password") ? imagePaths["eye_visible"] : imagePaths["eye_hidden"]}
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
}