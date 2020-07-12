import { FontResources } from './FontResources';
/**
 * A function that takes a dictionary of font names and URLs and returns a
 * promise that resolves when all the fonts in the dictionary have been loaded
 * into the application and are ready for use.
 * */

export type FontResourcesLoader = (fonts: FontResources) => Promise<void>;
