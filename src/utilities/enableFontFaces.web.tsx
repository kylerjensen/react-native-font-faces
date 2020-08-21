import { FontFace } from '../types/FontFace';
import { EnableFontFacesResult } from 'src/types/EnableFontFacesResult';
import { generateInlineStyleSheet } from './generateInlineStyleSheet';

export function enableFontFaces(fontFaces: FontFace[]): EnableFontFacesResult {
  const style = document.createElement('style');
  style.innerHTML = generateInlineStyleSheet(fontFaces);
  document.head.append(style);
  return { expo: {}, rndf: [] };
}
