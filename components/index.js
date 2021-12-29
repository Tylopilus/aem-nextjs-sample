import { MapTo } from '@adobe/aem-react-editable-components';
import Image, { ImageEditConfig, ImageResourceType } from './AEMImage';
import ResponsiveGrid, { GridEditConfig, GridResourceType } from './AEMResponsiveGrid';
import Text, { TextEditConfig, TextResourceType } from './AEMText';
import Title, { TitleEditConfig, TitleResourceType } from './AEMTitle';

MapTo(ImageResourceType)(Image, ImageEditConfig);
MapTo(GridResourceType)(ResponsiveGrid, GridEditConfig);
MapTo(TextResourceType)(Text, TextEditConfig);
MapTo(TitleResourceType)(Title, TitleEditConfig);