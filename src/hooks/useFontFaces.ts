import { useState, useEffect } from 'react';
import { FontFacesConfig } from '../types/FontFacesConfig';
import { createFontResources } from '../utilities/createFontResources';

export function useFontFaces(config: FontFacesConfig): boolean {
  const [loaded, setLoaded] = useState(false);
  const { fontFaces, fontLoader } = config;
  useEffect(() => {
    fontLoader(createFontResources(fontFaces))
      .then(() => setLoaded(true))
      .catch(err => console.warn(err));
  }, [fontFaces, fontLoader]);
  return loaded;
}
