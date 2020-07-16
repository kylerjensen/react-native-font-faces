import React from 'react';
import { FontFace } from '../types/FontFace';
import { Text, TextStyle, StyleSheet } from 'react-native';
import { generateOverrideStyle } from './generateOverrideStyle';

const originalRenderFn = (Text as any).render;

export function overrideTextRender(fontFaces: FontFace[]) {
  class FontManager {
    applyOverrides() {
      (Text as any).render = this.overrideRenderFn;
    }

    overrideRenderFn(...args: any[]) {
      const element = originalRenderFn.call(this, ...args);
      const originalStyle: TextStyle = StyleSheet.flatten([element.props.style]);
      const overrideStyle: TextStyle = generateOverrideStyle(fontFaces, originalStyle);
      const flattenedStyle: TextStyle = StyleSheet.flatten([originalStyle, overrideStyle]);
      return React.cloneElement(element, { style: flattenedStyle });
    }
  }

  new FontManager().applyOverrides();
}
