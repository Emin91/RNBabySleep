import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {textBlocks} from '../../constants/faqTextBlocks';
import styles from './style';

const Faq = () => {
  return (
    <ScrollView style={styles.mainView}>
      {textBlocks.map(({title, text}) => {
        return (
          <>
            <View style={styles.headerView}>
              <Text style={styles.headerTitle}>{title}</Text>
            </View>
            <View style={styles.textView}>
              <Text style={styles.text}>{text}</Text>
            </View>
          </>
        );
      })}
    </ScrollView>
  );
};

export default Faq;
