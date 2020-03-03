import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Spinner from 'react-native-spinkit';

const loader = () => {
  const [isVisible, setVisible] = useState(true);
  const [color, setColor] = useState('#ffffff');

  const changeColor = () => {
    setColor('#' + Math.floor(Math.random() * 16777215).toString(16));
  };

  return (
    <View style={styles.container}>
      <Spinner
        style={styles.spinner}
        isVisible={isVisible}
        size={100}
        type={'Wave'}
        color={color}
      />
      <Text style={{color: 'white'}} onPress={changeColor}>
        hjghgj
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141414',
  },

  spinner: {
    marginBottom: 50,
  },

  btn: {
    marginTop: 20,
  },

  text: {
    color: 'white',
  },
});

export default loader;
