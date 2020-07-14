import React from 'react';
import { Text, TextStyle, StyleSheet } from 'react-native';
import { generateOverrideStyle } from './generateOverrideStyle';
import { FontFace } from '../types/FontFace';

const originalRenderFn = (Text as any).render;

class FontManager {
  constructor(private fontFaces: FontFace[]) {}

  applyOverrides() {
    (Text as any).render = this.overrideRenderFn;
  }

  overrideRenderFn(...args: any[]) {
    const element = originalRenderFn.call(this, ...args);
    const originalStyle: TextStyle = StyleSheet.flatten([element.props.style]);
    const overrideStyle: TextStyle = generateOverrideStyle(this.fontFaces, originalStyle);
    const flattenedStyle: TextStyle = StyleSheet.flatten([originalStyle, overrideStyle]);
    return React.cloneElement(element, { style: flattenedStyle });
  }
}

export function emulateFontFaces(fontFaces: FontFace[]) {
  new FontManager(fontFaces).applyOverrides();
}
