import { isNull, reportClick, toDetail } from '@pango/core';
import get from 'lodash.get';

// N天最低价
export const getDay = (days) => {
  if (!days) {
    return '';
  }
  if (Number(days) >= 365) {
    return '近一年最低价';
  }
  if (Number(days) >= 7) {
    return `${days}天最低价`;
  }
  return '';
};

export const skuClickEvent = async (skuInfo, tabInfo, env, addSimilarCard) => {
  const { skuId, biClk = '', mcInfo = '' } = skuInfo;

  const brokerInfo = get(skuInfo, 'bi.brokerInfo', '');
  await reportClick({
    eventId: 'Babel_dev_sku_seckillRecommendation',
    // 活动id_skuid_商品组ID_1_borkerinfo_tab名称（name字段）_moduleId_Mcinfo_Biclk
    eventParam: `${env.activityId}_${skuId}_${tabInfo.groupId}_1_${
      isNull(brokerInfo) ? '' : brokerInfo
    }_${tabInfo.tabName}_${env.moduleId}_${mcInfo}_${biClk}`,
  });

  addSimilarCard?.(skuId);

  toDetail(skuId);
};

export const getPurchasePrice = (data) => {
  const purchasePrice = Number(get(data, 'productExtInfo.purchasePrice', ''));

  return purchasePrice && purchasePrice > 0 ? String(purchasePrice) : '';
};
