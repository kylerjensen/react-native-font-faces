import { generateOverrideStyle } from '../src/utilities/generateOverrideStyle';
import { Roboto_All } from '../src/samples/Roboto';
import { TextStyle } from 'react-native';

describe('generateOverrideStyle', () => {
  it('should ignore the text style for non-matching font families', () => {
    const given: TextStyle = { fontFamily: 'San Francisco', fontWeight: 'bold', fontStyle: 'italic' };
    expect(generateOverrideStyle(Roboto_All, given)).toMatchInlineSnapshot(`
      Object {
        "fontFamily": "San Francisco",
        "fontStyle": "italic",
        "fontWeight": "bold",
      }
    `);
  });

  it('should override the text style for matching font family', () => {
    const given: TextStyle = { fontFamily: 'Roboto' };
    expect(generateOverrideStyle(Roboto_All, given)).toMatchInlineSnapshot(`
      Object {
        "fontFamily": "Roboto-Regular",
        "fontStyle": undefined,
        "fontWeight": undefined,
      }
    `);
  });

  it('should override the text style for matching font family and style', () => {
    const given: TextStyle = { fontFamily: 'Roboto', fontStyle: 'italic' };
    expect(generateOverrideStyle(Roboto_All, given)).toMatchInlineSnapshot(`
      Object {
        "fontFamily": "Roboto-Italic",
        "fontStyle": undefined,
        "fontWeight": undefined,
      }
    `);
  });

  it('should override the text style for matching font family and weight', () => {
    const given: TextStyle = { fontFamily: 'Roboto', fontWeight: '100' };
    expect(generateOverrideStyle(Roboto_All, given)).toMatchInlineSnapshot(`
      Object {
        "fontFamily": "Roboto-Thin",
        "fontStyle": undefined,
        "fontWeight": undefined,
      }
    `);
  });

  it('should override the text style for matching font family, weight, and style', () => {
    const given: TextStyle = { fontFamily: 'Roboto', fontWeight: 'bold', fontStyle: 'italic' };
    expect(generateOverrideStyle(Roboto_All, given)).toMatchInlineSnapshot(`
      Object {
        "fontFamily": "Roboto-BoldItalic",
        "fontStyle": undefined,
        "fontWeight": undefined,
      }
    `);
  });

  it('should preserve other properties from the text style', () => {
    const given: TextStyle = { color: 'blue', fontFamily: 'Roboto', textDecorationLine: 'underline' };
    expect(generateOverrideStyle(Roboto_All, given)).toMatchInlineSnapshot(`
      Object {
        "color": "blue",
        "fontFamily": "Roboto-Regular",
        "fontStyle": undefined,
        "fontWeight": undefined,
        "textDecorationLine": "underline",
      }
    `);
  });
});
