import React from 'react'
import { View, Text, TouchableOpacity, Button, ScrollView } from 'react-native'
import * as STRINGS from '../constants/StringConstants';
import * as COLOR from '../constants/ColorConstans';
import TextElements, { TextArray } from '../components/TextElements';

const textTitle = [
    {
        value: STRINGS.TAB_1_TEXT_1,
    },
    {
        value: STRINGS.TAB_1_TEXT_2,
    },
    {
        value: STRINGS.TAB_1_TEXT_3,
    },
    {
        value: STRINGS.TAB_1_TEXT_4,
    },
    {
        value: STRINGS.TAB_1_TEXT_5,
    },
]

const rowCount = 6;

const columnsCount = textTitle.length / rowCount;

const Tab_1 = (props) => {
    return (
        <ScrollView style={{ backgroundColor: COLOR.GREY, paddingTop: 20, paddingHorizontal: 10 }}>
            <TextElements title={STRINGS.TAB_1_TITLE_ONE} />
            <TextElements title={STRINGS.TAB_1_TITLE_TWO} />
            {
                Array(rowCount).fill(null).map((val, index) => {
                    const startIndex = index * columnsCount;
                    return (
                        textTitle.slice(startIndex, startIndex + columnsCount).map(({ value, component = value }) => {
                            return (
                                <View key={index}>
                                    {
                                        textTitle.slice(startIndex, startIndex + columnsCount).map(({ value, component = value }) => {
                                            return (
                                                <View key={value}>
                                                    <TextArray
                                                        onPress={() => props.navigation.navigate('Details')}
                                                        textTitle={component} />
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            )
                        })

                    )
                })
            }
            <TextElements title={STRINGS.TAB_1_TITLE_THREE} />
            {
                Array(rowCount).fill(null).map((val, index) => {
                    const startIndex = index * columnsCount;
                    return (
                        <View key={index} style={{ backgroundColor: 'blue' }}>
                            {
                                textTitle.slice(startIndex, startIndex + columnsCount).map(({ value, component = value }) => {
                                    return (
                                        <View key={value} style={{ backgroundColor: 'orange' }}>
                                            <TextArray
                                                onPress={() => props.navigation.navigate('Details')}
                                                textTitle={component} />
                                        </View>
                                    )
                                })
                            }
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}


export default Tab_1
