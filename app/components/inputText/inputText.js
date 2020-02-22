import React, { useState } from 'react'
import { View, Text, Button, TextInput, TouchableOpacity, } from 'react-native';
import { titles } from '../../constants/stringConstants';
import styles from './style'
import Icon from '../Icons';

const OwnTextInput = ({ title, plcHolder, iconName, id }) => {
    const [inputValue, setInputValue] = useState('')

    const showIcon = (id) => {
        if (id === 'password') {
            if (inputValue.length > 0) {
                return <TouchableOpacity
                    onPress={() => alert(inputValue)}
                >
                    <Icon.Entypo
                        style={{ paddingRight: 10, }}
                        name={'eye'}
                        size={25}
                    />
                </TouchableOpacity>
            } else {
                return null
            }
        } else {
            return null
        }
    }

    return (
        <View style={styles.userNameView}>
            <View style={styles.iconView}>
                {(iconName === 'user' ?
                    <Icon.AntDesign
                        name={iconName}
                        size={35}
                    /> : <Icon.MaterialCommunityIcons
                        name={iconName}
                        size={35}
                    />)}
            </View>
            <View style={styles.nameRows}>
                <View style={styles.userNameBox}>
                    <Text style={styles.userNameText}>
                        {title}
                    </Text>
                    {showIcon(id)}
                </View>
                <View style={styles.inputView}>
                    {(id === 'userName' ?
                        <TextInput
                            secureTextEntry={false}
                            placeholder={plcHolder}
                            value={inputValue}
                            onChangeText={(newValue) => setInputValue(newValue)}
                        /> : <TextInput
                            secureTextEntry={true}
                            placeholder={plcHolder}
                            value={inputValue}
                            onChangeText={(newValue) => setInputValue(newValue)}
                        />)}
                </View>
            </View>
        </View>
    )
}

export default OwnTextInput