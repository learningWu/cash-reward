# 新的 filter 使用

::: warning
这是正在实验的特性，目前发布在 `3.0-newFilter` 分支，已经编写了一些常见的过滤逻辑（仅开发测试），可以在同步后在当前项目中使用（或者自行拓展）。
:::

以前的写法：

```js {5,6,7,8,9,10,11,12,13,14}
export default {
  filter: floorInfo => {
    const data = get(floorInfo, "data.HotAdvance", {});

    const list = filter.filterByTimes(
      get(data, ["list"], []).filter(v => {
        return (
          !v.isDelete &&
          (v.leftPromoStock === null || Number(v.leftPromoStock) > 0) &&
          v.realStock !== "N"
        );
      }),
      { times: 3 }
    );

    return list.length < 6 ? null : list;
  }
};
```

或者可能更复杂......

新的写法(逻辑与上述相同)：

```js {13,14,15,16,17}
import {
  filter,
  filterByTimes,
  filterIsDelete,
  filterStock,
  filterByComparePrice
} from "@Main-Filter";

export default {
  filter: floorInfo => {
    const data = get(floorInfo, "data.HotAdvance", {});

    const list = filter(get(data, ["list"], []), {
      whole: [filterByTimes({ times: 3 })],
      item: [filterIsDelete, filterStock]
    });

    return list.length < 6 ? null : list;
  }
};
```

**使用的过滤逻辑统一分发，方便管理，使用逻辑相比以前清晰明了，开发仅需要关注需要使用那条过滤逻辑，不用再在编写（或者复制的时候）担心遗漏或者字段不符。**

## 如何使用

```js
import { filter, rule1, rule2, rule3 } from "@Main-Filter";

filter(handleData, [rule1, rule2, rule3]);
```

### filter 函数的 api

|    参数     |                                                                        说明                                                                        |            类型             | 默认值 |
| :---------: | :------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------: | :----: |
|    data     |                                                                 需要被处理的数据集                                                                 |            array            |   --   |
| filterRules | 需要使用的过滤逻辑<br />1. 数组：作用于单个数据的过滤逻辑<br />2. 对象：`whole` 作用于数据集的过滤逻辑（如倍数筛选等），`item`作用于单个数据的过滤 | [] \| {whole: [], item: []} |   --   |

**过滤函数会优先处理单个数据的过滤规则后再使用 `whole` 的处理数据集规则。**

### 现有规则

|     规则名     |     说明     |                                         使用方式                                         | 作用范围 |
| :------------: | :----------: | :--------------------------------------------------------------------------------------: | :------: |
| filterByTimes  |   倍数过滤   |                              `filterByTimes({ times: 3 })`                               |  whole   |
| filterIsDelete |   下架过滤   |                                     `filterIsDelete`                                     |   item   |
|  filterStock   |  无库存过滤  |                                      `filterStock`                                       |   item   |
|  filterByComparePrice   | 价格大小对比 | `filterByComparePrice({ max: "jdPrice", min: "pPrice" })` ，`max` 和 `min` 对应需要对比的价格字段 |   item   |

### 示例

```js
import {
  filter,
  filterByTimes,
  filterIsDelete,
  filterStock,
  filterByComparePrice
} from "@Main-Filter";

// 使用上述所有规则
filter(handleData, {
  whole: [filterByTimes({ times: 3 })],
  item: [
    filterIsDelete,
    filterStock,
    filterByComparePrice({ max: "jdPrice", min: "pPrice" })
  ]
});

// 仅使用数据筛选
filter(handleData, [
  filterIsDelete,
  filterStock,
  filterByComparePrice({ max: "jdPrice", min: "pPrice" })
]);
```

## 编写新的规则

```typescript
type handleData = [{ [key: string]: any }] | { [key: string]: any };

/*
 * 数据处理的规则
 * 单个数据处理需返回 boolean
 * 数据集处理需返回 []
 */
type RuleFunction<T> = (data: T) => T | boolean;
/*
 * 也可以已闭包的形式接受参数并返回新函数
 ** args: 可能需要的需要的额外参数
 ** 返回一个处理数据的函数（处理数据的逻辑在这个函数中进行并返回：RuleFunction）
 */
type FilterRule = (args?: {
  [key: string]: any;
}) => RuleFunction<handleData>;
```
