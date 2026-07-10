// NewCharacterPages.tsx 
import { Page } from "../Page"


function NewCharacterPages() {
    return [
        <Page key="new_character_core" className="demoPage">
            <h1>New Character #1</h1>
            <h1>My Story</h1>
            <p className="author">by Jane Doe</p>
        </Page>,
        // <NewCharacterPage />,

        <Page key="new_character_class" className="demoPage">
            <h1>New Character #2</h1>
            <span className="chapter-num">Chapter 1</span>
            <h2>The Beginning</h2>
        </Page>,

        <Page key="new_character_race" className="demoPage">
            <h1>New Character #3</h1>
            <div className="grid">
                <img src="src/assets/loginform/eye-visible.png" alt="" />
            </div>
        </Page>,

        <Page key="new_character_stats" className="demoPage">
            <h1>New Character #4</h1>
            <blockquote>It was a dark and stormy night.</blockquote>
        </Page>,

        <Page key="new_character_equipment" className="demoPage">
            <h1>New Character #5</h1>
            <blockquote>To be or not to be.</blockquote>
        </Page>,

        <Page key="new_character_journal" className="demoPage">
            <h1>New Character #6</h1>
            <blockquote>Hiiiii.</blockquote>
        </Page>,
    ];
};

export default NewCharacterPages;