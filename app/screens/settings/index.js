import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import titles from '../../constants/string';
import OwnSlider from './components/slider';

const Settings = () => {
  const [sensitivity, setSensitivity] = useState(0);
  const [attenuation, setAttenuation] = useState(0);
  return (
    <View style={styles.mainView}>
      <View style={styles.headerOne}>
        <Text style={styles.title}>{titles.SETTING_HEADER_TITLE_ONE}</Text>
        <Text style={styles.title}>{Math.floor(sensitivity)}</Text>
      </View>
      <View style={styles.sliderRow}>
        <View style={styles.textsView}>
          <Text style={styles.text}>{titles.LOW}</Text>
        </View>
        <View style={styles.sliderView}>
          <OwnSlider value={sensitivity} setValue={setSensitivity} />
        </View>
        <View style={styles.textsView}>
          <Text style={styles.text}>{titles.HIGH}</Text>
        </View>
      </View>
      <View style={styles.headerTwo}>
        <Text style={styles.title}>
          {titles.SETTING_HEADER_TITLE_TWO} {Math.floor(attenuation)}
          {!attenuation ? (
            <Text> {titles.SEC}</Text>
          ) : (
            <Text> {titles.MIN}</Text>
          )}
        </Text>
      </View>
      <View style={styles.sliderRowTwo}>
        <OwnSlider value={attenuation} setValue={setAttenuation} />
      </View>
    </View>
  );
};

export default Settings;
