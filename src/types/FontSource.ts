import { FontFormat } from './FontFormat';

/**
 * Specifies the url where a font can be found and, optionally, its format.
 *
 * @example
 * // Using a remote font source with separate native and web urls
 * const remoteFontSource: FontSource = {
 *   url: 'https://ff.static.1001fonts.net/r/o/roboto.regular.ttf',
 *   name: 'Roboto-Regular',
 *   format: 'truetype',
 *   webfont: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght%400,400&display=swap',
 * };
 *
 * // Using a local font source bundled as an Expo asset
 * const localFontSource: FontSource = {
 *   url: require('./assets/fonts/Roboto-Regular.otf'),
 *   format: 'opentype',
 * };
 *
 * // Using a local font by name only
 * const localFontSource: FontSource = {
 *   name: 'San Francisco'
 * };
 */
export interface FontSource {
  /**
   * The url where the raw font file for the font face can be downloaded.
   * */
  url?: string;

  /**
   * The PostScript name for the font file located at `url`.
   *
   */
  name?: string;

  /**
   * The format of the font file located at `url`.
   * */
  format?: FontFormat;

  /**
   * The url where a corresponding CSS webfont file can be located. On web,this will
   * be added as a <link/> tag instead of as an entry to the generated <style/> tag.
   * */
  webfont?: string;
}
