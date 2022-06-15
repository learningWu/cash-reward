import { FilterRule } from '../interface';
import get from 'lodash.get';

// 价格过滤
// 检查
const filterPrice: FilterRule = (props) => {
  const { priceKey, minValue = 0 } = props || {};
  return (dataItem) => {
    const price = Number(get(dataItem, priceKey));
    return !!(price && price > Number(minValue));
  };
};

export default filterPrice;
