import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import IconoLinkedin from '../assets/Iconos Linkedin.svg'
import IconoGoogle from '../assets/Iconos Google.svg'
import IconoFacebook from '../assets/Iconos FB.svg'

export default function Footer(props) {
    const { iconsBackgroundColor, IconsTitleBackground } = props

    const stylingIcons = () => {
        if (!iconsBackgroundColor) {
            iconsBackgroundColor = '#ffffff';
        }
        return {
            flex: 3.5,
            flexDirection: 'row',
            backgroundColor: iconsBackgroundColor,
            justifyContent: 'space-around',
            width: '50%',
            alignItems: 'center'
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: iconsBackgroundColor, alignItems: 'center',}}>
            <View style={styles.labelsContainer}>
                <Text style={styles.divisionLabel} />
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: IconsTitleBackground  }}> Iniciar sesión con </Text>
                <Text style={styles.divisionLabel} />
            </View>

            <View style={stylingIcons()}>
                <TouchableOpacity style={styles.icons}>
                    <IconoLinkedin />
                </TouchableOpacity>

                <TouchableOpacity style={styles.icons}>
                    <IconoGoogle />
                </TouchableOpacity>

                <TouchableOpacity style={styles.icons}>
                    <IconoFacebook />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    labelsContainer: {
        flex: 2.5,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    footerText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#133463'

    },

    divisionLabel: {
        height: 3,
        width: '18%',
        backgroundColor: '#d6d6d6',
        marginTop: 10
    },

    icons: {
        height: '70%',
        width: '24%',
        backgroundColor: 'white',
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 4
    },

    iconsImage: {
        height: '100%',
        width: '100%'
    }
})