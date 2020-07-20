import { useEffect, useContext, useState } from 'react';
import { FontFace } from '../types/FontFace';
import { globalFontFaces } from '../utilities/globalFontFaces';
import { FontFacesContext } from '../contexts/FontFacesContext';
import { extractLocalFontName } from '../utilities/extractLocalFontName';
import { extractRemoteFontUrl } from '../utilities/extractRemoteFontUrl';

/**
 * Activates the given set of font faces for the currently running application.
 * On iOS/Android, the `render()` function of the `Text` component is overridden
 * with a delegating implementation that transforms font families, weights,
 * and styles into their corresponding font names. On web, this function is
 * currently a no-op.
 *
 * On iOS/Android, this function will automatically download any available font
 * files from FontFace objects with a `url()` source and load them into your app
 * using the `nativeFontLoader` you provided to `<FontFacesProvider />`.
 *
 * Important! On the Web, this function does NOT actually download any additional
 * font files or load them into your app.
 *
 * @param fontFaces an array of font faces to activate
 * @returns
 * - `[false, undefined]` if fonts are still loading
 * - `[true, undefined]` if all font faces have been successfully loaded
 * - `[false, Error]` if an error occurred
 */
export function useFontFaces(fontFaces: FontFace[]) {
  const { nativeFontLoader, verifyInitialized } = useContext(FontFacesContext);
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);
  const [fontsErrored, setFontsErrored] = useState<Error>();

  verifyInitialized();

  const _load = () => {
    const urlsToLoad: Record<string, string> = {};
    fontFaces.forEach(fontFace => {
      const fontName = extractLocalFontName(fontFace);
      const remoteUrl = extractRemoteFontUrl(fontFace)?.url;
      if (remoteUrl) {
        urlsToLoad[fontName] = remoteUrl;
      }
    });
    nativeFontLoader(urlsToLoad)
      .then(() => setFontsLoaded(true))
      .catch(err => setFontsErrored(err));
  };

  const _cleanup = () => {
    fontFaces.forEach(fontFace => {
      const fontName = extractLocalFontName(fontFace);
      delete globalFontFaces[fontName];
    });
  };

  const _register = () => {
    fontFaces.forEach(fontFace => {
      const fontName = extractLocalFontName(fontFace);
      globalFontFaces[fontName] = fontFace;
    });
    return _cleanup;
  };

  useEffect(_load, [nativeFontLoader, fontFaces]);

  useEffect(_register, [fontFaces]);

  return [fontsLoaded, fontsErrored];
}
