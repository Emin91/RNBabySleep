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
import {onPressItemsOne} from './onPressOne';
import {onPressItemsTwo} from './onPressTwo';

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

const itemsArray = (arrays, onPressed, navigation) => {
  return (
    <View>
      {arrays.map(({itemName, itemSubtitle, color, num}) => {
        return (
          <TouchableOpacity
            onPress={() => onPressed(num, navigation)}
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
        {itemsArray(settingListArrayOne, onPressItemsOne, navigation)}
        {header(headers.UPGRADES)}
        {itemsArray(settingListArrayTwo, onPressItemsTwo, navigation)}
        {header(headers.SETTING)}
        {itemsArray(settingListArrayThree, onPressItemsTwo, navigation)}
        {header(headers.ABOUT)}
        {itemsArray(settingListArrayFour, onPressItemsTwo, navigation)}
        {versionView(headers.DEVELOP, headers.VERSION)}
      </ScrollView>
    </View>
  );
};

export default TabSettings;
