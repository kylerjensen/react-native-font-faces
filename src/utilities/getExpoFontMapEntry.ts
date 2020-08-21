import { FontFace } from '../types/FontFace';
import { explodeToArray } from './explodeToArray';

export function getExpoFontMapEntry(fontFace: FontFace) {
  for (const source of explodeToArray(fontFace.src)) {
    if (source.type === 'url') {
      const { url, format } = source;
      return { url, format };
    }
  }
}
