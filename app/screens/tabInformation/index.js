import React, { useState } from 'react'
import { View, Text, Button, TextInput, TouchableNativeFeedback, Image, TouchableOpacity, ScrollView } from 'react-native'
import Slider from '@react-native-community/slider';
import styles from './style'
import { titles } from '../../constants/stringConstants';
import { colors } from '../../constants/colorConstans';
import ItemDetails from '../../components/itemDetails';

const img = require('../../assets/img/img1.jpg')

const arrayList = [
    {
        title: titles.INFO_TITLE_ONE,
        img: require('../../assets/img/img1.jpg'),
        subTitle: titles.INFO_SUBTITLE_ONE,
        freeText: titles.INFO_HEADER_FREE,
    },
    {
        title: titles.INFO_TITLE_TWO,
        img: require('../../assets/img/img2.jpg'),
        subTitle: titles.INFO_SUBTITLE_TWO,
        freeText: titles.INFO_HEADER_FREE,
    },
]

const arrayListTwo = [
    {
        title: titles.INFO_TITLE_THREE,
        img: require('../../assets/img/img3.jpg'),
        subTitle: titles.INFO_SUBTITLE_THREE,
        freeText: titles.INFO_HEADER_FREE,
    },
]

const Tab_3 = ({ navigation }) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.headerImgView}>
                <Image style={styles.headerImg} source={img}></Image>
            </View>
            <View style={{ flex: 0.6 }}>
                <ScrollView >
                    <View style={styles.mainTitleView}>
                        <Text style={styles.mainTitle}>{titles.INFO_HEADER_TEXT_TITLE}</Text>
                    </View>
                    <View style={styles.itemView}>
                        {
                            arrayList.slice().map(({ title, img, subTitle, freeText }) => {
                                return (
                                    <TouchableOpacity style={{ flex: 1 }}>
                                        <ItemDetails
                                            title={title}
                                            img={img}
                                            subTitle={subTitle}
                                            freeText={freeText}
                                        />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    <View style={styles.mainTitleView}>
                        <Text style={styles.mainTitle}>{titles.INFO_HEADER_TEXT_TITLE_TWO}</Text>
                    </View>
                    <View style={styles.itemView}>
                        {
                            arrayListTwo.slice().map(({ title, img, subTitle, freeText }) => {
                                return (
                                    <TouchableOpacity style={{ flex: 1 }}>
                                        <ItemDetails
                                            title={title}
                                            img={img}
                                            subTitle={subTitle}
                                            freeText={freeText}
                                        />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </ScrollView>
                {/* <View style={{ width: '100%', height: 50, backgroundColor: 'rgba(0, 0, 0, 0.1)', }}>
                    <Text>jhjkhkjh</Text>
                </View> */}
            </View>

        </View >
    )
}

export default Tab_3
