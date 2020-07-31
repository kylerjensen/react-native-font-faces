import React from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FontFacesProvider, Roboto_All } from 'react-native-font-faces';

const AppContent = (props: any) => {
  if (props.loading) {
    return <AppLoading />;
  } else if (props.error) {
    return <Text>{props.error.message}</Text>;
  } else {
    return (
      <View style={styles.container}>
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
};

export default function App() {
  const [error, setError] = React.useState<Error>();
  const [loading, setLoading] = React.useState<boolean>(true);

  return (
    <FontFacesProvider
      onError={setError}
      onLoading={setLoading}
      fontFaces={Roboto_All}
      nativeFontLoader={Font.loadAsync}>
      <AppContent {...{ loading, error }} />
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
