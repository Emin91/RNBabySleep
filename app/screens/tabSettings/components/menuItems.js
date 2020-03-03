import {
  settingListArrayOne,
  settingListArrayTwo,
  settingListArrayThree,
  settingListArrayFour,
  headers,
} from '../../../constants/settingListArray';
import {onPressItemsOne} from '../components/onPressOne';
import {onPressItemsTwo} from '../components/onPressTwo';

export const menuItems = [
  {
    header: null,
    arrays: settingListArrayOne,
    onPressed: onPressItemsOne,
  },
  {
    header: headers.UPGRADES,
    arrays: settingListArrayTwo,
    onPressed: onPressItemsTwo,
  },
  {
    header: headers.SETTING,
    arrays: settingListArrayThree,
    onPressed: onPressItemsTwo,
  },
  {
    header: headers.ABOUT,
    arrays: settingListArrayFour,
    onPressed: onPressItemsTwo,
  },
];
