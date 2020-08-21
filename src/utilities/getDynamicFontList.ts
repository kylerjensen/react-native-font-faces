import { FontFace } from '../types/FontFace';
import { getLocalFontName } from './getLocalFontName';
import { getExpoFontMapEntry } from './getExpoFontMapEntry';
import { ExpoFontMap } from 'src/types/ExpoFontMap';
import { getDynamicFontListEntry } from './getDynamicFontListEntry';
import { DynamicFontList } from 'src/types/DynamicFontList';

export function getDynamicFontList(fontFaces: FontFace[]): DynamicFontList {
  const list: DynamicFontList = [];
  for (const fontFace of fontFaces) {
    const entry = getDynamicFontListEntry(fontFace);
    if (entry) {
      list.push(entry);
    }
  }
  return list;
}
