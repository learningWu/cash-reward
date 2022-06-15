import { request } from '@pango/core';
import { appId } from '../config';

export default (skuId, encrptyActivityId) => {
  return request({
    functionId: 'seckillSimilarGoods',
    biz: {
      activityId: encrptyActivityId,
      triggerSkuId: skuId,
      num: 4,
      source: 'SuperSeckillActivity',
    },
    appId,

    beta: process.env.NODE_ENV === 'development',
  });
};
