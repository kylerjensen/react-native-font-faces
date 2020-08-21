import { Roboto_Regular } from '../samples/Roboto';
import { getLocalFontName } from './getLocalFontName';

describe('getLocalFontName', () => {
  it('should correctly extract a local font name', () => {
    expect(getLocalFontName(Roboto_Regular)).toEqual('Roboto-Regular');
  });

  it('should correctly extract a local font name', () => {
    expect(() => getLocalFontName({ ...Roboto_Regular, src: [] })).toThrowErrorMatchingInlineSnapshot(
      `"Invalid font face: Roboto@400,normal (missing required 'local()' entry in 'src')"`
    );
  });
});
