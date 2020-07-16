import React from 'react';
import { Helmet } from 'react-helmet';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { enableFontFaces, Roboto_All } from 'react-native-font-faces';

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
