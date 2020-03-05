import React from 'react';
import {View, ScrollView} from 'react-native';
import {headers} from '../../constants/settingListArray';
import styles from './style';
import VersionView from './components/versionView';
import ItemsHeader from './components/itemsHeader';
import ItemsArray from './components/itemArray';
import {menuItems} from './components/menuItems';
import Icon from '../../components/iconsList';
import {FloatingAction} from 'react-native-floating-action';
import {images} from '../../constants/image';
import {colors} from '../../constants/color';

const TabSettings = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <ScrollView>
        {menuItems.map(({header, arrays, onPressed}) => {
          return (
            <>
              {header ? <ItemsHeader title={header} /> : null}
              <ItemsArray
                arrays={arrays}
                onPressed={onPressed}
                navigation={navigation}
              />
            </>
          );
        })}
        <VersionView developer={headers.DEVELOP} version={headers.VERSION} />
      </ScrollView>
      <FloatingAction
        color={colors.LOCHMARA}
        buttonSize={40}
        actionsPaddingTopBottom={3}
        showBackground={false}
        onPressMain={goTo => {
          navigation.navigate('About');
        }}
        margin={25}
        floatingIcon={<Icon.EvilIcons name="user" size={30} color={'white'} />}
      />
    </View>
  );
};

export default TabSettings;
