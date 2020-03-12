import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles';

const Items = ({arrays, navigation}) => {
  return (
    <>
      {arrays.map(({value, img}) => {
        return (
          <TouchableOpacity
            style={styles.textsView}
            onPress={() => navigation.navigate('Details', {value, img})}>
            <Text style={styles.texts}>{value}</Text>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default Items;
