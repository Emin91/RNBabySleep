import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import {titles} from '../../constants/string';
import {colors} from '../../constants/color';
import Slider from '@react-native-community/slider';
import styles from './style';
import SoundRecorder from 'react-native-sound-recorder';
import RNFetchBlob from 'react-native-fetch-blob';
import ButtonRecord from './components/btnRecord';

const stopRecord = async setCheck => {
  setCheck(false);
  await SoundRecorder.stop().then(function(result) {
    console.log('Stoped');
    alert('Сохранено по пути: ' + result.path);
  });
};

const startRecord = async (setCheck, inputValue) => {
  setCheck(true);
  await SoundRecorder.start(
    `/storage/emulated/0/BayuBay/Records/${inputValue}.mp3`,
    console.log('recording', inputValue),
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

const NewSoundScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const [check, setCheck] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

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

  const deleteFiles = () => {
    var path = `/storage/emulated/0/BayuBay/Records/${inputValue}.mp3`;
    RNFetchBlob.fs
      .unlink(path)
      .then(() => {
        console.log('Deleted', path);
      })
      .catch(err => {
        console.log('Uje udalyon', err);
      });
  };

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
        {!inputValue ? (
          <Text style={styles.warnText}>{titles.NEED_RECORD_NAME}</Text>
        ) : null}
      </View>
      <View style={styles.recorderView}>
        <Text style={styles.timer}>00:0{Math.floor(sliderValue)}</Text>
        <ButtonRecord
          check={check}
          setCheck={setCheck}
          inputValue={inputValue}
          start={startRecord}
          stop={stopRecord}
        />
      </View>
      <View style={styles.sliderView}>
        <Slider
          style={styles.slider}
          thumbTintColor={colors.LOCHMARA}
          minimumValue={0}
          maximumValue={8}
          value={sliderValue}
          disabled={!inputValue ? true : false}
          onValueChange={val => setSliderValue(val)}
          minimumTrackTintColor={colors.PELOROUS}
          maximumTrackTintColor={colors.BLACK}
        />
        <Text onPress={deleteFiles}>{inputValue}</Text>
      </View>
    </View>
  );
};

export default NewSoundScreen;
