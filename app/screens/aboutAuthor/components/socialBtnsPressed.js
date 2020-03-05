import {Linking} from 'react-native';
import email from 'react-native-email';

const sendMail = () => {
  const to = 'emin@wizardsdev.com';
  email(to, {
    subject: '',
    body: '',
  }).catch(console.error);
};

const onItemPress = num => {
  switch (num) {
    case 1:
      Linking.openURL('https://www.instagram.com/emin91zeynalov/');
      break;
    case 2:
      Linking.openURL('https://www.facebook.com/emin.zeynalov.313');
      break;
    case 3:
      Linking.openURL('https://www.behance.net/eminprogerd21e');
      break;
    default:
      break;
  }
};

export default onItemPress;
