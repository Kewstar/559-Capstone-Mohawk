// NavBar.tsx 
import './NavBar.css';
import type { NavButton, NavRowProps } from "./types";

export function NavBar({ buttons, singlePageFlag, splitEvenly, position }: NavRowProps) {
    const renderButtons = (list: NavButton[]) => list.map((navButton: NavButton, i) => (
        <button
            key={navButton.key}
            className={`NavigationButton ${position}${navButton.isActive ? ' active' : ''}`}
            style={{ zIndex: list.length - i }}
            onClick={navButton.onClick}
            aria-pressed={navButton.isActive}
        >
            {navButton.label}
        </button>
    ));



    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        if (e.deltaY === 0) 
            return;

        e.currentTarget.scrollLeft += e.deltaY;
        e.preventDefault();
    };




    if (singlePageFlag) {
        return (
            <div className={`NavBar single ${position}`} onWheel={handleWheel}>
                {renderButtons(buttons)}
            </div>
        )
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
            <div className="NavGroup" onWheel={handleWheel}>{renderButtons(left)}</div>
            <div className="NavGroup" onWheel={handleWheel}>{renderButtons(right)}</div>
        </div>
    );

};