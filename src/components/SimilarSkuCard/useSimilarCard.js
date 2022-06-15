import { useRef } from 'react';
import get from 'lodash.get';
import { fetchSimilarSkus } from '../../api';
import { encrptyActivityId } from '../../config';

export default ({ tabList, setTabList, activeIndex }) => {
  const similarShowTime = ['1', '2', '3', '4'];
  const clickedTimes = useRef(0);
  const clickedSkus = useRef([]);

  return async (skuId) => {
    clickedTimes.current += 1;

    if (clickedSkus.current.includes(skuId)) {
      return;
    }
    if (!similarShowTime.map((v) => Number(v)).includes(clickedTimes.current)) {
      return;
    }

    clickedSkus.current.push(skuId);

    const similarGoodsInfo = await fetchSimilarSkus(skuId, encrptyActivityId);

    const goodsList = get(similarGoodsInfo, 'goodsList', []);
    if (goodsList.length < 4) {
      return;
    }

    // 找到点击的tab 下的 sku，在 sku后两位插入相似卡片的数据
    const currentTab = tabList[activeIndex];
    const clickedSkuIndex = currentTab.tabData.findIndex((sku) => sku.skuId === skuId);
    currentTab.tabData.splice(clickedSkuIndex + 2, 0, {
      isSimilarCard: true,
      id: `similar-card-${clickedTimes.current}`,
      data: similarGoodsInfo,
    });

    setTabList(JSON.parse(JSON.stringify(tabList)));
  };
};
