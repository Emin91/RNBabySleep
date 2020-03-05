import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {images} from '../../constants/image';
import Icon from '../../components/iconsList';
import {socialBtns} from '../../../__mocks__/socialBtns';
import {titles} from '../../constants/string';

const blocks = [
  {
    blockName: 'Name',
    title: 'Emin Zeynalov',
  },
  {
    blockName: 'Address',
    title: 'Memar Acemi m23/116',
  },
  {
    blockName: 'Email',
    title: 'emin@wizardsdev.com',
  },
  {
    blockName: 'Phone',
    title: '+994556382438',
  },
];

const AboutAuthorScreen = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.detailsViewOne}>
        <View style={styles.headerView}>
          <Text style={styles.headerTitle}>{titles.PROFILE}</Text>
        </View>
        <View style={styles.imgView}>
          <Image source={images.avatar} style={styles.img} />
        </View>
        <View style={styles.authorView}>
          <Text style={styles.authorName}>{titles.AUTHOR}</Text>
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
      <View style={styles.detailsViewTwo}>
        <View style={styles.infoView}>
          {blocks.map(({blockName, title}) => {
            return (
              <>
                <Text style={styles.title}>{blockName}</Text>
                <TouchableOpacity>
                  <Text style={styles.touchableTitle}>{title}</Text>
                </TouchableOpacity>
              </>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default AboutAuthorScreen;
