// PagesLoader.tsx
// import { pagesAndTabsBuilder } from "./PagesAndTabsBuilder";
import type { BookMode } from "../types";

import { NEW_CHARACTER_SECTIONS } from "./NewCharacterPages/NewCharacterPages";
import { LOAD_CHARACTER_SECTIONS } from "./LoadCharactersPages/LoadCharactersPages";
import { USER_PROFILE_SECTIONS } from "./UserSettingsPages/UserSettingsPages";
import { GM_TOOLS_SECTIONS } from "./GMToolsPages/GmToolsPages";

import { Page } from "./Page";
import type { PageSection, NavigationSection } from "../types";
import type { ReactElement } from "react";





/**
 * Retrieves two arrays of objects: `pages` and `tabs`, which contain the necessary data to render the `Page` objects and to navigate between the `Page` objects. 
 * 
 * @param bookMode String that serves as a unique key which determines the `pages` and `tabs` to be returned.  
 * @param singlePageFlag Flag that is `true` if the current orientation is in `'portrait'`, which signifies the HTMLFlipBook is in one-page view or two-page view.   
 * 
 * @remarks if `singlePageFlag` is true, `pages` are parallel to `tabsif`, `false`, `pages` is double the length of `tabs`. 
 * 
 * @returns object containing two linked arrays, depending on the `bookMode` parameter:
 * - `pages`, an array of Page objects that contain the JSX to be rendered to the HTMLFlipBook
 * - `tabs`, an array of navigation data used to flip between the different Page objects.
 */
export function getPagesAndTabsForMode(
    bookMode: BookMode, 
    singlePageFlag: boolean
) {
    switch (bookMode) {
        case "newCharacter":
            return pagesAndTabsBuilder(NEW_CHARACTER_SECTIONS, singlePageFlag);

        case "loadCharacter":
            return pagesAndTabsBuilder(LOAD_CHARACTER_SECTIONS, singlePageFlag);

        case "userSettings":
            return pagesAndTabsBuilder(USER_PROFILE_SECTIONS, singlePageFlag);
            
        case "gmTools":
            return pagesAndTabsBuilder(GM_TOOLS_SECTIONS, singlePageFlag);
    

        default:
            // return { pages: defaultpages, tabs: PAGE_CONFIG[mode].tabs };
            return pagesAndTabsBuilder(LOAD_CHARACTER_SECTIONS, singlePageFlag);
    }
}





/**
 * Assembles the `PageSection` and `NavigationSection` array of objects into arrays of `Page` objects and data used to navigate between the `Page` objects. 
 * 
 * @param pageSections array of objects that contains content for two `Page` items. If {@link singlePageFlag} is false, rendered into the left and right page of the `HTMLFlipBook`. If true, fused into one scrollable page.  
 * @param singlePageFlag Flag that is `true` if the current orientation is in `'portrait'`, which signifies the HTMLFlipBook is in one-page view. 
 * 
 * @returns object containing two linked arrays: 
 * - {@link pages}, an array of `Page` objects that contain the JSX to be rendered to the `HTMLFlipBook`.
 * - {@link tabs}, an array of navigation data used to flip between the different `Page` objects. 
 */
function pagesAndTabsBuilder(
    pageSections: PageSection[],
    singlePageFlag: boolean
) {
    const pages: ReactElement[] = [];
    const tabs: NavigationSection[] = [];
    let index = 0;

    console.log("=====");
    console.log(pageSections);
    console.log("=====");

    for (const pageSection of pageSections) {
        tabs.push({ 
            key: pageSection.key, 
            label: pageSection.label, 
            pgIndex: index 
        });

        if (singlePageFlag) {
            handleSinglePage(pages, pageSection);
            index++;
        } 

        else {
            handleTwoPages(pages, pageSection);
            index += pageSection.blocks.length;
        }

    }

    return { pages, tabs };
}





/**
 * When {@link singlePageFlag} is `true`, constructs the two block objects. 
 * to be added to `pages` as one item, so they render stacked on top of each other. 
 * 
 * @remarks `pages` does not need to be returned as it is passed by reference.
 * 
 * @param pages the array of pages being constructed by {@link pagesAndTabsBuilder}. 
 * @param pageSectionSingle the {@link PageSection} object, to be formatted into one-page view render for the `HMTLFlipBook`. 
 */
function handleSinglePage(
    pages: ReactElement[], 
    pageSectionSingle: PageSection
) {
    pages.push(
        <Page 
            key={pageSectionSingle.key} 
            className="demoPage stacked"
        >
            {pageSectionSingle.blocks.map((block, i) => (
                <div className="StackedBlock" key={i}>{block}</div>
            ))}
        </Page>
    );
};





/**
 * When {@link singlePageFlag} is `false`, constructs the two block objects 
 * to be added to `pages` as two different items, so they render on the left and right pages. 
 * 
 * @remarks `pages` does not need to be returned as it is passed by reference.
 * 
 * @param pages the array of `Page` objects being constructed by {@link pagesAndTabsBuilder}. 
 * @param pageSectionDouble the {@link PageSection} object, to be formatted into two-page view render for the `HMTLFlipBook`. 
 */
function handleTwoPages(
    pages: ReactElement[], 
    pageSectionDouble: PageSection
) {
    pageSectionDouble.blocks.forEach((block, i) => {
        pages.push(
            <Page 
                key={`${pageSectionDouble.key}_${i}`}
                className="demoPage"
            >
                {block}
            </Page>
        );
    });
};






// import { Page } from "./Page";
// export const defaultpages = [
//     <Page key="default_1" className="demoPage">
//         <h1>DEFAULT PAGE #1</h1>
//     </Page>,

//     <Page key="default_2" className="demoPage">
//         <h1>DEFAULT PAGE #2</h1>
//     </Page>,
// ];