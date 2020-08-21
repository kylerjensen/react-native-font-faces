import { FontFace } from '../types/FontFace';
import { generateInlineStyleSheet } from './generateInlineStyleSheet';

export function enableFontFaces(fontFaces: FontFace[]): Record<string, string> {
  const style = document.createElement('style');
  style.innerHTML = generateInlineStyleSheet(fontFaces);
  document.head.append(style);
  return {};
}
