const fetchMiddleware = store => next => action => {
  if (typeof action.operation === 'function') {
    return action.operation().then((result) => {
      store.dispatch({
        type: 'fetchSuccess',
        mark: action.mark,
        payload: result
      })
    }).catch((reason) => {
      console.log("fetch fail", reason)
      store.dispatch({
        type: 'fetchFail',
        mark: action.mark,
        payload: reason
      })
    })
  }
  return next(action)
}

export default fetchMiddleware
