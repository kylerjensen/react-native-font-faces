import { foo } from '.';

describe('index', () => {
  it('should return bar', () => {
    expect(foo).toEqual('bar');
  });
});
