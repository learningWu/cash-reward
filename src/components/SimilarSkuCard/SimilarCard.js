import React, { useContext } from 'react';
import { reportClick, toDetail } from '@pango/core';

import { ContentWrapper } from '@pango/ui';

import styles from './style.module.scss';
import arror from './imgs/arrow.png';
import { GuesslikeContext } from '../../context';

export default ({ tabInfo, data: { goodsList } }) => {
  const { env } = useContext(GuesslikeContext);
  return (
    <div className={styles.similarCard}>
      <div className={styles.similarCardWrapper}>
        {goodsList.map((item) => {
          return (
            <div
              key={item.wareId}
              className={styles.similarSku}
              onClick={async () => {
                await reportClick({
                  eventId: 'Babel_dev_sku_seckillRecommendation_realTime',
                  // 活动id_skuid_04177070_1_borkerinfo_tab名称（name字段）_moduleId_Mcinfo_Biclk
                  eventParam: `${env.activityId}_${item.wareId}_04177070_1_borkerinfo_${tabInfo.tabName}_${env.moduleId}__`,
                });

                toDetail(item.wareId);
              }}
            >
              <div className={styles.similarSkuImgContainer}>
                <img src={item.imageurl} />
                {item.miaoShaPrice ? (
                  <div className={styles.similarSkuImgMask}>￥{item.miaoShaPrice}</div>
                ) : null}
              </div>
              <ContentWrapper line={1} className={styles.similarSkuTitle}>
                {item.wname} <img src={arror} alt="" />
              </ContentWrapper>
            </div>
          );
        })}
      </div>
    </div>
  );
};
