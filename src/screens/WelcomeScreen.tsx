import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

//Components
import SwitchMode from '../components/SwitchMode/SwitchMode';

export default function WelcomeScreen() {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <View style={[styles.container, isDark ? styles.dark : styles.light]}>
      <SwitchMode isOn={isDark} onToggle={setIsDark} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  dark: {
    backgroundColor: '#333',
  },
  light: {
    backgroundColor: '#eee',
  },
});
