import { ExchangeRecord, Header } from '../floor';

import '../common/styles/reset.scss';
import '@pango/ui/dist/pango.css';
import {
  getData
} from '../common/util/network.js'

import React, {
  useEffect,
  useState,
  useCallback
} from 'react';

import { ErrorBoundary } from '@pango/ui';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducer/exchangeRecordRootReducer.js'
import fetchMiddleware from '../middleware/fetchMiddleware.js'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(fetchMiddleware)))

export default () => {
  // getData("cash_mob_home", {}).then((result) => {
  //   console.log(result)
  // }).catch((reason) => {
  //   console.log(reason)
  // })
  // getData("cash_exchange_awardList", { pageNo: 1, type: 1 }).then((result) => {
  //   console.log(result)
  // }).catch((reason) => {
  //   console.log(reason)
  // })

  return (
    <ErrorBoundary errorholder={null}>
      <Header />
      <Provider store={store}>
        <ExchangeRecord />
      </Provider>
    </ErrorBoundary>
  );
};
