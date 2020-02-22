import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, ImageBackground, KeyboardAvoidingView } from 'react-native';
import styles from './style'
import { titles } from '../../constants/stringConstants';
import OwnTextInput from '../../components/inputText/inputText';

const RegisrationScreen = ({ navigation }) => {
    return (
        <ImageBackground
            // source={require('../../assets/img/background.jpeg')}
            source={require('../../assets/img/bg2.jpg')}
            style={styles.mainView}
        >

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
                    <OwnTextInput
                        id={'password'}
                        iconName={'textbox-password'}
                        title={titles.REGISTRATION_PASSWORD}
                        plcHolder={titles.REGISTRATION_TYPE_PASSWORD}
                    />
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => alert('Registration')}
                    >
                        <View style={(styles.loginBtnView)}>
                            <Text style={styles.loginText}>{titles.REGISTRATION_TITLE}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => navigation.navigate('LoginScreen')}
                    >
                        <View style={(styles.regBtnView)}>
                            <Text style={styles.registrationText}>{titles.HAVE_ACCOUNT} {titles.LOGIN_BTN}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </ImageBackground>
    )
}

RegisrationScreen.navigationOptions = () => ({

    headerShown: false, //Hide Header
});

export default RegisrationScreen