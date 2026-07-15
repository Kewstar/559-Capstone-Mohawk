// NavBar.tsx 
import './NavBar.css';
import type { NavButton, NavRowProps } from "./types";

export function NavBar({ buttons, singlePageFlag, splitEvenly }: NavRowProps) {
    const renderButton = (navButton: NavButton) => (
        <button
            key={navButton.key}
            className={`NavigationButton`}
            onClick={navButton.onClick}
        >
            {navButton.label}
        </button>
    );

    if (singlePageFlag) {
        return <div className="NavBar single">{buttons.map(renderButton)}</div>
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
        <div className="NavBar double">
            <div className="NavGroup">{left.map(renderButton)}</div>
            <div className="NavGroup">{right.map(renderButton)}</div>
        </div>
    );

};