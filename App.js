import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View, Button, TouchableOpacity, Text } from 'react-native';
import GenderSelection from './screens/Seleccion'
import Header from './components/HeaderWithTabs'
import ListaV from './screens/listaDeVacantes'
import NavigationByStack from './routes/stackNav'
import Carousel from './screens/carousel'

export default function App() {

  return (
    <NavigationByStack  />
    //  <ListaV/>
  );



}




