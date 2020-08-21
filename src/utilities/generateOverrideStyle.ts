import { FontFace } from '../types/FontFace';
import { TextStyle } from 'react-native';
import { matchFontFace } from './matchFontFace';
import { getLocalFontName } from './getLocalFontName';

export function generateOverrideStyle(fontFaces: FontFace[], textStyle: TextStyle): TextStyle {
  const fontFace = matchFontFace(fontFaces, textStyle);
  if (fontFace) {
    const fontFamily = getLocalFontName(fontFace);
    const fontWeight = undefined;
    const fontStyle = undefined;
    return { ...textStyle, fontFamily, fontWeight, fontStyle };
  } else {
    return textStyle;
  }
}
