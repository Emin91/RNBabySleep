import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import {titles} from '../../constants/string';
import {colors} from '../../constants/color';
import Slider from '@react-native-community/slider';
import Icon from '../../components/iconsList';
import styles from './style';
import SoundRecorder from 'react-native-sound-recorder';
import RNFetchBlob from 'react-native-fetch-blob';

// const stopRecord = async setCheck => {
//   setCheck(false);
//   await SoundRecorder.stop().then(function(result, duration) {
//     console.log('Stoped');
//     alert('Сохранено по пути: ' + result.path);
//   });
// };

const stopRecord = async setCheck => {
  setCheck(false);
  await SoundRecorder.stop().then(function(result) {
    console.log('Stoped');
    alert('Сохранено по пути: ' + result.path);
  });
};

const startRecord = async (setCheck, inputValue) => {
  var day = new Date().getDate();
  var hours = new Date().getHours();
  var min = new Date().getMinutes();
  var sec = new Date().getSeconds();
  var msec = new Date().getMilliseconds();
  setCheck(true);
  await SoundRecorder.start(
    '/storage/emulated/0/BayuBay/Records/' +
      `${inputValue}(${day}:${hours}:${min}:${sec}:${msec}).mp3`,
    console.log('recording'),
  )
    .then(() => {
      console.log('Started');
    })
    .catch(err => {
      if (err) {
        alert('Идет запись.Долгое зажатие для остановки.');
      }
    });
};

const btnClick = (check, setCheck, inputValue) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => startRecord(setCheck, inputValue)}
      onLongPress={() => stopRecord(setCheck)}>
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

const NewSoundScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const [check, setCheck] = useState(false);

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
          autoCapitalize={false}
          style={styles.textInput}
          placeholder={titles.TEXT_INPUT}
          onChangeText={newValue => setInputValue(newValue)}
        />
      </View>
      <View style={styles.recorderView}>
        <Text style={styles.timer}>00:00</Text>
        {btnClick(check, setCheck, inputValue)}
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
