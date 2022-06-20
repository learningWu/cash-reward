import { Header } from '../floor';

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

export default () => {
  return (
      <ErrorBoundary errorholder={null}>
        <Header />
        兑换中心
      </ErrorBoundary>
  );
};
