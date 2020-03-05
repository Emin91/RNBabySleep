import {Linking} from 'react-native';
import {sendMail} from './sendMail';

const onItemPress = num => {
  switch (num) {
    case 1:
      console.log('Item: 1');
      break;
    case 2:
      Linking.openURL('geo:40.4123333,49.8150896');
      break;
    case 3:
      sendMail();
      break;
    case 4:
      Linking.openURL(`tel:+994556382438`);
      break;
    case 5:
      Linking.openURL(
        'whatsapp://send?text=' +
          'https://play.google.com/store/apps/details?id=by.si.soundsleeper.free',
      );
      break;
    default:
      break;
  }
};

export default onItemPress;
