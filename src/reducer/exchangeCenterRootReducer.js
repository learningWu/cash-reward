 import {
   combineReducers
 } from 'redux'

 const exchangeCenterReducer = (homeData = {}, action) => {
   switch (action.type) {
     case "fetchSuccess":
       console.log("fetchSuccess", homeData, action)
       if (action.mark === 'cash_exchange_center') {
         return action.payload.result;
       }
       return homeData;
       break;
     case "fetchFail":
     default:
       return homeData;
   }
 }

 export default combineReducers({
   homeData: exchangeCenterReducer
 })
