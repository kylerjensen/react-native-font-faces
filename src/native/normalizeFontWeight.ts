import { FontWeight } from '../types/FontWeight';

export function normalizeFontWeight(fontWeight: FontWeight): number {
  if (fontWeight === 'bold') {
    return 700;
  } else if (fontWeight === 'normal') {
    return 400;
  } else if (typeof fontWeight === 'string') {
    return Number.parseInt(fontWeight);
  } else {
    return fontWeight;
  }
}
