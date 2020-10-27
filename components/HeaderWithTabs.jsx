import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View, TextInput } from 'react-native'

export default function TabsFooter() {
    return (
        <View style={styles.container}>

            <View style={styles.headerInputContainer}>
                <TextInput style={styles.headerInput} placeholder={'Buscar empleos'}> </TextInput>
            </View>

            <View style={styles.headerButtonsContainer}>

                <TouchableOpacity style={styles.headerButton} >
                    <Text style={styles.buttonText}>A-Z</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.headerButton} >
                    <Text style={styles.buttonText}>Fecha </Text>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.headerButton} >
                    <Text style={styles.buttonText}>Posición</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },

    headerInputContainer: {
        flex: 4.2,
        width: '100%',
        backgroundColor: '#483EE8',
        alignItems: 'center',
    },

    headerInput: {
        width: '77%',
        height:33,
        borderRadius: 7,
        backgroundColor: '#ffffff',
        marginTop:40
    },

    headerButtonsContainer: {
        flex:1.8,
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-around',
        backgroundColor:'white'
    },

    headerButton: {
        borderWidth: 1,
        borderColor: '#9a73ef',
        height:34,
        width:'32.7%',
        marginTop:1,
        justifyContent:'center',
        alignItems:'center'
    },

    buttonText:{
      color:'#9a73ef'

    }
})