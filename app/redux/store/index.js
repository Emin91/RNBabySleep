import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import rootReduser from '../reducers';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //whiteList: []
};

const persistReduce = persistReducer(persistConfig, rootReduser);
const store = createStore(persistReduce);
const persistor = persistStore(store);

export {store, persistor};
