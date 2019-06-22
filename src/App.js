import React, { Component } from 'react';
import { store, persistor } from './redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import AppContainer from './routes/index'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}