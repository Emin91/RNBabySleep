import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import titles from '../../constants/string';
import {images} from '../../constants/image';
import {items} from '../../../__mocks__/items';
import TitleHeader from './components/header';
import SendMail from './components/sendMail';
import ArrayList from './components/arrayItems';
import styles from './style';

const TabInformation = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.headerImgView}>
        <Image style={styles.headerImg} source={images.img1}></Image>
      </View>
      <View style={styles.scrollView}>
        <ScrollView>
          {items.map(({header, arrays}) => {
            return (
              <>
                <TitleHeader title={header} />
                <View style={styles.itemView}>
                  <ArrayList arrays={arrays} navigation={navigation} />
                </View>
              </>
            );
          })}
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
