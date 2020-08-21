import { Roboto_Regular } from '../samples/Roboto';
import { getExpoFontMapEntry } from './getExpoFontMapEntry';

describe('getExpoFontMapEntry', () => {
  it('should correctly extract an Expo font map entry', () => {
    expect(getExpoFontMapEntry(Roboto_Regular)).toEqual({
      url: 'https://ff.static.1001fonts.net/r/o/roboto.regular.ttf',
      format: 'truetype',
    });
  });
});
