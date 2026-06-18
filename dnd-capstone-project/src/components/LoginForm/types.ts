
export type ImageKey = "nameplate"  | "eye_hidden" | "eye_visible"; 

export type PasswordField = 
    "login-password"  | 
    "signup-password" | 
    "signup-password-confirm";

export type InputClassKey = "empty" | "error" | "success"; 

export type signupErrorKey = "username" | "email" | "password" | "confirm_password";
    // "username" | "email" | "password" | "confirm_password"; 

export interface SignUpData {
    username: string;
    email: string;
    password: string;
    role: "dm" | "player";
}