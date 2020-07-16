import { matchFontFace } from '../src/native/matchFontFace';

import {
  Roboto_All,
  Roboto_Regular,
  Roboto_Italic,
  Roboto_Thin,
  Roboto_Light,
  Roboto_Medium,
  Roboto_Bold,
  Roboto_Black,
  Roboto_ThinItalic,
  Roboto_LightItalic,
  Roboto_MediumItalic,
  Roboto_BoldItalic,
  Roboto_BlackItalic,
} from '../src/samples/Roboto';

describe('matchFontFace', () => {
  it('should not find a match for empty input', () => {
    expect(matchFontFace(Roboto_All, {})).toBeUndefined();
  });

  it('should not find a match for font family San Francisco', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'San Francisco' })).toBeUndefined();
  });

  it('should match Roboto_Thin for font family Roboto', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto' })).toEqual(Roboto_Regular);
  });

  it('should match Roboto_Thin for font weight 100', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: '100' })).toEqual(Roboto_Thin);
  });

  it('should match Roboto_Thin for font weight 200', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: '200' })).toEqual(Roboto_Thin);
  });

  it('should match Roboto_Light for font weight 300', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: '300' })).toEqual(Roboto_Light);
  });

  it('should match Roboto_Regular for font weight 400', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: '400' })).toEqual(Roboto_Regular);
  });

  it('should match Roboto_Medium for font weight 500', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: '500' })).toEqual(Roboto_Medium);
  });

  it('should match Roboto_Bold for font weight 600', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: '600' })).toEqual(Roboto_Bold);
  });

  it('should match Roboto_Bold for font weight 700', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: '700' })).toEqual(Roboto_Bold);
  });

  it('should match Roboto_Black for font weight 800', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: '800' })).toEqual(Roboto_Black);
  });

  it('should match Roboto_Black for font weight 900', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: '900' })).toEqual(Roboto_Black);
  });

  it('should match Roboto_Bold for font weight bold', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: 'bold' })).toEqual(Roboto_Bold);
  });

  it('should match Roboto_Regular for font weight normal', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: 'normal' })).toEqual(Roboto_Regular);
  });

  it('should match Roboto_ThinItalic for font weight 100 and font style italic', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: '100', fontStyle: 'italic' })).toEqual(
      Roboto_ThinItalic
    );
  });

  it('should match Roboto_ThinItalic for font weight 200 and font style italic', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: '200', fontStyle: 'italic' })).toEqual(
      Roboto_ThinItalic
    );
  });

  it('should match Roboto_LightItalic for font weight 300 and font style italic', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: '300', fontStyle: 'italic' })).toEqual(
      Roboto_LightItalic
    );
  });

  it('should match Roboto_Italic for font weight 400 and font style italic', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: '400', fontStyle: 'italic' })).toEqual(
      Roboto_Italic
    );
  });

  it('should match Roboto_MediumItalic for font weight 500 and font style italic', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: '500', fontStyle: 'italic' })).toEqual(
      Roboto_MediumItalic
    );
  });

  it('should match Roboto_BoldItalic for font weight 600 and font style italic', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: '600', fontStyle: 'italic' })).toEqual(
      Roboto_BoldItalic
    );
  });

  it('should match Roboto_BoldItalic for font weight 700 and font style italic', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: '700', fontStyle: 'italic' })).toEqual(
      Roboto_BoldItalic
    );
  });

  it('should match Roboto_BlackItalic for font weight 800 and font style italic', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: '800', fontStyle: 'italic' })).toEqual(
      Roboto_BlackItalic
    );
  });

  it('should match Roboto_BlackItalic for font weight 900 and font style italic', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: '900', fontStyle: 'italic' })).toEqual(
      Roboto_BlackItalic
    );
  });

  it('should match Roboto_BoldItalic for font weight bold and font style italic', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: 'bold', fontStyle: 'italic' })).toEqual(
      Roboto_BoldItalic
    );
  });

  it('should match Roboto_Italic for font weight normal and font style italic', () => {
    expect(matchFontFace(Roboto_All, { fontFamily: 'Roboto', fontWeight: 'normal', fontStyle: 'italic' })).toEqual(
      Roboto_Italic
    );
  });
});
