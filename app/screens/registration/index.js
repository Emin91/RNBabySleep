import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {titles} from '../../constants/string';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ROUTE} from '../../constants/settings';
import {images} from '../../constants/image';
import styles from './style';
import onRegistrationClick from './components/onRegistrationClick';
import CustomTextInput from '../../components/inputText';

const RegisrationScreen = ({navigation}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfim, setPasswordConfirm] = useState('');

  return (
    <ImageBackground source={images.bg2} style={styles.mainView}>
      <KeyboardAwareScrollView style={styles.keyboardScroll}>
        <View style={styles.regView}>
          <View style={styles.regContainer}>
            <CustomTextInput
              iconName="user"
              security={false}
              inputValue={login}
              setFunc={setLogin}
              title={titles.REGISTRATION_LOGIN}
              placeHolder={titles.REGISTRATION_TYPE_LOGIN}
            />
            <CustomTextInput
              iconName="textbox-password"
              security={true}
              inputValue={password}
              setFunc={setPassword}
              title={titles.REGISTRATION_PASSWORD}
              placeHolder={titles.REGISTRATION_TYPE_PASSWORD}
            />
            <CustomTextInput
              iconName="textbox-password"
              security={true}
              inputValue={passwordConfim}
              setFunc={setPasswordConfirm}
              title={titles.REGISTRATION_PASSWORD}
              placeHolder={titles.REGISTRATION_TYPE_PASSWORD}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() =>
                onRegistrationClick(login, password, passwordConfim, navigation)
              }>
              <View style={styles.loginBtnView}>
                <Text style={styles.loginText}>
                  {titles.REGISTRATION_TITLE}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate(ROUTE.LoginScreen)}>
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
