import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const footer = props => {
    return (
        <View style={styles.container}>
            <View style={styles.labelsContainer}>
                <Text style={styles.divisionLabel} />
                <Text style={styles.footerText}>Iniciar sesión con</Text>
                <Text style={styles.divisionLabel} />
            </View>

            <View style={styles.iconsContainer}>
                  
            </View>
        </View>
    )
}

export default footer



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDF1F7'
    },

    labelsContainer: {
        marginTop: 100,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around'
    },

    footerText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#133463'

    },

    divisionLabel: {
        height: 2,
        width: '20%',
        backgroundColor: 'grey',
        marginTop: 10

    },

    iconsContainer: {
        marginTop: 10,

    },

})