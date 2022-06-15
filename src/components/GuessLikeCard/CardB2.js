import React, { useContext } from 'react';
import get from 'lodash.get';
import { ContentWrapper, SmallFonts } from '@pango/ui';

import { TitleTag, TagList, GuessLikeImg, PromoLogo } from './components';
import { getDay, skuClickEvent } from './utils';
import { GuesslikeContext } from '../../context';

import styles from './style.module.scss';

export default ({ data, tabInfo }) => {
  const {
    remoteConfig: { showLinePrice },
    env,
  } = useContext(GuesslikeContext);
  const { pPrice, jdPrice, skuId, name } = data;

  const price = pPrice.split('.');
  const dayTagText = getDay(get(data, ['next', 'days', 0, 'days'], 0)); // N天最低价

  return (
    <div
      className={styles.cardB2}
      data-unionskuid={skuId}
      onClick={async () => {
        await skuClickEvent(data, tabInfo, env);
      }}
    >
      <PromoLogo />
      <GuessLikeImg data={data} />
      <ContentWrapper line={2} className={styles.guesslikeSkuName}>
        <TitleTag data={data} />
        {name}
      </ContentWrapper>
      <TagList data={data} className={styles.cardB2TagList} />
      <div className={styles.cardB2PriceContainer}>
        <div className={styles.cardB1FirstLine}>
          <s>{jdPrice && showLinePrice == 1 ? `￥${jdPrice}` : '限时促销'}</s>
          <span>即将恢复</span>
        </div>
        <SmallFonts
          className={styles.cardB2Price}
          texts={[
            {
              text: '￥',
              fontSize: 24,
              color: '#ffffff',
              bold: true,
            },
            {
              text: price[0],
              fontSize: 40,
              color: '#ffffff',
              bold: true,
            },
            {
              text: price[1] ? `.${price[1]} ` : ' ',
              fontSize: 34,
              color: '#ffffff',
              bold: true,
            },
          ]}
        />
      </div>
      <div className={styles.cardB2DaysTag}>{dayTagText || '限时促销价'}</div>
    </div>
  );
};
