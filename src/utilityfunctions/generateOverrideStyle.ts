import { FontFace } from '../types/FontFace';
import { TextStyle } from 'react-native';
import { matchFontFace } from './matchFontFace';

export function generateOverrideStyle(fontFaces: FontFace[], textStyle: TextStyle): TextStyle {
  const fontFace = matchFontFace(fontFaces, textStyle);
  if (fontFace) {
    const fontFamily = fontFace.src.name;
    const { fontStyle, fontWeight, ...rest } = textStyle;
    return { ...rest, fontFamily };
  } else {
    return textStyle;
  }
}
