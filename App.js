import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View, Button, TouchableOpacity, Text } from 'react-native';
import Login from './screens/Login'
import Registro from './screens/registro'
import SplashScreen from './screens/splashScreen'
import Footer from './components/footer'
import BackIcon from './components/backIcon'
import Seleccione from './screens/Seleccion'
import Header from './components/HeaderWithTabs'
import ListaV from './screens/listaDeVacantes'


export default function App() {
  return (
    <ListaV/>
  );



}




