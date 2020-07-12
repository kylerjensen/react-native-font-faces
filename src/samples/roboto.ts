import { FontFace } from '../types/FontFace';

const Roboto_Regular: FontFace = {
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

const Roboto_RegularItalic: FontFace = {
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

export const Roboto = {
  all: [Roboto_Regular, Roboto_RegularItalic],
  webfonts: 'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
};
