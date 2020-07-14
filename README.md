# React Native Font Faces

Easily emulate CSS @font-face behavior in react-native.

This library provides full support for the `fontWeight`, `fontStyle`, and `fontFamily` text style properties when using custom fonts in React Native.

#### Before:

```tsx
import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default () => (
  <Text style={styles.regular}>Regular</Text>
  <Text style={styles.regularItalic}>Regular+Italic</Text>
  <Text style={styles.bold}>Bold</Text>
  <Text style={styles.boldItalic}>Bold+Italic</Text>
);

const styles = StyleSheet.create({
  regular: { fontFamily: 'Roboto-Regular' },
  bold: { fontFamily: 'Roboto-Bold' },
  regularItalic: { fontFamily: 'Roboto-Italic' },
  boldItalic: { fontFamily: 'Roboto-BoldItalic' },
});
```

#### After:

```tsx
import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default () => (
  <Text style={[styles.text]}>Regular</Text>
  <Text style={[styles.text, styles.italic]}>Regular+Italic</Text>
  <Text style={[styles.text, styles.bold]}>Bold</Text>
  <Text style={[styles.text, styles.bold, styles.italic]}>Bold+Italic</Text>
);

const styles = StyleSheet.create({
  text: { fontFamily: 'Roboto' },
  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' },
});
```

# Getting Started

1. Add the required dependency to your project's package.json:

   ```sh
   yarn add react-native-font-faces
   ```

2. Create a list of `FontFace`s:

   ```tsx
   // App.tsx
   import * as React from 'react';
   import { FontFace, FontFacesProvider } from 'react-native-font-faces';

   const fontFaces: FontFace[] = [
     {
       fontFamily: 'Roboto',
       fontStyle: 'normal',
       fontWeight: 100,
       fontDisplay: 'swap',
       src: {
         url: 'https://ff.static.1001fonts.net/r/o/roboto.thin.ttf',
         name: 'Roboto-Thin',
         format: 'truetype',
         webfont: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100&display=swap',
       },
     },
     // ...
   ];
   ```

   or use one of the provided samples:

   ```tsx
   // App.tsx
   import * as React from 'react';
   import { Roboto_Regular, Roboto_Italic, Roboto_Thin, FontFacesProvider } from 'react-native-font-faces';

   const fontFaces = [Roboto_Regular, Roboto_Italic, Roboto_Thin];
   ```

3. Wrap your applcation's root component with a `<FontFacesProvider />`, import your font faces, and choose a native font loader:

   ```tsx
   // App.tsx
   import * as React from 'react';
   import * as Fonts from 'expo-font';
   import { AppLoading } from 'expo';
   import { FontFacesProvider } from 'react-native-font-faces';

   export default () => {
     const [fontsLoaded, setFontsLoaded] = React.useState(false);
     const _onFontsLoaded = () => setFontsLoaded(true);
     const _renderContent = () => <Text style={{ fontFamily: 'Roboto' }}>Hello World!</Text>;
     return (
       <FontFacesProvider fontFaces={fontFaces} nativeFontLoader={Fonts.loadAsync} onFontsLoaded={_onFontsLoaded}>
         {fontsLoaded ? <_renderContent /> : <AppLoading />}
       </FontFacesProvider>
     );
   };
   ```
