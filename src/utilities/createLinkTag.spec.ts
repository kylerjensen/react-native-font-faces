import { createLinkTag } from './createLinkTag';
import { Roboto } from '../samples/roboto';

describe('createLinkTag', () => {
  it('should create a well-formed <link/> tag', () => {
    const style = createLinkTag(Roboto.webfonts);
    expect(style).toMatchInlineSnapshot(`
      <link
        href="https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2"
        rel="stylesheet"
        type="text/css"
      />
    `);
  });
});
