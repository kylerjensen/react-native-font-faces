import { normalizeFontWeight } from '../src/utilities/normalizeFontWeight';

describe('normalizeFontWeight', () => {
  it('should normalize 100', () => {
    expect(normalizeFontWeight('100')).toEqual(100);
  });

  it('should normalize 200', () => {
    expect(normalizeFontWeight('200')).toEqual(200);
  });

  it('should normalize 300', () => {
    expect(normalizeFontWeight('300')).toEqual(300);
  });

  it('should normalize 400', () => {
    expect(normalizeFontWeight('400')).toEqual(400);
  });

  it('should normalize 500', () => {
    expect(normalizeFontWeight('500')).toEqual(500);
  });

  it('should normalize 600', () => {
    expect(normalizeFontWeight('600')).toEqual(600);
  });

  it('should normalize 700', () => {
    expect(normalizeFontWeight('700')).toEqual(700);
  });

  it('should normalize 800', () => {
    expect(normalizeFontWeight('800')).toEqual(800);
  });

  it('should normalize 900', () => {
    expect(normalizeFontWeight('900')).toEqual(900);
  });

  it("should normalize 'bold' to 700", () => {
    expect(normalizeFontWeight('bold')).toEqual(700);
  });

  it("should normalize 'normal' to 400", () => {
    expect(normalizeFontWeight('normal')).toEqual(400);
  });
});
