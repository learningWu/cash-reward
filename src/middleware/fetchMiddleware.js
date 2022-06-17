const fetchMiddleware = store => next => action => {
  if (typeof action === 'function') {
    return action().then((result) => {
      store.dispatch({
        type: 'fetchCashRewardListSuccess',
        payload: result.result.awardList
      })
    }).catch((reason) => {
      console.log("fetch fail", reason)
      store.dispatch({
        type: 'fetchCashRewardListFail'
      })
    })
  }
  next(action)
}

export default fetchMiddleware
