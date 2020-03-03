import React from 'react';
import {TouchableOpacity} from 'react-native';

//Icons
import Icon from '../../components/iconsList';

//Navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Screens
import NewSoundScreen from '../../screens/newSoundScreen';
import DetailsScreen from '../../screens/detailsScreen';
import YoutubeScreen from '../../screens/youtubeScreen';
import NewVersion from '../../screens/newVersion';
import {TabBar} from '../tabNavigation/tabNavigator';
import {titles} from '../../constants/string';
import {colors} from '../../constants/color';
import {TabBarTwo} from '../tabNavigation/tabNavigatorTwo';
import {ROUTE} from '../../constants/settings';

const AppContainer = createStackNavigator(
  {
    HomeScreen: {
      screen: TabBar,
      navigationOptions: ({navigation}) => ({
        title: titles.HEADER_TEXT_MAIN_SCREEN,
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
        title: titles.HEADER_CREATE_NEW_SOUND,
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
        title: ROUTE.YoutubeScreen,
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
        title: ROUTE.NewVersion,
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
    initialRouteName: 'HomeScreen',
  },
);

//Export AppContainer
export default createAppContainer(AppContainer);