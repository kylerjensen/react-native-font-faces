import { Roboto } from '../samples/roboto';
import { createFontResources } from './createFontResources';

describe('createFontResources', () => {
  it('should properly convert FontFace objects to FontResource objects', () => {
    const resources = createFontResources(Roboto.all);
    expect(resources).toMatchInlineSnapshot(`
      Object {
        "Roboto-Regular": Object {
          "display": "swap",
          "uri": "https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2",
        },
        "Roboto-RegularItalic": Object {
          "display": "block",
          "uri": "https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xIIzIXKMny.woff2",
        },
      }
    `);
  });
});
