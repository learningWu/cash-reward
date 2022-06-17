const fetchMiddleware = store => next => action => {
  if (typeof action === 'function') {
    console.log("action", action)
    return action().then((result) => {
      store.dispatch({
        type: 'fetchCashRewardListSuccess',
        payload: result.result.awardList
      })
    }).catch((reason) => {
      console.log(reason)
      store.dispatch({
        type: 'fetchCashRewardListFail'
      })
    })
  }
  next(action)
}

export default fetchMiddleware
