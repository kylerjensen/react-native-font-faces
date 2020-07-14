import { FontFace } from '../types/FontFace';
import { FontResourcesLoader } from '../types/FontResourcesLoader';

/**
 * @example
 * import * as Font from 'expo-font';
 * import { Roboto_All, Roboto_Web }
 *
 * const config: FontFacesConfig = {
 *   fontFaces: [...Roboto_All],
 *   fontLoader: Font.loadAsync
 * }
 */
export interface FontFacesProviderProps {
  /** An array of font faces to register. */
  fontFaces: FontFace[];

  /**
   * (Native only) - A function that loads font resources into the application.
   * This option must be provided for this library to work properly on native platforms.
   * */
  nativeFontLoader?: FontResourcesLoader;

  /**
   *
   */
  onFontsLoaded?: () => void;
}
