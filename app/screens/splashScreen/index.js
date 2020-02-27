import React, {useEffect} from 'react';
import {Image, StatusBar, ImageBackground} from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (
        (await AsyncStorage.getItem('login')) === 'Emin2' &&
        (await AsyncStorage.getItem('password')) === '12345'
      ) {
        navigation.navigate('HomeScreen');
      } else {
        navigation.navigate('LoginScreen');
        // navigation.navigate('MovieScreen');
      }
    }, 1500);
    return () => clearTimeout(timer);
  });
  return (
    <ImageBackground
      source={require('../../assets/img/bg1.jpg')}
      style={styles.mainView}>
      <StatusBar hidden />
      <Image
        resizeMode={'center'}
        source={require('../../assets/icons/logo.png')}
        style={styles.logo}
      />
    </ImageBackground>
  );
};

//Splash screen header settings
SplashScreen.navigationOptions = () => ({
  headerShown: false, //Hide Header
});

export default SplashScreen;
