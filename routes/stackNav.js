import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/Login'
import RegisterScreen from '../screens/registro'
import GenderSelection from '../screens/Seleccion'

const screens = {

    Login: {
        screen: LoginScreen
    },
    
    Register:{
         screen: RegisterScreen
    },

    Selection:{
        screen: GenderSelection
    }

}

const StackNav = createStackNavigator(screens)

export default createAppContainer(StackNav)




