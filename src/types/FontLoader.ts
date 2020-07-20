/**
 * A function that accepts a dictionary of font names and their corresponding
 * download URLs and returns a Promise that resolves when the fonts have been
 * successfully loaded into the application.
 *
 * @example
 * import * as Font from 'expo-font';
 * import { FontLoader } from 'react-native-font-faces';
 *
 * export const fontLoader: FontLoader = Font.loadAsync;
 */
export type FontLoader = (fontFaces: Record<string, string>) => Promise<void>;
