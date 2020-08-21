import React from 'react';
import { globalFontFaces } from './globalFontFaces';
import { generateOverrideStyle } from './generateOverrideStyle';
import { Text, TextStyle, StyleSheet } from 'react-native';

const originalRenderFn = (Text as any).render;

export function overrideTextRenderFn() {
  class FontManager {
    applyOverrides() {
      (Text as any).render = this.overrideRenderFn;
    }

    overrideRenderFn(...args: any[]) {
      const element = originalRenderFn.call(this, ...args);
      const fontFaces = Object.values(globalFontFaces);
      const originalStyle: TextStyle = StyleSheet.flatten([element.props.style]);
      const overrideStyle: TextStyle = generateOverrideStyle(fontFaces, originalStyle);
      const flattenedStyle: TextStyle = StyleSheet.flatten([originalStyle, overrideStyle]);
      return React.cloneElement(element, { style: flattenedStyle });
    }
  }

  new FontManager().applyOverrides();
}
