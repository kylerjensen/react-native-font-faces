import { createLinkTags } from './createLinkTags';
import { Roboto_All, Roboto_All_UnifiedWebfont, Roboto_All_NoWebfonts } from '../samples/Roboto';

describe('createLinkTags', () => {
  it('should only create <link/> tags for font faces with webfonts', () => {
    expect(createLinkTags(Roboto_All_NoWebfonts)).toHaveLength(0);
  });

  it('should not create duplicate <link/> tags for font faces with the same webfont', () => {
    expect(createLinkTags(Roboto_All_UnifiedWebfont)).toMatchInlineSnapshot(`
      Array [
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
          type="text/css"
        />,
      ]
    `);
  });

  it('should create <link/> tags for all font faces with webfonts', () => {
    expect(createLinkTags(Roboto_All)).toMatchInlineSnapshot(`
      Array [
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100&display=swap"
          rel="stylesheet"
          type="text/css"
        />,
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap"
          rel="stylesheet"
          type="text/css"
        />,
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300&display=swap"
          rel="stylesheet"
          type="text/css"
        />,
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap"
          rel="stylesheet"
          type="text/css"
        />,
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400&display=swap"
          rel="stylesheet"
          type="text/css"
        />,
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,400&display=swap"
          rel="stylesheet"
          type="text/css"
        />,
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500&display=swap"
          rel="stylesheet"
          type="text/css"
        />,
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,500&display=swap"
          rel="stylesheet"
          type="text/css"
        />,
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700&display=swap"
          rel="stylesheet"
          type="text/css"
        />,
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,700&display=swap"
          rel="stylesheet"
          type="text/css"
        />,
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,900&display=swap"
          rel="stylesheet"
          type="text/css"
        />,
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap"
          rel="stylesheet"
          type="text/css"
        />,
      ]
    `);
  });
});
