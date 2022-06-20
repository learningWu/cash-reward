import React from 'react';

import { ErrorBoundary } from '@pango/ui';
import './common/styles/reset.scss';
import '@pango/ui/dist/pango.css';
import { ExchangeRecordPage, ExchangeCenterPage } from './page';
export const history = require('history').createHashHistory()
import {
  Link,
  HashRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

export default () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/exchangerecord" component={ExchangeRecordPage} />
        <Route path="/exchangecenter" component={ExchangeCenterPage} />
        <Route>
          <Redirect to="/exchangerecord" />
        </Route>
      </Switch>
    </HashRouter>
  );
};
