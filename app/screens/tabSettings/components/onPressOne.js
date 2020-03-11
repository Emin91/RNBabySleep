import {Linking} from 'react-native';
import titles from '../../../constants/string';
import {sendMail} from './sendMail';
import * as ApkManager from 'react-native-apk-manager';

export const onPressItemsOne = num => {
  switch (num) {
    case 1:
      ApkManager.isAppInstalled('com.android.vending').then(data => {
        if (data) {
          Linking.openURL('market://details?id=by.si.soundsleeper.free');
        } else {
          alert(titles.APP_NOT_INSTALLED);
        }
      });
      break;
    case 2:
      sendMail();
      break;
    case 3:
      Linking.openURL('http://www.parents2parentsapps.com/');
      break;
    case 4:
      Linking.openURL('https://m.facebook.com/soundsleeperapp/');
      break;
    default:
      break;
  }
};
