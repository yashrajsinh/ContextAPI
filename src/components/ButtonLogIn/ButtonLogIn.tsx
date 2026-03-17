import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
//Navigation
import { useNavigation } from '@react-navigation/native';
{
  /* ===
Navigation button componet responsible for button navigation 
    === */
}

export default function ButtonLogIn() {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate('User');
  }
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
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
