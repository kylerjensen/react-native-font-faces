# React Native Font Faces

Easily emulate @font-face behavior in react-native.

## Motivation:

Using custom fonts in React Native becomes complicated when trying to work with different font weights and styles. Even though the React Native `TextStyle` type includes properties for `fontFamily`, `fontWeight` and `fontStyle`, these properties seem to work only for the default built-in fonts, and have limited support when using custom fonts. For this reason, selecting a specific font weight and style is traditionally achieved by specifying the exact PostScript name of the desired loaded font file.

For example:

```jsx
const style: ViewStyle = {
  fontFamily: 'Roboto-MediumItalic',
};
```

This makes it difficult to achieve merged styles or text style composition. A preferable solution might be something like this:

```jsx
const style: ViewStyle = {
  fontFamily: 'Roboto',
  fontWeight: '500',
  fontStyle: 'italic',
};
```

This library aims to make life easier by allowing React Native developers to use `fontWeight` and `fontStyle` with custom fonts on iOS, Android, and Web.

## Getting Started

1. Add the required dependencies to your application's `package.json`:

   ```shell
   yarn add react-native-font-faces
   ```

   If you are using Expo and need to load additional custom font files into your app, also add the following:

   ```shell
   yarn add expo-font
   ```

2. Add a call to `enableFontFaces()` in your application's entry point, and import the desired font faces. Then just use the font family as you would normally expect:

   ```jsx
   // App.tsx

   import React from 'react';
   import { useFonts } from 'expo-font';
   import { AppLoading } from 'expo';
   import { AppContent } from './AppContent';
   import { Roboto_All, enableFontFaces, getRemoteFontUrls } from 'react-native-font-faces';

   const fonts = enableFontFaces(Roboto_All).expo;

   export default function App() {
     const [loaded, error] = useFonts(fonts);

     if (!loaded) {
       return <AppLoading />;
     } else if (error) {
       return <Text>{error.message}</Text>;
     } else {
       return (
         <View style={styles.container}>
           <StatusBar style="auto" />
           <Text style={styles.text}>This should be Regular</Text>
           <Text style={[styles.text, styles.italic]}>This should be Italic</Text>
           <Text style={[styles.text, styles.bold]}>This should be Bold</Text>
           <Text style={[styles.text, styles.bold, styles.italic]}>This should be BoldItalic</Text>
           <Text style={[styles.text, styles.thin]}>This should be Thin</Text>
           <Text style={[styles.text, styles.thin, styles.italic]}>This should be ThinItalic</Text>
         </View>
       );
     }
   }

   const styles = StyleSheet.create({
     text: {
       fontFamily: 'Roboto',
     },
     bold: {
       fontWeight: 'bold',
     },
     thin: {
       fontWeight: '100',
     },
     italic: {
       fontStyle: 'italic',
     },
     container: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
     },
   });
   ```

## Migrating from 3.x

In version 4.x, we removed `FontFacesProvider` and added `enableFontFaces`. Follow these steps to migrate:

1. Remove all instances of `<FontFacesProvider />`.
2. Add a call to `enableFontFaces()` in your application's entrypoint.
3. (Optional) Add a call to `useFonts()` (expo-font) or `loadFonts()` (react-native-dynamic-fonts) to dynamically load remote fonts.

## Migrating from 2.x

In version 3.x, we simplified `FontFacesProvider` and removed `useFontFaces`. Follow these steps to migrate:

1. Remove all instances of `useFontFaces()`.
2. Update your application's `<FontFacesProvider/>` to provide the `onLoading` and `onError` props (optional).

## Migrating from 1.x

In version 2.x, we introduced `FontFacesProvider` and `useFontFaces`, and removed `enableFontFaces`. Follow these steps to migrate:

1. Remove all instances of `enableFontFaces()`.
2. Add a `<FontFacesProvider/>` around your application's root component.
3. Add `const [fontsLoaded] = useFontFaces(...)` inside an inner function component's body and handle the `fontsLoaded` value appropriately.
