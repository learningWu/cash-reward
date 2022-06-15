import React, { useContext } from 'react';
import get from 'lodash.get';
import { ContentWrapper, SmallFonts } from '@pango/ui';

import { TitleTag, TagList, GuessLikeImg, PromoLogo } from './components';
import { getDay, skuClickEvent } from './utils';
import { GuesslikeContext } from '../../context';

import styles from './style.module.scss';
import daysTag from './imgs/days-tag.png';

export default ({ data, tabInfo, addSimilarCard }) => {
  const {
    remoteConfig: { showLinePrice },
    env,
  } = useContext(GuesslikeContext);
  const { pPrice, jdPrice, skuId, name } = data;

  const price = pPrice.split('.');
  const dayTagText = getDay(get(data, ['next', 'days', 0, 'days'], 0)); // N天最低价

  return (
    <div
      className={styles.cardB1}
      data-unionskuid={skuId}
      onClick={async () => {
        await skuClickEvent(data, tabInfo, env, addSimilarCard);
      }}
    >
      <PromoLogo />
      <GuessLikeImg data={data} />

      <div className={styles.guesslikeContent}>
        <ContentWrapper line={2} className={styles.guesslikeSkuName}>
          <TitleTag data={data} />
          {name}
        </ContentWrapper>
        <TagList data={data} />
        <SmallFonts
          className={styles.cardB1Price}
          texts={[
            {
              text: '￥',
              fontSize: 24,
              color: '#E8220E',
              bold: true,
            },
            {
              text: price[0],
              fontSize: 40,
              color: '#E8220E',
              bold: true,
            },
            {
              text: price[1] ? `.${price[1]} ` : ' ',
              fontSize: 34,
              color: '#E8220E',
              bold: true,
            },
            {
              text: jdPrice && showLinePrice == 1 ? `￥${jdPrice}` : '',
              fontSize: 24,
              lineThrough: true,
              color: '#8C8C8C',
            },
          ]}
        />

        {dayTagText ? (
          <div className={styles.cardB1DaysTag}>
            <img src={daysTag} />
            {dayTagText}
          </div>
        ) : null}
      </div>
    </div>
  );
};
