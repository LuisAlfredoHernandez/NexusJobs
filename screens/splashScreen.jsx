import React from 'react'
import {StyleSheet ,View, ImageBackground} from 'react-native'

const splashScreen = () => {
    return (
        <View style={styles.container} > 
          <ImageBackground source={ {uri:'../assets/background.jpg'}} style={styles.background}> </ImageBackground>
        </View>
    )
}

export default splashScreen


const styles = StyleSheet.create({
    container:{
    flex:1
    },

    background:{
        flex:1,
        width:'100%',
        height:'100%'
    }
})