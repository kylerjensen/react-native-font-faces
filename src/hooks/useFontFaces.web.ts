import { FontFacesConfig } from '../types/FontFacesConfig';
import { createStyleTag } from '../utilities/createStyleTag';
import { createLinkTag } from '../utilities/createLinkTag';

export function useFontFaces(config: FontFacesConfig): boolean {
  if (config.includeSynthesizedStylesheet ?? true) {
    document.head.appendChild(createStyleTag(config.fontFaces));
  }
  if (config.includeAdditionalStylesheets) {
    for (const href of config.includeAdditionalStylesheets) {
      document.head.appendChild(createLinkTag(href));
    }
  }
  return true;
}
