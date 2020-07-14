import { FontStyle } from './FontStyle';
import { FontWeight } from './FontWeight';
import { FontSource } from './FontSource';
import { FontDisplay } from './FontDisplay';

/**
 * Specifies a named font, it's font family, it's style attributes, and the URL where it can be found.
 *
 * @example
 * const Roboto_Regular: FontFace = {
 *   fontFamily: 'Roboto',
 *   fontStyle: 'normal',
 *   fontWeight: '400',
 *   fontDisplay: 'swap',
 *   src: { ... },
 * };
 */
export interface FontFace {
  fontFamily: string;
  fontStyle: FontStyle;
  fontWeight: FontWeight;
  fontDisplay: FontDisplay;
  src: FontSource;
}
