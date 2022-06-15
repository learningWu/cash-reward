import { FilterRule } from '../interface';
import get from 'lodash.get';

// 小于等于零过滤
const filterMinusByKey: FilterRule = (props) => {
  const key = get(props, 'key', '');
  return (dataItem) => {
    // 这里需要考虑字段值即是 undefined 的情况
    // return get(dataItem, key, undefined) !== undefined;

    // 因为目前逻辑为值如果为 null 时即过滤，所以直接返回获取的值，而不是真的查看是否有该字段
    // 检查的其实是有该字段，且 Boolean(值) 为 true

    return get(dataItem, key, 0) > 0;
  };
};

export default filterMinusByKey;
