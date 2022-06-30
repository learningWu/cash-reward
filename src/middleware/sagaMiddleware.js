import {
  take,
  call,
  put,
  select,
  fork,
  takeEvery,
  takeLatest
} from 'redux-saga/effects'


import {
  getData
} from '../common/util/network.js'

function* getHomeData() {
  const res = yield getData("cash_mob_home")
  console.log("cash_mob_home", res)
}


function isPromise(obj) {
  return obj && typeof obj.then === 'function'
}

function sagaHandle() {
  const getHomeDataGen = getHomeData()
  const res = getHomeDataGen.next()

  const run = (res) => {
    if (res.value) {
      if (isPromise(res.value)) {
        res.value.then((resloveRes) => {
          const nextRes = getHomeDataGen.next(resloveRes)
          run(nextRes)
        })
      } else {
        const nextRes = getHomeDataGen.next(res.value)
        run(nextRes)
      }
    }
  }
  run(res)
}

(function(){
    sagaHandle()
})()
