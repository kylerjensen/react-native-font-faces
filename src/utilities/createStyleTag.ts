import { FontFace } from '../types/FontFace';

export function createStyleTag(fontFaces: FontFace[]) {
  const style = document.createElement('style');
  style.innerHTML = fontFaces.sort(fontFaceCompare).map(fontFaceToCss).join('\n').trim();
  return style;
}

const fontFaceCompare = (a: FontFace, b: FontFace) => a.fontName.localeCompare(b.fontName);

const fontFaceToCss = (fontFace: FontFace) => `\
  @font-face {
    font-family: '${fontFace.fontFamily}';
    font-style: ${fontFace.fontStyle};
    font-weight: ${fontFace.fontWeight};
    font-display: ${fontFace.fontDisplay};
    src: local('${fontFace.fontFamily}'), local('${fontFace.fontName}'), url('${fontFace.src.uri}') format('${fontFace.src.format}');
  }`;
