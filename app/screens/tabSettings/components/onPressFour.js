import {Linking} from 'react-native';
import {titles} from '../../../constants/string';
import * as ApkManager from 'react-native-apk-manager';
import {sendMail} from './sendMail';

export const onPressItemsFour = (num, navigation) => {
  switch (num) {
    case 1:
      navigation.navigate('AboutApp');
      break;
    case 2:
      console.log('Item: 2');
      break;
    case 3:
      console.log('Item: 3');
      break;
    case 4:
      console.log('Item: 4');
      break;
    default:
      break;
  }
};
