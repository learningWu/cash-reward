export type FilterFn<T = any> = (data: T, args?: { [key: string]: any }) => T;

export function compose<T>(target: T, composeFns: ((target: T) => T)[]): T {
  return composeFns.reduce((handler, fn) => fn(handler), target);
}

/*
 * 需要被处理的数据
 * 可能是数组（用于筛选 n 的倍数，或者控制数量等）
 * 可能是对象（用于处理价格是否符合等）
 */
export type handleData = [{ [key: string]: any }] | { [key: string]: any };

/*
 * 数据处理的规则
 * 单个数据处理需返回 boolean
 * 数据集处理需返回 []
 */
export type ItemRuleFunction<T> = (data: T) => boolean;

export type WholeRuleFunction<T> = (data: T) => T;
/*
 * 也可以已闭包的形式接受参数并返回新函数
 ** args: 可能需要的需要的额外参数
 ** 返回一个处理数据的函数（处理数据的逻辑在这个函数中进行并返回：RuleFunction）
 */
export type FilterRule = (args?: { [key: string]: any }) => ItemRuleFunction<handleData>;

export type Filter<T> = (
  data: T,
  filterRules:
    | ItemRuleFunction<handleData>[]
    | {
        whole: WholeRuleFunction<handleData>[];
        item: ItemRuleFunction<handleData>[];
      },
  ignoreRuleFn?: (handleData) => boolean, // 有些特殊数据如果存在直接跳过，不进行筛选
) => T;
