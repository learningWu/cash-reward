 import exchangeRecordReducer from '../floor/ExchangeRecord/reducer/exchangeRecordReducer.js'
 import {
   combineReducers
 } from 'redux'

 export default combineReducers({
   exchangeAwardList: exchangeRecordReducer
 })
