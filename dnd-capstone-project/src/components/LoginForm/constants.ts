import type { ImageKey, InputClassKey } from "./types";

export const imagePaths: Record<ImageKey, string> = {
    nameplate: "src/assets/loginform/book-nameplate-gold-1600x200.png",
    eye_hidden: "src/assets/loginform/eye-hidden.png",
    eye_visible: "src/assets/loginform/eye-visible.png"
};

export const inputClassMap: Record<InputClassKey, string> = {
    empty: "",
    error: "Input_Error",
    success: "Input_Success",
};