import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import titles from '../../constants/string';
import {list} from './components/list';
import {ROUTE} from '../../constants/settings';
import {images} from '../../constants/image';
import styles from './style';
import CurriculumItems from '../../components/curriculumItems';
import ViewMoreText from 'react-native-view-more-text';
import ItemsHeader from './components/itemsHeader';

const MovieScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imgView}>
          <Image style={styles.img} source={images.img1} />
        </View>
        <View style={styles.imgTitleView}>
          <Text style={styles.imgTitleOne}>
            {titles.MOVIE_SCREEN_IMG_TITLE}
          </Text>
          <Text style={styles.imgTitleTwo}>{titles.INFO_TITLE_ONE}</Text>
        </View>
        <View style={styles.freeBtnView}>
          <TouchableOpacity style={styles.touchableBtn}>
            <Text style={styles.freeBtnText}>{titles.INFO_HEADER_FREE}</Text>
          </TouchableOpacity>
          <View style={styles.devider}></View>
        </View>
        <View style={styles.curiculumView}>
          <Text style={styles.curiculum}>{titles.CURRICULUM}</Text>
        </View>
        <View style={{flex: 1}}>
          <ViewMoreText numberOfLines={2} textStyle={styles.moreText}>
            <Text style={styles.bigText}>{titles.SHOW_MORE_TEXT}</Text>
          </ViewMoreText>
        </View>
        {list.map(({arrays, title}) => {
          return (
            <>
              <ItemsHeader header={title} />
              <TouchableOpacity>
                {arrays.map(({title, duration, num, youtubeId}) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() =>
                        navigation.navigate(ROUTE.YoutubeScreen, youtubeId)
                      }>
                      <CurriculumItems
                        title={title}
                        time={duration}
                        num={num}
                      />
                    </TouchableOpacity>
                  );
                })}
              </TouchableOpacity>
            </>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MovieScreen;
