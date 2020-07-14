import { createFontResources } from './createFontResources';
import { Roboto_All } from '../samples/Roboto';

describe('createFontResources', () => {
  it('should properly convert a list of FontFaces to a FontResources object', () => {
    expect(createFontResources(Roboto_All)).toMatchInlineSnapshot(`
      Object {
        "Roboto-Black": "https://ff.static.1001fonts.net/r/o/roboto.black.ttf",
        "Roboto-BlackItalic": "https://ff.static.1001fonts.net/r/o/roboto.black-italic.ttf",
        "Roboto-Bold": "https://ff.static.1001fonts.net/r/o/roboto.bold.ttf",
        "Roboto-BoldItalic": "https://ff.static.1001fonts.net/r/o/roboto.bold-italic.ttf",
        "Roboto-Italic": "https://ff.static.1001fonts.net/r/o/roboto.italic.ttf",
        "Roboto-Light": "https://ff.static.1001fonts.net/r/o/roboto.light.ttf",
        "Roboto-LightItalic": "https://ff.static.1001fonts.net/r/o/roboto.light-italic.ttf",
        "Roboto-Medium": "https://ff.static.1001fonts.net/r/o/roboto.medium.ttf",
        "Roboto-MediumItalic": "https://ff.static.1001fonts.net/r/o/roboto.medium-italic.ttf",
        "Roboto-Regular": "https://ff.static.1001fonts.net/r/o/roboto.regular.ttf",
        "Roboto-Thin": "https://ff.static.1001fonts.net/r/o/roboto.thin.ttf",
        "Roboto-ThinItalic": "https://ff.static.1001fonts.net/r/o/roboto.thin-italic.ttf",
      }
    `);
  });
});
