import get from 'lodash.get';
import dataFilter, { dataFilterRule } from '../methods/dataFilter';

export default (remoteData) => {
  const list = get(remoteData, 'data.guesslike.list', [])
    .map((tab) => {
      const tabName = get(tab, 'name', '');
      const advertId = get(tab, 'advertId', '');
      const groupId = get(tab, 'next.guessLikeGoods.groupId', '');
      const brokerInfo = get(tab, 'bi.brokerInfo', '');
      const biClk = get(tab, 'biClk', '');
      const mcInfo = get(tab, 'mcInfo', '');

      const tabData = dataFilter(get(tab, 'next.guessLikeGoods.list', []), {
        item: [
          dataFilterRule.filterIsDelete,
          dataFilterRule.filterStock,
          dataFilterRule.filterByComparePrice({ max: 'jdPrice', min: 'pPrice' }),
          dataFilterRule.filterPrice({ priceKey: 'pPrice' }),
        ],
      });

      return {
        tabName,
        advertId,
        tabData,
        groupId,
        brokerInfo,
        biClk,
        mcInfo,
      };
    })
    .filter((tab) => tab.tabName && tab.tabData.length > 2);

  return list;
};
