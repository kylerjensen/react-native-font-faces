import dedent from 'ts-dedent';
import { FontFace } from '../types/FontFace';
import { getExpoFontMapEntry } from './getExpoFontMapEntry';
import { getLocalFontName } from './getLocalFontName';

export function generateInlineStyle(fontFace: FontFace) {
  return dedent`
    @font-face {
      font-family: '${fontFace.fontFamily}';
      font-style: ${fontFace.fontStyle};
      font-weight: ${fontFace.fontWeight};
      font-display: auto;
      src: ${extractSourceString(fontFace)};
    }`;
}

function extractSourceString(fontFace: FontFace) {
  const fontName = getLocalFontName(fontFace);
  const remoteUrl = getExpoFontMapEntry(fontFace);
  if (remoteUrl) {
    return `local('${fontFace.fontFamily}'), local('${fontName}'), url(${remoteUrl.url}) format('${remoteUrl.format}')`;
  } else {
    return `local('${fontFace.fontFamily}'), local('${fontName}');`;
  }
}
