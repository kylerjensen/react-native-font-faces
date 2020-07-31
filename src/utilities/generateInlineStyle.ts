import dedent from 'ts-dedent';
import { FontFace } from '../types/FontFace';
import { extractRemoteFontUrl } from './extractRemoteFontUrl';
import { extractLocalFontName } from './extractLocalFontName';

export function generateInlineStyle(fontFace: FontFace) {
  return dedent`
    @font-face {
      font-family: '${fontFace.fontFamily}';
      font-style: ${fontFace.fontStyle};
      font-weight: ${fontFace.fontWeight};
      font-display: swap;
      src: ${extractSourceString(fontFace)};
    }`;
}

function extractSourceString(fontFace: FontFace) {
  const fontName = extractLocalFontName(fontFace);
  const remoteUrl = extractRemoteFontUrl(fontFace);
  if (remoteUrl) {
    return `local('${fontFace.fontFamily}'), local('${fontName}'), url(${remoteUrl.url}) format('${remoteUrl.format}')`;
  } else {
    return `local('${fontFace.fontFamily}'), local('${fontName}');`;
  }
}
