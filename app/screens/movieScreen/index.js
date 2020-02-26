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

const itemsHeader = title => {
  return (
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
};

const sectionOne = header => {
  return (
    <View>
      {itemsHeader(header)}
      <TouchableOpacity>
        {itemArraysOne.map(({title, duration, num}) => {
          return (
            <TouchableOpacity activeOpacity={0.5}>
              <CurriculumItems title={title} time={duration} num={num} />
            </TouchableOpacity>
          );
        })}
      </TouchableOpacity>
    </View>
  );
};

const sectionTwo = header => {
  return (
    <View>
      {itemsHeader(header)}
      <TouchableOpacity>
        {itemArraysTwo.map(({title, duration, num}) => {
          return (
            <TouchableOpacity activeOpacity={0.5}>
              <CurriculumItems title={title} time={duration} num={num} />
            </TouchableOpacity>
          );
        })}
      </TouchableOpacity>
    </View>
  );
};

const sectionThree = header => {
  return (
    <View>
      {itemsHeader(header)}
      <TouchableOpacity>
        {itemArraysThree.map(({title, duration, num}) => {
          return (
            <TouchableOpacity activeOpacity={0.5}>
              <CurriculumItems title={title} time={duration} num={num} />
            </TouchableOpacity>
          );
        })}
      </TouchableOpacity>
    </View>
  );
};

const sectionFour = header => {
  return (
    <View>
      {itemsHeader(header)}
      <TouchableOpacity>
        {itemArraysFour.map(({title, duration, num}) => {
          return (
            <TouchableOpacity activeOpacity={0.5}>
              <CurriculumItems title={title} time={duration} num={num} />
            </TouchableOpacity>
          );
        })}
      </TouchableOpacity>
    </View>
  );
};

const sectionFive = header => {
  return (
    <View>
      {itemsHeader(header)}
      <TouchableOpacity>
        {itemArraysFive.map(({title, duration, num}) => {
          return (
            <TouchableOpacity activeOpacity={0.5}>
              <CurriculumItems title={title} time={duration} num={num} />
            </TouchableOpacity>
          );
        })}
      </TouchableOpacity>
    </View>
  );
};

const sectionSix = header => {
  return (
    <View>
      {itemsHeader(header)}
      <TouchableOpacity>
        {itemArraysSix.map(({title, duration, num}) => {
          return (
            <TouchableOpacity activeOpacity={0.5}>
              <CurriculumItems title={title} time={duration} num={num} />
            </TouchableOpacity>
          );
        })}
      </TouchableOpacity>
    </View>
  );
};

const sectionSeven = header => {
  return (
    <View>
      {itemsHeader(header)}
      <TouchableOpacity>
        {itemArraysSeven.map(({title, duration, num}) => {
          return (
            <TouchableOpacity activeOpacity={0.5}>
              <CurriculumItems title={title} time={duration} num={num} />
            </TouchableOpacity>
          );
        })}
      </TouchableOpacity>
    </View>
  );
};

const MovieScreen = () => {
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
          <Text style={styles.hours}>{titles.LECTURES}</Text>
        </View>
        {sectionOne(titles.SECTIONS_ONE)}
        {sectionTwo(titles.SECTIONS_TWO)}
        {sectionThree(titles.SECTIONS_THREE)}
        {sectionFour(titles.SECTIONS_FOUR)}
        {sectionFive(titles.SECTIONS_FIVE)}
        {sectionSix(titles.SECTIONS_SIX)}
        {sectionSeven(titles.SECTIONS_SEVEN)}
      </ScrollView>
    </View>
  );
};

export default MovieScreen;
