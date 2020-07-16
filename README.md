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

This makes it difficult to achieve merged styles or text style composition. Apreferable solution might be something like this:

```jsx
const style: ViewStyle = {
  fontFamily: 'Roboto',
  fontWeight: '500',
  fontStyle: 'italic',
};
```

This library aims to make life easier by allowing React Native developers to use `fontWeight` and `fontStyle` with custom fonts on iOS, Android, and Web.

## Getting Started

To use this library, add the dependency to your application's `package.json`:

```shell
yarn add react-native-font-faces
```

If you are using Expo and need to load additional custom font files into your app, also add the following:

```shell
yarn add @use-expo/font react-helmet
yarn add -D @types/react-helmet
```

Then, call `enableFontFaces` before any views are rendered, (like in `inex.js` or `App.tsx`):

You may also have to download the required font files and add them to your app. If you are using Expo, [download](https://fonts.google.com/download?family=Roboto) the Roboto font files from Google Fonts, drag them to your applications `assets/fonts` folder, and load them in your root component.

> _In a future update, this library will take care of downloading and managing font files for you. For now, you will have to manage these yourself._

```jsx
// App.tsx

import React from 'react';
import { Helmet } from 'react-helmet';
import { useFonts } from '@use-expo/font';
import { Roboto_All, FontFace, local, enableFontFaces } from 'react-native-font-faces';

enableFontFaces(Roboto_All);

export default function App() {
  const [fontsLoaded] = Platform.select({
    web: [true], // Only load font files this way for native apps. Use a webfont instead for web apps (see below).
    default: useFonts({
      'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
      'Roboto-BlackItalic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-BoldItalic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
      'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
      'Roboto-LightItalic': require('./assets/fonts/Roboto-LightItalic.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-MediumItalic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
      'Roboto-ThinItalic': require('./assets/fonts/Roboto-ThinItalic.ttf'),
    }),
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900"
            rel="stylesheet"
          />
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
  } else {
    return <AppLoading />;
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
