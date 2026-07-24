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



    // NavBar.tsx - Updated handleWheel
const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY === 0) 
        return;

    // Check if the NavBar content actually needs scrolling
    const target = e.currentTarget;
    const canScrollLeft = target.scrollLeft > 0;
    const canScrollRight = target.scrollLeft < target.scrollWidth - target.clientWidth;
    
    // Only prevent default if we can actually scroll
    if ((e.deltaY > 0 && canScrollRight) || (e.deltaY < 0 && canScrollLeft)) {
        target.scrollLeft += e.deltaY;
        e.preventDefault();
        e.stopPropagation(); // Add this to prevent the event from bubbling
    }
    // Otherwise, let the event propagate to the book
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