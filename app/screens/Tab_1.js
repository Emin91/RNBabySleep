import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Button, ScrollView } from 'react-native'
import * as STRINGS from '../constants/StringConstants';
import * as COLOR from '../constants/ColorConstans';
import TextElements from '../components/TextElements';
import styles from '../styles/TextElementsStyle'

const titleTwo = [
    {
        value: STRINGS.TITLE_TWO_TEXT_1,
    },
    {
        value: STRINGS.TITLE_TWO_TEXT_2,
    },
    {
        value: STRINGS.TITLE_TWO_TEXT_3,
    },
    {
        value: STRINGS.TITLE_TWO_TEXT_4,
    },
    {
        value: STRINGS.TITLE_TWO_TEXT_5,
    },
]

const titleThree = [
    {
        value: STRINGS.TITLE_THREE_TEXT_1,
    },
    {
        value: STRINGS.TITLE_THREE_TEXT_2,
    },
    {
        value: STRINGS.TITLE_THREE_TEXT_3,
    },
    {
        value: STRINGS.TITLE_THREE_TEXT_4,
    },
]

const titleFour = [
    {
        value: STRINGS.TITLE_FOUR_TEXT_1,
    },
    {
        value: STRINGS.TITLE_FOUR_TEXT_2,
    },
    {
        value: STRINGS.TITLE_FOUR_TEXT_3,
    },
    {
        value: STRINGS.TITLE_FOUR_TEXT_4,
    },
]

const Tab_1 = (props) => {

    return (
        <ScrollView style={styles.scrollView}>
            <TextElements title={STRINGS.TAB_1_TITLE_ONE} />
            <TextElements title={STRINGS.TAB_1_TITLE_TWO} />
            {
                titleTwo.slice().map(({ value }) => {
                    return (
                        <TouchableOpacity
                            style={styles.textsView}
                            onPress={() => props.navigation.navigate('Details')}>
                            <Text style={styles.texts}>{value}</Text>
                        </TouchableOpacity>
                    )
                })
            }
            <TextElements title={STRINGS.TAB_1_TITLE_THREE} />
            {
                titleTwo.slice().map(({ value }) => {
                    return (
                        <TouchableOpacity
                            style={styles.textsView}
                            onPress={() => props.navigation.navigate('Details')}>
                            <Text style={styles.texts}>{value}</Text>
                        </TouchableOpacity>
                    )
                })
            }
            <TextElements title={STRINGS.TAB_1_TITLE_FOUR} />
            {
                <View style={styles.itemViews}>
                    {
                        titleTwo.slice().map(({ value }) => {
                            return (
                                <TouchableOpacity
                                    style={styles.textsView}
                                    onPress={() => props.navigation.navigate('Details')}>
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


export default Tab_1
