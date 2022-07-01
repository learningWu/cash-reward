import * as MockCenter from '../mock.js'
const mockMiddleware = store => next => action => {
  console.log("MockCenter", MockCenter)
  if (action.mock && MockCenter.hasOwnProperty(action.mark)) {
    return store.dispatch({
      type: 'fetchSuccess',
      mark: action.mark,
      payload: MockCenter[action.mark].data
    })
  } else {
    return next(action)
  }
}

export default mockMiddleware
