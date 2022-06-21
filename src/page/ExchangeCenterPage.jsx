import {
  Header,
  AwardExchange,
  MoneyHeader,
  Withdraw,
  NavigatorHeader
} from '../floor';

import '../common/styles/reset.scss';
import '@pango/ui/dist/pango.css';
import {
  getData
} from '../common/util/network.js'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import React, {
  useEffect,
  useState,
  useCallback
} from 'react';
import rootReducer from '../reducer/exchangeCenterRootReducer.js'
const store = createStore(rootReducer, applyMiddleware(fetchMiddleware))
import fetchMiddleware from '../middleware/fetchMiddleware.js'
import { ErrorBoundary } from '@pango/ui';

export default () => {
  return (
    <ErrorBoundary errorholder={null}>
      <Header />
      <Provider store={store}>
        <>
        <NavigatorHeader />
        <MoneyHeader />
        <Withdraw/>
        <AwardExchange/>
        </>
      </Provider>
    </ErrorBoundary>
  );
};
