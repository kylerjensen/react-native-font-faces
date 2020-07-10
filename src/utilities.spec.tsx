import { FontFace } from './types';
import { createSynthesizedStylesheet, extractFontResources, appendToDocumentHead } from './utilities';
import '@testing-library/jest-dom';

const robotoRegular: FontFace = {
  fontName: 'Roboto-Regular',
  fontStyle: 'normal',
  fontWeight: '400',
  fontFamily: 'Roboto',
  fontDisplay: 'swap',
  src: {
    uri: 'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2',
    format: 'woff2',
  },
};

const robotoRegularItalic: FontFace = {
  fontName: 'Roboto-RegularItalic',
  fontStyle: 'italic',
  fontWeight: '400',
  fontFamily: 'Roboto',
  fontDisplay: 'block',
  src: {
    uri: 'https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xIIzIXKMny.woff2',
    format: 'woff2',
  },
};

describe('appendToDocumentHead', () => {
  it('should append a <style/> element to the document', () => {
    const style = createSynthesizedStylesheet([robotoRegular, robotoRegularItalic]);
    appendToDocumentHead(style);
    expect(style).toBeInTheDocument();
  });
});

describe('extractFontResources', () => {
  it('should properly convert FontFace objects to FontResource objects', () => {
    const resources = extractFontResources([robotoRegular, robotoRegularItalic]);
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

describe('createSynthesizedStylesheet', () => {
  it('should create a well-formed <style/> tag', () => {
    const style = createSynthesizedStylesheet([robotoRegular, robotoRegularItalic]);
    expect(style).not.toBeInTheDocument();
    expect(style).toMatchInlineSnapshot(`
      <style>
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('Roboto'), local('Roboto-Regular'), url('https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          font-weight: 400;
          font-display: block;
          src: local('Roboto'), local('Roboto-RegularItalic'), url('https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xIIzIXKMny.woff2') format('woff2');
        }
      </style>
    `);
  });
});
