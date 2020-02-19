import React, { useState } from 'react'
import { View, Text, Button, TextInput, TouchableNativeFeedback, Image } from 'react-native'
import * as COLOR from '../constants/ColorConstans'; //Color constants
import * as STRINGS from '../constants/StringConstants'; //String constants
import Icon from '../components/Icons';
import styles from '../styles/DetailsScreenStyle'

const img = require('../assets/img/auto1.jpg')
const DetailsScreen = ({ navigation }) => {
    console.log(navigation.getParam('img'))

    return (
        <View style={styles.mainView}>
            <View style={styles.imgView}>
                <Image style={{ width: '100%', height: '100%' }} source={img}></Image>
            </View>
            <Text>{navigation.getParam('img')}</Text>
        </View>
    )
}

export default DetailsScreen
