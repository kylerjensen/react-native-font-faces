import React from 'react';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Roboto_All, enableFontFaces } from 'react-native-font-faces';

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
