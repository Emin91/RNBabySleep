import React from 'react';
import {View, ScrollView} from 'react-native';
import {headers} from '../../constants/settingListArray';
import styles from './style';
import VersionView from './components/versionView';
import ItemsHeader from './components/itemsHeader';
import ItemsArray from './components/itemArray';
import {menuItems} from './components/menuItems';

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
    </View>
  );
};

export default TabSettings;
