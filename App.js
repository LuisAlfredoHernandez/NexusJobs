import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View, Button, TouchableOpacity, Text } from 'react-native';
import LoginScreen from './screens/Login'
import RegisterScreen from './screens/registro'
import SplashScreen from './screens/splashScreen'
import Footer from './components/footer'
import BackIcon from './components/backIcon'
import GenderSelection from './screens/Seleccion'
import Header from './components/HeaderWithTabs'
import ListaV from './screens/listaDeVacantes'
import NavigationByStack from './routes/stackNav'


export default function App() {
  return (

    <NavigationByStack/>

  );



}




