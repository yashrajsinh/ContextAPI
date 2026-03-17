import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

interface SwitchModeProps {
  isOn: boolean;
  onToggle: (value: boolean) => void;
}

function SwitchMode({ isOn, onToggle }: SwitchModeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{isOn ? 'ON' : 'OFF'}</Text>
      <Switch
        value={isOn}
        onValueChange={onToggle}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isOn ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
      />
    </View>
  );
}

export default SwitchMode;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    marginRight: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
