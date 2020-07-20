import React from 'react';
import * as Font from 'expo-font';
import { Helmet } from 'react-helmet';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FontFacesProvider, useFontFaces, Roboto_All } from 'react-native-font-faces';

const AppContent = () => {
  const [fontsLoaded] = useFontFaces(Roboto_All);

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
};

export default function App() {
  return (
    <FontFacesProvider nativeFontLoader={Font.loadAsync}>
      <AppContent />
    </FontFacesProvider>
  );
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
