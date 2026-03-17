import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

//Interface to define prop data type
interface InputComponent {
  placeholder: string;
}

const InputComponent: React.FC<InputComponent> = ({ placeholder }) => {
  return <TextInput style={styles.input} placeholder={placeholder} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
});
