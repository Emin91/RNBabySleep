import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const CurriculumItems = ({title, time, num}) => {
  return (
    <View style={styles.itemRows}>
      <View style={styles.iconView}>
        <View style={styles.circle}>
          <Text style={styles.number}>{num}</Text>
        </View>
      </View>
      <View style={styles.textView}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

export default CurriculumItems;
