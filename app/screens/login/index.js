import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import titles from '../../constants/string';
import {images} from '../../constants/image';
import styles from './styles';
import onLoginClick from './components/onLoginClick';
import CustomTextInput from '../../components/inputText';
import {ROUTE} from '../../constants/settings';

const LoginScreen = ({navigation}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView>
      <ImageBackground source={images.bg1} style={styles.mainView}>
        <View style={styles.logoView}>
          <Image source={images.logo} style={styles.logo} />
        </View>
        <View style={styles.regView}>
          <View style={styles.regContainer}>
            <CustomTextInput
              iconName="user"
              security={false}
              inputValue={login}
              setFunc={setLogin}
              title={titles.REGISTRATION_LOGIN}
              placeHolder={titles.REGISTRATION_TYPE_LOGIN}
              navigation={navigation}
            />
            <CustomTextInput
              iconName="textbox-password"
              security={true}
              inputValue={password}
              setFunc={setPassword}
              title={titles.REGISTRATION_PASSWORD}
              placeHolder={titles.REGISTRATION_TYPE_PASSWORD}
              navigation={navigation}
            />
            {login && password ? (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => onLoginClick(login, password, navigation)}>
                <View style={styles.loginBtnView}>
                  <Text style={styles.loginText}>{titles.LOGIN_BTN}</Text>
                </View>
              </TouchableOpacity>
            ) : null}
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
