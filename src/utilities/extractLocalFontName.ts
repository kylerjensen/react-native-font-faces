import { FontFace } from '../types/FontFace';
import { explodeToArray } from './explodeToArray';

export function extractLocalFontName(fontFace: FontFace) {
  for (const source of explodeToArray(fontFace.src)) {
    if (source.type === 'local') {
      return source.name;
    }
  }
  throw new Error(`Invalid font face (missing required local() entry in src attribute): ${JSON.stringify(fontFace)}`);
}
