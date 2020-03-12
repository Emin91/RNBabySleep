import {
  settingListArrayOne,
  settingListArrayTwo,
  settingListArrayThree,
  settingListArrayFour,
  headers,
} from '../../../constants/settingListArray';
import {switchGoToSite} from './switchGoToSite';
import {switchUpdate} from './switchUpdate';
import {switchOpenSettings} from './switchOpenSettings';
import {switchAbout} from './switchAbout';

export const menuItems = [
  {
    header: null,
    arrays: settingListArrayOne,
    onPressed: switchGoToSite,
  },
  {
    header: headers.UPGRADES,
    arrays: settingListArrayTwo,
    onPressed: switchUpdate,
  },
  {
    header: headers.SETTING,
    arrays: settingListArrayThree,
    onPressed: switchOpenSettings,
  },
  {
    header: headers.ABOUT,
    arrays: settingListArrayFour,
    onPressed: switchAbout,
  },
];
