import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {titles} from '../../constants/stringConstants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';
import OwnTextInput from '../../components/inputText/inputText';
import AsyncStorage from '@react-native-community/async-storage';

const RegisrationScreen = ({navigation}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfim, setPasswordConfirm] = useState('');

  const onRegistrationClick = async () => {
    if (login === '' || password === '' || passwordConfim === '') {
      alert(titles.NEED_TO_FILL);
    } else if (password !== passwordConfim) {
      alert('pass no match');
    } else {
      await AsyncStorage.setItem('login', login);
      await AsyncStorage.setItem('password', password);
      navigation.navigate('HomeScreen');
    }
  };

  const textField = (id, iconName, inputValue, setFunc) => {
    return (
      <View>
        <OwnTextInput
          id={id}
          iconName={iconName}
          returnKey="next"
          userValue={inputValue}
          onChange={newValue => setFunc(newValue)}
          title={titles.REGISTRATION_LOGIN}
          placeHolder={titles.REGISTRATION_TYPE_LOGIN}
        />
      </View>
    );
  };

  return (
    <ImageBackground
      source={require('../../assets/img/bg2.jpg')}
      style={styles.mainView}>
      <KeyboardAwareScrollView style={{flex: 1, paddingTop: 20}}>
        <View style={styles.regView}>
          <View style={styles.regContainer}>
            {textField('userName', 'user', login, setLogin)}
            {textField('password', 'textbox-password', password, setPassword)}
            {textField(
              'password',
              'textbox-password',
              passwordConfim,
              setPasswordConfirm,
            )}
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => onRegistrationClick()}>
              <View style={styles.loginBtnView}>
                <Text style={styles.loginText}>
                  {titles.REGISTRATION_TITLE}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate('LoginScreen')}>
              <View style={styles.regBtnView}>
                <Text style={styles.registrationText}>
                  {titles.HAVE_ACCOUNT} {titles.LOGIN_BTN}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

RegisrationScreen.navigationOptions = () => ({
  headerShown: false,
});

export default RegisrationScreen;
