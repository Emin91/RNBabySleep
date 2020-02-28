import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Linking} from 'react-native';
import {colors} from '../../constants/colorConstans';
import {
  settingListArrayOne,
  settingListArrayTwo,
  settingListArrayThree,
  settingListArrayFour,
  headers,
} from '../../constants/settingListArray';
import styles from './style';
import Icon from '../../components/Icons';

const versionView = (developer, ver) => {
  return (
    <View style={[styles.headerView, {alignItems: 'center'}]}>
      <Text style={styles.version}>{developer}</Text>
      <Text style={styles.version}>{ver}</Text>
    </View>
  );
};
const header = title => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headers}>{title}</Text>
    </View>
  );
};

const onPressItems = num => {
  switch (num) {
    case 1:
      Linking.openURL('market://details?id=by.si.soundsleeper.free');
      break;
    case 2:
      break;
    case 3:
      Linking.openURL('http://www.parents2parentsapps.com/');
      break;
    case 4:
      Linking.openURL('https://m.facebook.com/soundsleeperapp/');
      break;
  }
};

const itemsArray = arrays => {
  return (
    <View>
      {arrays.map(({itemName, itemSubtitle, color, num}) => {
        return (
          <TouchableOpacity
            onPress={() => onPressItems(num)}
            activeOpacity={0.6}>
            <View style={styles.itemViewRows}>
              <View style={styles.titleView}>
                <Text style={color ? [styles.title, {color}] : styles.title}>
                  {itemName}
                </Text>
                {itemSubtitle ? (
                  <Text style={styles.titleSub}>{itemSubtitle}</Text>
                ) : null}
              </View>
              <View style={styles.iconView}>
                <Icon.Entypo
                  color={colors.WHITE}
                  name="chevron-small-right"
                  size={35}
                />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabSettings = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <ScrollView>
        {itemsArray(settingListArrayOne)}
        {header(headers.UPGRADES)}
        {itemsArray(settingListArrayTwo)}
        {header(headers.SETTING)}
        {itemsArray(settingListArrayThree)}
        {header(headers.ABOUT)}
        {itemsArray(settingListArrayFour)}
        {versionView(headers.DEVELOP, headers.VERSION)}
      </ScrollView>
    </View>
  );
};

export default TabSettings;
