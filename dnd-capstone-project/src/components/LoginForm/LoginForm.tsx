// import { input } from "motion/react-client";

// #region —— Imports Section —— //
import '@/components/LoginForm/LoginForm.css'
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm'; 
import { Tabs, TabsList, TabsTrigger, TabsContent, TabsContents } from "../animate-ui/primitives/radix/tabs";

export default function LoginForm() {
    
    return (
        <div className="TabsRoot" id="LoginPageRoot">
            <Tabs defaultValue="sign-in">
            
                <TabsList className="login">
                    <TabsTrigger className="TabsTrigger" value="sign-in">Sign In</TabsTrigger>
                    <TabsTrigger className="TabsTrigger" value="sign-up">Sign Up</TabsTrigger>
                </TabsList>
                

                <TabsContents>
                    <TabsContent className="TabsContent" value="sign-in">
                        <SignInForm />
                    </TabsContent>
                    

                    <TabsContent className="TabsContent" value="sign-up">
                        <SignUpForm />
                    </TabsContent>
                </TabsContents>

            </Tabs>
        </div>
    );
};
// #endregion