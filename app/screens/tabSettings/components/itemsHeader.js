import React from 'react';
import {View, Text} from 'react-native';
import styles from '../style';

const ItemsHeader = ({title}) => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headers}>{title}</Text>
    </View>
  );
};

export default ItemsHeader;
