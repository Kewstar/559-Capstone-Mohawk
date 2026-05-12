import { Tabs, TabsList, TabsTrigger, TabsContent, TabsContents } from "../animate-ui/primitives/radix/tabs";
import './LoginForm.css'

export default function LoginForm() {
    return (
        <div className="TabsRoot">
            <Tabs defaultValue="login">
            
                <TabsList className="login">
                    <TabsTrigger className="TabsTrigger" value="account">Sign In</TabsTrigger>
                    <TabsTrigger className="TabsTrigger" value="password">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContents>
                    <TabsContent className="TabsContent" value="account">
                        <h2>Sign In</h2>

                        <label className="Label" htmlFor="username">Username / Email</label>
                        <input className="Input" id="username"></input>

                        <label className="Label" htmlFor="password">Password</label>
                        <input className="Input" id="password"></input>
                    </TabsContent>
                    
                    <TabsContent className="TabsContent" value="password">
                        Change your password here.
                    </TabsContent>
                </TabsContents>

            </Tabs>
        </div>
    );
};