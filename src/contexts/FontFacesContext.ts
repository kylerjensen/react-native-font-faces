import React from 'react';
import { FontLoader } from '../types/FontLoader';

export type FontFacesContext = {
  nativeFontLoader: FontLoader;
  verifyInitialized: () => void;
};

export const FontFacesContext = React.createContext<FontFacesContext>({
  nativeFontLoader: async () => {},
  verifyInitialized: () => {
    throw new Error(
      'FontFacesProvider has not been initialized. Please ensure that your application is using a <FontFacesProvider /> in its root component.'
    );
  },
});
