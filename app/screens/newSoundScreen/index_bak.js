import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {titles} from '../../constants/stringConstants';
import {colors} from '../../constants/colorConstans';
import Slider from '@react-native-community/slider';
import Icon from '../../components/Icons';
import styles from './style';
import SoundRecorder from 'react-native-sound-recorder';
import RNFetchBlob from 'react-native-fetch-blob';

const stopRecord = async () => {
  await SoundRecorder.stop().then(function(result) {
    console.log('Stoped');
    alert('Сохранено по пути: ' + result.path);
  });
};

const startRecord = async () => {
  var day = new Date().getDate();
  var hours = new Date().getHours();
  var min = new Date().getMinutes();
  var sec = new Date().getSeconds();
  await SoundRecorder.start(
    '/storage/emulated/0/BayuBay/Records/' +
      `rec${day}${hours}${min}${sec}.mp3`,
    console.log('recording'),
  ).then(function() {
    console.log('started');
  });
};

const btnChange = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => startRecord()}
      onLongPress={() => stopRecord()}>
      <View style={styles.recorderBtn}>
        <Icon.Feather name="mic" color={colors.WHITE} size={70} />
      </View>
    </TouchableOpacity>
  );
};

const NewSoundScreen = () => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    RNFetchBlob.fs
      .exists('/storage/emulated/0/BayuBay/Records/')
      .then(exist => {
        if (!exist) {
          console.log('Create Folder');
          RNFetchBlob.fs
            .mkdir('/storage/emulated/0/BayuBay/Records/')
            .then(() => {});
        } else {
          console.log('Folder is exist');
        }
      })
      .catch(() => {});
  }, []);

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
        {btnChange()}
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
