import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import RegularButton from '../components/regularButton';
import LogoType from '../assets/IconoLogin.jsx'

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.logotypeContainer}>
        
                {/*  Here goes the cvs login image of the login.  */}
                
            </View>

            <View style={styles.loginBasicComponents}>
                <View style={styles.credentialsContainer}>
                    <Text style={styles.logotypeContainerText}>Usuario</Text>
                    <TextInput style={styles.creadentialsInput}> </TextInput>
                    <Text style={styles.logotypeContainerText}>Contraseña</Text>
                    <TextInput style={styles.creadentialsInput}> </TextInput>
                </View>

                <View style={styles.forgotPasswordContainer}>
                    <Text>Olvidó su Contraseña?</Text>
                </View>

                <View style={styles.loginButtonsContainer}>
                    <RegularButton color={'#483EE8'} texto={'Iniciar sesión'} />
                    <RegularButton color={'#133463'} texto={'Registrarme'} />
                </View>
            </View>

            <View style={styles.footer}>

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
        flex: 2,
        width: '100%',
        backgroundColor:'#ffffff00'

    },


    logoImage: {
        height: '100%',
        width: '100%'
    },

    logotypeContainerText: {
        width: '100%',
        marginLeft: 25,
        color: '#483EE8'
    },

    loginBasicComponents: {
        flex: 3,
        width: '100%',
        alignItems: 'center'
    },

    credentialsContainer: {
        flex: 2,
        marginTop: 5,
        height: '20%',
        width: '80%',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 10,
        alignItems: 'center'

    },

    creadentialsInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#A7A1F3',
        marginBottom: 5,
        width: '90%'


    },

    forgotPasswordContainer: {
        marginTop: 10,
        display: 'flex',
        alignItems: 'flex-end',
        fontWeight: 'bold',
        color: '#000000'
    },

    loginButtonsContainer: {
        marginTop: 5,
        width: '100%',
        alignItems: 'center',
    }
});
