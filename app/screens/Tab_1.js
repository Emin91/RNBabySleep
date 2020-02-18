import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PlusIcon from 'react-native-vector-icons/dist/Feather';
import * as STRINGS from '../constants/StringConstants';
import * as COLOR from '../constants/ColorConstans';
import IconStar from 'react-native-vector-icons/MaterialIcons'

const Tab_1 = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'orange' }}>
            <Text>Tab_1</Text>
            <IconStar name="star" color='#fff' size={22} />
        </View>
    )
}


export default Tab_1
