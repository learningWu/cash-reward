import { ItemRuleFunction, handleData } from '../interface';
import get from 'lodash.get';

// 无库存过滤
const filterStock: ItemRuleFunction<handleData> = (dataItem) => {
  const realStock = get(dataItem, 'realStock');
  const leftPromoStock = get(dataItem, 'leftPromoStock', null);
  if (leftPromoStock === 0) {
    return false;
  }
  if ((leftPromoStock === null || leftPromoStock > 0) && realStock === 'N') {
    return false;
  }
  return true;
};

export default filterStock;
