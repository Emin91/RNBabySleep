import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

//Icons
import Icon from '../components/Icons';

//Navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import NewSoundScreen from '../screens/newSoundScreen';
import DetailsScreen from '../screens/detailsScreen';
import registrationScreen from '../screens/registration';
import {TabBar} from './tabNavigation/tabNavigator';
import {titles} from '../constants/stringConstants';
import {colors} from '../constants/colorConstans';
import MovieScreen from '../screens/movieScreen';
import {TabBarTwo} from './tabNavigation/tabNavigatorTwo';

//Main navigation container
const AppContainer = createStackNavigator(
  {
    HomeScreen: {
      screen: TabBar,
      navigationOptions: ({navigation}) => ({
        title: titles.HEADER_TEXT_MAIN_SCREEN,
        headerRight: () => (
          <TouchableOpacity
            style={[{paddingHorizontal: 15}]}
            onPress={() => navigation.navigate('screenRecorder')}>
            <Icon.AntDesign name="plus" color={'white'} size={30} />
          </TouchableOpacity>
        ),
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: colors.GREY,
          elevation: 0,
          shadowOpacity: 0,
        },
      }),
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: ({navigation}) => ({
        title: navigation.getParam('value', 'img'),
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: colors.GREY,
          elevation: 0,
          shadowOpacity: 0,
        },
      }),
    },
    screenRecorder: {
      screen: NewSoundScreen,
      navigationOptions: ({navigation}) => ({
        title: titles.HEADER_CREATE_NEW_SOUND,
        headerRight: () =>
          true ? (
            <TouchableOpacity
              style={[{paddingHorizontal: 15}]}
              onPress={() => navigation.goBack()}>
              <Icon.MaterialIcons name="save" color={'white'} size={30} />
            </TouchableOpacity>
          ) : null,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: colors.GREY,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabDetails: {
          screen: tabDetails,
        },
      }),
    },
    regScreen: {
      screen: registrationScreen,
      navigationOptions: ({}) => ({
        headerShown: false,
      }),
    },
    MovieScreen: {
      screen: TabBarTwo,
      navigationOptions: ({}) => ({
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: colors.GREY,
          elevation: 0,
          shadowOpacity: 0,
        },
      }),
    },
  },
  {
    //headerMode: 'none',
    initialRouteName: 'HomeScreen',
  },
);

//Export AppContainer
export default createAppContainer(AppContainer);
