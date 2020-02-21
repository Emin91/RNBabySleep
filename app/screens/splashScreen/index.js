import React, { useEffect } from 'react';
import { Image, StatusBar, ImageBackground } from 'react-native';
import styles from './style';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('LoginScreen');
        }, 1500);
        return () => clearTimeout(timer);
    });
    return (
        <ImageBackground
            source={require('../../assets/img/bg1.jpg')}
            style={styles.mainView}
        >
            <StatusBar hidden />
            <Image
                resizeMode={'center'}
                source={require('../../assets/icons/logo.png')}
                style={styles.logo} />
        </ImageBackground>
    )
}

//Splash screen header settings
SplashScreen.navigationOptions = () => ({
    headerShown: false, //Hide Header
});

export default SplashScreen
