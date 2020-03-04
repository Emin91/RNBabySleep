import React from 'react';
import {View, ScrollView} from 'react-native';
import {titleOne, titleTwo, titleThree} from '../../constants/itemListArray';
import {titles} from '../../constants/string';
import TextElements from '../../components/textElements';
import styles from './styles';
import Items from './components/items';

const MusicListTab = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <TextElements title={titles.MusicListTab_TITLE_ONE} />
      <TextElements title={titles.MusicListTab_TITLE_TWO} />
      <Items arrays={titleOne} navigation={navigation} />
      <TextElements title={titles.MusicListTab_TITLE_THREE} />
      <Items arrays={titleTwo} navigation={navigation} />
      <TextElements title={titles.MusicListTab_TITLE_FOUR} />
      {
        <View style={styles.itemViews}>
          <Items arrays={titleThree} navigation={navigation} />
        </View>
      }
    </ScrollView>
  );
};

export default MusicListTab;
