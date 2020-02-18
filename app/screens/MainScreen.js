import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PlusIcon from 'react-native-vector-icons/dist/Feather';
import * as STRINGS from '../constants/StringConstants';
import * as COLOR from '../constants/ColorConstans';

const MainScreen = () => {
    return (
        <View>
            <Text>{STRINGS.HEADER_TEXT_MAIN_SCREEN}</Text>
        </View>
    )
}

//Splash screen header settings
MainScreen.navigationOptions = () => ({
    headerTitle: STRINGS.HEADER_TEXT_MAIN_SCREEN,
    headerStyle: {
        backgroundColor: COLOR.GREY,
        elevation: 0,
        shadowOpacity: 0,
    },
    headerTintColor: '#fff',
    headerRight: (() =>
        <TouchableOpacity style={[{ paddingHorizontal: 15 }]}>
            <PlusIcon
                name="plus"
                color={'white'}
                size={30} />
        </TouchableOpacity>
    )

});

export default MainScreen
