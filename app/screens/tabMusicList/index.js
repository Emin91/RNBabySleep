import React from 'react';
import {View, ScrollView} from 'react-native';
import {titleThree} from '../../constants/itemListArray';
import {musicList} from '../../../__mocks__/musicList';
import titles from '../../constants/string';
import TextElements from '../../components/textElements';
import styles from './styles';
import Items from './components/items';

const MusicListTab = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <TextElements title={titles.MusicListTab_TITLE_ONE} />
      {musicList.map(({header, array}) => {
        return (
          <>
            <TextElements title={header} />
            <Items arrays={array} navigation={navigation} />
          </>
        );
      })}
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
