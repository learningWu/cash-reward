import React from 'react';

import { ErrorBoundary } from '@pango/ui';
import { ExchangeRecord, Header } from './floor';

import './common/styles/reset.scss';
import '@pango/ui/dist/pango.css';
import {
  getData
} from './common/util/network.js'

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
        <ExchangeRecord />
      </ErrorBoundary>
  );
};
