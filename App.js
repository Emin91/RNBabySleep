import React from 'react';
import SwitchNavigator from './app/navigation/switchNavigator/switchNavigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './app/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SwitchNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
