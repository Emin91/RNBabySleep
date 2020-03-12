import React from 'react';
import {TouchableOpacity} from 'react-native';

import Icon from '../../components/iconsList';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {ROUTE} from '../../constants/settings';
import {TabBar} from '../tabNavigation/tabNavigator';
import {colors} from '../../constants/color';
import {TabBarTwo} from '../tabNavigation/tabNavigatorTwo';
import {ROUTE_NAME} from '../../constants/string';
import Faq from '../../screens/faq';
import Settings from '../../screens/settings';
import NewVersion from '../../screens/newVersion';
import YoutubeScreen from '../../screens/youtubeScreen';
import DetailsScreen from '../../screens/detailsScreen';
import AboutAppScreen from '../../screens/aboutApp';
import NewSoundScreen from '../../screens/newSoundScreen';
import AboutAuthorScreen from '../../screens/aboutAuthor';

const AppContainer = createStackNavigator(
  {
    HomeScreen: {
      screen: TabBar,
      navigationOptions: ({navigation}) => ({
        title: ROUTE_NAME.HomeScreen,
        headerRight: () => (
          <TouchableOpacity
            style={[{paddingHorizontal: 15}]}
            onPress={() => navigation.navigate(ROUTE.ScreenRecorder)}>
            <Icon.AntDesign name="plus" color={'white'} size={30} />
          </TouchableOpacity>
        ),
        headerTintColor: colors.WHITE,
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
        headerTintColor: colors.WHITE,
        headerStyle: {
          backgroundColor: colors.GREY,
          elevation: 0,
          shadowOpacity: 0,
        },
      }),
    },
    ScreenRecorder: {
      screen: NewSoundScreen,
      navigationOptions: ({navigation}) => ({
        title: ROUTE_NAME.ScreenRecorder,
        headerRight: () =>
          true ? (
            <TouchableOpacity
              style={[{paddingHorizontal: 15}]}
              onPress={() => navigation.goBack()}>
              <Icon.MaterialIcons name="save" color={'white'} size={30} />
            </TouchableOpacity>
          ) : null,
        headerTintColor: colors.WHITE,
        headerStyle: {
          backgroundColor: colors.GREY,
          elevation: 0,
          shadowOpacity: 0,
        },
      }),
    },
    MovieScreen: {
      screen: TabBarTwo,
      navigationOptions: ({}) => ({
        headerTintColor: colors.WHITE,
        headerStyle: {
          backgroundColor: colors.GREY,
          elevation: 0,
          shadowOpacity: 0,
        },
      }),
    },
    YoutubeScreen: {
      screen: YoutubeScreen,
      navigationOptions: ({}) => ({
        title: ROUTE_NAME.YoutubeScreen,
        headerTintColor: colors.WHITE,
        headerStyle: {
          backgroundColor: colors.GREY,
          elevation: 0,
          shadowOpacity: 0,
        },
      }),
    },
    NewVersion: {
      screen: NewVersion,
      navigationOptions: ({}) => ({
        title: ROUTE_NAME.NewVersion,
        headerTintColor: colors.WHITE,
        headerStyle: {
          backgroundColor: colors.GREY,
          elevation: 0,
          shadowOpacity: 0,
        },
      }),
    },
    AboutApp: {
      screen: AboutAppScreen,
      navigationOptions: ({}) => ({
        title: ROUTE_NAME.About,
        headerTintColor: colors.WHITE,
        headerStyle: {
          backgroundColor: colors.GREY,
          elevation: 0,
          shadowOpacity: 0,
        },
      }),
    },
    About: {
      screen: AboutAuthorScreen,
      navigationOptions: ({}) => ({
        title: null,
        headerTintColor: colors.WHITE,
        headerTransparent: true,
        headerStyle: {
          backgroundColor: colors.GREY,
          elevation: 0,
          shadowOpacity: 0,
        },
      }),
    },
    Faq: {
      screen: Faq,
      navigationOptions: ({}) => ({
        title: ROUTE_NAME.Faq,
        headerTintColor: colors.WHITE,
        headerStyle: {
          backgroundColor: colors.GREY,
          elevation: 0,
          shadowOpacity: 0,
        },
      }),
    },
    Settings: {
      screen: Settings,
      navigationOptions: ({}) => ({
        title: ROUTE_NAME.Settings,
        headerTintColor: colors.WHITE,
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
    initialRouteName: ROUTE.HomeScreen,
  },
);

export default createAppContainer(AppContainer);
