// NewCharacterPages.tsx 
import { Page } from "../Page"

import { NEW_CHARACTER_PAGES_CONFIG as CONFIG } from "./NewCharacterPagesConfig";

function NewCharacterPages() {
    return [
        <Page key={CONFIG.core.key} className="demoPage">
            <h1>New Character #1</h1>
            <h1>CORE</h1>
            <p className="author">by Jane Doe</p>
        </Page>,
        <Page key={`${CONFIG.core.key} blank`} className="demoPage">
            <h1>Blank Page for CORE</h1>
        </Page>,


        <Page key={CONFIG.class.key} className="demoPage">
            <h1>New Character #2</h1>
            <h1>CLASS</h1>
            <span className="chapter-num">Chapter 1</span>
            <h2>The Beginning</h2>
        </Page>,
        <Page key={`${CONFIG.class.key} blank`} className="demoPage">
            <h1>Blank Page for CLASS</h1>
        </Page>,


        <Page key={CONFIG.background.key} className="demoPage">
            <h1>New Character #3</h1>
            <h1>BACKGROUND</h1>
            <div className="grid">
                <img src="src/assets/loginform/eye-visible.png" alt="" />
            </div>
        </Page>,
        <Page key={`${CONFIG.background.key} blank`} className="demoPage">
            <h1>Blank Page for BACKGROUND</h1>
        </Page>,


        <Page key={CONFIG.race.key} className="demoPage">
            <h1>New Character #4</h1>
            <h1>RACE</h1>
            <div className="grid">
                <img src="src/assets/loginform/eye-visible.png" alt="" />
            </div>
        </Page>,
        <Page key={`${CONFIG.race.key} blank`} className="demoPage">
            <h1>Blank Page for RACE</h1>
        </Page>,


        <Page key={CONFIG.stats.key} className="demoPage">
            <h1>New Character #5</h1>
            <h1>STATS</h1>
            <blockquote>It was a dark and stormy night.</blockquote>
        </Page>,
        <Page key={`${CONFIG.stats.key} blank`} className="demoPage">
            <h1>Blank Page for STATS</h1>
        </Page>,


        <Page key={CONFIG.equipment.key} className="demoPage">
            <h1>New Character #6</h1>
            <h1>EQUIPMENT</h1>
            <blockquote>To be or not to be.</blockquote>
        </Page>,
        <Page key={`${CONFIG.equipment.key} blank`} className="demoPage">
            <h1>Blank Page for EQIUPMENT</h1>
        </Page>,


        <Page key={CONFIG.journal.key} className="demoPage">
            <h1>New Character #7</h1>
            <h1>JOURNAL</h1>
            <blockquote>Hiiiii.</blockquote>
        </Page>,
        <Page key={`${CONFIG.journal.key} blank`} className="demoPage">
            <h1>Blank Page for JOURNAL</h1>
        </Page>,

    ];
};

export default NewCharacterPages;