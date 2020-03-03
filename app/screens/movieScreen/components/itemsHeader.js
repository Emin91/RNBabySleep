import React from 'react';
import {View, Text} from 'react-native';
import styles from '../style';

const ItemsHeader = ({header}) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>{header}</Text>
    </View>
  );
};

export default ItemsHeader;
