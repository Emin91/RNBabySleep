import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import styles from './style';
import { titles } from '../../constants/StringConstants';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('MainAppSceen');
        }, 1000);
        return () => clearTimeout(timer);
    });
    return (
        <View style={styles.mainView}>
            <StatusBar hidden />
            <Image
                style={styles.logo}
                resizeMode={'center'}
                source={require('../../assets/icons/logo.png')}
            />
            <Text style={styles.text}>{titles.HEADER_MAIN_TITLE}</Text>
        </View>
    )
}

//Splash screen header settings
SplashScreen.navigationOptions = () => ({
    headerShown: false, //Hide Header
});

export default SplashScreen
