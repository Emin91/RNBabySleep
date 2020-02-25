import React, {useState} from 'react';
import {View, Text, Switch, Image} from 'react-native';
import styles from './style';
import {titles} from '../../constants/stringConstants';

const TabSleepTracker = () => {
  const [check, setCheck] = useState(false);

  return (
    <View style={styles.mainView}>
      <View style={styles.firstView}>
        <View style={styles.viewRows}>
          <Text style={check ? styles.headerTextTwo : styles.headerText}>
            {titles.SLEPPER_TRACKER}
            {<Text>{check ? titles.TURN_ON : titles.TURN_OFF}</Text>}
          </Text>
        </View>
        <View style={styles.viewRowsTwo}>
          <Switch
            value={check}
            onValueChange={newChaker => {
              setCheck(newChaker), console.log('check', check);
            }}
          />
        </View>
      </View>
      <View style={styles.secondView}>
        <Text style={styles.bigText}>{titles.LONG_TEXT}</Text>
        <View style={styles.infoView}>
          <Image
            style={styles.img}
            source={require('../../assets/img/graph.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default TabSleepTracker;
