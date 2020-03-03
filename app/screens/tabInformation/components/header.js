import React from 'react';
import {View, Text} from 'react-native';
import styles from '../style';

const TitleHeader = ({title}) => {
  return (
    <View style={styles.mainTitleView}>
      <Text style={styles.mainTitle}>{title}</Text>
    </View>
  );
};

export default TitleHeader;
