import { FontFace } from '../types/FontFace';
import { generateInlineStyle } from './generateInlineStyle';

export function generateInlineStyleSheet(fontFaces: FontFace[]) {
  return fontFaces.map(fontFace => generateInlineStyle(fontFace)).join('\n');
}
