// BookContainer.tsx
import './BookContainer.css'
import HTMLFlipBook from 'react-pageflip-enhanced';

// import { getPagesForMode } from './Books/PagesLoader';
import { useBookPages } from './Pages/hooks/useBookPages';
import { useBookOrientation } from './hooks/useBookOrientation';
import { useBookNavigation } from './Navbar/hooks/useBookNavigation';
import { useHandlePageFlip } from './hooks/useHandlePageFlip';
import { useBookDimensions } from './hooks/useBookDimensions';
import { useTabSplit } from './Navbar/hooks/useTabSplit';

import type { PageFlipStateEvent, /* PageFlipInitEvent, */ OrientationChangeEvent, BookMode } from './types';
import { NavBar } from './Navbar/NavBar';
import type { NavButton, PageConfig } from './Navbar/types';
import { NAVIGATION_CONFIG } from './Navbar/NavBarConfig';
import { useRef } from 'react';


/**
 * Creates the container which houses the three main sections the user interacts with throughout the webpage while logged in: 
 * 1. The top {@link NavBar} element element, which is used to navigate between sets of Page elements. 
 * 2. The `HTMLFlipBook`, which houses the different sets of `Page` elements which the user interacts with throughout the site 
 * 3. The bottom {@link NavBar} element, which is used to navigate to a specific Page element in a given set of Page elements. 
 * 
 * @returns the constructed HTML elements containing the top {@link NavBar}, `HTMLFlipBook`, and bottom {@link NavBar}
 */
function BookContainer() {
    const { singlePageFlag, setOrientation } = useBookOrientation();
    const { bookMode, setBookMode, pages, tabs } = useBookPages(singlePageFlag);

    // console.log(pages);
    // console.log("-----");
    // console.log(tabs);

    const { activeTab, setActiveTab } = useBookNavigation(bookMode, tabs);
    const { getPageForIndex, setSplitByTabKey } = useTabSplit(bookMode, tabs);
    const handleFlip = useHandlePageFlip(tabs, activeTab, setActiveTab, setSplitByTabKey);
    
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


    const aboveButtons: NavButton[] = (Object.entries(NAVIGATION_CONFIG) as [BookMode, PageConfig][])
        .map(([key, config]) => ({
            key,
            label: config.label,
            onClick: () => setBookMode(key),
            isActive: key === bookMode,
        }
    ));

    const belowButtons: NavButton[] = tabs.map((tab, i) => ({
        key: tab.key,
        label: tab.label,
        onClick: () => {
            // console.log("onclick", tabKey);
            // setActiveTab(tab.key);
            bookRef.current?.pageFlip().flip(tab.pgIndex, "bottom");
            // setSplitByTabKey(tab.key);
        },
        isActive: tab.key === activeTab,
        page: getPageForIndex(i)
    }));


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
                        key={`${bookMode}-${singlePageFlag}`}
                        size="fixed"
                        width={width}
                        height={height}
                        drawShadow={true}
                        shadowOpacity={0.15}
                        disableFlipByClick={true}
                        
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