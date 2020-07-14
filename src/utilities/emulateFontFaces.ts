import React from 'react';
import { Text, TextStyle, StyleSheet } from 'react-native';
import { generateOverrideStyle } from './generateOverrideStyle';
import { FontFacesProviderProps } from '../providers/FontFacesProviderProps';

const originalRenderFn = (Text as any).render;

class FontManager {
  constructor(private config: FontFacesProviderProps) {}

  applyOverrides() {
    (Text as any).render = this.overrideRenderFn;
  }

  overrideRenderFn(...args: any[]) {
    const element = originalRenderFn.call(this, ...args);
    const originalStyle: TextStyle = StyleSheet.flatten([element.props.style]);
    const overrideStyle: TextStyle = generateOverrideStyle(this.config.fontFaces, originalStyle);
    const flattenedStyle: TextStyle = StyleSheet.flatten([originalStyle, overrideStyle]);
    return React.cloneElement(element, { style: flattenedStyle });
  }
}

export function emulateFontFaces(config: FontFacesProviderProps) {
  new FontManager(config).applyOverrides();
}
