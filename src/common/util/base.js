const sleep = (timeout) => new Promise((reslove) => {
  setTimeout(reslove, timeout)
})

export {
    sleep
}