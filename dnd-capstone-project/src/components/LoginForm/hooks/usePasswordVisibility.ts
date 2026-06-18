import { useState } from "react";
import type { PasswordField } from "../types";

export function usePasswordVisibility() {
    
    const [passwordVisibility, setPasswordVisibility] = useState({
        "login-password": false,
        "signup-password": false,
        "signup-password-confirm": false,
    });
    
    const togglePasswordVisibility = (fieldId: PasswordField) => {
        setPasswordVisibility(prev => ({ ...prev, [fieldId]: !prev[fieldId] }));
    };

    return { 
        togglePasswordVisibility,
        isVisible: (fieldId: PasswordField) => passwordVisibility[fieldId],
    }
}