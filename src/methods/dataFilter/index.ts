// filter 函数
import dataFilter from './filter';
// 作用于数据集的规则
import filterByTimes from './rules/filterByTimes';
import filterIsDelete from './rules/filterIsDelete';
import filterStock from './rules/filterStock';
import filterByComparePrice from './rules/filterByComparePrice';
import filterByKey from './rules/filterByKey';
import filterByKeys from './rules/filterByKeys';
import filterMinusByKey from './rules/filterMinusByKey';
import filterPrice from './rules/filterPrice';

export default dataFilter;

export const dataFilterRule = {
  // 倍数过滤
  filterByTimes,
  // 下架过滤
  filterIsDelete,
  // 无库存过滤
  filterStock,
  // 价格大小对比
  filterByComparePrice,
  // 字段必须存在
  filterByKey,
  // 多个字段必须存在
  filterByKeys,
  // 字段小于等于零过滤
  filterMinusByKey,
  // 过滤价格且价格大于0
  filterPrice,
};
