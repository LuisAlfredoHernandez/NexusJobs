import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/Login'
import RegisterScreen from '../screens/registro'
import GenderSelection from '../screens/Seleccion'
import JobsListScreen from '../screens/listaDeVacantes'

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
    }

}

const StackNav = createStackNavigator(screens)

export default createAppContainer(StackNav)




