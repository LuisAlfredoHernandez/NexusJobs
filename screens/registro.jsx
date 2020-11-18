import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput, View, Text, Alert, TouchableOpacity } from 'react-native'
import RegularButton from '../components/regularButton'
import Footer from '../components/footer'
import BackIcon from '../components/backIcon'
import NextIcon from '../assets/Iconos adelante.svg'


export default function Registro({ navigation }) {

  const [textInputName, setTextInputName] = useState('')
  const [textInputEmail, setTextInputEmail] = useState('')
  const [textInputUsername, setTextInputUsername] = useState('')
  const [textInputPassword, setTextInputPassword] = useState('')
  const [textInputGender, setTextInputGender] = useState('')


   useEffect(() => {
      if(navigation.getParam('gender')){
        setTextInputGender(navigation.getParam('gender'))
      }
   },[navigation])


  const emptyInputChecker = () => {
    if (!textInputName.trim() || !textInputUsername.trim() || !textInputPassword.trim()) {
      Alert.alert(
        'Hay campos vacios!',
        'Todos los campos deben llenarse.',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      );
    } else {
      createObjectData();
    }
  }


  const createObjectData = () => {
   let values = {
      username: textInputUsername,
      password: textInputPassword,
      fullName: textInputName,
      email: textInputEmail,
      gender: textInputGender
    }
    usernameSubmitToServer(values);
  }


  const usernameSubmitToServer = values => {
    fetch('http://newnexusvacantsapp-env.eba-ismjscyn.us-east-2.elasticbeanstalk.com/auth/signup', {
      method: 'POST',
      headers: {
        'content-type': 'Application/json',
      },
      body: JSON.stringify(values),
    })
      .then(x => x.json())
      .then(x => {
        checkForServiceResponse(x) 
      })
  }


  const checkForServiceResponse = (x) => {
    const {code, message} = x
    if (code) {
      return Alert.alert(
        'Usuario Creado!',
        'Usuario creado exitosamente.',
        [{ text: 'Volver a Inicio', onPress:() => navigation.navigate('Login') }])
    } else {
      Alert.alert(
        'Hubo un error!',
        message,
      )
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <BackIcon onPressEvent={() => navigation.goBack()} color={'#e00b00'} />

        <Text style={styles.headerText}>Registro</Text>
      </View>

      <View style={styles.textFieldsContainer}>
        <TextInput style={styles.input}
          placeholder='   Nombre y apellido '
          placeholderTextColor='#9a73ef'
          onChangeText={value => setTextInputName(value)}>
        </TextInput>

        <TextInput style={styles.input}
          placeholder='   Correo electronico'
          placeholderTextColor='#9a73ef'
          onChangeText={value => setTextInputEmail(value)}>
        </TextInput>

        <TextInput style={styles.input}
          placeholder='   Usuario'
          placeholderTextColor='#9a73ef'
          onChangeText={value => setTextInputUsername(value)}>
        </TextInput>

        <TextInput style={styles.input}
          placeholder='   Contraseña'
          placeholderTextColor='#9a73ef'
          secureTextEntry={true}
          onChangeText={value => setTextInputPassword(value)}>
        </TextInput>

        <TouchableOpacity
          style={[styles.input, { justifyContent: 'space-between', flexDirection: 'row' }]}
          onPress={()=> navigation.navigate('Selection')} >
          <Text style={styles.sexoButtonText}>{textInputGender ? textInputGender : 'Sexo'}</Text>
          <NextIcon style={styles.sexoButtonIcon} />
        </TouchableOpacity>

        <RegularButton onPressEvent={emptyInputChecker} style={{ marginTop: 15 }} texto='Aceptar' color='#131575' textColor='#ffffff' />
      </View>

      <View style={styles.footerContainer}>
        <Footer iconsBackgroundColor='#483EE8' IconsTitleBackground='#ffffff' />
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
    fontSize: 15
  },

  textButton: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20

  },

  footerContainer: {
    flex: 0.8
  },

  sexoButtonIcon: {
    marginRight: 10,
    marginTop: 10,
    height: 23,
    width: 15
  },

  sexoButtonText: {
    color: '#9a73ef',
    marginLeft: 15,
    fontSize: 16,
    marginTop: 12
  }

});
