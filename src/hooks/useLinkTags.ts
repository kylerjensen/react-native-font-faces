import { FontFace } from '../types/FontFace';
import { useEffect, useState } from 'react';
import { LinkTagsManager } from '../utilityclasses/LinkTagsManager';

export function useLinkTags(fontFaces: FontFace[]) {
  const hrefs = fontFaces.map(ff => ff.src.webfont).filter(isTruthy);
  const [className] = useState(LinkTagsManager.generateClassName());
  const linkTagsManager = new LinkTagsManager(className);

  useEffect(() => {
    linkTagsManager.addMissingLinkTags(hrefs);
    linkTagsManager.removeObsoleteLinkTags(hrefs);
  }, [hrefs]);

  useEffect(() => {
    return () => linkTagsManager.removeObsoleteLinkTags();
  }, []);
}

function isTruthy<T>(t?: T): t is T {
  return t !== null && t !== undefined;
}
