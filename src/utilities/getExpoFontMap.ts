import { FontFace } from '../types/FontFace';
import { ExpoFontMap } from '../types/ExpoFontMap';
import { getLocalFontName } from './getLocalFontName';
import { getExpoFontMapEntry } from './getExpoFontMapEntry';

export function getExpoFontMap(fontFaces: FontFace[]): ExpoFontMap {
  const obj: ExpoFontMap = {};
  for (const fontFace of fontFaces) {
    const fontName = getLocalFontName(fontFace);
    const remoteUrl = getExpoFontMapEntry(fontFace)?.url;
    if (remoteUrl) {
      obj[fontName] = remoteUrl;
    }
  }
  return obj;
}
