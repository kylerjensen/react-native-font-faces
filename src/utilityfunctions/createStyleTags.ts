import { FontFace } from '../types/FontFace';

export function createStyleTags(fontFaces: FontFace[]) {
  const parts: string[] = [];
  for (const fontFace of fontFaces) {
    if (!fontFace.src.webfont) {
      parts.push(fontFaceToCss(fontFace));
    }
  }
  const style = document.createElement('style');
  style.innerHTML = '';
  style.innerHTML = parts.join('\n').trim();
  return [style];
}

const fontFaceToCss = (fontFace: FontFace) => `\
  @font-face {
    font-family: '${fontFace.fontFamily}';
    font-style: ${fontFace.fontStyle};
    font-weight: ${fontFace.fontWeight};
    font-display: ${fontFace.fontDisplay};
    src: ${fontFaceToCssSrc(fontFace)};
  }`;

const fontFaceToCssSrc = ({ src, fontFamily }: FontFace) => {
  const parts: string[] = [];
  parts.push(`local('${fontFamily}')`);
  if (src.name) parts.push(`local('${src.name}')`);
  if (src.url && src.format) parts.push(`url(${src.url}) format('${src.format}')`);
  if (src.url && !src.format) parts.push(`url(${src.url})`);
  return parts.join(', ');
};
