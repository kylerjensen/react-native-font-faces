import { FontFace } from '../types/FontFace';
import { explodeToArray } from './explodeToArray';

export function extractLocalFontName(fontFace: FontFace) {
  for (const source of explodeToArray(fontFace.src)) {
    if (source.type === 'local') {
      return source.name;
    }
  }
  throw new Error(
    `Invalid font face: ${fontFace.fontFamily}@${fontFace.fontWeight},${fontFace.fontStyle} (missing required 'local()' entry in 'src')`
  );
}
