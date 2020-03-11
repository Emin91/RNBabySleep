import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import titles from '../../constants/string';
import {colors} from '../../constants/color';
import Slider from '@react-native-community/slider';
import styles from './style';
import Icon from '../../components/iconsList';
import RNFetchBlob from 'react-native-fetch-blob';
import ButtonRecord from './components/btnRecord';
import startRecord from './components/startRecord';
import stopRecord from './components/stopRecord';
import deleteFiles from './components/deleteFilers';

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

  return (
    <ScrollView enabled={false} style={styles.mainView}>
      <KeyboardAvoidingView
        style={styles.mainView}
        behavior="padding"
        keyboardVerticalOffset="-250">
        <View style={styles.textInputView}>
          <TextInput
            value={inputValue}
            maxLength={30}
            autoCorrect={false}
            autoCapitalize={false}
            style={styles.textInput}
            placeholder={titles.TEXT_INPUT}
            onChangeText={newValue => setInputValue(newValue)}
            onEndEditing={() => setInputValue(inputValue.trim())}
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
            sliderValue={sliderValue}
            setSliderValue={setSliderValue}
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
            // onResponderMove={er => console.log('er', er)}
            // disabled={!inputValue ? true : false}
            onValueChange={val => setSliderValue(val)}
            minimumTrackTintColor={colors.PELOROUS}
            maximumTrackTintColor={colors.BLACK}
          />
          {inputValue ? (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => deleteFiles(inputValue)}>
              <Icon.AntDesign name="delete" size={40} color={'white'} />
            </TouchableOpacity>
          ) : null}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default NewSoundScreen;

// var changeSlider = function() {
//   var i = 0;
//   while (i <= 8) {
//     (function(i) {
//       setTimeout(() => {
//         setSliderValue(sliderValue + i);
//       }, 1000 * i);
//     })(i++);
//   }
// };
