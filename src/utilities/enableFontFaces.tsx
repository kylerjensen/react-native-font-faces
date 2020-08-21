import { FontFace } from '../types/FontFace';
import { getExpoFontMap } from './getExpoFontMap';
import { overrideTextRenderFn } from './overrideTextRenderFn';
import { registerGlobalFontFaces } from './registerGlobalFontFaces';
import { overrideTextInputRenderFn } from './overrideTextInputRenderFn';
import { getDynamicFontList } from './getDynamicFontList';
import { EnableFontFacesResult } from 'src/types/EnableFontFacesResult';

export function enableFontFaces(fontFaces: FontFace[]): EnableFontFacesResult {
  overrideTextRenderFn();
  overrideTextInputRenderFn();
  registerGlobalFontFaces(fontFaces);
  return {
    expo: getExpoFontMap(fontFaces),
    rndf: getDynamicFontList(fontFaces),
  };
}
