import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

{
  /* ===
Input text component allows placholder props and shows input texts
    === */
}

// Interface to define prop data type
interface InputTextProps {
  placeholder: string;
}

export default function InputText({ placeholder }: InputTextProps) {
  return <TextInput style={styles.input} placeholder={placeholder} />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
});
