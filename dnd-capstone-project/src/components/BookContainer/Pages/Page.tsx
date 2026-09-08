// Page.tsx
import React from "react";
import type { PageProps } from "../types";

export const Page = React.forwardRef<HTMLDivElement, PageProps>(({ children, className = '' }, ref) => (
    <div className={`demoPage ${className}`} ref={ref}>
        {children}
    </div>
));
Page.displayName = 'Page';