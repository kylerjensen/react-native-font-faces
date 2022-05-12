import React from 'react';
import { globalFontFaces } from './globalFontFaces';
import { generateOverrideStyle } from './generateOverrideStyle';
import { TextStyle, StyleSheet, TextInput } from 'react-native';

const originalRenderFn = (TextInput as any).render;

export function overrideTextInputRenderFn() {
  class FontManager {
    applyOverrides() {
      (TextInput as any).render = this.overrideRenderFn;
    }

    overrideRenderFn(...args: any[]) {
      if (args.length && args[0].style) {
        const fontFaces = Object.values(globalFontFaces);
        const originalStyle: TextStyle = StyleSheet.flatten([args[0].style]);
        const overrideStyle: TextStyle = generateOverrideStyle(fontFaces, originalStyle);
        const flattenedStyle: TextStyle = StyleSheet.flatten([originalStyle, overrideStyle]);
        args.splice(0, 1, { ...args[0], style: flattenedStyle });
      }

      return originalRenderFn.call(this, ...args);
    }
  }

  new FontManager().applyOverrides();
}
