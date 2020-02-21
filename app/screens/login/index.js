import React from 'react';
import { View, Text, Button, TextInput, Image, ImageBackground } from 'react-native';
import styles from './styles'
import { titles } from '../../constants/stringConstants';
import OwnTextInput from '../../components/inputText/inputText';

const LoginScreen = () => {
    return (
        <ImageBackground
            // source={require('../../assets/img/background.jpeg')}
            source={require('../../assets/img/bg1.jpg')}
            style={styles.mainView}
        >
            <View style={styles.titleView}>
                <Image
                    source={require('../../assets/icons/logo.png')}
                    style={styles.logo} />
            </View>
            <View style={styles.regView}>
                <View style={styles.regContainer}>
                    <OwnTextInput
                        iconName={'user'}
                        title={titles.REGISTRATION_LOGIN}
                        plcHolder={titles.REGISTRATION_TYPE_LOGIN}
                    />
                    <OwnTextInput
                        iconName={'textbox-password'}
                        title={titles.REGISTRATION_PASSWORD}
                        plcHolder={titles.REGISTRATION_TYPE_PASSWORD}
                    />
                </View>
            </View>
        </ImageBackground>
    )
}

LoginScreen.navigationOptions = () => ({
    headerShown: false, //Hide Header
});

export default LoginScreen