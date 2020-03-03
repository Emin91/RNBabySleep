import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ROUTE} from '../../../constants/settings';
import styles from '../styles';

const Items = ({arrays, navigation}) => {
  return (
    <>
      {arrays.map(({value, img}) => {
        return (
          <TouchableOpacity
            style={styles.textsView}
            onPress={() => navigation.navigate(ROUTE.Details, {value, img})}>
            <Text style={styles.texts}>{value}</Text>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default Items;
