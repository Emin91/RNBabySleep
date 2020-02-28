import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {titleOne, titleTwo, titleThree} from '../../constants/itemListArray';
import {titles} from '../../constants/stringConstants';
import {ROUTE} from '../../constants/routeNameConstants';
import TextElements from '../../components/textElements/textElement';
import styles from './styles';

const items = (arrays, props) => {
  return (
    <View>
      {arrays.map(({value, img}) => {
        return (
          <TouchableOpacity
            style={styles.textsView}
            onPress={() =>
              props.navigation.navigate(ROUTE.Details, {value, img})
            }>
            <Text style={styles.texts}>{value}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const MusicListTab = props => {
  return (
    <ScrollView style={styles.scrollView}>
      <TextElements title={titles.MusicListTab_TITLE_ONE} />
      <TextElements title={titles.MusicListTab_TITLE_TWO} />
      {items(titleOne, props)}
      <TextElements title={titles.MusicListTab_TITLE_THREE} />
      {items(titleTwo, props)}
      <TextElements title={titles.MusicListTab_TITLE_FOUR} />
      {<View style={styles.itemViews}>{items(titleThree, props)}</View>}
    </ScrollView>
  );
};

export default MusicListTab;
