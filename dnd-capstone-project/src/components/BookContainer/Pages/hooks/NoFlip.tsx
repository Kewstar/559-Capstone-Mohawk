// NoFlip.tsx
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";


type NoFlipProps = {
    /** The content to protect from `HTMLFlipBook`. */
    children: ReactNode;
    /** Optional class for wrapper div */
    className?: string;
}


/**
 * Creates a wrapper div that prevents the `HTMLFlipBook` from taking over mouse & touch events in its children. 
 * Primarily used for clickable elements in Pages, like forms, as without them the user cannot interact with them. 
 * 
 * @param props.children the content to protect from `HTMLFlipBook`'s mouse & touch events. 
 * @param props.className optional class to apply to the wrapper div. 
 * 
 * @returns a wrapper div that contains the children, with `mousedown` and `touchstart` stopped.
 */
export function NoFlip( {children, className}: NoFlipProps ) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect( function attachListeners() {
        const element = ref.current;
        if (!element) return;

        function stopEvent(e: Event) { e.stopPropagation(); }
        
        element.addEventListener("mousedown", stopEvent);
        element.addEventListener("touchstart", stopEvent);
        
        return function removeListeners() {
            element.removeEventListener("mousedown", stopEvent);
            element.removeEventListener("touchstart", stopEvent);
        };
    }, [] );

    return  <div ref={ref} className={className}>
                {children}
            </div>
}