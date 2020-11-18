import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import RegularButton from '../components/regularButton'
import BackButton from '../components/backIcon'

export default function Seleccion( { navigation } ) {

const [gender, setGender] = useState('')
const [boton1SelectedTextColor, setBoton1SelectedTextColor] = useState('#9a73ef')
const [boton2SelectedTextColor, setBoton2SelectedTextColor] = useState('#9a73ef')


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <BackButton onPressEvent={()=> navigation.navigate('Register',{gender:gender})} style={ styles.backButton } color='#EDF1F7f0'/>
        <Text style={styles.headerText}>Seleccione</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <RegularButton onPressEvent={()=>setGender('Masculino')} texto='Masculino' color='#EDF1F7f0' textColor={boton1SelectedTextColor}/>
        <RegularButton onPressEvent={()=>setGender('Femenino')} texto='Femenino' color='#EDF1F7f0' textColor={boton2SelectedTextColor}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#483EE8',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },

  headerContainer:{
     width:'100%',
     flexDirection:'row'
  },

  backButton:{
     marginLeft:20
  },

  headerText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 35,
    marginLeft:65
  },

  buttonsContainer: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center'
  }

});
