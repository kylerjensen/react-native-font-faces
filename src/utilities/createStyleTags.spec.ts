import { createStyleTags } from './createStyleTags';
import {
  Roboto_All,
  Roboto_All_NoWebfonts,
  Roboto_All_NameOnly,
  Roboto_All_FamilyOnly as Roboto_All_NoNames,
} from '../samples/roboto';

describe('createStyleTags', () => {
  it('should ignore font faces with webfonts', () => {
    expect(createStyleTags(Roboto_All)).toMatchInlineSnapshot(`
      Array [
        <style />,
      ]
    `);
  });

  it('should add styles for font faces with no name', () => {
    expect(createStyleTags(Roboto_All_NoNames)).toMatchInlineSnapshot(`
      Array [
        <style>
          @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 100;
          font-display: swap;
          src: local('Roboto');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 100;
          font-display: swap;
          src: local('Roboto');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: local('Roboto');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 300;
          font-display: swap;
          src: local('Roboto');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('Roboto');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: local('Roboto');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: local('Roboto');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 500;
          font-display: swap;
          src: local('Roboto');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: local('Roboto');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 700;
          font-display: swap;
          src: local('Roboto');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 900;
          font-display: swap;
          src: local('Roboto');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 900;
          font-display: swap;
          src: local('Roboto');
        }
        </style>,
      ]
    `);
  });

  it('should add styles for font faces with names only', () => {
    expect(createStyleTags(Roboto_All_NameOnly)).toMatchInlineSnapshot(`
      Array [
        <style>
          @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 100;
          font-display: swap;
          src: local('Roboto'), local('Roboto-Thin');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 100;
          font-display: swap;
          src: local('Roboto'), local('Roboto-ThinItalic');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: local('Roboto'), local('Roboto-Light');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 300;
          font-display: swap;
          src: local('Roboto'), local('Roboto-LightItalic');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('Roboto'), local('Roboto-Regular');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: local('Roboto'), local('Roboto-Italic');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: local('Roboto'), local('Roboto-Medium');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 500;
          font-display: swap;
          src: local('Roboto'), local('Roboto-MediumItalic');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: local('Roboto'), local('Roboto-Bold');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 700;
          font-display: swap;
          src: local('Roboto'), local('Roboto-BoldItalic');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 900;
          font-display: swap;
          src: local('Roboto'), local('Roboto-Black');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 900;
          font-display: swap;
          src: local('Roboto'), local('Roboto-BlackItalic');
        }
        </style>,
      ]
    `);
  });

  it('should add styles for all font faces with no webfonts', () => {
    expect(createStyleTags(Roboto_All_NoWebfonts)).toMatchInlineSnapshot(`
      Array [
        <style>
          @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 100;
          font-display: swap;
          src: local('Roboto'), local('Roboto-Thin'), url(https://ff.static.1001fonts.net/r/o/roboto.thin.ttf) format('truetype');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 100;
          font-display: swap;
          src: local('Roboto'), local('Roboto-ThinItalic'), url(https://ff.static.1001fonts.net/r/o/roboto.thin-italic.ttf) format('truetype');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: local('Roboto'), local('Roboto-Light'), url(https://ff.static.1001fonts.net/r/o/roboto.light.ttf) format('truetype');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 300;
          font-display: swap;
          src: local('Roboto'), local('Roboto-LightItalic'), url(https://ff.static.1001fonts.net/r/o/roboto.light-italic.ttf) format('truetype');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('Roboto'), local('Roboto-Regular'), url(https://ff.static.1001fonts.net/r/o/roboto.regular.ttf) format('truetype');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: local('Roboto'), local('Roboto-Italic'), url(https://ff.static.1001fonts.net/r/o/roboto.italic.ttf) format('truetype');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: local('Roboto'), local('Roboto-Medium'), url(https://ff.static.1001fonts.net/r/o/roboto.medium.ttf) format('truetype');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 500;
          font-display: swap;
          src: local('Roboto'), local('Roboto-MediumItalic'), url(https://ff.static.1001fonts.net/r/o/roboto.medium-italic.ttf) format('truetype');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: local('Roboto'), local('Roboto-Bold'), url(https://ff.static.1001fonts.net/r/o/roboto.bold.ttf) format('truetype');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 700;
          font-display: swap;
          src: local('Roboto'), local('Roboto-BoldItalic'), url(https://ff.static.1001fonts.net/r/o/roboto.bold-italic.ttf) format('truetype');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 900;
          font-display: swap;
          src: local('Roboto'), local('Roboto-Black'), url(https://ff.static.1001fonts.net/r/o/roboto.black.ttf) format('truetype');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 900;
          font-display: swap;
          src: local('Roboto'), local('Roboto-BlackItalic'), url(https://ff.static.1001fonts.net/r/o/roboto.black-italic.ttf) format('truetype');
        }
        </style>,
      ]
    `);
  });
});
