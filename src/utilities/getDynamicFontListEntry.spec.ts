import { Roboto_Regular } from '../samples/Roboto';
import { getDynamicFontListEntry } from './getDynamicFontListEntry';

describe('getDynamicFontListEntry', () => {
  it('should correctly extract a react-native-dynamic-fonts font list entry', () => {
    expect(getDynamicFontListEntry(Roboto_Regular)).toEqual({
      name: 'Roboto-Regular',
      data: 'https://ff.static.1001fonts.net/r/o/roboto.regular.ttf',
      type: 'ttf',
    });
  });
});
