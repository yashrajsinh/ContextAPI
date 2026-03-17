import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

{
  /* ===
  Dark and light mode switch toggle uses useContext value passes from App.jsx
    === */
}

interface SwitchModeProps {
  isOn: boolean;
  onToggle: (value: boolean) => void;
}

function SwitchMode({ isOn, onToggle }: SwitchModeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{isOn ? 'Dark' : 'Light'}</Text>
      <Switch
        value={isOn}
        onValueChange={onToggle}
        ios_backgroundColor="#3e3e3e"
      />
    </View>
  );
}

export default SwitchMode;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginRight: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
