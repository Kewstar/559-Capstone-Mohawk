import { Button } from '../ui/button';
import './BookContainer.css'
import HTMLFlipBook from 'react-pageflip-enhanced';

import { pages } from './Books/Pages';

function Book() {

    return (
        <div id='BookRoot'>

            <div className="BookOuter">

                <div className="BookAbove">
                    <Button 
                        className='NavigationButton'
                    >
                        User Settings
                    </Button>
                </div>

                <div className="BookInner">
                    <HTMLFlipBook 
                        width={300}     height={450}
                        size="stretch"
                        minWidth={300}  minHeight={100}
                        maxWidth={800}  maxHeight={1200}
                        drawShadow={true}
                        shadowOpacity={0.25}
                    >
                        {pages}
                    </HTMLFlipBook>
                </div>

                <div className="BookBelow">
                    <Button 
                        className='NavigationButton'
                    >
                        User Settings
                    </Button>
                </div>

            </div>

        </div>
    );
}

export default Book;