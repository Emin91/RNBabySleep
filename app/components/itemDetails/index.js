import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';

const ItemDetails = ({title, img, subTitle, freeText}) => {
  return (
    <View style={styles.itemRows}>
      <View style={styles.imgView}>
        <Image style={styles.headerImg} source={img}></Image>
      </View>
      <View style={styles.textsView}>
        <Text style={styles.textOne}>{title}</Text>
        <Text style={styles.textTwo}>{subTitle}</Text>
        <Text style={styles.textOne}>{freeText}</Text>
      </View>
    </View>
  );
};

export default ItemDetails;
