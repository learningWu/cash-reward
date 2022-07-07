import {
  getData
} from '../common/util/network.js'

export const getFetchAction = (params) => {
  const {
    functionId,
    ...bodyParams
  } = params
  return {
    operation: () => getData(functionId, bodyParams),
    mark: functionId
  }
}
