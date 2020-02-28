import React, {useState} from 'react';
import {View, Text, Switch, Image} from 'react-native';
import {titles} from '../../constants/stringConstants';
import {images} from '../../constants/imageConstants';
import {colors} from '../../constants/colorConstans';
import styles from './style';

const TabSleepTracker = () => {
  const [check, setCheck] = useState(false);

  return (
    <View style={styles.mainView}>
      <View style={styles.firstView}>
        <View style={styles.viewRows}>
          <Text
            style={
              check
                ? [styles.headerText, {color: colors.RED}]
                : styles.headerText
            }>
            {titles.SLEPPER_TRACKER}
            {check ? titles.TURN_ON : titles.TURN_OFF}
          </Text>
        </View>
        <View style={styles.viewRowsTwo}>
          <Switch
            value={check}
            onValueChange={newChaker => {
              setCheck(newChaker);
            }}
          />
        </View>
      </View>
      <View style={styles.secondView}>
        <Text style={styles.bigText}>{titles.LONG_TEXT}</Text>
        <View style={styles.infoView}>
          <Image style={styles.img} source={images.info} />
        </View>
      </View>
    </View>
  );
};

export default TabSleepTracker;
