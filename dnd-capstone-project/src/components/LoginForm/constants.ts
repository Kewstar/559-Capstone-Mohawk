// constants.ts 
import type { ImageKey, InputClassKey } from "./types";

import nameplate from '@/assets/loginform/book-nameplate-gold-1600x200.png';
import eyeHidden from '@/assets/loginform/eye-hidden.png';
import eyeVisible from '@/assets/loginform/eye-visible.png';

export const imagePaths: Record<ImageKey, string> = {
    nameplate: nameplate, 
    eye_hidden: eyeHidden,
    eye_visible: eyeVisible,
};

export const inputClassMap: Record<InputClassKey, string> = {
    empty: "",
    error: "Input_Error",
    success: "Input_Success",
};