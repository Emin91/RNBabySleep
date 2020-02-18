import React from 'react'
import { TouchableOpacity } from 'react-native'
import PlusIcon from 'react-native-vector-icons/dist/Feather'; //Icon
import * as COLOR from '../constants/ColorConstans'; //Color constants
import * as STRINGS from '../constants/StringConstants'; //String constants
import IconStar from 'react-native-vector-icons/MaterialIcons'
//Navigation
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'

//Screens (Tabs)
import Tab1 from '../screens/Tab_1'
import Tab2 from '../screens/Tab_2'
import Tab3 from '../screens/Tab_3'

//Top tab navigation
const TabBar = createMaterialTopTabNavigator({
    $Tab1: {
        screen: Tab1,
        navigationOptions: {
            tabBarLabel: () => { return null },
            tabBarIcon: <IconStar name="star" color='#fff' size={22} />,
        }
    },
    $Tab2: {
        screen: Tab2,
        navigationOptions: {
            tabBarLabel: () => { return null },
            tabBarIcon: <IconStar name="star" color='#fff' size={22} />,
        }
    },
    $Tab3: {
        screen: Tab3,
        navigationOptions: {
            tabBarLabel: () => { return null },
            tabBarIcon: <IconStar name="star" color='#fff' size={22} />,
        }
    },
},
    {
        initialRouteName: '$Tab1',
        tabBarOptions: {
            showIcon: true,
            style: {
                backgroundColor: COLOR.GREY,
            },
        }
    }
)

//Main navigation container
const AppContainer = createStackNavigator(
    {
        $HomeScreen:
        {
            screen: TabBar,
            navigationOptions: {
                title: STRINGS.HEADER_TEXT_MAIN_SCREEN,
                headerRight: (() =>
                    <TouchableOpacity style={[{ paddingHorizontal: 15 }]}>
                        <PlusIcon
                            name="plus"
                            color={'red'}
                            size={30} />
                    </TouchableOpacity>
                ),
                headerStyle: {
                    backgroundColor: COLOR.GREY,
                    elevation: 0,
                    shadowOpacity: 0,
                },
            }
        },
    },
    {
        initialRouteName: '$HomeScreen'
    }
)

//Export AppContainer
export default createAppContainer(AppContainer)