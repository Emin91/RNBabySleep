import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {images} from '../../constants/image';
import {blocks} from './components/blocks';
import {colors} from '../../constants/color';
import {socialBtns} from '../../../__mocks__/socialBtns';
import {FloatingAction} from 'react-native-floating-action';
import Icon from '../../components/iconsList';
import titles from '../../constants/string';
import styles from './style';
import onItemPress from './components/onClick';
import socialBtnsPressed from './components/socialBtnsPressed';

const AboutAuthorScreen = () => {
  return (
    <ImageBackground
      source={images.avatar}
      blurRadius={5}
      style={styles.imgBackground}>
      <View style={styles.mainView}>
        <View style={styles.detailsViewOne}>
          <View style={styles.headerView}>
            <Text style={styles.headerTitle}>{titles.PROFILE}</Text>
          </View>
          <View style={styles.imgView}>
            <Image source={images.avatar} style={styles.img} />
          </View>
          <View style={styles.authorView}>
            <Text style={styles.authorName}>{titles.AUTHOR}</Text>
          </View>
          <View style={styles.socialIconsView}>
            {socialBtns.map(({iconName, num}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.socialIcons}
                  onPress={() => socialBtnsPressed(num)}>
                  <Icon.Entypo name={iconName} size={30} color={colors.WHITE} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={styles.detailsViewTwo}>
          <View style={styles.infoView}>
            {blocks.map(({blockName, title, num}) => {
              return (
                <>
                  <Text style={styles.title}>{blockName}</Text>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => onItemPress(num)}>
                    <Text style={styles.touchableTitle}>{title}</Text>
                  </TouchableOpacity>
                </>
              );
            })}
          </View>
        </View>
      </View>
      <FloatingAction
        color={colors.DARKULA}
        buttonSize={40}
        showBackground={false}
        onPressMain={() => {
          onItemPress(5);
        }}
        floatingIcon={
          <Icon.AntDesign name="sharealt" size={15} color={colors.WHITE} />
        }
      />
    </ImageBackground>
  );
};

export default AboutAuthorScreen;
