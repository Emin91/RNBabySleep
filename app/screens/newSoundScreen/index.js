import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {titles} from '../../constants/stringConstants';
import {colors} from '../../constants/colorConstans';
import Slider from '@react-native-community/slider';
import Icon from '../../components/Icons';
import styles from './style';

const NewSoundScreen = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.mainView}>
      <View style={styles.textInputView}>
        <TextInput
          value={inputValue}
          maxLength={30}
          autoCorrect={false}
          style={styles.textInput}
          placeholder={titles.TEXT_INPUT}
          onChangeText={newValue => setInputValue(newValue)}
        />
      </View>
      <View style={styles.recorderView}>
        <Text style={styles.timer}>00:00</Text>
        <TouchableOpacity activeOpacity={0.6}>
          <View style={styles.recorderBtn}>
            <Icon.Feather name="mic" color={colors.WHITE} size={70} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.sliderView}>
        <Slider
          style={styles.slider}
          thumbTintColor={colors.LOCHMARA}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={colors.PELOROUS}
          maximumTrackTintColor={colors.BLACK}
        />
      </View>
    </View>
  );
};

export default NewSoundScreen;
