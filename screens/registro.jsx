import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Text, Alert } from 'react-native'
import RegularButton from '../components/regularButton'
import Footer from '../components/footer'
import BackIcon from '../components/backIcon'


export default function Registro({ navigation }) {

  const [textInputName, setTextInputName] = useState('')
  const [textInputEmail, setTextInputEmail] = useState('')
  const [textInputUsername, setTextInputUsername] = useState('')
  const [textInputPassword, setTextInputPassword] = useState('')
  const [textInputGender, setTextInputGender] = useState('')

  const inputsChecker = () => {
    if (!textInputName.trim() || !textInputEmail.trim() || !textInputUsername.trim() || !textInputPassword.trim() || !textInputGender.trim()) {
      Alert.alert(
        'Hay campos vacios!',
        'Todos los campos deben llenarse.',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      );
    } else {
      navigation.navigate('Selection')
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <BackIcon onPressEvent={() => navigation.goBack()} color={'#e00b00'} />

        <Text style={styles.headerText}>Registro</Text>
      </View>

      <View style={styles.textFieldsContainer}>
        <TextInput style={styles.input} onChangeText={(value) => setTextInputName(value)} placeholder=" Nombre y apellido" placeholderTextColor="#9a73ef"> </TextInput>
        <TextInput style={styles.input} onChangeText={(value) => setTextInputEmail(value)} placeholder=" Correo electronico" placeholderTextColor="#9a73ef"> </TextInput>
        <TextInput style={styles.input} onChangeText={(value) => setTextInputUsername(value)} placeholder=" Usuario" placeholderTextColor="#9a73ef"> </TextInput>
        <TextInput style={styles.input} onChangeText={(value) => setTextInputPassword(value)} placeholder=" Contraseña" placeholderTextColor="#9a73ef"> </TextInput>
        <TextInput style={styles.input} onChangeText={(value) => setTextInputGender(value)} placeholder=" Sexo" placeholderTextColor="#9a73ef"> </TextInput>

        <RegularButton onPressEvent={inputsChecker} style={{ marginTop: 15 }} texto={'Aceptar'} color={'#131575'} textColor={'#ffffff'} />

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

  headerContainer: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%'
  },

  headerText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 35,
    marginLeft: 80
  },

  textFieldsContainer: {
    flex: 4.3,
    width: '100%',
    alignItems: 'center'

  },

  input: {
    margin: 15,
    height: 45,
    width: '90%',
    backgroundColor: '#f7f5f2',
    borderRadius: 5,
  },

  textButton: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20

  },

  footerContainer: {
    flex: 0.8
  }

});
