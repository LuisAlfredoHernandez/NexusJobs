import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/Login'
import RegisterScreen from '../screens/registro'
import GenderSelection from '../screens/Seleccion'
import JobsListScreen from '../screens/listaDeVacantes'
import CarouselScreen from '../screens/carousel'

const screens = {

    Login: {
        screen: LoginScreen
    },
    
    Register:{
         screen: RegisterScreen
    },

    Selection:{
        screen: GenderSelection
    },

    JobsList:{
        screen: JobsListScreen
    },

    Carousel:{
        screen: CarouselScreen
    }


}

const StackNav = createStackNavigator(screens)

export default createAppContainer(StackNav)




