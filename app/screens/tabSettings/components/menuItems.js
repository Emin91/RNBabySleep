import {
  settingListArrayOne,
  settingListArrayTwo,
  settingListArrayThree,
  settingListArrayFour,
  headers,
} from '../../../constants/settingListArray';
import {onPressItemsOne} from './onPressOne';
import {onPressItemsTwo} from './onPressTwo';
import {onPressItemsThree} from './onPressThree';
import {onPressItemsFour} from './onPressFour';

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
    onPressed: onPressItemsThree,
  },
  {
    header: headers.ABOUT,
    arrays: settingListArrayFour,
    onPressed: onPressItemsFour,
  },
];
