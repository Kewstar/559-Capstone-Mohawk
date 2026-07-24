// BookContainer.tsx
import './BookContainer.css'
import HTMLFlipBook from 'react-pageflip-enhanced';

// import { getPagesForMode } from './Books/PagesLoader';
import { useBookPages } from './Books/hooks/useBookPages';
import { useBookOrientation } from './hooks/useBookOrientation';
import { useBookNavigation } from './Navbar/hooks/useBookNavigation';
import { useHandlePageFlip } from './hooks/useHandlePageFlip';
import { useBookDimensions } from './hooks/useBookDimensions';

import type { PageFlipStateEvent, PageFlipInitEvent, OrientationChangeEvent, BookMode } from './types';
import { NavBar } from './Navbar/NavBar';
import type { NavButton, PageConfig } from './Navbar/types';
import { PAGE_CONFIG } from './Navbar/NavBarConfig';
import { useState } from 'react';
import { useRef } from 'react';


function BookContainer() {
    const { bookMode, setBookMode, pages } = useBookPages();
    const { /* orientation, */ setOrientation, singlePageFlag } = useBookOrientation(); 
    const { activeTab, setActiveTab } = useBookNavigation(bookMode);
    const { handleFlip } = useHandlePageFlip(bookMode, activeTab, setActiveTab);
    
    const bookRef = useRef<any>(null);
    const bookInnerRef = useRef<HTMLDivElement>(null);


    const { width, height } = useBookDimensions(bookInnerRef, {
        aspectRatio: 300 / 450,
        minWidth: 300,
        maxWidth: 800,
        minHeight: 100,
        maxHeight: 1200,
    });

    let navWidth = width;
    if (!singlePageFlag) {
        navWidth = width * 2;
    }


    const aboveButtons: NavButton[] = (Object.entries(PAGE_CONFIG) as [BookMode, PageConfig][])
        .map(([key, config]) => ({
            key,
            label: config.label,
            onClick: () => setBookMode(key),
            isActive: key === bookMode,
        }
    ));

    const [tabPageAssignment, setTabPageAssignment] = useState<Record<string, 'left' | 'right'>>({})

    const belowButtons: NavButton[] = PAGE_CONFIG[bookMode].tabs.map(tab => ({
        key: tab.key,
        label: tab.label,
        onClick: () => {
            console.log("onclick", tab.key);
            setActiveTab(tab.key);
            bookRef.current?.pageFlip().flip(tab.pgIndex, "bottom");
        },
        isActive: tab.key === activeTab,
        page: tabPageAssignment[tab.key] ?? 'right',
    }));

    function moveTabToSide(tabKey: string, side: 'left' | 'right') {
        setTabPageAssignment(prev => ({ ...prev, [tabKey]: side }));
    }


    return (
        <div id='BookRoot'>
            <div className="BookOuter">

                <div className="NavRoot above">
                    <div className="BookAbove" style={{width: navWidth}}>
                        <NavBar 
                            buttons={aboveButtons}
                            singlePageFlag={singlePageFlag}
                            splitEvenly={true}
                            position={'above'}
                        />
                    </div>
                </div>

                <div className="BookInner" ref={bookInnerRef}>
                    <HTMLFlipBook  
                        ref={bookRef}
                        key={bookMode}
                        size="fixed"
                        width={width}    height={height}
                        drawShadow={true}
                        shadowOpacity={0.15}
                        
                        onInit={(e: PageFlipStateEvent) => setOrientation(e.data.mode)}
                        onUpdate={(e: PageFlipStateEvent) => setOrientation(e.data.mode)}
                        onChangeOrientation={(e: OrientationChangeEvent) => setOrientation(e.data)}
                        onFlip={handleFlip}
                    >
                        {pages}
                    </HTMLFlipBook>
                </div>

                <div className="NavRoot below">
                    <div className="BookBelow" style={{width: navWidth}}>
                        <NavBar
                            buttons={belowButtons}
                            singlePageFlag={singlePageFlag}
                            splitEvenly={false}
                            position={'below'}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default BookContainer;