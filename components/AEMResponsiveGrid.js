import { ResponsiveGrid, withMappable } from '@adobe/aem-react-editable-components';

export const GridResourceType = "wcm/foundation/components/responsivegrid";
export const GridEditConfig = {
    emptyLabel: "Layout Container",
    isEmpty: function(props) { 
        return props.cqItemsOrder == null || props.cqItemsOrder.length === 0;
    },                             
    resourceType: GridResourceType
};

export default withMappable(ResponsiveGrid, GridEditConfig);