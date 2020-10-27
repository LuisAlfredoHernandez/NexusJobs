import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, TextInput, View, Button, TouchableOpacity, Text } from 'react-native'
import RegularButton from '../components/regularButton'
import Footer from '../components/footer'
import BackIcon from '../components/backIcon'

export default function Registro() {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <BackIcon color={'#e00b00'}/>
        <Text style={styles.headerText}>Registro</Text>
      </View>

      <View style={styles.textFieldsContainer}>
        <TextInput style={styles.input} placeholder=" Nombre y apellido" placeholderTextColor="#9a73ef"> </TextInput>
        <TextInput style={styles.input} placeholder=" Correo electronico" placeholderTextColor="#9a73ef"> </TextInput>
        <TextInput style={styles.input} placeholder=" Usuario" placeholderTextColor="#9a73ef">  </TextInput>
        <TextInput style={styles.input} placeholder=" Contraseña" placeholderTextColor="#9a73ef"> </TextInput>
        <TextInput style={styles.input} placeholder=" Sexo" placeholderTextColor="#9a73ef"> </TextInput>
        <RegularButton style={ {marginTop:15} } texto={'Aceptar'} color={'#131575'} textColor={'#ffffff'} />
      </View>

      <View style={styles.footerContainer}>
        <Footer iconsBackgroundColor={'#483EE8'} IconsTitleBackground={'#ffffff'} />
      </View>

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

  headerContainer:{
    flex:0.7,
    flexDirection:'row',
    alignItems:'flex-start',
    width:'100%'
  },

  headerText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop:35,
    marginLeft:80
  },

  textFieldsContainer:{
    flex:4.3,
    width:'100%',
    alignItems:'center'

  },

  input: {
    margin: 15,
    height: 45,
    width: '90%',
    backgroundColor: '#f7f5f2',
    borderRadius: 5
  },

  textButton: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20

  },

  footerContainer:{
    flex:0.8
  }

});
