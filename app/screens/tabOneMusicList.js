import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Button, ScrollView } from 'react-native'
import TextElements from '../components/textElements/textElement';
import styles from '../styles/TextElementsStyle'
import { titles } from '../constants/StringConstants';

const titleTwo = [
    {
        value: titles.TITLE_TWO_TEXT_1,
        img: require('../assets/img/car1.jpg'),
    },
    {
        value: titles.TITLE_TWO_TEXT_2,
        img: require('../assets/img/car2.jpg'),
    },
    {
        value: titles.TITLE_TWO_TEXT_3,
        img: require('../assets/img/car3.jpg'),
    },
    {
        value: titles.TITLE_TWO_TEXT_4,
        img: require('../assets/img/car4.jpg'),
    },
    {
        value: titles.TITLE_TWO_TEXT_5,
        img: require('../assets/img/car5.jpg'),
    },
]

const titleThree = [
    {
        value: titles.TITLE_THREE_TEXT_1,
        img: require('../assets/img/car1.jpg'),
    },
    {
        value: titles.TITLE_THREE_TEXT_2,
        img: require('../assets/img/car2.jpg'),
    },
    {
        value: titles.TITLE_THREE_TEXT_3,
        img: require('../assets/img/car3.jpg'),
    },
    {
        value: titles.TITLE_THREE_TEXT_4,
        img: require('../assets/img/car4.jpg'),
    },
]

const titleFour = [
    {
        value: titles.TITLE_FOUR_TEXT_1,
        img: require('../assets/img/car1.jpg'),
    },
    {
        value: titles.TITLE_FOUR_TEXT_2,
        img: require('../assets/img/car2.jpg'),
    },
    {
        value: titles.TITLE_FOUR_TEXT_3,
        img: require('../assets/img/car3.jpg'),
    },
    {
        value: titles.TITLE_FOUR_TEXT_4,
        img: require('../assets/img/car4.jpg'),
    },
]

const MusicListTab = (props) => {
    const [sliderValue, setSliderValue] = useState(0)
    return (
        <ScrollView style={styles.scrollView}>
            <TextElements title={titles.MusicListTab_TITLE_ONE} />
            <TextElements title={titles.MusicListTab_TITLE_TWO} />
            {
                titleTwo.slice().map(({ value, img }) => {
                    return (
                        <TouchableOpacity
                            style={styles.textsView}
                            onPress={() => props.navigation.navigate('Details', { value, img })}>
                            <Text style={styles.texts}>{value}</Text>
                        </TouchableOpacity>
                    )
                })
            }
            <TextElements title={titles.MusicListTab_TITLE_THREE} />
            {
                titleThree.slice().map(({ value, img }) => {
                    return (
                        <TouchableOpacity
                            style={styles.textsView}
                            onPress={() => props.navigation.navigate('Details', { value, img })}>
                            <Text style={styles.texts}>{value}</Text>
                        </TouchableOpacity>
                    )
                })
            }
            <TextElements title={titles.MusicListTab_TITLE_FOUR} />
            {
                <View style={styles.itemViews}>
                    {
                        titleFour.slice().map(({ value, img }) => {
                            return (
                                <TouchableOpacity
                                    style={styles.textsView}
                                    onPress={() => props.navigation.navigate('Details', { value, img })}>
                                    <Text style={styles.texts}>{value}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            }
        </ScrollView>
    )
}


export default MusicListTab
