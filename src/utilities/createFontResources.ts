import { FontResources } from '../types/FontResources';
import { FontFace } from '../types/FontFace';

export function createFontResources(fontFaces: FontFace[]) {
  const result: FontResources = {};
  for (const { src } of fontFaces) {
    if (src.name && src.url) {
      result[src.name] = src.url;
    }
  }
  return result;
}
