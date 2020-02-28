import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import {titles} from '../../constants/stringConstants';
import {colors} from '../../constants/colorConstans';
import {images} from '../../constants/imageConstants';
import {ROUTE} from '../../constants/routeNameConstants';
import styles from './styles';
import OwnTextInput from '../../components/inputText/inputText';
import AsyncStorage from '@react-native-community/async-storage';

const LoginScreen = ({navigation}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onLoginClick = async () => {
    if (!login || !password) {
      alert(titles.NEED_TO_FILL);
    } else {
      if (
        login === (await AsyncStorage.getItem('login')) &&
        password === (await AsyncStorage.getItem('password'))
      ) {
        navigation.navigate(ROUTE.HomeScreen);
      } else {
        alert(titles.NOT_MUTCH);
      }
    }
  };

  const textField = (id, iconName, inputValue, setFunc) => {
    return (
      <View>
        <OwnTextInput
          id={id}
          navigation={onLoginClick}
          iconName={iconName}
          returnKey="go"
          userValue={inputValue}
          onChange={newValue => setFunc(newValue)}
          title={titles.REGISTRATION_LOGIN}
          placeHolder={titles.REGISTRATION_TYPE_LOGIN}
        />
      </View>
    );
  };

  return (
    <KeyboardAvoidingView>
      <ImageBackground source={images.bg1} style={styles.mainView}>
        <View style={styles.logoView}>
          <Image source={images.logo} style={styles.logo} />
        </View>
        <View style={styles.regView}>
          <View style={styles.regContainer}>
            {textField('userName', 'user', login, setLogin)}
            {textField('password', 'textbox-password', password, setPassword)}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => onLoginClick()}>
              <View
                style={
                  login || password
                    ? styles.loginBtnView
                    : [styles.loginBtnView, {backgroundColor: colors.GREY}]
                }>
                <Text style={styles.loginText}>{titles.LOGIN_BTN}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate(ROUTE.RegistrationScreen)}>
              <View style={styles.regBtnView}>
                <Text style={styles.registrationText}>
                  {titles.HAVE_NOT_ACCOUNT} {titles.REGISTRATION_TITLE}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};
LoginScreen.navigationOptions = () => ({
  headerShown: false,
});

export default LoginScreen;
