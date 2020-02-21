import React from 'react'
import { View, Text, Button, TextInput } from 'react-native';
import { titles } from '../../constants/stringConstants';
import styles from './style'
import Icon from '../Icons';

const OwnTextInput = ({ title, plcHolder, iconName }) => {
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
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        placeholder={plcHolder}
                    />
                </View>
            </View>
        </View>
    )
}

export default OwnTextInput
