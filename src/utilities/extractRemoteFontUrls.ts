import { FontFace } from '../types/FontFace';
import { extractLocalFontName } from './extractLocalFontName';
import { extractRemoteFontUrl } from './extractRemoteFontUrl';

export function extractRemoteFontUrls(fontFaces: FontFace[]) {
  return fontFaces.reduce((obj, fontFace) => {
    const fontName = extractLocalFontName(fontFace);
    const remoteUrl = extractRemoteFontUrl(fontFace)?.url;
    if (remoteUrl) {
      obj[fontName] = remoteUrl;
    }
    return obj;
  }, {} as Record<string, string>);
}
