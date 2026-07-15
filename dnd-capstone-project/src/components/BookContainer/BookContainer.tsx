// BookContainer.tsx
import './BookContainer.css'
import HTMLFlipBook from 'react-pageflip-enhanced';

// import { getPagesForMode } from './Books/PagesLoader';
import { useBookPages } from './Books/hooks/useBookPages';
import { useBookOrientation } from './hooks/useBookOrientation';
import type { PageFlipStateEvent, PageFlipInitEvent, OrientationChangeEvent, BookMode } from './types';
import { NavBar } from './Navbar/NavBar';
import type { NavButton, PageConfig } from './Navbar/types';
import { PAGE_CONFIG } from './Navbar/navConfig';
import { useState } from 'react';

import { useBookNavigation } from './Navbar/hooks/useBookNavigation';

function BookContainer() {
    const { mode, setMode, pages } = useBookPages();
    const { orientation, setOrientation, singlePageFlag } = useBookOrientation(); 
    const { navMode, setNavMode, activeTab, setActiveTab } = useBookNavigation();

    const aboveButtons: NavButton[] = (Object.entries(PAGE_CONFIG) as [BookMode, PageConfig][])
        .map(([key, config]) => ({
            key,
            label: config.label,
            onClick: () => setMode(key),
            isActive: key === mode,
        }
    ));

    const [tabPageAssignment, setTabPageAssignment] = useState<Record<string, 'left' | 'right'>>({})

    const belowButtons: NavButton[] = PAGE_CONFIG[mode].tabs.map(tab => ({
        key: tab.key,
        label: tab.label,
        onClick: () => setActiveTab(tab.key),
        isActive: tab.key === activeTab,
        page: tabPageAssignment[tab.key] ?? 'right',
    }));

    function moveTabToSide(tabKey: string, side: 'left' | 'right') {
        setTabPageAssignment(prev => ({ ...prev, [tabKey]: side }));
    }

    return (
        <div id='BookRoot'>
            <div className="BookOuter">

                <div className="BookAbove">
                    <NavBar buttons={aboveButtons} singlePageFlag={singlePageFlag} splitEvenly={true} />
                </div>

                <div className="BookInner">
                    <HTMLFlipBook 
                        key={mode}
                        width={300}     height={450}
                        size="stretch"
                        minWidth={300}  minHeight={100}
                        maxWidth={800}  maxHeight={1200}
                        drawShadow={true}
                        shadowOpacity={0.25}

                        onInit={(e: PageFlipStateEvent) => setOrientation(e.data.mode)}
                        onUpdate={(e: PageFlipStateEvent) => setOrientation(e.data.mode)}
                        onChangeOrientation={(e: OrientationChangeEvent) => setOrientation(e.data)}
                    >
                        {pages}
                    </HTMLFlipBook>
                </div>

                <div className="BookBelow">
                    <NavBar buttons={belowButtons} singlePageFlag={singlePageFlag} splitEvenly={false} />
                </div>

            </div>
        </div>
    );
}

export default BookContainer;