import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RegularButton from './components/regularButton'

export default function App() {
  const  color = styles.button.backgroundColor;
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Seleccione</Text>
      <RegularButton texto={'Masculino'} color= {styles.button.backgroundColor} />
      <RegularButton texto={'Femenino'}  color= {styles.button.backgroundColor}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#483EE8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold'
  },

  button: {
    backgroundColor: '#e9e9f0',
  },

});
