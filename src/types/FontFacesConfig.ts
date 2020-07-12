import { FontResourcesLoader } from './FontResourcesLoader';
import { FontFace } from './FontFace';
/**
 * @example
 * import * as Font from 'expo-font';
 *
 * const config: FontFacesConfig = {
 *   fontFaces: [...],
 *   fontLoader: Font.loadAsync,
 *   includeSynthesizedStylesheet: false,
 *   includeAdditionalStylesheets: ['https://fonts.googleapis.com/css2?family=Roboto&display=swap']
 * }
 */

export interface FontFacesConfig {
  /** An array of font faces to register. */
  fontFaces: FontFace[];

  /**
   * (Native only) - A function that loads font resources into the application.
   * This option must be provided for this library to work properly on native platforms.
   * */
  fontLoader: FontResourcesLoader;

  /** (Web only) - Whether or not a <style/> tag should be created and added to the document's <head/>. */
  includeSynthesizedStylesheet?: boolean;

  /** (Web only) - An array of additional stylesheet URLs to be added as <link/> tags to the document's <head/>. */
  includeAdditionalStylesheets?: string[];
}
