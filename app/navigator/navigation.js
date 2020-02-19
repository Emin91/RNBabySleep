import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
//Icons
import Icon from '../components/Icons';
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
import NewSoundScreen from '../screens/NewSoundScreen';
import DetailsScreen from '../screens/DetailsScreen';


//Top tab navigation
const TabBar = createMaterialTopTabNavigator({
    $Tab1: {
        screen: Tab1,
        navigationOptions: {
            //tabBarOnPress: () => alert('Tab1'),
            tabBarLabel: () => { return null },
            tabBarIcon: <Icon.Entypo name="note" color='#fff' size={22} />,
        },
    },
    $Tab2: {
        screen: Tab2,
        navigationOptions: {
            tabBarLabel: () => { return null },
            tabBarIcon: <Icon.SimpleLineIcons name="graph" color='#fff' size={22} />,
        }
    },
    $Tab3: {
        screen: Tab3,
        navigationOptions: {
            tabBarLabel: () => { return null },
            tabBarIcon: <Icon.Entypo name="home" color='#fff' size={22} />,
        }
    },
    $Tab4: {
        screen: Tab4,
        navigationOptions: {
            tabBarLabel: () => { return null },
            tabBarIcon: <Icon.Ionicons name="md-settings" color='#fff' size={22} />,
        }
    },
},
    {
        initialRouteName: '$Tab1',
        tabBarOptions: {
            showIcon: true,
            indicatorStyle: {
                backgroundColor: COLOR.LOCHMARA,
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
        HomeScreen:
        {
            screen: TabBar,
            navigationOptions: (props) => ({
                title: STRINGS.HEADER_TEXT_MAIN_SCREEN,
                headerRight: (() =>
                    <TouchableOpacity
                        style={[{ paddingHorizontal: 15 }]}
                        onPress={() => props.navigation.navigate('screenRecorder')}>
                        <Icon.AntDesign
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
        Details: {
            screen: DetailsScreen,
            navigationOptions: ({ navigation }) => ({
                title: navigation.getParam('value', 'img'),
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: COLOR.GREY,
                    elevation: 0,
                    shadowOpacity: 0,
                },
            })
        },
        screenRecorder: {
            screen: NewSoundScreen,
            navigationOptions: ({ navigation }) => ({
                title: STRINGS.HEADER_CREATE_NEW_SOUND,
                headerRight: (() =>
                    (true ? <TouchableOpacity
                        style={[{ paddingHorizontal: 15 }]}
                        onPress={() => navigation.goBack()}>
                        <Icon.MaterialIcons
                            name="save"
                            color={'white'}
                            size={30} />
                    </TouchableOpacity> : null)
                ),

                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: COLOR.GREY,
                    elevation: 0,
                    shadowOpacity: 0,
                },
            })
        }
    },

    {
        //headerMode: 'none',
        initialRouteName: 'HomeScreen',
    }
)

//Export AppContainer
export default createAppContainer(AppContainer)
