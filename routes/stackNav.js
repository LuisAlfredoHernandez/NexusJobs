import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/Login'
import RegisterScreen from '../screens/registro'
import GenderSelection from '../screens/Seleccion'
import JobsListScreen from '../screens/listaDeVacantes'
import CarouselScreen from '../screens/carousel'

const screens = {

    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown:false,
          }
    },
    
    Register:{
         screen: RegisterScreen,
         navigationOptions: {
            headerShown:false,
          }
    },

    Selection:{
        screen: GenderSelection,
        navigationOptions: {
            headerShown:false,
          }
    },

    JobsList:{
        screen: JobsListScreen,
        navigationOptions: {
            headerShown:false,
          }
    },

    Carousel:{
        screen: CarouselScreen,
        navigationOptions: {
            headerShown:false,
          }
    }


}

const StackNav = createStackNavigator(screens)

export default createAppContainer(StackNav)




