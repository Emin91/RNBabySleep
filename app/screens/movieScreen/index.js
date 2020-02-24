import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style';
import {titles} from '../../constants/stringConstants';

const MovieScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require('../../assets/img/img1.jpg')}
          />
        </View>
        <View style={styles.imgTitleView}>
          <Text style={styles.imgTitleOne}>
            {titles.MOVIE_SCREEN_IMG_TITLE}
          </Text>
          <Text style={styles.imgTitleTwo}>{titles.INFO_TITLE_ONE}</Text>
        </View>
        <View style={styles.freeBtnView}>
          <TouchableOpacity style={styles.touchableBtn}>
            <View style={styles.freeBtnBg}>
              <Text style={styles.freeBtnText}>{titles.INFO_HEADER_FREE}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.devider}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieScreen;
