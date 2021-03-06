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
import mockMiddleware from '../middleware/mockMiddleware.js'
import { ErrorBoundary } from '@pango/ui';
import styles from './style.module.scss';
import { connect } from 'react-redux'
import { getFetchAction } from '../action/createAction'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(mockMiddleware, fetchMiddleware)))

const ExchangeCenterPageContent = (props) => {
  useEffect(() => {
    props.fetchHomeData()
  }, [])

  let isShowMoneyHeader, isShowWithdraw, isShowAwardExchange
  if (props && props.homeData) {
    const { headerBanner, userMoney, withdrawList, supportCashOut, rewardExchangePanel } = props.homeData

    isShowMoneyHeader = headerBanner && headerBanner.length > 0 && userMoney !== null

    isShowWithdraw = withdrawList && withdrawList.length > 0 && props.homeData.supportCashOut === 1

    isShowAwardExchange = rewardExchangePanel
      && rewardExchangePanel.roundList
      && rewardExchangePanel.roundList.length > 0
  }


  return <div className={styles.container}>
    <NavigatorHeader />
    {isShowMoneyHeader && <MoneyHeader />}
    {isShowWithdraw && <Withdraw />}
    {isShowAwardExchange && <AwardExchange />}
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
    // fetchHomeData: (params) => dispatch(getFetchAction({
    //   functionId: "cash_exchange_center"
    // }))
    // todo(wzx):mock
    fetchHomeData: (params) => dispatch({
      ...getFetchAction({
        functionId: "cash_exchange_center"
      }),
      mock: true
    })
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



