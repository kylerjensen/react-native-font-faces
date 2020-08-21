import { FontFace } from '../types/FontFace';
import { getExpoFontMap } from './getExpoFontMap';
import { overrideTextRenderFn } from './overrideTextRenderFn';
import { registerGlobalFontFaces } from './registerGlobalFontFaces';
import { overrideTextInputRenderFn } from './overrideTextInputRenderFn';
import { getDynamicFontList } from './getDynamicFontList';

export function enableFontFaces(fontFaces: FontFace[]) {
  overrideTextRenderFn();
  overrideTextInputRenderFn();
  registerGlobalFontFaces(fontFaces);
  return {
    expo: getExpoFontMap(fontFaces),
    rndf: getDynamicFontList(fontFaces),
  };
}
