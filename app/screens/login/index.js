import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, ImageBackground, KeyboardAvoidingView } from 'react-native';
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
            <View style={styles.logoView}>
                <Image
                    source={require('../../assets/icons/logo.png')}
                    style={styles.logo} />
            </View>
            <View style={styles.regView}>
                <View style={styles.regContainer}>
                    <OwnTextInput
                        id={'userName'}
                        iconName={'user'}
                        title={titles.REGISTRATION_LOGIN}
                        plcHolder={titles.REGISTRATION_TYPE_LOGIN}
                    />
                    <OwnTextInput
                        id={'password'}
                        iconName={'textbox-password'}
                        title={titles.REGISTRATION_PASSWORD}
                        plcHolder={titles.REGISTRATION_TYPE_PASSWORD}
                    />
                    <TouchableOpacity
                        activeOpacity={0.6}
                    >
                        <View style={styles.loginBtnView}>
                            <Text style={styles.loginBtn}>{titles.LOGIN_BTN}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

LoginScreen.navigationOptions = () => ({
    headerShown: false, //Hide Header
});

export default LoginScreen