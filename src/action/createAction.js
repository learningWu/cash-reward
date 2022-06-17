
import {
    getData
} from '../common/util/network.js'

export const getFetchAction = (params) => {
  return () => {
    return getData("cash_exchange_awardList", null)
  }
}
