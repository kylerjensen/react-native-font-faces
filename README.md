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
   yarn add expo-font react-helmet
   yarn add -D @types/react-helmet
   ```

2. Wrap your application's root component in a `<FontFacesProvider />` and provide a `FontLoader`:

   ```jsx
   // App.tsx

   import React from 'react';
   import * as Font from 'expo-font';
   import { AppContent } from './AppContent';
   import { FontFacesProvider, FontLoader, Roboto_All } from 'react-native-font-faces';

   export default function App() {
     const [error, setError] = React.useState<Error>();
     const [loading, setLoading] = React.useState<boolean>(true);

     return (
       <FontFacesProvider
         onError={setError}
         onLoading={setLoading}
         fontFaces={Roboto_All}
         nativeFontLoader={Font.loadAsync}>
         <AppContent loading={loaading} error={error} />
       </FontFacesProvider>
     );
   }
   ```

3. Call `useFontFaces()` to import and the font faces you'd like to use and download corresponding font files:

   ```jsx
   // AppContent.tsx

   import React from 'react';
   import { Helmet } from 'react-helmet';
   import { AppLoading } from 'expo';

   export function AppContent(props: any) {}
     if (props.loading) {
       return <AppLoading />;
     } else if (props.error) {
       return <Text>{props.error.message}</Text>
     } else {
       return (
         <View style={styles.container}>
           <Helmet>
             <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900" rel="stylesheet" />
           </Helmet>
           <Text style={styles.text}>This should be Regular</Text>
           <Text style={[styles.text, styles.italic]}>This should be Italic</Text>
           <Text style={[styles.text, styles.bold]}>This should be Bold</Text>
        <Text style={[styles.text, styles.bold, styles.italic]}>This should be BoldItalic</Text>
           <Text style={[styles.text, styles.thin]}>This should be Thin</Text>
           <Text style={[styles.text, styles.thin, styles.italic]}>This should be ThinItalic</Text>
           <StatusBar style="auto" />
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

## Migrating from 2.x

In version 3.x, we simplified `FontFacesProvider` and removed `useFontFaces`. Follow these steps to migrate:

1. Remove all instances of `useFontFaces()`.
2. Update your application's `<FontFacesProvider/>` to provide the `onLoading` and `onError` props (optional).

## Migrating from 1.x

In version 2.x, we introduced `FontFacesProvider` and `useFontFaces`, and removed `enableFontFaces`. Follow these steps to migrate:

1. Remove all instances of `enableFontFaces()`.
2. Add a `<FontFacesProvider/>` around your application's root component.
3. Add `const [fontsLoaded] = useFontFaces(...)` inside an inner function component's body and handle the `fontsLoaded` value appropriately.
