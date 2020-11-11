import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

export default function TabsFooter() {

    return (
        <View style={styles.container}>
            <View style={styles.headerInputContainer}>
                <TextInput style={styles.headerInput} placeholder={'Buscar empleos'}> </TextInput>
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

})