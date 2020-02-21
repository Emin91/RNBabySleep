import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/login'
import RegistrationScreen from '../screens/registration'

export const AuthStack = createStackNavigator({
    LoginScreen,
    RegistrationScreen,
})