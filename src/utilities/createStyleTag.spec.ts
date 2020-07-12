import { createStyleTag } from './createStyleTag';
import { Roboto } from '../samples/roboto';

describe('createStyleTag', () => {
  it('should create a well-formed <style/> tag', () => {
    const style = createStyleTag(Roboto.all);
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
