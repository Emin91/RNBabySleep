import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {titles} from '../../constants/stringConstants';

const CurriculumItems = () => {
  return (
    <View style={styles.itemRows}>
      <View style={styles.iconView}>
        <View style={styles.circle}>
          <Text style={styles.number}>1</Text>
        </View>
      </View>
      <View style={styles.textView}>
        <Text>icon</Text>
      </View>
    </View>
  );
};

export default CurriculumItems;
