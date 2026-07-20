// NavBar.tsx 
import './NavBar.css';
import type { NavButton, NavRowProps } from "./types";

import { useRef } from 'react';

export function NavBar({ buttons, singlePageFlag, splitEvenly, position }: NavRowProps) {
    const renderButton = (navButton: NavButton) => (
        <button
            key={navButton.key}
            className={`NavigationButton ${position}${navButton.isActive ? ' active' : ''}`}
            onClick={navButton.onClick}
            aria-pressed={navButton.isActive}
        >
            {navButton.label}
        </button>
    );


    if (singlePageFlag) {
        return <div className={`NavBar single ${position}`}>{buttons.map(renderButton)}</div>
    }


    let left: NavButton[];
    let right: NavButton[];

    if (splitEvenly) {
        const mid = Math.ceil(buttons.length / 2);
        left = buttons.slice(0, mid);
        right = buttons.slice(mid);
    } else {
        left = buttons.filter(navButton => navButton.page === 'left');
        right = buttons.filter(navButton => navButton.page === 'right');
    }

    return (
        <div className={`NavBar double ${position}`}>
            <div className="NavGroup">{left.map(renderButton)}</div>
            <div className="NavGroup">{right.map(renderButton)}</div>
        </div>
    );

};