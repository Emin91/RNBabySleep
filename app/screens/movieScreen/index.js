import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {titles} from '../../constants/stringConstants';
import {
  itemArraysOne,
  itemArraysTwo,
  itemArraysThree,
  itemArraysFour,
  itemArraysFive,
  itemArraysSix,
  itemArraysSeven,
} from '../../constants/itemListArray';
import styles from './style';
import CurriculumItems from '../../components/curriculumItems';
import ViewMoreText from 'react-native-view-more-text';

const itemsHeader = title => {
  return (
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
};

const arrayItems = (items, header, navigation) => {
  return (
    <View>
      {itemsHeader(header)}
      <TouchableOpacity>
        {items.map(({title, duration, num, youtubeId}) => {
          console.log('title', title);
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate('YoutubeScreen', youtubeId, title)
              }>
              <CurriculumItems title={title} time={duration} num={num} />
            </TouchableOpacity>
          );
        })}
      </TouchableOpacity>
    </View>
  );
};

const MovieScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require('../../assets/img/img1.jpg')}
          />
        </View>
        <View style={styles.imgTitleView}>
          <Text style={styles.imgTitleOne}>
            {titles.MOVIE_SCREEN_IMG_TITLE}
          </Text>
          <Text style={styles.imgTitleTwo}>{titles.INFO_TITLE_ONE}</Text>
        </View>
        <View style={styles.freeBtnView}>
          <TouchableOpacity style={styles.touchableBtn}>
            <View style={styles.freeBtnBg}>
              <Text style={styles.freeBtnText}>{titles.INFO_HEADER_FREE}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.devider}></View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.curiculum}>{titles.CURRICULUM}</Text>
        </View>
        <View style={{flex: 1}}>
          <ViewMoreText
            numberOfLines={2}
            textStyle={{
              paddingLeft: 20,
              paddingRight: 20,
              textAlign: 'center',
            }}>
            <Text style={styles.bigText}>{titles.SHOW_MORE_TEXT}</Text>
          </ViewMoreText>
        </View>
        {arrayItems(itemArraysOne, titles.SECTIONS_ONE, navigation)}
        {arrayItems(itemArraysTwo, titles.SECTIONS_TWO, navigation)}
        {arrayItems(itemArraysThree, titles.SECTIONS_THREE, navigation)}
        {arrayItems(itemArraysFour, titles.SECTIONS_FOUR, navigation)}
        {arrayItems(itemArraysFive, titles.SECTIONS_FIVE, navigation)}
        {arrayItems(itemArraysSix, titles.SECTIONS_SIX, navigation)}
        {arrayItems(itemArraysSeven, titles.SECTIONS_SEVEN, navigation)}
      </ScrollView>
    </View>
  );
};

export default MovieScreen;
