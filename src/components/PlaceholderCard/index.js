import React, { useContext } from 'react';

import { toSeckill, reportClick } from '@pango/core';
import { GuesslikeContext } from '../../context';

import styles from './style.module.scss';
import defaultPlaceholderImg from './imgs/bg.png';

export default () => {
  const {
    env,
    remoteConfig: { showPlaceholder, placeholderImg },
  } = useContext(GuesslikeContext);

  if (showPlaceholder == 0) {
    return null;
  }

  return (
    <div
      className={styles.placeholderCard}
      onClick={async () => {
        await reportClick({
          eventId: 'Babel_dev_adv_seckillRecommendation_endToSec',
          // 活动id_7601313120_04177070_1_moduleId
          eventParam: `${env.activityId}_7601313120_04177070_1_${env.moduleId}`,
        });

        toSeckill();
      }}
    >
      <img src={placeholderImg || defaultPlaceholderImg} alt="" />
    </div>
  );
};
