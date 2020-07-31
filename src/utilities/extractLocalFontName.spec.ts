import { Roboto_Regular } from '../samples/Roboto';
import { extractLocalFontName } from '../utilities/extractLocalFontName';

describe('extractLocalFontName', () => {
  it('should correctly extract a local font name', () => {
    expect(extractLocalFontName(Roboto_Regular)).toEqual('Roboto-Regular');
  });

  it('should correctly extract a local font name', () => {
    expect(() => extractLocalFontName({ ...Roboto_Regular, src: [] })).toThrowErrorMatchingInlineSnapshot(
      `"Invalid font face: Roboto@400,normal (missing required 'local()' entry in 'src')"`
    );
  });
});
