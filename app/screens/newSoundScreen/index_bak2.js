import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';
import Icon from '../../components/Icons';
import {colors} from '../../constants/colorConstans';

const NewSoundScreen = () => {
  const [check, setCheck] = useState(false);

  const startRecord = () => {
    setCheck(true);
    console.log('Recording');
  };

  const stopRecord = () => {
    setCheck(false);
    console.log('Stoped');
  };

  // const onClick = () => {
  //   if(check) {
  //     startRecord()
  //   } else {
  //     stopRecord()
  //   }
  // }

  const btnClick = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => startRecord()}
        onLongPress={() => stopRecord()}>
        <View
          style={
            !check
              ? styles.recorderBtn
              : [styles.recorderBtn, {backgroundColor: 'red'}]
          }>
          <Icon.Feather
            name={!check ? 'mic' : 'stop-circle'}
            color={colors.WHITE}
            size={70}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainView}>
      <Text style={{color: 'white', fontSize: 50}}>
        {JSON.stringify(check)}
      </Text>
      {check ? btnClick() : btnClick()}
    </View>
  );
};

export default NewSoundScreen;
