import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, TextInput, View, Button, TouchableOpacity, Text } from 'react-native'
import RegularButton from '../components/regularButton'
import Footer from '../components/footer'
import BackIcon from '../components/backIcon'
import Header from '../components/HeaderWithTabs'

export default function Registro() {
    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <Header />

            </View>

            <View style={styles.segmentation}>
                <RegularButton color={'purple'} />
                <RegularButton color={'purple'} />
                <RegularButton color={'purple'} />
            </View>

            <View style={styles.footerContainer}>
                <Footer iconsBackgroundColor={'red'} />
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
        flex: 1.1,
        width: '100%'

    },

    segmentation: {
        flex: 4.4,
        backgroundColor: "yellow",
        width: '100%'
    },

    footerContainer: {
        backgroundColor: "red",
        flex: 0.5,
    }

});
