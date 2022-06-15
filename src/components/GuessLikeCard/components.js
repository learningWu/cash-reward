import React, { useContext } from 'react';
import get from 'lodash.get';
import { getPurchasePrice } from './utils';
import { Img } from '@pango/ui';
import { GuesslikeContext } from '../../context';

import styles from './style.module.scss';
import zyTag from './imgs/zy-tag.png';
import postTag from './imgs/post-tag.png';

// 标题前的自营/包邮标签
export const TitleTag = ({ data }) => {
  const zy = get(data, 'extension.zy', '');
  const freeMark = get(data, 'freeMark', '');

  if (zy == 1) {
    return <img className={styles.titleIcon} src={zyTag} />;
  }

  if (freeMark === 3) {
    return <img className={styles.titleIcon} src={postTag} />;
  }

  return null;
};

// 标题下的标签列表
// 展示 券信息/promotionTag，n期免息
export const TagList = ({ data, className = '' }) => {
  const couponMsg = get(data, ['couponInfos', 0, 'couponMsg'], '');
  const promotionTag = get(data, 'promotionTag', '');
  const mianxi = get(data, 'productExtInfo.mianxi', 0);

  const FirstTag = () => {
    if (couponMsg) {
      return <span className={styles.promotionTag}>领券{couponMsg}</span>;
    }
    if (promotionTag) {
      return <span className={styles.promotionTag}>{promotionTag}</span>;
    }
    return null;
  };

  return (
    <div className={`${styles.guesslikeTagList} ${className}`}>
      <FirstTag />
      {mianxi && Number(mianxi) > 0 ? (
        <span className={styles.mianxiTag}>{mianxi}期免息</span>
      ) : null}
    </div>
  );
};

const PurchasePriceWrapper = ({ data }) => {
  const {
    remoteConfig: { showPurchasePrice },
  } = useContext(GuesslikeContext);
  if (showPurchasePrice != 1) {
    return null;
  }

  const purchasePrice = getPurchasePrice(data);
  const price = get(data, 'pPrice');

  return purchasePrice && Number(purchasePrice) < Number(price) ? (
    <div className={styles.purchasePrice}>
      预估到手价：￥<span>{purchasePrice}</span>
    </div>
  ) : null;
};

export const GuessLikeImg = ({ data }) => {
  const image = get(data, 'image', '');
  return (
    <div className={styles.imgWrapper}>
      <Img src={image} figureClassName={styles.guesslikeFigure} />
      <PurchasePriceWrapper data={data} />
    </div>
  );
};

export const PromoLogo = () => {
  const {
    remoteConfig: { promoLogo },
  } = useContext(GuesslikeContext);

  if (!promoLogo) {
    return null;
  }

  return (
    <div className={styles.promoLogo}>
      <img src={promoLogo} alt="" />
    </div>
  );
};
