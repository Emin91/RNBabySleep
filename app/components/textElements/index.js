import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const TextElements = props => {
  return <Text style={styles.title}>{props.title}</Text>;
};

export default TextElements;
