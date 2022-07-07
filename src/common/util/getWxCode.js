/**
 * 提现微信提现code
 * author: lddldd
 * createTime: 2020-11-25
 * getCashWxCode: 返回promise {code: ''}
 * code: String
 * 		异常情况:
 * 		'noJdApp': 非京东app
 *    'getCodeFail': 获取微信提现code失败
 * 		'lowVersion': 京东App低于6.4.0版本，即版本较低
 *    'error': 异常
 * 		正常情况:
 *    如:'27adsf09sdoasdjad8aa9sd'
 */
import {
  isApp,
  getAppVersion,
  versionCompare
} from '@jmfe/jm-common'
import { bindSocialAccountWithJsonString } from '@jmfe/jm-webview'

var getCashWxCode = function getCashWxCode() {
  return new Promise(function(resolve, reject) {
    try {
      if (!isApp('jd')) {
        resolve({
          code: 'notJdApp'
        })
        return
      }
      var jdAppGte800 = versionCompare(getAppVersion('jd'), '6.4.0') >= 0
      if (jdAppGte800) {
        bindSocialAccountWithJsonString('WX', 'getWxCodeFunc')
        window.getWxCodeFunc = function(result) {
          var resultData = JSON.parse(result)
          if (resultData && resultData.authResult == 1) {
            console.log('微信提现获取成功Code', resultData.wxCode)
            resolve({
              code: resultData.wxCode
            })
          } else {
            resolve({
              code: 'getCodeFail'
            })
          }
        }
      } else {
        resolve({
          code: 'lowVersion'
        })
      }
    } catch (error) {
      console.log('getCashWxCode:', error)
      resolve({
        code: 'error'
      })
    }
  })
}

export default getCashWxCode
