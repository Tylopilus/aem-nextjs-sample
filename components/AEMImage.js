import { ImageV2, ImageV2IsEmptyFn } from '@adobe/aem-core-components-react-base';
import { withMappable } from '@adobe/aem-react-editable-components';

export const ImageResourceType = "wknd-app/components/image";
export const ImageEditConfig = {    
    emptyLabel: "Image",
    isEmpty: ImageV2IsEmptyFn,
    resourceType: ImageResourceType
};

export default withMappable(ImageV2, ImageEditConfig);