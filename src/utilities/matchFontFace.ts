import { TextStyle } from 'react-native';
import { FontFace } from '../types/FontFace';
import { FontStyle } from '../types/FontStyle';
import { FontWeight } from '../types/FontWeight';
import { normalizeFontWeight } from './normalizeFontWeight';

/**
 * The Hermes JS engine does not do a stable sort: https://github.com/facebook/hermes/issues/212
 */
export function stableSort<T>(array: T[], ...compareFns: Array<(a: T, b: T) => number>) {
  return compareFns.reduce((final, compareFn) => {
    return final
      .map((item, index) => ({ item, index }))
      .sort((a, b) => compareFn(a.item, b.item) || a.index - b.index)
      .map(({ item }) => item)
  }, array);
}

/**
 * Uses a font matching algorithm to choose from the list of given font faces,
 * the most appropriate font face (if any) to use for the given text style.
 *
 * @see https://www.w3.org/TR/CSS2/fonts.html
 */
export function matchFontFace(fontFaces: FontFace[], textStyle: TextStyle): FontFace | undefined {
  return stableSort(
    fontFaces.filter(ff => filterFontFamilyincludes(ff, textStyle)),
    (a, b) => compareFontWeightDistance(a, b, textStyle),
    (a, b) => compareFontStyleExactMatch(a, b, textStyle),
    (a, b) => compareFontFamilyStartsWith(a, b, textStyle)
  ).find(() => true)
}

function filterFontFamilyincludes(ff: FontFace, textStyle: TextStyle): boolean {
  return fontFamilyIncludes(ff, textStyle.fontFamily);
}

export function compareFontWeightDistance(a: FontFace, b: FontFace, textStyle: TextStyle): number {
  const aDistance = fontWeightDistance(a, textStyle.fontWeight);
  const bDistance = fontWeightDistance(b, textStyle.fontWeight);
  if (aDistance === bDistance) return 0;
  else if (aDistance < bDistance) return -1;
  else if (aDistance > bDistance) return 1;
  else return 0;
}

function compareFontStyleExactMatch(a: FontFace, b: FontFace, textStyle: TextStyle): number {
  const aMatches = fontStyleMatches(a, textStyle.fontStyle);
  const bMatches = fontStyleMatches(b, textStyle.fontStyle);
  if (aMatches && bMatches) return 0;
  else if (aMatches) return -1;
  else if (bMatches) return 1;
  else return 0;
}

function compareFontFamilyStartsWith(a: FontFace, b: FontFace, textStyle: TextStyle): number {
  const aMatches = fontFamilyStartsWith(a, textStyle.fontFamily);
  const bMatches = fontFamilyStartsWith(b, textStyle.fontFamily);
  if (aMatches && bMatches) return 0;
  else if (aMatches) return -1;
  else if (bMatches) return 1;
  else return 0;
}

function fontStyleMatches(fontFace: FontFace, desiredFontStyle: FontStyle = 'normal'): boolean {
  return desiredFontStyle === fontFace.fontStyle;
}

function fontWeightDistance(fontFace: FontFace, desiredFontWeight: FontWeight = 'normal'): number {
  const a = normalizeFontWeight(desiredFontWeight);
  const b = normalizeFontWeight(fontFace.fontWeight);
  const d = Math.abs(a - b);
  if (a < 400 && b < a) return d - 1;
  else if (a > 500 && b > a) return d - 1;
  else if (a === 400 && b === 500) return d - 1;
  else if (a === 500 && b === 400) return d - 1;
  else return d;
}

function fontFamilyIncludes(fontFace: FontFace, desiredFontFamily: string = ''): boolean {
  return desiredFontFamily.includes(fontFace.fontFamily);
}

function fontFamilyStartsWith(fontFace: FontFace, desiredFontFamily: string = ''): boolean {
  return desiredFontFamily.startsWith(fontFace.fontFamily);
}
