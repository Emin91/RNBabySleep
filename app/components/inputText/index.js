import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import styles from './style';
import Icon from '../iconsList';

const CustomTextInput = ({
  iconName,
  security,
  inputValue,
  setFunc,
  title,
  placeHolder,
}) => {
  return (
    <View style={styles.userNameView}>
      <View style={styles.iconView}>
        {iconName === 'user' ? (
          <Icon.AntDesign name={iconName} size={35} />
        ) : (
          <Icon.MaterialCommunityIcons name={iconName} size={35} />
        )}
      </View>
      <View style={styles.nameRows}>
        <View style={styles.userNameBox}>
          <Text style={styles.userNameText}>{title}</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry={security}
            placeholder={placeHolder}
            value={inputValue}
            onChangeText={setFunc}
            autoCorrect={false}
            autoCapitalize={false}
          />
        </View>
      </View>
    </View>
  );
};

export default CustomTextInput;
