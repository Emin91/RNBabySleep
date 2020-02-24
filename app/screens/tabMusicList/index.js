import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Button, ScrollView} from 'react-native';
import TextElements from '../../components/textElements/textElement';
import styles from './styles';
import {titles} from '../../constants/stringConstants';
import {titleOne, titleTwo, titleThree} from '../../constants/itemListArray';

const MusicListTab = props => {
  return (
    <ScrollView style={styles.scrollView}>
      <TextElements title={titles.MusicListTab_TITLE_ONE} />
      <TextElements title={titles.MusicListTab_TITLE_TWO} />
      {titleOne.slice().map(({value, img}) => {
        return (
          <TouchableOpacity
            style={styles.textsView}
            onPress={() => props.navigation.navigate('Details', {value, img})}>
            <Text style={styles.texts}>{value}</Text>
          </TouchableOpacity>
        );
      })}
      <TextElements title={titles.MusicListTab_TITLE_THREE} />
      {titleTwo.slice().map(({value, img}) => {
        return (
          <TouchableOpacity
            style={styles.textsView}
            onPress={() => props.navigation.navigate('Details', {value, img})}>
            <Text style={styles.texts}>{value}</Text>
          </TouchableOpacity>
        );
      })}
      <TextElements title={titles.MusicListTab_TITLE_FOUR} />
      {
        <View style={styles.itemViews}>
          {titleThree.slice().map(({value, img}) => {
            return (
              <TouchableOpacity
                style={styles.textsView}
                onPress={() =>
                  props.navigation.navigate('Details', {value, img})
                }>
                <Text style={styles.texts}>{value}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      }
    </ScrollView>
  );
};

export default MusicListTab;
