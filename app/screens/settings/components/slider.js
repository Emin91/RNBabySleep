import React from 'react';
import {colors} from '../../../constants/color';
import Slider from '@react-native-community/slider';

const OwnSlider = ({value, setValue}) => {
  return (
    <Slider
      style={{width: '100%', height: 50}}
      thumbTintColor={colors.LOCHMARA}
      minimumValue={0}
      maximumValue={10}
      value={value}
      onValueChange={val => setValue(val)}
      onSlidingComplete={val => console.log(Math.floor(val))}
      minimumTrackTintColor={colors.PELOROUS}
      maximumTrackTintColor={colors.BLACK}
    />
  );
};

export default OwnSlider;
