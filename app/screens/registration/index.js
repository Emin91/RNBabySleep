import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  AsyncStorage,
} from 'react-native';
import styles from './style';
import {titles} from '../../constants/stringConstants';
import OwnTextInput from '../../components/inputText/inputText';

const RegisrationScreen = ({navigation}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onRegistrationClick = async () => {
    console.log('Log:', login);
    console.log('Pass:', password);
    await AsyncStorage.setItem('login', login);
    await AsyncStorage.setItem('password', password);
    navigation.navigate('HomeScreen');
  };
  return (
    <ImageBackground
      source={require('../../assets/img/bg2.jpg')}
      style={styles.mainView}>
      <View style={styles.regView}>
        <View style={styles.regContainer}>
          <OwnTextInput
            id="userName"
            iconName="user"
            returnKey="next"
            userValue={login}
            onChange={newValue => setLogin(newValue)}
            title={titles.REGISTRATION_LOGIN}
            placeHolder={titles.REGISTRATION_TYPE_LOGIN}
          />
          <OwnTextInput
            id="password"
            iconName="textbox-password"
            returnKey="next"
            onChange={newValue2 => setPassword(newValue2)}
            title={titles.REGISTRATION_PASSWORD}
            placeHolder={titles.REGISTRATION_TYPE_PASSWORD}
          />
          <OwnTextInput
            id="password"
            iconName="textbox-password"
            returnKey="go"
            title={titles.REGISTRATION_PASSWORD}
            placeHolder={titles.REGISTRATION_TYPE_PASSWORD}
          />
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => onRegistrationClick()}>
            <View style={styles.loginBtnView}>
              <Text style={styles.loginText}>{titles.REGISTRATION_TITLE}</Text>
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
    </ImageBackground>
  );
};

RegisrationScreen.navigationOptions = () => ({
  headerShown: false, //Hide Header
});

export default RegisrationScreen;
