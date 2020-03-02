import {Linking} from 'react-native';
import * as ApkManager from 'react-native-apk-manager';
import {titles} from '../../constants/stringConstants';
import email from 'react-native-email';

export const sendMail = () => {
  const to = ['emin.proger@gmail.com'];
  email(to, {
    subject: titles.MAIL_SUBJECT,
    body: titles.MAIL_BODY,
  }).catch(console.error);
};

export const onPressItemsOne = num => {
  switch (num) {
    case 1:
      ApkManager.isAppInstalled('com.androidde.vending').then(data => {
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