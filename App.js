import React from 'react';
import { Provider } from 'react-redux';

import store from './src/stores/store';
import Navigation from './src/Navigation';

// # components

export default function () {

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};