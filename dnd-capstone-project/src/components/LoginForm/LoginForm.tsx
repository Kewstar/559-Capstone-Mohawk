import { Tabs, TabsList, TabsTrigger, TabsContent, TabsContents } from "../animate-ui/primitives/radix/tabs";
import './LoginForm.css'

export default function LoginForm() {
    return (
        <div className="TabsRoot">
            <Tabs defaultValue="sign-in">
            
                <TabsList className="login">
                    <TabsTrigger className="TabsTrigger" value="sign-in">Sign In</TabsTrigger>
                    <TabsTrigger className="TabsTrigger" value="sign-up">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContents>
                    <TabsContent className="TabsContent" value="sign-in">
                        <h2 className="Outline">Continue the Tale</h2>

                        <div className="InputBox-Outer">
                            <label className="Label" htmlFor="login-username">
                                <span className="Text Outline" >Username / Email</span>
                            </label>

                            <div className="InputBox-Inner"> 
                                <img src="src/assets/book-nameplate.png" alt="A Nameplate" className="Nameplate" />
                                <input className="Input" id="login-username" placeholder={"Username or Email..."}></input>
                            </div>
                        </div>

                        <div className="InputBox-Outer">
                            <label className="Label" htmlFor="login-password">
                                <span className="Text Outline">Password</span>
                            </label>

                            <div className="InputBox-Inner"> 
                                <img src="src/assets/book-nameplate.png" alt="A Nameplate" className="Nameplate" />
                                <input className="Input" id="login-password" placeholder={"Password..."}></input>
                            </div>
                        </div>

                        <div className="rhombus-outer">
                            <button type="submit" className="rhombus-inner">
                                <span className="Outline">SIGN IN</span>
                            </button>
                        </div>

                    </TabsContent>
                    

                    <TabsContent className="TabsContent" value="sign-up">
                        <h2 className="Outline">Write a New Story</h2>

                        <div className="InputBox-Outer">
                            <label className="Label" htmlFor="signup-username">
                                <span className="Text Outline">Username</span>
                            </label>
                            
                            <div className="InputBox-Inner"> 
                                <img src="src/assets/book-nameplate.png" alt="A Nameplate" className="Nameplate" />
                                <input className="Input" id="signup-username" placeholder={"Enter Your Name..."}></input>
                            </div>
                        </div>
                    
                        <div className="InputBox-Outer">
                            <label className="Label Outline" htmlFor="signup-email">
                                <span className="Text">Email</span>
                            </label>

                            <div className="InputBox-Inner"> 
                                <img src="src/assets/book-nameplate.png" alt="A Nameplate" className="Nameplate" />
                                <input className="Input" id="signup-email" placeholder={"Enter Your Email..."}></input>
                            </div>
                        </div>

                        
                        <div className="InputBox-Outer">
                            <label className="Label Outline" htmlFor="signup-password">
                                <span className="Text">Password</span>
                            </label>
                            
                            <div className="InputBox-Inner"> 
                                <img src="src/assets/book-nameplate.png" alt="A Nameplate" className="Nameplate" />
                                <input className="Input" id="signup-password" placeholder={"Choose a Password..."}></input>
                            </div>
                        </div>
                        
                        
                        <div className="InputBox-Outer">
                            <label className="Label Outline" htmlFor="signup-password">
                                <span className="Text">Confirm Password</span>
                            </label>
                            
                            <div className="InputBox-Inner"> 
                                <img src="src/assets/book-nameplate.png" alt="A Nameplate" className="Nameplate" />
                                <input className="Input" id="signup-password-confirm" placeholder={"Confirm Password..."}></input>
                            </div>
                        </div>

                        <div className="rhombus-outer">
                            <button type="submit" className="rhombus-inner">
                                <span className="Outline">SIGN UP</span>
                            </button>
                        </div>
                        
                    </TabsContent>
                </TabsContents>

            </Tabs>
        </div>
    );
};