import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

//type
interface LoginButtonProps {
  onPress: () => void;
}

export default function LoginButton({ onPress }: LoginButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Log In</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
