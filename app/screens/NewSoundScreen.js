import React, { useState } from 'react'
import { View, Text, Button, TextInput, TouchableNativeFeedback } from 'react-native'
import Icon from '../components/Icons';
import styles from '../styles/NewSoundScreenStyle'
import * as STRINGS from '../constants/StringConstants'; //String constants
import * as COLOR from '../constants/ColorConstans'; //Color constants
import Slider from '@react-native-community/slider';

const NewSoundScreen = () => {
    const [inputValue, setInputValue] = useState('')
    const [sliderValue, setSliderValue] = useState('')
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
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple(COLOR.PELOROUS, true)}>
                    <View
                        style={styles.recorderBtn}>
                        <Icon.Ionicons
                            name='md-recording'
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
