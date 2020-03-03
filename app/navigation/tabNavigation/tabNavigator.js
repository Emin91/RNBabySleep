//Screens (Tabs)
import React from 'react';
import Icon from '../../components/iconsList';
import {colors} from '../../constants/color'; //Color constants
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import tabSleepTracker from '../../screens/tabSleepTracker';
import tabInformation from '../../screens/tabInformation';
import tabSettings from '../../screens/tabSettings';
import tabMusicList from '../../screens/tabMusicList';

//Top tab navigation
export const TabBar = createMaterialTopTabNavigator(
  {
    $Tab1: {
      screen: tabMusicList,
      navigationOptions: {
        //tabBarOnPress: () => alert('Tab1'),
        tabBarLabel: () => {
          return null;
        },
        tabBarIcon: <Icon.Entypo name="note" color="#fff" size={22} />,
      },
    },
    $Tab2: {
      screen: tabSleepTracker,
      navigationOptions: {
        tabBarLabel: () => {
          return null;
        },
        tabBarIcon: (
          <Icon.SimpleLineIcons name="graph" color="#fff" size={22} />
        ),
      },
    },
    $Tab3: {
      screen: tabInformation,
      navigationOptions: ({}) => ({
        tabBarLabel: () => {
          return null;
        },
        tabBarIcon: <Icon.Entypo name="home" color="#fff" size={22} />,
      }),
    },
    $Tab4: {
      screen: tabSettings,
      navigationOptions: {
        tabBarLabel: () => {
          return null;
        },
        tabBarIcon: <Icon.Ionicons name="md-settings" color="#fff" size={22} />,
      },
    },
  },
  {
    initialRouteName: '$Tab1',
    tabBarOptions: {
      showIcon: true,
      indicatorStyle: {
        backgroundColor: colors.LOCHMARA,
      },
      style: {
        backgroundColor: colors.GREY,
      },
    },
  },
);
