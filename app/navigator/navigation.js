import React from 'react'
import { TouchableOpacity } from 'react-native'
import PlusIcon from 'react-native-vector-icons/dist/Feather'; //Icons
import IconStar from 'react-native-vector-icons/MaterialIcons';
import * as COLOR from '../constants/ColorConstans'; //Color constants
import * as STRINGS from '../constants/StringConstants'; //String constants
//Navigation
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'

import SplashScreen from '../screens/SplashScreen'
//Screens (Tabs)
import Tab1 from '../screens/Tab_1'
import Tab2 from '../screens/Tab_2'
import Tab3 from '../screens/Tab_3'
import Tab4 from '../screens/Tab_4'

//Top tab navigation
const TabBar = createMaterialTopTabNavigator({
    $Tab1: {
        screen: Tab1,
        navigationOptions: {
            //tabBarOnPress: () => alert('Tab1'),
            tabBarLabel: () => { return null },
            tabBarIcon: <IconStar name="star" color='#fff' size={25} />,
        },
    },
    $Tab2: {
        screen: Tab2,
        navigationOptions: {
            tabBarLabel: () => { return null },
            tabBarIcon: <IconStar name="star" color='#fff' size={25} />,
        }
    },
    $Tab3: {
        screen: Tab3,
        navigationOptions: {
            tabBarLabel: () => { return null },
            tabBarIcon: <IconStar name="star" color='#fff' size={25} />,
        }
    },
    $Tab4: {
        screen: Tab4,
        navigationOptions: {
            tabBarLabel: () => { return null },
            tabBarIcon: <IconStar name="star" color='#fff' size={25} />,
        }
    },
},
    {
        initialRouteName: '$Tab1',
        lazy: true,
        tabBarOptions: {
            showIcon: true,
            indicatorStyle: {
                backgroundColor: 'red',
            },
            style: {
                backgroundColor: COLOR.GREY,
            },
        },
    }
)

//Main navigation container
const AppContainer = createStackNavigator(
    {
        Main: {
            screen: SplashScreen
        },
        $HomeScreen:
        {
            screen: TabBar,
            navigationOptions: (props) => ({
                title: STRINGS.HEADER_TEXT_MAIN_SCREEN,
                headerRight: (() =>
                    <TouchableOpacity
                        style={[{ paddingHorizontal: 15 }]}
                        onPress={() => props.navigation.navigate('Splash')}>
                        <PlusIcon
                            name="plus"
                            color={'white'}
                            size={30} />
                    </TouchableOpacity>
                ),
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: COLOR.GREY,
                    elevation: 0,
                    shadowOpacity: 0,
                },
            })
        },
    },

    {
        initialRouteName: '$HomeScreen'
    }
)

//Export AppContainer
export default createAppContainer(AppContainer)