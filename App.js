import React from 'react';
import {Provider} from 'react-redux';
import {MyStore} from './src/Screen/redux/Store/Mystore';
import AppStack from './Route';
const DemoApp = () => {
  return (
    <Provider store={MyStore}>
      <AppStack />
    </Provider>
  );
};
export default DemoApp;
