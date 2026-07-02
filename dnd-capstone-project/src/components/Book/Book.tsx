import { Button } from '../ui/button';
import './Book.css'
import HTMLFlipBook from 'react-pageflip-enhanced';

function Book() {

    return (
        <div id='BookRoot'>

            <div className="BookOuter">

                <div className="BookInner">
                    <HTMLFlipBook 
                        width={300}     height={450}
                        size="stretch"
                        minWidth={300}  minHeight={450}
                        maxWidth={800}  maxHeight={1200}
                        drawShadow={true}
                    >
                        <div className="demoPage">Page 1</div>
                        <div className="demoPage">Page 2</div>
                        <div className="demoPage">Page 3</div>
                        <div className="demoPage">Page 4</div>
                        <div className="demoPage">Page 5</div>
                        <div className="demoPage">Page 6</div>
                    </HTMLFlipBook>
                </div>

                <Button className='NavigationButton'>User Settings</Button>

            </div>

        </div>
    );
}

export default Book