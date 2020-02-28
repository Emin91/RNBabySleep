import {Linking} from 'react-native';
import * as ApkManager from 'react-native-apk-manager';
import {titles} from '../../constants/stringConstants';
import {ROUTE} from '../../constants/routeNameConstants';

export const onPressItemsTwo = (num, navigation) => {
  switch (num) {
    case 1:
      Linking.openURL(
        'https://support.google.com/googleplay/answer/7018481?co=GENIE.Platform%3DAndroid&hl=en',
      );
      break;
    case 2:
      navigation.navigate('NewVersion');
      break;
    default:
      break;
  }
};
