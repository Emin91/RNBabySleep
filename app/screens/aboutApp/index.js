import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './style';
import titles from '../../constants/string';
import {images} from '../../constants/image';

const AboutAppScreen = () => {
  return (
    <ScrollView style={styles.mainView}>
      <View style={styles.imgView}>
        <Image source={images.info2} style={styles.img} resizeMode="center" />
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>{titles.LONG_TEXT_TWO}</Text>
      </View>
    </ScrollView>
  );
};

export default AboutAppScreen;
