import { FontStyle } from './FontStyle';
import { FontWeight } from './FontWeight';
import { FontSource } from './FontSource';

/**
 * Specifies a custom font with which to display text.
 *
 * The font can be loaded from either a remote server or a locally-installed font on the user's
 * own device. If the `local()` function is provided, specifying a font name to look for on the
 * user's device, that local font is used. Otherwise, the font resource specified using either
 * `url()` or `webfont()` function is downloaded and used.
 *
 * @example
 * import { FontFace, local } from 'react-native-font-faces';
 *
 * const Roboto_Regular: FontFace = {
 *   fontFamily: 'Roboto',
 *   fontWeight: '400',
 *   fontStyle: 'normal',
 *   src: local('Roboto-Regular'),
 * };
 */
export interface FontFace {
  /**
   * The name of the font family.
   */
  fontFamily: string;

  /**
   * Specifies font weights for the fonts specified in this font face rule.
   *
   * For a particular font family, authors can download various font faces which correspond to
   * the different styles of the same font family, and then use the font-weight descriptor to
   * explicitly specify the font face's weights. The values for the CSS descriptor is same as that
   * of its corresponding font property.
   */
  fontWeight: FontWeight;

  /**
   * Specifies the font style for the fonts specified in this font face rule.
   *
   * For a particular font family, authors can download various font faces which correspond to
   * the different styles of the same font family, and then use the font-style descriptor to
   * explicitly specify the font face's style. The values for the CSS descriptor is same as that
   * of its corresponding font property.
   */
  fontStyle: FontStyle;

  /**
   * The resource(s) containing font data. At least one value is required for the rule to be valid.
   *
   * This property is a list of external references or locally-installed font face names.
   * When a font is needed, the library iterates over the set of references listed using the first
   * one the operating system can attempt to activate. Only fonts that are compatible with the current
   * operating system are attempted.
   *
   * To provide maximum compatibilty between iOS, Android, and Web, exactly one `local` element MUST
   * be present in this list, whose value is be the PostScript-compatible name of the installed font.
   * */
  src: FontSource | FontSource[];
}
