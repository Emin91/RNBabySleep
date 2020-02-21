import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import styles from './styles'
import Icon from '../../components/Icons';

const LoginScreen = ({ navigation }) => {
    console.log('navigation', navigation)
    return (
        <View style={styles.mainView}>
            <View style={styles.titleView}>
                <Text style={styles.mainTitle}>Login</Text>
            </View>
            <View style={styles.regView}>
                <Icon.AntDesign
                    name="plus"
                    color={'white'}
                    size={30} />
                <TextInput
                    placeholder={'User name'}
                />
                <Button title={"Got to registration"} onPress={() => navigation.navigate('MainAppSceen')} />
            </View>
            <View style={{ flex: 0.2, backgroundColor: 'cyan', }}></View>
        </View>
    )
}

export default LoginScreen