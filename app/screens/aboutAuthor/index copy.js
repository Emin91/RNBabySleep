import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {images} from '../../constants/image';
import Icon from '../../components/iconsList';
import {socialBtns} from '../../../__mocks__/socialBtns';

const AboutAuthorScreen = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.detailsViewOne}>
        <View style={styles.headerView}>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>
        <View style={styles.imgView}>
          <Image source={images.avatar} style={styles.img} />
        </View>
        <View style={styles.authorView}>
          <Text style={styles.authorName}>Emin Zeynalov</Text>
        </View>
        <View style={styles.socialIconsView}>
          {socialBtns.map(({iconName}) => {
            return (
              <TouchableOpacity style={styles.socialIcons}>
                <Icon.Entypo name={iconName} size={25} color={'#fff'} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={styles.detailsViewTwo}></View>
    </View>
  );
};

export default AboutAuthorScreen;
