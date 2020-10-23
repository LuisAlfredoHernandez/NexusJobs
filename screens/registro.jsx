import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View, Button, TouchableOpacity, Text } from 'react-native';
import RegularButton from '../components/regularButton'

export default function Registro() {
  return (
    <View style={styles.container}>
    
      <Text style={styles.headerText}>Registro</Text>
      

        <TextInput style={styles.input} placeholder=" Nombre y apellido" placeholderTextColor="#9a73ef"> </TextInput>
        <TextInput style={styles.input} placeholder=" Correo electronico" placeholderTextColor="#9a73ef"> </TextInput>
        <TextInput style={styles.input} placeholder=" Usuario" placeholderTextColor="#9a73ef">  </TextInput>
        <TextInput style={styles.input} placeholder=" Contraseña" placeholderTextColor="#9a73ef"> </TextInput>
        <TextInput style={styles.input} placeholder=" Sexo" placeholderTextColor="#9a73ef"> </TextInput>
  
        <RegularButton texto={'Aceptar'} color= {styles.button.backgroundColor}/>
    
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

  input: {
    margin: 15,
    height: 45,
    width: '90%',
    backgroundColor: '#f7f5f2',
    borderRadius: 5
  },
  button: {
    marginTop: 20,
    backgroundColor: '#131575',
    borderRadius: 10,
    height: 45,
    width: '85%'

  },
  textButton: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20

  }

});
