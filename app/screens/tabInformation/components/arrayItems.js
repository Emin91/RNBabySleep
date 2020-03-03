import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import ItemDetails from '../../../components/itemDetails';

const ArrayList = ({arrays, navigation}) => {
  return (
    <View>
      {arrays.map(({title, img, subTitle, freeText, onClick}) => {
        return (
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => navigation.navigate(onClick)}>
            <ItemDetails
              title={title}
              img={img}
              subTitle={subTitle}
              freeText={freeText}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ArrayList;
