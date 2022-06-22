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
import fetchMiddleware from '../middleware/fetchMiddleware.js'
import { ErrorBoundary } from '@pango/ui';
import styles from './style.module.scss';
import { connect } from 'react-redux'
import { getFetchAction } from '../action/createAction'


const store = createStore(rootReducer, applyMiddleware(fetchMiddleware))

const ExchangeCenterPageContent = (props) => {
  useEffect(() => {
    props.fetchHomeData()
  }, [])

  return <div className={styles.container}>
    <NavigatorHeader />
    <MoneyHeader />
    <Withdraw />
    <AwardExchange />
  </div>
}


const mapStateToProps = ({ homeData }) => {
  console.log("mapStateToProps", homeData)
  return {
    homeData
  }
}

const mapDispatchToProps = dispatch => {
  console.log("mapDispatchToProps", dispatch)
  return {
    fetchHomeData: (params) => dispatch(getFetchAction({
      functionId: "cash_exchange_center"
    }))
  }
}

const ConnectExchangeCenterPageContent = connect(mapStateToProps, mapDispatchToProps)(ExchangeCenterPageContent)

const ExhcnageCenterPage = (props) => {
  return (
    <ErrorBoundary errorholder={null}>
      <Header />
      <Provider store={store}>
        <ConnectExchangeCenterPageContent />
      </Provider>
    </ErrorBoundary>
  );
};

export default ExhcnageCenterPage



