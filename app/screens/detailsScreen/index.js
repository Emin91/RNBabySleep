import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableNativeFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './style';
import {titles} from '../../constants/stringConstants';
import {colors} from '../../constants/colorConstans';

const btns = ['Play', 'Pause', 'Resume'];

const DetailsScreen = ({navigation}) => {
  const [volume, setVolume] = useState(0);
  const [check, setCheck] = useState(true);
  return (
    <View style={styles.mainView}>
      <View style={styles.imgView}>
        <Image style={styles.img} source={navigation.getParam('img')}></Image>
        <View style={styles.titleTextView}>
          <Text style={styles.titleText}>{navigation.getParam('value')}</Text>
        </View>
      </View>
      <View style={styles.slidersView}>
        <Text style={styles.text}>
          {titles.VOLUME_TEXT}
          <Text>{Math.floor(volume)}</Text>
        </Text>
        <Slider
          style={{width: '100%', height: 50}}
          step={0}
          thumbTintColor={colors.LOCHMARA}
          minimumValue={0}
          maximumValue={100}
          value={volume}
          onValueChange={val => setVolume(val)}
          onSlidingComplete={val => console.log(val)}
          minimumTrackTintColor={colors.PELOROUS}
          maximumTrackTintColor={colors.BLACK}
        />
        <Text style={styles.text}>
          {titles.DURATION_TEXT}
          <Text>{check}</Text>
        </Text>
        {check === true ? (
          <Slider
            style={{width: '100%', height: 50}}
            thumbTintColor={colors.LOCHMARA}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor={colors.PELOROUS}
            maximumTrackTintColor={colors.BLACK}
          />
        ) : null}
      </View>
      <View style={styles.soundButtonsView}>
        {btns.slice().map(value => {
          return (
            <TouchableOpacity activeOpacity={0.5} style={styles.btnRows}>
              <Text style={styles.btnsText}>{value}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default DetailsScreen;
