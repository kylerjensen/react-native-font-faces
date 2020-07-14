import { FontFace } from '../types/FontFace';

export function createLinkTags(fontFaces: FontFace[]) {
  const result: HTMLLinkElement[] = [];
  for (const { src } of fontFaces) {
    if (src.webfont && !result.find(r => r.href === src.webfont)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = src.webfont;
      result.push(link);
    }
  }
  return result;
}
