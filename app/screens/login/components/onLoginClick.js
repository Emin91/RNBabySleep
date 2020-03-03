import {titles} from '../../../constants/string';
import {ROUTE} from '../../../constants/settings';
import AsyncStorage from '@react-native-community/async-storage';

const onLoginClick = async (login, password, navigation) => {
  if (!login || !password) {
    alert(titles.NEED_TO_FILL);
  } else {
    if (
      login === (await AsyncStorage.getItem('login')) &&
      password === (await AsyncStorage.getItem('password'))
    ) {
      navigation.navigate(ROUTE.HomeScreen);
    } else {
      alert(titles.NOT_CORRECT);
    }
  }
};

export default onLoginClick;
