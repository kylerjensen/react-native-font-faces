import React, { PropsWithChildren, useEffect } from 'react';
import { FontLoader } from '../types/FontLoader';
import { FontFacesContext } from './FontFacesContext';
import { overrideTextRender } from '../utilities/overrideTextRender';

export type FontFacesProviderProps = {
  nativeFontLoader: FontLoader;
};

export function FontFacesProvider({ nativeFontLoader, ...rest }: PropsWithChildren<FontFacesProviderProps>) {
  useEffect(() => overrideTextRender(), []);
  const value = { nativeFontLoader, verifyInitialized: () => {} };
  return <FontFacesContext.Provider value={value} {...rest} />;
}
