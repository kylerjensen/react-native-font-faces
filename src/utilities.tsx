import { FontFace, FontResources } from './types';

export function appendToDocumentHead(element: HTMLElement) {
  const head = document.head;
  head.appendChild(element);
}

export function appendAllToDocumentHead(elements: HTMLElement[]) {
  elements.forEach(e => appendToDocumentHead(e));
}

export function extractFontResources(fontFaces: FontFace[]) {
  const result: FontResources = {};
  fontFaces.forEach(fontFace => {
    result[fontFace.fontName] = {
      uri: fontFace.src.uri,
      display: fontFace.fontDisplay,
    };
  });
  return result;
}

export function createSynthesizedStylesheet(fontFaces: FontFace[]) {
  const style = document.createElement('style');
  style.innerHTML = fontFaces.sort(fontFaceCompare).map(fontFaceToCss).join('\n').trim();
  return style;
}

export function createAdditionalStylesheets(linkHrefs: string[]) {
  return linkHrefs.map(href => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    return link;
  });
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
