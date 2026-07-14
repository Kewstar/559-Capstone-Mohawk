import './BookContainer.css'
import HTMLFlipBook from 'react-pageflip-enhanced';

// import { getPagesForMode } from './Books/PagesLoader';
import { useBookPages } from './Books/hooks/useBookPages';
import { useBookOrientation } from './hooks/useBookOrientation';
import type { PageFlipStateEvent, PageFlipInitEvent, OrientationChangeEvent } from './types';

// import { pages } from './Books/PagesLoader';
function BookContainer() {
    const { mode, setMode, pages } = useBookPages();
    const { orientation, setOrientation, singlePageFlag } = useBookOrientation(); 

    return (
        <div id='BookRoot'>
            <div className="BookOuter">

                <div className="BookAbove">
                    <button 
                        className='NavigationButton'
                        onClick={() => setMode('newCharacter')}
                    >
                        New Character
                    </button>
                    
                    <button 
                        className='NavigationButton'
                        onClick={() => setMode('loadCharacter')}
                    >
                        Load Character
                    </button>
                    
                    <button 
                        className='NavigationButton'
                        onClick={() => setMode('loadCharacter')}
                    >
                        GM Tools
                    </button>
                    
                    <button 
                        className='NavigationButton'
                        onClick={() => setMode('userSettings')}
                    >
                        User Settings
                    </button>
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
                    <button 
                        className='NavigationButton'
                        // onClick={() => setMode('userProfile')}
                    >
                        Core
                    </button>
                </div>

            </div>
        </div>
    );
}

export default BookContainer;