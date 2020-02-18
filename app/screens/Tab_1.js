import React from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import * as STRINGS from '../constants/StringConstants';
import * as COLOR from '../constants/ColorConstans';
import TextElements, { TextArray } from '../components/TextElements';


const Tab_1 = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: COLOR.GREY }}>
            <TextElements title={STRINGS.TAB_1_TITLE_ONE} />
            <TextElements title={STRINGS.TAB_1_TITLE_TWO} />
            <TextArray
                onPress={() => props.navigation.navigate('Details')}
                textTitle={STRINGS.TAB_1_TEXT_1} />
            <TextArray
                onPress={() => props.navigation.navigate('Details')}
                textTitle={STRINGS.TAB_1_TEXT_2} />
            <TextArray
                onPress={() => props.navigation.navigate('Details')}
                textTitle={STRINGS.TAB_1_TEXT_3} />
            <TextArray
                onPress={() => props.navigation.navigate('Details')}
                textTitle={STRINGS.TAB_1_TEXT_4} />
            <TextArray
                onPress={() => props.navigation.navigate('Details')}
                textTitle={STRINGS.TAB_1_TEXT_5} />
            <TextElements title={STRINGS.TAB_1_TITLE_THREE} />
        </View>
    )
}


export default Tab_1
