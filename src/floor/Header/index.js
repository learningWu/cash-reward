import React, { useEffect } from 'react';
import { initMCommonHeader, initMHeaderTips } from './utils';

import styles from './style.module.scss';

const headerDivId = 'm_common_header';
const headerTipsId = 'm_common_tip';
export default () => {
  useEffect(() => {
    initMHeaderTips(headerTipsId);
    initMCommonHeader(headerDivId);
  }, []);
  return (
    <>
      <div id={headerTipsId} style={{ maxHeight: '50px', overflow: 'hidden' }} />
    </>
  );
};
