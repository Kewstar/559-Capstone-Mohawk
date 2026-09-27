// GmToolsPages.tsx 
import type { PageSection } from "../../types";

import { ManagePartiesBlock1, ManagePartiesBlock2 } from "./ManageParties/ManageParties";

export const GM_TOOLS_SECTIONS: PageSection[] = [
    {
        key: 'gm_tools_manage_parties',      
        label: 'MANAGE PARTIES',      
        blocks: [<ManagePartiesBlock1 />, <ManagePartiesBlock2 />]   
    },
];