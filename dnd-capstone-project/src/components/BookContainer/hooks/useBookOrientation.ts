// useBookOrientation.ts 
import { useState } from "react";
import type { OrientationType } from "../types";
import type { Dispatch, SetStateAction } from "react"

/** Interface for the return value of {@link useBookOrientation} */
interface useBookOrientationResult {
    /** The current orientation of the HTMLFlipBook; `landscape` or `portrait`. */
    orientation: OrientationType;
    
    /** Updates the orientation of the HTMLFlipBook. */
    setOrientation: Dispatch<SetStateAction<OrientationType>>;

    /** Flag that is `true` if the current orientation is in `'portrait'`, which signifies the HTMLFlipBook is in one-page view. */
    singlePageFlag: boolean;
}


/**
 * Tracks the current HTMLFlipBook orientation state, either `'portrait'` or `'landscape'`, 
 * which determines how the HTMLFlipBook is rendered. 
 * HTMLFlipBook renders a single-page view for portrait or two-page view for landscape. 
 * 
 * @returns an object containing the calculated {@link orientation}, {@link setOrientation}, and {@link singlePageFlag}.
 */
export function useBookOrientation(): useBookOrientationResult {
    const [orientation, setOrientation] = useState<OrientationType>('landscape');
    const singlePageFlag = orientation === 'portrait';

    return { orientation, setOrientation, singlePageFlag }
}