import React, { useEffect, useState } from 'react';
import NavigationByStack from './routes/stackNav'
import { View, Image } from 'react-native'

export default function App() {

  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1000);
  }, []);

  return (
    splash ?
      <Image style={{ height: '100%', width: '100%'}} source={require('./assets/splash1.png')} />
      : <NavigationByStack />
  );



}




