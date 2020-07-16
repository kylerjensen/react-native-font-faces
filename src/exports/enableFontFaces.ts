import { FontFace } from '../types/FontFace';
import { overrideTextRender } from '../native/overrideTextRender';

/**
 * Activates the given set of font faces for the currently running application.
 * On iOS/Android, the `render()` function of the `Text` component is overridden
 * with a delegating implementation that transforms font families, weights,
 * and styles into their corresponding font names. On web, this function is
 * currently a no-op.
 *
 * Important! This function does NOT actually download any additional font files
 * or load them into your app. Use a tool like `expo-font` or `react-native-custom-fonts`
 * to dynamically load additional font files at runtime, or bundle them with your app.
 *
 * @param fontFaces an array of font faces to activate
 */
export function enableFontFaces(fontFaces: FontFace[]) {
  overrideTextRender(fontFaces);
}
