// Page.tsx
import React from "react";
import type { PageProps } from "../types";

/**
 * A single page within the `HTMLFlipBook`, a `div` that the `HTMLFlipBook` uses to render and animate via the forwarded ref.
 *
 * @remarks The ref must be forwarded to the root `div` rather than attached to `Page` directly, 
 * since `HTMLFlipBook` needs direct access to the underlying DOM node to control page-turn animations.
 */
export const Page = React.forwardRef<HTMLDivElement, PageProps>(({ children, className = '' }, ref) => (
    <div className={`Page ${className}`} ref={ref}>
        {children}
    </div>
));
Page.displayName = 'Page';