import React from 'react'
import { StyleSheet, TextInput, View, Button, TouchableOpacity, Text } from 'react-native'
import RegularButton from '../components/regularButton'
import FooterWT from '../components/footerWithTabs'
import TabsHeader from '../components/HeaderWithTabs'

export default function ListaVacantes() {

const getJobsList = () =>{
    
}


    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <TabsHeader />
            </View>

            <View style={styles.segmentation}>
                <RegularButton color={'purple'} />
                <RegularButton color={'purple'} />
                <RegularButton color={'purple'} />
            </View>

            <View style={styles.footerContainer}>
                <FooterWT />
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
        flex: 4.2,
        backgroundColor: "yellow",
        width: '100%'
    },

    footerContainer: {
        backgroundColor: "red",
        flex: 0.7,
    }

});
