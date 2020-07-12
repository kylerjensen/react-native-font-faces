import { FontDisplay } from './FontDisplay';
import { FontWeight } from './FontWeight';
import { FontStyle } from './FontStyle';
import { FontSource } from './FontSource';
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
