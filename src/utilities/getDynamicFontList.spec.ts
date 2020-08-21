import { Roboto_All } from '../samples/Roboto';
import { getDynamicFontList } from './getDynamicFontList';

describe('getDynamicFontList', () => {
  it('should correctly extract a react-native-dynamic-fonts font list', () => {
    expect(getDynamicFontList(Roboto_All)).toEqual([
      {
        data: 'https://ff.static.1001fonts.net/r/o/roboto.thin.ttf',
        name: 'Roboto-Thin',
        type: 'ttf',
      },
      {
        data: 'https://ff.static.1001fonts.net/r/o/roboto.thin-italic.ttf',
        name: 'Roboto-ThinItalic',
        type: 'ttf',
      },
      {
        data: 'https://ff.static.1001fonts.net/r/o/roboto.light.ttf',
        name: 'Roboto-Light',
        type: 'ttf',
      },
      {
        data: 'https://ff.static.1001fonts.net/r/o/roboto.light-italic.ttf',
        name: 'Roboto-LightItalic',
        type: 'ttf',
      },
      {
        data: 'https://ff.static.1001fonts.net/r/o/roboto.regular.ttf',
        name: 'Roboto-Regular',
        type: 'ttf',
      },
      {
        data: 'https://ff.static.1001fonts.net/r/o/roboto.italic.ttf',
        name: 'Roboto-Italic',
        type: 'ttf',
      },
      {
        data: 'https://ff.static.1001fonts.net/r/o/roboto.medium.ttf',
        name: 'Roboto-Medium',
        type: 'ttf',
      },
      {
        data: 'https://ff.static.1001fonts.net/r/o/roboto.medium-italic.ttf',
        name: 'Roboto-MediumItalic',
        type: 'ttf',
      },
      {
        data: 'https://ff.static.1001fonts.net/r/o/roboto.bold.ttf',
        name: 'Roboto-Bold',
        type: 'ttf',
      },
      {
        data: 'https://ff.static.1001fonts.net/r/o/roboto.bold-italic.ttf',
        name: 'Roboto-BoldItalic',
        type: 'ttf',
      },
      {
        data: 'https://ff.static.1001fonts.net/r/o/roboto.black.ttf',
        name: 'Roboto-Black',
        type: 'ttf',
      },
      {
        data: 'https://ff.static.1001fonts.net/r/o/roboto.black-italic.ttf',
        name: 'Roboto-BlackItalic',
        type: 'ttf',
      },
    ]);
  });
});
