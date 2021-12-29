import { TitleV2, TitleV2IsEmptyFn } from "@adobe/aem-core-components-react-base";
import { withMappable } from '@adobe/aem-react-editable-components';

export const TitleResourceType = "wknd-app/components/title";
export const TitleEditConfig = {    
    emptyLabel: "Title",
    isEmpty: TitleV2IsEmptyFn,
    resourceType: TitleResourceType
};

export default withMappable(TitleV2, TitleEditConfig);