import { ExpoFontMap } from './ExpoFontMap';
import { DynamicFontList } from './DynamicFontList';

export interface EnableFontFacesResult {
  /** @deprecated use `getExpoFontMap()` instead */
  expo: ExpoFontMap;

  /** @deprecated use `getDynamicFontList()` instead */
  rndf: DynamicFontList;
}
