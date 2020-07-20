import { FontFace } from '../types/FontFace';
import { local, url } from '../types/FontSource';

export const Roboto_Thin: FontFace = {
  fontFamily: 'Roboto',
  fontWeight: '100',
  fontStyle: 'normal',
  src: [local('Roboto-Thin'), url('https://ff.static.1001fonts.net/r/o/roboto.thin.ttf', 'truetype')],
};

export const Roboto_ThinItalic: FontFace = {
  fontFamily: 'Roboto',
  fontWeight: '100',
  fontStyle: 'italic',
  src: [local('Roboto-ThinItalic'), url('https://ff.static.1001fonts.net/r/o/roboto.thin-italic.ttf', 'truetype')],
};

export const Roboto_Light: FontFace = {
  fontFamily: 'Roboto',
  fontWeight: '300',
  fontStyle: 'normal',
  src: [local('Roboto-Light'), url('https://ff.static.1001fonts.net/r/o/roboto.light.ttf', 'truetype')],
};

export const Roboto_LightItalic: FontFace = {
  fontFamily: 'Roboto',
  fontWeight: '300',
  fontStyle: 'italic',
  src: [local('Roboto-LightItalic'), url('https://ff.static.1001fonts.net/r/o/roboto.light-italic.ttf', 'truetype')],
};

export const Roboto_Regular: FontFace = {
  fontFamily: 'Roboto',
  fontWeight: '400',
  fontStyle: 'normal',
  src: [local('Roboto-Regular'), url('https://ff.static.1001fonts.net/r/o/roboto.regular.ttf', 'truetype')],
};

export const Roboto_Italic: FontFace = {
  fontFamily: 'Roboto',
  fontWeight: '400',
  fontStyle: 'italic',
  src: [local('Roboto-Italic'), url('https://ff.static.1001fonts.net/r/o/roboto.italic.ttf', 'truetype')],
};

export const Roboto_Medium: FontFace = {
  fontFamily: 'Roboto',
  fontWeight: '500',
  fontStyle: 'normal',
  src: [local('Roboto-Medium'), url('https://ff.static.1001fonts.net/r/o/roboto.medium.ttf', 'truetype')],
};

export const Roboto_MediumItalic: FontFace = {
  fontFamily: 'Roboto',
  fontWeight: '500',
  fontStyle: 'italic',
  src: [local('Roboto-MediumItalic'), url('https://ff.static.1001fonts.net/r/o/roboto.medium-italic.ttf', 'truetype')],
};

export const Roboto_Bold: FontFace = {
  fontFamily: 'Roboto',
  fontWeight: '700',
  fontStyle: 'normal',
  src: [local('Roboto-Bold'), url('https://ff.static.1001fonts.net/r/o/roboto.bold.ttf', 'truetype')],
};

export const Roboto_BoldItalic: FontFace = {
  fontFamily: 'Roboto',
  fontWeight: '700',
  fontStyle: 'italic',
  src: [local('Roboto-BoldItalic'), url('https://ff.static.1001fonts.net/r/o/roboto.bold-italic.ttf', 'truetype')],
};

export const Roboto_Black: FontFace = {
  fontFamily: 'Roboto',
  fontWeight: '900',
  fontStyle: 'normal',
  src: [local('Roboto-Black'), url('https://ff.static.1001fonts.net/r/o/roboto.black.ttf', 'truetype')],
};

export const Roboto_BlackItalic: FontFace = {
  fontFamily: 'Roboto',
  fontWeight: '900',
  fontStyle: 'italic',
  src: [local('Roboto-BlackItalic'), url('https://ff.static.1001fonts.net/r/o/roboto.black-italic.ttf', 'truetype')],
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
