import { Roboto_All } from '../samples/Roboto';
import { generateInlineStyleSheet } from './generateInlineStyleSheet';

describe('generateInlineStyleSheet', () => {
  it('should correctly generate an inline style sheet', () => {
    expect(generateInlineStyleSheet(Roboto_All)).toMatchInlineSnapshot(`
      "@font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 100;
        font-display: auto;
        src: local('Roboto'), local('Roboto-Thin'), url(https://ff.static.1001fonts.net/r/o/roboto.thin.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 100;
        font-display: auto;
        src: local('Roboto'), local('Roboto-ThinItalic'), url(https://ff.static.1001fonts.net/r/o/roboto.thin-italic.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-display: auto;
        src: local('Roboto'), local('Roboto-Light'), url(https://ff.static.1001fonts.net/r/o/roboto.light.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 300;
        font-display: auto;
        src: local('Roboto'), local('Roboto-LightItalic'), url(https://ff.static.1001fonts.net/r/o/roboto.light-italic.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-display: auto;
        src: local('Roboto'), local('Roboto-Regular'), url(https://ff.static.1001fonts.net/r/o/roboto.regular.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-display: auto;
        src: local('Roboto'), local('Roboto-Italic'), url(https://ff.static.1001fonts.net/r/o/roboto.italic.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-display: auto;
        src: local('Roboto'), local('Roboto-Medium'), url(https://ff.static.1001fonts.net/r/o/roboto.medium.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 500;
        font-display: auto;
        src: local('Roboto'), local('Roboto-MediumItalic'), url(https://ff.static.1001fonts.net/r/o/roboto.medium-italic.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-display: auto;
        src: local('Roboto'), local('Roboto-Bold'), url(https://ff.static.1001fonts.net/r/o/roboto.bold.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 700;
        font-display: auto;
        src: local('Roboto'), local('Roboto-BoldItalic'), url(https://ff.static.1001fonts.net/r/o/roboto.bold-italic.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-display: auto;
        src: local('Roboto'), local('Roboto-Black'), url(https://ff.static.1001fonts.net/r/o/roboto.black.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 900;
        font-display: auto;
        src: local('Roboto'), local('Roboto-BlackItalic'), url(https://ff.static.1001fonts.net/r/o/roboto.black-italic.ttf) format('truetype');
      }"
    `);
  });
});
