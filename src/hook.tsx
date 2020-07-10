import { Platform } from 'react-native';
import { useState, useEffect } from 'react';
import {
  extractFontResources,
  createSynthesizedStylesheet,
  appendToDocumentHead,
  createAdditionalStylesheets,
  appendAllToDocumentHead,
} from './utilities';
import { FontFacesConfig } from './types';

export function useFontFaces(config: FontFacesConfig) {
  const [error, setError] = useState<Error>();
  const [loaded, setLoaded] = useState(false);
  const { fontFaces, fontLoader } = config;
  useEffect(() => {
    if (Platform.OS === 'web') {
      if (config.includeSynthesizedStylesheet ?? true) {
        const style = createSynthesizedStylesheet(config.fontFaces);
        appendToDocumentHead(style);
      }
      if (config.includeAdditionalStylesheets) {
        const links = createAdditionalStylesheets(config.includeAdditionalStylesheets);
        appendAllToDocumentHead(links);
      }
      setLoaded(true);
    } else if (fontLoader) {
      fontLoader(extractFontResources(fontFaces))
        .then(() => setLoaded(true))
        .catch(err => setError(err));
    } else {
      setLoaded(true);
    }
  }, [fontFaces, fontLoader]);
  return [loaded, error];
}
