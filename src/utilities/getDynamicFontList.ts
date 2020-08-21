import { FontFace } from '../types/FontFace';
import { DynamicFontList } from 'src/types/DynamicFontList';
import { getDynamicFontListEntry } from './getDynamicFontListEntry';

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
