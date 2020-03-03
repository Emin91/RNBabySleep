import React from 'react';
import {View, Text} from 'react-native';
import styles from '../style';

const VersionView = ({developer, version}) => {
  return (
    <View style={[styles.headerView, {alignItems: 'center'}]}>
      <Text style={styles.version}>{developer}</Text>
      <Text style={styles.version}>{version}</Text>
    </View>
  );
};

export default VersionView;
