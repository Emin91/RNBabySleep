import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from '../screens/splashScreen';
import { AuthStack } from './stackNavigator';
import MainApp from '../navigation/navigation'

export default SwitchNavigator = createAppContainer(
    createSwitchNavigator(
        {
            SplashScreen,
            AuthScreen: AuthStack,
            MainAppSceen: MainApp,
        },
        {
            initialRouteName: 'SplashScreen',
        }
    ));