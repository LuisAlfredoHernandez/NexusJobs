import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import AsyncStorage from  '@react-native-community/async-storage'
import RegularButton from '../components/regularButton'
import LogoType from '../assets/Iconos nexusJob Color.svg'
import Footer from '../components/footer'

export default function Login({ navigation }) {

    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const checkForEmptyInputs = () => {
        if (!usernameInput.trim() || !passwordInput.trim()) {
            Alert.alert(
                'Hay campos vacios!',
                'Todos los campos deben llenarse.',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
            );
        } else {
            checkForSpecialCharacters()
        }
    }

    const checkForSpecialCharacters = () => {
        if (/[^a-zA-Z0-9 ]/.test(usernameInput) || /[^a-zA-Z0-9 ]/.test(passwordInput)) {
            Alert.alert(
                'Se encontraron caractares no permitidos!',
                'Evite introducir caracteres especiales.',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
            );
        } else {
            createObjectData()
        }

    }

    const createObjectData = () => {
        values = {
            username: usernameInput.trim(),
            password: passwordInput.trim()
        }
        return postLoginCredentials(values)
    }


    const postLoginCredentials = (values) => {
        fetch('http://newnexusvacantsapp-env.eba-ismjscyn.us-east-2.elasticbeanstalk.com/auth/signin', {
            method: 'POST',
            headers: {
                'content-type': 'Application/json',
            },
            body: JSON.stringify(values),
        })
            .then(x => x.json())
            .then(x => {
                if (x.accessToken) {
                    AsyncStorage.setItem('token', x.accessToken)
                    navigation.navigate('jobList', x.accessToken)
               }else {
                  Alert.alert(
                    'Error!',
                    'Constraseña incorrecta.',
                  )
                }
              })
                
    }


    return (
        <View style={styles.container}>
            <View style={styles.logotypeContainer}>
                <LogoType style={styles.logoImage} />
            </View>

            <View style={styles.loginBasicComponents}>
                <View style={styles.credentialsContainer}>
                    <Text style={styles.loginContainerText}>Usuario</Text>
                    <TextInput onChangeText={(value) => setUsernameInput(value)} placeholder='Carlos Martinez001' style={styles.creadentialsInput}> </TextInput>
                    <Text style={styles.loginContainerText}>Contraseña</Text>
                    <TextInput onChangeText={(value) => setPasswordInput(value)} placeholder='**********' style={styles.creadentialsInput}> </TextInput>
                </View>

                <View style={styles.forgotPasswordContainer}>
                    <Text style={styles.forgotPasswordText}>Olvidó su Contraseña?</Text>
                </View>

                <View style={styles.loginButtonsContainer}>
                    <RegularButton onPressEvent={checkForEmptyInputs} color={'#483EE8'} texto={'Iniciar sesión'} textColor={'#ffffff'} />
                    <RegularButton onPressEvent={() => navigation.push('Register')} color={'#133463'} texto={'Registrarme'} textColor={'#ffffff'} />
                </View>
            </View>

            <View style={styles.footer}>
                <Footer iconsBackgroundColor={'#EDF1F7'} IconsTitleBackground={'#133463'} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDF1F7',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logotypeContainer: {
        flex: 1.8,
        width: '45%',
        backgroundColor: '#ffffff00'
    },

    logoImage: {
        height: '100%',
        width: '100%'
    },

    loginContainerText: {
        marginTop: 15,
        width: '100%',
        marginLeft: 27,
        color: '#483EE8',
        fontWeight: 'bold',
        fontSize: 17
    },

    loginBasicComponents: {
        flex: 2.5,
        width: '100%',
        alignItems: 'center'
    },

    credentialsContainer: {
        flex: 1.8,
        height: '20%',
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center'
    },

    creadentialsInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#A7A1F3',
        marginTop: 5,
        width: '90%'
    },

    forgotPasswordContainer: {
        marginTop: 10,
        display: 'flex',
        alignItems: 'flex-end',
        width: '80%'
    },

    forgotPasswordText: {
        color: '#133463',
        fontWeight: 'bold',
        fontSize: 13
    },

    loginButtonsContainer: {
        flex: 1.8,
        marginTop: 5,
        width: '100%',
        alignItems: 'center',
    },

    footer: {
        flex: 1,

    }
});