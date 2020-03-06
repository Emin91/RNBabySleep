import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../constants/color';
import styles from '../style';
import Icon from '../../../components/iconsList';

const ItemsArray = ({arrays, onPressed, navigation}) => {
  return (
    <>
      {arrays.map(({itemName, itemSubtitle, color, num, youtubeId}) => {
        return (
          <TouchableOpacity
            onPress={() => onPressed(num, navigation, youtubeId)}
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
    </>
  );
};

export default ItemsArray;
