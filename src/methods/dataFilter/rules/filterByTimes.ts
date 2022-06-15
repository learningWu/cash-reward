import { FilterRule } from '../interface';
import get from 'lodash.get';

const filterByTimes: FilterRule = (props) => {
  const times = get(props, 'times', 1);
  return (data) => {
    if (data.length === 0) {
      return data;
    }
    if (data.length < times) {
      return [];
    }

    const rest = data.length % times;
    if (rest) {
      return data.slice(0, -rest);
    }
    return data;
  };
};

export default filterByTimes;
