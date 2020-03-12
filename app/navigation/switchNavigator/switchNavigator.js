import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {ROUTE} from '../../constants/settings';
import {AuthStack} from '../stackNavigation/stackNavigator';
import MainApp from '../stackNavigation/mainStackNavigator';
import SplashScreen from '../../screens/splashScreen';

export default SwitchNavigator = createAppContainer(
  createSwitchNavigator(
    {
      SplashScreen,
      AuthScreen: AuthStack,
      MainAppSceen: MainApp,
    },
    {
      initialRouteName: ROUTE.SplashScreen,
    },
  ),
);
