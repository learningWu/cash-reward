import axios from "axios"
const ISBETA = true
const BASEURL = ISBETA ? "//beta-api.m.jd.com" : "//api.m.jd.com"

const NetworkTool = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
  timeout: 15000
})

function encodeSerialize(data) {
  return Object.keys(data)
    .map(key => key + "=" + encodeURIComponent(data[key]))
    .join("&");
}

async function getData(functionId, params = {}) {
  const fullParams = {
    functionId: functionId,
    body: JSON.stringify(params),
    appid: "CashRewardMiniH5Env",
    client: "m",
    clientVersion: "11.1.0"
  }

  let url = "/client.action?" + encodeSerialize(fullParams)
  try {
    const responseObject = await NetworkTool.post(url)    
    if (responseObject && responseObject ?.status === 200 && responseObject ?.data) {
      const {
        code,
        data
      } = responseObject.data
      if (code === 0 && data ?.bizCode === 0 && data ?.result) { // 数据正常
        return data
      } else if (code === 300) { // 未登录
        window.location.href = 'https://plogin.m.jd.com/user/login.action?appid=1040&returnurl=' + encodeURIComponent(window.location.href)
        return Promise.reject(data)
      } else {
        return Promise.reject(data)
      }
    } else {
      return Promise.reject(responseObject ?.data)
    }
  } catch (e) {
    return Promise.reject(e)
  }
  // return NetworkTool.post(url).then(responseObject => {
  //   if (responseObject && responseObject ?.status === 200 && responseObject ?.data) {
  //     const { code, data } = responseObject.data
  //     if (code === 0 && data ?.bizCode === 0 && data ?.result) { // 数据正常
  //       return data
  //     } else if (code === 300) { // 未登录
  //       window.location.href = 'https://plogin.m.jd.com/user/login.action?appid=1040&returnurl=' + encodeURIComponent(window.location.href)
  //       return Promise.reject(data)
  //     } else {
  //       return Promise.reject(data)
  //     }
  //   } else {
  //     return Promise.reject(responseObject ?.data)
  //   }
  // }).catch(e => {
  //   return Promise.reject(e)
  // })
}

export {
  getData
}
