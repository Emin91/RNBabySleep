import React from 'react'
import { StyleSheet, View, Text, Image, StatusBar, Button } from 'react-native'
import styles from '../styles/splashScreenStyle'

const SplashScreen = () => {
    return (
        <View style={styles.mainView}>
            <StatusBar hidden />
            <Image
                style={styles.logo}
                resizeMode={'center'}
                source={require('../assets/icons/logo.png')}
            />
            <Text style={styles.text}>Баю-Бай</Text>
        </View>
    )
}

//Splash screen header settings
SplashScreen.navigationOptions = () => ({
    headerShown: false, //Hide Header
});

export default SplashScreen
