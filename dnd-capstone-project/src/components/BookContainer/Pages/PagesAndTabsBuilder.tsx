// 
import { Page } from "./Page";
import type { Section, Tab } from "../types";
import type { ReactElement } from "react";


export function pagesAndTabsBuilder(
    sections: Section[],
    singlePageFlag: boolean
) {
    const pages: ReactElement[] = [];
    const tabs: Tab[] = [];
    let index = 0;

    for (const section of sections) {
        tabs.push({ 
            key: section.key, 
            label: section.label, 
            pgIndex: index 
        });

        if (singlePageFlag) {
            handleSinglePage(pages, section);
            index++;
        } 

        else {
            handleTwoPages(pages, section);
            index += section.blocks.length;
        }

    }

    return { pages, tabs };
}


function handleSinglePage(
    pages: ReactElement[], 
    section: Section
) {
    pages.push(
        <Page 
            key={section.key} 
            className="demoPage stacked"
        >
            {section.blocks.map((block, i) => (
                <div className="StackedBlock" key={i}>{block}</div>
            ))}
        </Page>
    );
};


function handleTwoPages(
    pages: ReactElement[], 
    section: Section
) {
    section.blocks.forEach((block, i) => {
        pages.push(
            <Page 
                key={`${section.key}_${i}`}
                className="demoPage"
            >
                {block}
            </Page>
        );
    });
};