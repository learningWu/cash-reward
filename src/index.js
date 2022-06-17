import React from 'react';
import { render } from 'react-dom';
import App from './app';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducer/rootReducer.js'
import fetchMiddleware from './middleware/fetchMiddleware.js'

const store = createStore(rootReducer,{exchangeAwardList : []},applyMiddleware(fetchMiddleware))
render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app'),
);
