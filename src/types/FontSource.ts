import { FontFormat } from './FontFormat';
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
