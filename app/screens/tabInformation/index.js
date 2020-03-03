import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style';
import {titles} from '../../constants/string';
import {
  arrayListOne,
  arrayListTwo,
} from '../../constants/movieScreenArrayLists';
import {images} from '../../constants/image';
import TitleHeader from './components/header';
import SendMail from './components/sendMail';
import ArrayList from './components/arrayItems';

const TabInformation = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.headerImgView}>
        <Image style={styles.headerImg} source={images.img1}></Image>
      </View>
      <View style={styles.scrollView}>
        <ScrollView>
          <TitleHeader title={titles.INFO_HEADER_TEXT_TITLE} />
          <View style={styles.itemView}>
            <ArrayList arrays={arrayListOne} navigation={navigation} />
          </View>
          <TitleHeader title={titles.INFO_HEADER_TEXT_TITLE_TWO} />
          <View style={styles.itemView}>
            <ArrayList arrays={arrayListTwo} navigation={navigation} />
          </View>
        </ScrollView>
        <View style={styles.dropMenuView}>
          <TouchableOpacity
            onPress={SendMail}
            activeOpacity={0.6}
            style={styles.touchableBtn}>
            <Text style={styles.dropMenuText}>{titles.DOWN_PAN_MENU}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TabInformation;
