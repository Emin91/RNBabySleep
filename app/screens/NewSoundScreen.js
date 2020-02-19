import React, { useState } from 'react'
import { View, Text, Button, TextInput, TouchableNativeFeedback } from 'react-native'
import * as COLOR from '../constants/ColorConstans'; //Color constants
import * as STRINGS from '../constants/StringConstants'; //String constants
import Icon from '../components/Icons';
import styles from '../styles/NewSoundScreenStyle'
import Slider from '@react-native-community/slider';

const NewSoundScreen = () => {
    const [inputValue, setInputValue] = useState('')

    return (
        <View style={styles.mainView}>
            <View style={styles.textInputView}>
                <TextInput
                    value={inputValue}
                    maxLength={30}
                    autoCorrect={false}
                    style={styles.textInput}
                    placeholder={STRINGS.TEXT_INPUT}
                    onChangeText={(newValue) => setInputValue(newValue)}
                />
            </View>
            <View style={styles.recorderView}>
                <Text style={styles.timer}>00:00</Text>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple(COLOR.PELOROUS, true)}>
                    <View
                        style={styles.recorderBtn}>
                        <Icon.Feather
                            name='mic'
                            color={COLOR.WHITE}
                            size={70}
                        />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.sliderView}>
                <Slider
                    style={{ width: '100%', height: 60, }}
                    thumbTintColor={COLOR.LOCHMARA}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor={COLOR.PELOROUS}
                    maximumTrackTintColor={COLOR.BLACK}
                />
            </View>

        </View>
    )
}

export default NewSoundScreen
