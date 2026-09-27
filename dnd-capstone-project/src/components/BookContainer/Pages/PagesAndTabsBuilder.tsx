// // PagesAndTabsBuilder.tsx
// import { Page } from "./Page";
// import type { PageSection, NavigationSection } from "../types";
// import type { ReactElement } from "react";


// // /**
// //  * Assembles the `PageSection` and `NavigationSection` array of objects into arrays of `Page` objects and data used to navigate between the `Page` objects. 
// //  * 
// //  * @param pageSections array of objects that contains content for two `Page` items. If {@link singlePageFlag} is false, rendered into the left and right page of the `HTMLFlipBook`. If true, fused into one scrollable page.  
// //  * @param singlePageFlag Flag that is `true` if the current orientation is in `'portrait'`, which signifies the HTMLFlipBook is in one-page view. 
// //  * 
// //  * @returns object containing two linked arrays: 
// //  * - {@link pages}, an array of `Page` objects that contain the JSX to be rendered to the `HTMLFlipBook`.
// //  * - {@link tabs}, an array of navigation data used to flip between the different `Page` objects. 
// //  */
// // export function pagesAndTabsBuilder(
// //     pageSections: PageSection[],
// //     singlePageFlag: boolean
// // ) {
// //     const pages: ReactElement[] = [];
// //     const tabs: NavigationSection[] = [];
// //     let index = 0;

// //     console.log("=====");
// //     console.log(pageSections);
// //     console.log("=====");

// //     for (const pageSection of pageSections) {
// //         tabs.push({ 
// //             key: pageSection.key, 
// //             label: pageSection.label, 
// //             pgIndex: index 
// //         });

// //         if (singlePageFlag) {
// //             handleSinglePage(pages, pageSection);
// //             index++;
// //         } 

// //         else {
// //             handleTwoPages(pages, pageSection);
// //             index += pageSection.blocks.length;
// //         }

// //     }

// //     return { pages, tabs };
// // }



// /**
//  * When {@link singlePageFlag} is `true`, constructs the two block objects. 
//  * to be added to `pages` as one item, so they render stacked on top of each other. 
//  * 
//  * @remarks `pages` does not need to be returned as it is passed by reference.
//  * 
//  * @param pages the array of pages being constructed by {@link pagesAndTabsBuilder}. 
//  * @param pageSectionSingle the {@link PageSection} object, to be formatted into one-page view render for the `HMTLFlipBook`. 
//  */
// function handleSinglePage(
//     pages: ReactElement[], 
//     pageSectionSingle: PageSection
// ) {
//     pages.push(
//         <Page 
//             key={pageSectionSingle.key} 
//             className="demoPage stacked"
//         >
//             {pageSectionSingle.blocks.map((block, i) => (
//                 <div className="StackedBlock" key={i}>{block}</div>
//             ))}
//         </Page>
//     );
// };



// /**
//  * When {@link singlePageFlag} is `false`, constructs the two block objects 
//  * to be added to `pages` as two different items, so they render on the left and right pages. 
//  * 
//  * @remarks `pages` does not need to be returned as it is passed by reference.
//  * 
//  * @param pages the array of `Page` objects being constructed by {@link pagesAndTabsBuilder}. 
//  * @param pageSectionDouble the {@link PageSection} object, to be formatted into two-page view render for the `HMTLFlipBook`. 
//  */
// function handleTwoPages(
//     pages: ReactElement[], 
//     pageSectionDouble: PageSection
// ) {
//     pageSectionDouble.blocks.forEach((block, i) => {
//         pages.push(
//             <Page 
//                 key={`${pageSectionDouble.key}_${i}`}
//                 className="demoPage"
//             >
//                 {block}
//             </Page>
//         );
//     });
// };