import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style';
import {titles} from '../../constants/stringConstants';
import ItemDetails from '../../components/itemDetails';
import email from 'react-native-email';
import {
  arrayListOne,
  arrayListTwo,
} from '../../constants/movieScreenArrayLists';
import {images} from '../../constants/imageConstants';

const sendMail = () => {
  const to = ['emin.proger@gmail.com'];
  email(to, {
    subject: titles.MAIL_SUBJECT,
    body: titles.MAIL_BODY,
  }).catch(console.error);
};

const header = title => {
  return (
    <View style={styles.mainTitleView}>
      <Text style={styles.mainTitle}>{title}</Text>
    </View>
  );
};

const arrayItems = (arrays, navigation) => {
  return (
    <View>
      {arrays.map(({title, img, subTitle, freeText, onClick}) => {
        return (
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => navigation.navigate(onClick)}>
            <ItemDetails
              title={title}
              img={img}
              subTitle={subTitle}
              freeText={freeText}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabInformation = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.headerImgView}>
        <Image style={styles.headerImg} source={images.img1}></Image>
      </View>
      <View style={{flex: 0.6, justifyContent: 'flex-end'}}>
        <ScrollView>
          {header(titles.INFO_HEADER_TEXT_TITLE)}
          <View style={styles.itemView}>
            {arrayItems(arrayListOne, navigation)}
          </View>
          {header(titles.INFO_HEADER_TEXT_TITLE_TWO)}
          <View style={styles.itemView}>
            {arrayItems(arrayListTwo, navigation)}
          </View>
        </ScrollView>
        <View style={styles.dropMenuView}>
          <TouchableOpacity
            onPress={() => sendMail()}
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
