import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function RegularButtonComponent(props) {
    const {color, texto, textColor, onPressEvent } = props;

    const styling = () => {
        if (!color) {
            color = '#e9e9f0';
        }
        return {
            marginTop: 10,
            backgroundColor: color,
            borderRadius: 10,
            height: 45,
            width: '85%',
            justifyContent:'center',
            alignItems:'center',
        }
    }

    return (
        <TouchableOpacity onPress={ onPressEvent } style={styling()} >
            <Text style={ {color:textColor, fontSize:17, fontWeight:'bold'} } >{texto}</Text>
        </TouchableOpacity>
    );
}

