import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import titles from '../../constants/string';
import {colors} from '../../constants/color';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const texts = [
  titles.TITLE,
  titles.WHATS_INSIDE,
  titles.OPT_1,
  titles.OPT_2,
  titles.OPT_3,
];

const btns = (title, color) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.btn, {backgroundColor: color}]}>
        <Text style={styles.btnText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const NewVersion = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textsView}>
        <Text style={styles.title}>{titles.FULL_VERSION}</Text>
        {texts.map(val => {
          return <Text style={styles.texts}>{val}</Text>;
        })}
      </View>
      <View style={styles.btnsView}>
        {btns(titles.BTN_1, colors.GREEN)}
        {btns(titles.BTN_2, colors.GREEN)}
        {btns(titles.BTN_3, colors.CARROT)}
      </View>
    </View>
  );
};

export default NewVersion;
