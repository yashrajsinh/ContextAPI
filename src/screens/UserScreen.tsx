import { View, StyleSheet } from 'react-native';
import React, { useContext } from 'react';

//Components
import SwitchMode from '../components/SwitchMode/SwitchMode';

//Context
import { ThemeContext } from '../context/ThemeProvider';

export default function UserScreen() {
  const { isDark, setIsDark } = useContext(ThemeContext);
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
