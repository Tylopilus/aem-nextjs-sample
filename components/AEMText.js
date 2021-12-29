import { TextV2, TextV2IsEmptyFn } from "@adobe/aem-core-components-react-base";
import { withMappable } from '@adobe/aem-react-editable-components';

export const TextResourceType = "wknd-app/components/text";
export const TextEditConfig = {    
    emptyLabel: "Text",
    isEmpty: TextV2IsEmptyFn,
    resourceType: TextResourceType
};

export default withMappable(TextV2, TextEditConfig);