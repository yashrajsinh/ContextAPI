import { View, StyleSheet } from 'react-native';
import React, { useContext } from 'react';

//Components
import SwitchMode from '../components/SwitchMode/SwitchMode';
import InputText from '../components/InputText/InputText';
import ButtonLogIn from '../components/ButtonLogIn/ButtonLogIn';

//Context
import { ThemeContext } from '../context/ThemeProvider';

export default function WelcomeScreen() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <View style={[styles.container, isDark ? styles.dark : styles.light]}>
      <SwitchMode isOn={isDark} onToggle={setIsDark} />
      <InputText placeholder="Name" />
      <InputText placeholder="Email" />
      <ButtonLogIn />
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
