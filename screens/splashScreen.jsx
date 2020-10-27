import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import SplashScreenLogo from '../assets/Iconos nexusJob Blanco.svg'

const splashScreen = () => {
    return (
        <View style={styles.container} >
            <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
                <SplashScreenLogo style={styles.iconImage}/>
            </ImageBackground>
        </View>
    )
}

export default splashScreen


const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent:'center'
    },

    iconImage: {
        height: '40%',
        width: '75%',
        marginBottom:60

    },

})