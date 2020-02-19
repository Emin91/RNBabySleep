import React, { useState } from 'react'
import { View, Text, Button, TextInput, TouchableNativeFeedback } from 'react-native'
import styles from '../styles/NewSoundScreenStyle'
import * as STRINGS from '../constants/StringConstants'; //String constants
import * as COLOR from '../constants/ColorConstans'; //Color constants
import Icon from '../components/Icons';

const NewSoundScreen = () => {
    const [value, setInputValue] = useState('')
    return (
        <View style={styles.mainView}>
            <View style={styles.textInputView}>
                <TextInput
                    value={value}
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
        </View>
    )
}

export default NewSoundScreen
