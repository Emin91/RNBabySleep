import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  AsyncStorage,
} from 'react-native';
import styles from './styles';
import {titles} from '../../constants/stringConstants';
import OwnTextInput from '../../components/inputText/inputText';

const LoginScreen = ({navigation}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onLoginClick = async () => {
    if (login === '' || password === '') {
      console.log('Empty');
      alert('Поля должны быть заполнены!');
    } else {
      if (
        login === (await AsyncStorage.getItem('login')) &&
        password === (await AsyncStorage.getItem('password'))
      ) {
        navigation.navigate('HomeScreen');
      } else {
        console.log('exit');
      }
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/img/bg1.jpg')}
      style={styles.mainView}>
      <View style={styles.logoView}>
        <Image
          source={require('../../assets/icons/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.regView}>
        <View style={styles.regContainer}>
          <OwnTextInput
            id="userName"
            navigation={onLoginClick}
            iconName="user"
            returnKey="go"
            userValue={login}
            onChange={newLogin => setLogin(newLogin)}
            title={titles.REGISTRATION_LOGIN}
            placeHolder={titles.REGISTRATION_TYPE_LOGIN}
          />
          <OwnTextInput
            id="password"
            navigation={onLoginClick}
            iconName="textbox-password"
            returnKey="go"
            value={password}
            onChange={newPassword => setPassword(newPassword)}
            title={titles.REGISTRATION_PASSWORD}
            placeHolder={titles.REGISTRATION_TYPE_PASSWORD}
          />
          <TouchableOpacity activeOpacity={0.6} onPress={() => onLoginClick()}>
            <View style={styles.loginBtnView}>
              <Text style={styles.loginText}>{titles.LOGIN_BTN}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('RegistrationScreen')}>
            <View style={styles.regBtnView}>
              <Text style={styles.registrationText}>
                {titles.HAVE_NOT_ACCOUNT} {titles.REGISTRATION_TITLE}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
LoginScreen.navigationOptions = () => ({
  headerShown: false, //Hide Header
});

export default LoginScreen;
