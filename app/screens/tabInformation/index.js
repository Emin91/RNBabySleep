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

const img = require('../../assets/img/img1.jpg');

const sendMail = () => {
  const to = ['emin.proger@gmail.com'];
  email(to, {
    subject: titles.MAIL_SUBJECT,
    body: titles.MAIL_BODY,
  }).catch(console.error);
};

const TabInformation = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.headerImgView}>
        <Image style={styles.headerImg} source={img}></Image>
      </View>
      <View style={{flex: 0.6, justifyContent: 'flex-end'}}>
        <ScrollView>
          <View style={styles.mainTitleView}>
            <Text style={styles.mainTitle}>
              {titles.INFO_HEADER_TEXT_TITLE}
            </Text>
          </View>
          <View style={styles.itemView}>
            {arrayListOne.map(({title, img, subTitle, freeText, onClick}) => {
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
          <View style={styles.mainTitleView}>
            <Text style={styles.mainTitle}>
              {titles.INFO_HEADER_TEXT_TITLE_TWO}
            </Text>
          </View>
          <View style={styles.itemView}>
            {arrayListTwo.map(({title, img, subTitle, freeText}) => {
              return (
                <TouchableOpacity style={{flex: 1}}>
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
