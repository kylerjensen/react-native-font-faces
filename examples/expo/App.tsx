import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import { FontFacesProvider, Roboto_All } from 'react-native-font-faces';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const _handleFontsLoaded = () => setFontsLoaded(true);
  const _renderContent = () => (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
      <Text style={[styles.text, styles.bold]}>This should be bold</Text>
      <Text style={[styles.text, styles.italic]}>This should be italic</Text>
      <Text style={[styles.text, styles.bold, styles.italic]}>This should be bold and italic</Text>
      <StatusBar style="auto" />
    </View>
  );
  const _renderLoading = () => <AppLoading />;
  return (
    <FontFacesProvider fontFaces={Roboto_All} nativeFontLoader={Font.loadAsync} onFontsLoaded={_handleFontsLoaded}>
      {fontsLoaded ? <_renderContent /> : <_renderLoading />}
    </FontFacesProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Roboto',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
});
