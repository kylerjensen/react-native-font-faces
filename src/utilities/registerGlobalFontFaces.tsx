import { FontFace } from '../types/FontFace';
import { globalFontFaces } from './globalFontFaces';
import { getLocalFontName } from './getLocalFontName';

export function registerGlobalFontFaces(fontFaces: FontFace[]) {
  fontFaces.forEach(fontFace => {
    const fontName = getLocalFontName(fontFace);
    globalFontFaces[fontName] = fontFace;
  });
}
