// Pages.tsx
// import NewCharacterPage from "./NewCharacterBook/NewCharacterPage";
// import { Page } from "../constants";
import React from "react";
import type { PageProps } from "../types";

export const Page = React.forwardRef<HTMLDivElement, PageProps>(({ children, className = '' }, ref) => (
    <div className={`demoPage ${className}`} ref={ref}>
        {children}
    </div>
));
Page.displayName = 'Page';

export const pages = [
    <Page key="new_character" className="demoPage">
        <h1>#1</h1>
        <h1>My Story</h1>
        <p className="author">by Jane Doe</p>
    </Page>,
    // <NewCharacterPage />,

    <Page key="load_characters" className="demoPage">
        <h1>#2</h1>
        <span className="chapter-num">Chapter 1</span>
        <h2>The Beginning</h2>
    </Page>,

    <Page key="gallery" className="demoPage">
        <h1>#3</h1>
        <div className="grid">
            <img src="src/assets/loginform/eye-visible.png" alt="" />
        </div>
    </Page>,

    <Page key="quote" className="demoPage">
        <h1>#4</h1>
        <blockquote>It was a dark and stormy night.</blockquote>
    </Page>,

    <Page key="quote" className="demoPage">
        <h1>#5</h1>
        <blockquote>To be or not to be.</blockquote>
    </Page>,

    <Page key="quote" className="demoPage">
        <h1>#6</h1>
        <blockquote>Hiiiii.</blockquote>
    </Page>,
];