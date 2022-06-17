 const rootReducer = (state, action) => {
   switch (action.type) {
     case "fetchCashRewardList":
       break;
     case "fetchCashRewardListSuccess":
       console.log("fetchCashRewardListSuccess", state, action)
       return {
         exchangeAwardList: [...state.exchangeAwardList, ...action.payload]
       }
       break;
     case "fetchCashRewardListLoading":
       break;
     case "fetchCashRewardListFail":
       break;
     default:
       return state;
   }
 }

 export default rootReducer
