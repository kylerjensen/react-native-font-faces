import { Roboto_Regular } from '../samples/Roboto';
import { generateInlineStyle } from './generateInlineStyle';

describe('generateInlineStyle', () => {
  it('should correctly generate an inline style string', () => {
    expect(generateInlineStyle(Roboto_Regular)).toMatchInlineSnapshot(`
      "@font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Roboto'), local('Roboto-Regular'), url(https://ff.static.1001fonts.net/r/o/roboto.regular.ttf) format('truetype');
      }"
    `);
  });
});
