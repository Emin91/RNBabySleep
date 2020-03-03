import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {colors} from '../../../constants/color';
import Icon from '../../../components/iconsList';
import styles from '../style';

// const disabe = () => {
//   if(!inputValue) {

//   } else {

//   }
// }

const ButtonRecord = ({check, setCheck, inputValue, start, stop}) => {
  if (!inputValue) {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        disabled={true}
        onPress={() => start(setCheck, inputValue)}
        onLongPress={() => stop(setCheck)}>
        <View style={[styles.recorderBtn, {backgroundColor: colors.GREY_TWO}]}>
          <Icon.Feather
            name={!check ? 'mic-off' : 'stop-circle'}
            color={colors.WHITE}
            size={70}
          />
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        disabled={false}
        onPress={() => start(setCheck, inputValue)}
        onLongPress={() => stop(setCheck)}>
        <View
          style={
            !check
              ? styles.recorderBtn
              : [styles.recorderBtn, {backgroundColor: colors.RED}]
          }>
          <Icon.Feather
            name={!check ? 'mic' : 'stop-circle'}
            color={colors.WHITE}
            size={70}
          />
        </View>
      </TouchableOpacity>
    );
  }
};

export default ButtonRecord;
