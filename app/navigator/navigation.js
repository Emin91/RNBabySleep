import React from 'react'
//Navigation
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
//Screens
import SplashScreen from '../screens/SplashScreen'
import MainScreen from '../screens/MainScreen'

//Main navigation container
const AppContainer = createStackNavigator(
    {
        $SplashScreen: { screen: SplashScreen },
        $HomeScreen: { screen: MainScreen },
    },
    {
        initialRouteName: '$HomeScreen'
    }
)

//Export AppContainer
export default createAppContainer(AppContainer)