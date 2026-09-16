// GmToolsPages.tsx 
import type { Section } from "../../types";

import { ManagePartiesBlock1, ManagePartiesBlock2 } from "./ManageParties/ManageParties";

export const GM_TOOLS_SECTIONS: Section[] = [
    {
        key: 'gm_tools_manage_parties',      
        label: 'MANAGE PARTIES',      
        blocks: [<ManagePartiesBlock1 />, <ManagePartiesBlock2 />]   
    },
];