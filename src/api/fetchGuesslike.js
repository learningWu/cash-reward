import { request } from '@pango/core';
import { applyKey, reqSrc, activityId, pageId } from '../config';

export default (qryParam) => {
  const body = {
    qryParam: JSON.stringify(qryParam),
    activityId,
    reqSrc,
    applyKey,
    pageId,
  };
  //  body = addPreviewTime(body);
  return request({
    functionId: 'qryCompositeMaterials',
    biz: body,
    beta: false,
  });
};
