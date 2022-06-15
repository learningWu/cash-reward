import { FilterRule } from '../interface';
import get from 'lodash.get';

// 过滤必须存在的字段，支持 , 分割多传
// 过滤字段 为空 为null 小于等于0 不存在 的情况
const filterByKeys: FilterRule = (props) => {
  const keys = get(props, 'keys', '');
  return (dataItem) => {
    const k = keys.split(',');
    return !k.find((key) => {
      const value = get(dataItem, key, undefined);

      return value === '' || value === undefined || value === null || value === 'null';
    });
  };
};

export default filterByKeys;
