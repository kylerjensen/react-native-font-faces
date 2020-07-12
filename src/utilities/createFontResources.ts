import { FontResources } from '../types/FontResources';
import { FontFace } from '../types/FontFace';

export function createFontResources(fontFaces: FontFace[]) {
  const result: FontResources = {};
  fontFaces.forEach(fontFace => {
    result[fontFace.fontName] = {
      uri: fontFace.src.uri,
      display: fontFace.fontDisplay,
    };
  });
  return result;
}
