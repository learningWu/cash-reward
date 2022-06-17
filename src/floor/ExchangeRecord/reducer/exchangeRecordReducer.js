const exchangeRecordReducer = (exchangeAwardList = [], action) => {
  switch (action.type) {
    case "fetchSuccess":
      console.log("fetchSuccess", exchangeAwardList, action)
      if (action.mark === 'cash_exchange_awardList') {
        return [...exchangeAwardList, ...action.payload.result.awardList]
      }
      return exchangeAwardList;
      break;
    case "fetchFail":
    default:
      return exchangeAwardList;
  }
}

export default exchangeRecordReducer
