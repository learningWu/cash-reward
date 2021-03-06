const sleep = (timeout) => new Promise((reslove) => {
  setTimeout(reslove, timeout)
})

const compose = (...funcs) => {
  if(funcs.length === 0){
    return arg => arg
  }

  if(funcs.length === 1){
    return funcs[0]
  }

  return funcs.reduce((a, b) => (args) => a(b(args)))
}

export {
  sleep
}
