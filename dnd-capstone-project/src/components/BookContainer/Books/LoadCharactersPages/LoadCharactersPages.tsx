// LoadCharactersPages.tsx 
import { Page } from "../Page"


function LoadCharactersPages() {
    return [
        <Page key="load_characters_1" className="demoPage">
            <h1>Load Characters #1</h1>
            <blockquote>stevie wonder</blockquote>
        </Page>,
        // <NewCharacterPage />,

        <Page key="load_characters_2" className="demoPage">
            <h1>Load Characters #2</h1>
            <blockquote>jason smith</blockquote>
        </Page>,

        <Page key="load_characters_3" className="demoPage">
            <h1>Load Characters #3</h1>
            <blockquote>hell davis</blockquote>
        </Page>,

        <Page key="load_characters_4" className="demoPage">
            <h1>Load Characters #4</h1>
            <blockquote>jeffery jones</blockquote>
        </Page>,

        <Page key="load_characters_5" className="demoPage">
            <h1>Load Characters #5</h1>
            <blockquote>sammy town</blockquote>
        </Page>,

        <Page key="load_characters_6" className="demoPage">
            <h1>Load Characters #6</h1>
            <blockquote>greg stevinson</blockquote>
        </Page>,
    ];
};

export default LoadCharactersPages;