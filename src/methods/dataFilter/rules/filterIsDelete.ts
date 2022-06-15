import { ItemRuleFunction, handleData } from '../interface';
import get from 'lodash.get';

// 下架过滤
const filterIsDelete: ItemRuleFunction<handleData> = (dataItem) => {
  return !get(dataItem, 'isDelete');
};

export default filterIsDelete;
