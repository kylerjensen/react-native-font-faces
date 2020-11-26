import { FontFace } from '../types/FontFace';
import { explodeToArray } from './explodeToArray';
import { getLocalFontName } from './getLocalFontName';
import { DynamicFontListEntry } from '../types/DynamicFontListEntry';

export function getDynamicFontListEntry(fontFace: FontFace): DynamicFontListEntry | undefined {
  for (const source of explodeToArray(fontFace.src)) {
    if (source.type === 'url') {
      const { url, format } = source;
      const name = getLocalFontName(fontFace);
      const data = url;
      const type = format === 'opentype' ? 'otf' : format === 'truetype' ? 'ttf' : undefined;
      return { name, data, type };
    }
  }
}
