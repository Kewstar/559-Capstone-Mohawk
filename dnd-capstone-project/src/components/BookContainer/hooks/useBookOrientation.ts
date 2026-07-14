// useBookOrientation.ts 
import { useState } from "react";
import type { orientationType } from "../types";

export function useBookOrientation() {
    const [orientation, setOrientation] = useState<orientationType>('landscape');
    const singlePageFlag = orientation === 'portrait';

    return { orientation, setOrientation, singlePageFlag }
}