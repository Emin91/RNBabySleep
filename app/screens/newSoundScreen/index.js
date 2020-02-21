import React, { useState } from 'react'
import Slider from '@react-native-community/slider';
import { View, Text, Button, TextInput, TouchableNativeFeedback } from 'react-native'
import Icon from '../../components/Icons';
import styles from './style'
import { titles } from '../../constants/stringConstants';
import { colors } from '../../constants/colorConstans';

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
                    placeholder={titles.TEXT_INPUT}
                    onChangeText={(newValue) => setInputValue(newValue)}
                />
            </View>
            <View style={styles.recorderView}>
                <Text style={styles.timer}>00:00</Text>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple(colors.PELOROUS, true)}>
                    <View
                        style={styles.recorderBtn}>
                        <Icon.Feather
                            name='mic'
                            color={colors.WHITE}
                            size={70}
                        />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.sliderView}>
                <Slider
                    style={{ width: '100%', height: 60, }}
                    thumbTintColor={colors.LOCHMARA}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor={colors.PELOROUS}
                    maximumTrackTintColor={colors.BLACK}
                />
            </View>

        </View>
    )
}

export default NewSoundScreen
