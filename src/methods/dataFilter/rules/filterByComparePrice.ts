import { FilterRule } from '../interface';
import get from 'lodash.get';

// 价格过滤
// 接受最大和最小价格的字段用于对比
const filterByComparePrice: FilterRule = (props) => {
  const { max = '', min = '' } = props || {};
  return (dataItem) => {
    const maxPrice = Number(get(dataItem, max));
    const minPrice = Number(get(dataItem, min));
    return !!(maxPrice && minPrice && maxPrice > minPrice);
  };
};

export default filterByComparePrice;
