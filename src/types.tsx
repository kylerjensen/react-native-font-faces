export type FontStyle = 'normal' | 'italic';

export type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

export type FontFormat = 'woff' | 'woff2' | 'truetype' | 'opentype' | 'embedded-opentype' | 'svg';

export type FontDisplay = 'auto' | 'block' | 'swap' | 'fallback' | 'optional';

export type FontResource = { uri: string; display?: FontDisplay };

export type FontResources = Record<string, FontResource>;

/**
 * A function that takes a dictionary of font names and URLs and returns a
 * promise that resolves when all the fonts in the dictionary have been loaded
 * into the application and are ready for use.
 * */
export type FontResourcesLoader = (fonts: FontResources) => Promise<void>;

/**
 * Specifies the url where a font can be found and, optionally, its format.
 *
 * @example
 * const localFontSource: FontSource = {
 *   uri: require('./assets/fonts/Roboto-Regular.otf'),
 *   format: 'opentype',
 * };
 *
 * const remoteFontSource: FontSource = {
 *   uri: 'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
 *   format: 'woff2',
 * };
 */
export interface FontSource {
  uri: string;
  format: FontFormat;
}

/**
 * Specifies a named font, it's font family, it's style attributes, and the URL where it can be found.
 *
 * @example
 * const robotoRegular: FontFace = {
 *   fontName: 'Roboto-Regular',
 *   fontStyle: 'normal',
 *   fontWeight: '400',
 *   fontFamily: 'Roboto',
 *   fontDisplay: 'auto',
 *   src: {
 *     uri: 'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
 *     format: 'woff2',
 *   },
 * };
 */
export interface FontFace {
  fontName: string;
  fontStyle: FontStyle;
  fontWeight: FontWeight;
  fontFamily: string;
  fontDisplay: FontDisplay;
  src: FontSource;
}

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
  fontLoader?: FontResourcesLoader;

  /** (Web only) - Whether or not a <style/> tag should be created and added to the document's <head/>. */
  includeSynthesizedStylesheet?: boolean;

  /** (Web only) - An array of additional stylesheet URLs to be added as <link/> tags to the document's <head/>. */
  includeAdditionalStylesheets?: string[];
}
