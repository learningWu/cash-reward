import { Filter, handleData, ItemRuleFunction, WholeRuleFunction } from './interface';

const filter: Filter<handleData> = (data, filterRules, ignoreRuleFn) => {
  let rules: {
    whole: WholeRuleFunction<handleData>[];
    item: ItemRuleFunction<handleData>[];
  } = {
    item: [],
    whole: [],
  };

  if (Array.isArray(filterRules)) {
    rules.item = filterRules;
  } else {
    rules = Object.assign({}, rules, filterRules);
  }

  const d = rules.item.length
    ? data.filter((v) => {
      return (
        (ignoreRuleFn && ignoreRuleFn(v)) ||
        rules.item.filter((ruleFn) => ruleFn(v)).length === rules.item.length
      );
    }) : data;

  return rules.whole.reduce((handledData, ruleFn) => {
    // 虽然赋值但是处理的还是 d 数据本身
    const filteredData = ruleFn(handledData);
    return filteredData;
  }, d);
};

export default filter;
