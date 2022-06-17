import {
  getData
} from '../common/util/network.js'

export const getFetchAction = (params) => {
  return {
    operation: () => getData(params.functionId, null),
    mark: params.functionId
  }
}
