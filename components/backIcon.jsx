import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import BackIconImage from '../assets/Iconos atras.svg'

export default function RegularButtonComponent(props) {
    const { color } = props;

    const styling = () => {
        if (!color) {
            color = '#e9e9f0';
        }
        return {
            marginTop: 35,
            height: 30,
            width: 50,
            marginLeft:10
        }
    }

    return (
    <View>
        <TouchableOpacity style={styling()} >
            <BackIconImage style={{ color: color }} />
        </TouchableOpacity>
    </View>
    );
}

