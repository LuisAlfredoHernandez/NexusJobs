import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import IconoPerfil from '../assets/Iconos perfil.svg'
import IconoLista from '../assets/Iconos Lista.svg'
import IconoConfiguracion from '../assets/Iconos configuracion.svg'

export default function TabsNavFooter() {

    return (
        <View style={styles.container}>

            <View style={styles.iconosContainer}>
                <TouchableOpacity style={styles.icons}>
                    <IconoPerfil />
                    <Text style={styles.iconsText}>Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.icons}>
                    <IconoLista />
                    <Text style={styles.iconsText} >Lista de Vacantes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.icons}>
                    <IconoConfiguracion />
                    <Text style={styles.iconsText} >Configuración</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#483EE8',
        alignItems: 'center',
     
    },

    iconosContainer: {
        flexDirection: 'row',
        width: '85%',
        justifyContent:'space-around',
    },

    icons: {
        width: '20%',
        height: 33,
        marginTop:15,
        alignItems:'center'
    },
    
    iconsText:{
        textAlign:'center',
        height:40,
        fontSize:10,
        width:70
        
    }

})