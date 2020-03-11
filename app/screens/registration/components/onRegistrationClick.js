import React from 'react';
import titles from '../../../constants/string';
import {ROUTE} from '../../../constants/settings';
import AsyncStorage from '@react-native-community/async-storage';

const onRegistrationClick = async (
  login,
  password,
  passwordConfim,
  navigation,
) => {
  if (!login || !password || !passwordConfim) {
    alert(titles.NEED_TO_FILL);
  } else if (password !== passwordConfim) {
    alert(titles.NOT_MUTCH);
  } else {
    await AsyncStorage.setItem('login', login);
    await AsyncStorage.setItem('password', password);
    navigation.navigate(ROUTE.HomeScreen);
  }
};

export default onRegistrationClick;
