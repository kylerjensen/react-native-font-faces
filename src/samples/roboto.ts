import { FontFace } from '../types/FontFace';

export const Roboto_Thin: FontFace = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 100,
  fontDisplay: 'swap',
  src: {
    url: 'https://ff.static.1001fonts.net/r/o/roboto.thin.ttf',
    name: 'Roboto-Thin',
    format: 'truetype',
    webfont: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100&display=swap',
  },
};

export const Roboto_ThinItalic: FontFace = {
  fontFamily: 'Roboto',
  fontStyle: 'italic',
  fontWeight: 100,
  fontDisplay: 'swap',
  src: {
    url: 'https://ff.static.1001fonts.net/r/o/roboto.thin-italic.ttf',
    name: 'Roboto-ThinItalic',
    format: 'truetype',
    webfont: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap',
  },
};

export const Roboto_Light: FontFace = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 300,
  fontDisplay: 'swap',
  src: {
    url: 'https://ff.static.1001fonts.net/r/o/roboto.light.ttf',
    name: 'Roboto-Light',
    format: 'truetype',
    webfont: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300&display=swap',
  },
};

export const Roboto_LightItalic: FontFace = {
  fontFamily: 'Roboto',
  fontStyle: 'italic',
  fontWeight: 300,
  fontDisplay: 'swap',
  src: {
    url: 'https://ff.static.1001fonts.net/r/o/roboto.light-italic.ttf',
    name: 'Roboto-LightItalic',
    format: 'truetype',
    webfont: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap',
  },
};

export const Roboto_Regular: FontFace = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  fontDisplay: 'swap',
  src: {
    url: 'https://ff.static.1001fonts.net/r/o/roboto.regular.ttf',
    name: 'Roboto-Regular',
    format: 'truetype',
    webfont: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400&display=swap',
  },
};

export const Roboto_Italic: FontFace = {
  fontFamily: 'Roboto',
  fontStyle: 'italic',
  fontWeight: 400,
  fontDisplay: 'swap',
  src: {
    url: 'https://ff.static.1001fonts.net/r/o/roboto.italic.ttf',
    name: 'Roboto-Italic',
    format: 'truetype',
    webfont: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,400&display=swap',
  },
};

export const Roboto_Medium: FontFace = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 500,
  fontDisplay: 'swap',
  src: {
    url: 'https://ff.static.1001fonts.net/r/o/roboto.medium.ttf',
    name: 'Roboto-Medium',
    format: 'truetype',
    webfont: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500&display=swap',
  },
};

export const Roboto_MediumItalic: FontFace = {
  fontFamily: 'Roboto',
  fontStyle: 'italic',
  fontWeight: 500,
  fontDisplay: 'swap',
  src: {
    url: 'https://ff.static.1001fonts.net/r/o/roboto.medium-italic.ttf',
    name: 'Roboto-MediumItalic',
    format: 'truetype',
    webfont: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,500&display=swap',
  },
};

export const Roboto_Bold: FontFace = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 700,
  fontDisplay: 'swap',
  src: {
    url: 'https://ff.static.1001fonts.net/r/o/roboto.bold.ttf',
    name: 'Roboto-Bold',
    format: 'truetype',
    webfont: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700&display=swap',
  },
};

export const Roboto_BoldItalic: FontFace = {
  fontFamily: 'Roboto',
  fontStyle: 'italic',
  fontWeight: 700,
  fontDisplay: 'swap',
  src: {
    url: 'https://ff.static.1001fonts.net/r/o/roboto.bold-italic.ttf',
    name: 'Roboto-BoldItalic',
    format: 'truetype',
    webfont: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,700&display=swap',
  },
};

export const Roboto_Black: FontFace = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 900,
  fontDisplay: 'swap',
  src: {
    url: 'https://ff.static.1001fonts.net/r/o/roboto.black.ttf',
    name: 'Roboto-Black',
    format: 'truetype',
    webfont: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,900&display=swap',
  },
};

export const Roboto_BlackItalic: FontFace = {
  fontFamily: 'Roboto',
  fontStyle: 'italic',
  fontWeight: 900,
  fontDisplay: 'swap',
  src: {
    url: 'https://ff.static.1001fonts.net/r/o/roboto.black-italic.ttf',
    name: 'Roboto-BlackItalic',
    format: 'truetype',
    webfont: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap',
  },
};

export const Roboto_All = [
  Roboto_Thin,
  Roboto_ThinItalic,
  Roboto_Light,
  Roboto_LightItalic,
  Roboto_Regular,
  Roboto_Italic,
  Roboto_Medium,
  Roboto_MediumItalic,
  Roboto_Bold,
  Roboto_BoldItalic,
  Roboto_Black,
  Roboto_BlackItalic,
];

export const Roboto_All_NameOnly = Roboto_All.map(f => {
  const { src, ...rest } = f;
  return { ...rest, src: { name: src.name } } as FontFace;
});

export const Roboto_All_FamilyOnly = Roboto_All.map(f => {
  const { src, ...rest } = f;
  return { ...rest, src: {} } as FontFace;
});

export const Roboto_All_NoWebfonts = Roboto_All.map(f => {
  const { src, ...rest } = f;
  return { ...rest, src: { ...src, webfont: undefined } } as FontFace;
});

export const Roboto_All_UnifiedWebfont = Roboto_All.map(f => {
  const { src, ...rest } = f;
  return {
    ...rest,
    src: {
      ...src,
      webfont:
        'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
    },
  } as FontFace;
});
