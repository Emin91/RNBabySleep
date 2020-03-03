import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {AuthStack} from '../stackNavigation/stackNavigator';
import SplashScreen from '../../screens/splashScreen';
import MainApp from '../stackNavigation/mainStackNavigator';

export default SwitchNavigator = createAppContainer(
  createSwitchNavigator(
    {
      SplashScreen,
      AuthScreen: AuthStack,
      MainAppSceen: MainApp,
    },
    {
      initialRouteName: 'SplashScreen',
    },
  ),
);
