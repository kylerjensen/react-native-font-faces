import { useContext } from 'react';
import { FontFace } from '../types/FontFace';
import { FontFacesContext } from '../contexts/FontFacesContext';

/**
 * This is currently a no-op implementation for the Web.
 */
export function useFontFaces(fontFaces: FontFace[]) {
  useContext(FontFacesContext).verifyInitialized();
  // do nothing
  return [true, undefined];
}
