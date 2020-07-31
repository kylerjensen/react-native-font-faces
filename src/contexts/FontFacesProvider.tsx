import React, { PropsWithChildren, useEffect } from 'react';
import { FontFace } from '../types/FontFace';
import { FontLoader } from '../types/FontLoader';
import { globalFontFaces } from '../utilities/globalFontFaces';
import { overrideTextRender } from '../utilities/overrideTextRender';
import { extractRemoteFontUrls } from '../utilities/extractRemoteFontUrls';
import { extractLocalFontName } from '../utilities/extractLocalFontName';

export type FontFacesProviderProps = {
  /** An array of font faces that should be made available to the application */
  fontFaces: FontFace[];

  /** A function that loads remote fonts into the application */
  nativeFontLoader: FontLoader;

  /** A function that will be invoked when the provider begins or finishes loading remote fonts */
  onLoading?: (loading: boolean) => void;

  /** A function that will be invoked when an error occurs while loading remote fonts */
  onError?: (error: Error) => void;
};

/**
 * Activates the given set of font faces for the currently running application.
 * On iOS/Android, the `render()` function of the `Text` component is overridden
 * with a delegating implementation that transforms font families, weights,
 * and styles into their corresponding font names.
 *
 * On iOS/Android, this provider will automatically download any available font
 * files from FontFace objects with a `url()` source and load them into your app
 * using the `nativeFontLoader` you provided to `<FontFacesProvider />`.
 *
 * On the web, this provider will inject aa <style /> tag into the document head
 * with a `@font-face` declaration for each item in `props.fontFaces`, also making
 * use of any `url()` sources provided.
 */
export function FontFacesProvider(props: PropsWithChildren<FontFacesProviderProps>) {
  const onError = props.onError ?? (() => {});
  const onLoading = props.onLoading ?? (() => {});
  const onStarted = () => onLoading(true);
  const onFinished = () => onLoading(false);

  const cleanupGlobalFontFaces = () => {
    props.fontFaces.forEach(fontFace => {
      const fontName = extractLocalFontName(fontFace);
      delete globalFontFaces[fontName];
    });
  };

  const registerGlobalFontFaces = () => {
    props.fontFaces.forEach(fontFace => {
      const fontName = extractLocalFontName(fontFace);
      globalFontFaces[fontName] = fontFace;
    });
    return cleanupGlobalFontFaces;
  };

  const startLoadingRemoteFonts = () => {
    onStarted();
    const remoteFonts = extractRemoteFontUrls(props.fontFaces);
    props.nativeFontLoader(remoteFonts).catch(onError).finally(onFinished);
  };

  useEffect(overrideTextRender, []);

  useEffect(registerGlobalFontFaces, [props.fontFaces]);

  useEffect(startLoadingRemoteFonts, [props.nativeFontLoader, props.fontFaces]);

  return <>{props.children}</>;
}
