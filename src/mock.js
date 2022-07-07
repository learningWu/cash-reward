const cash_exchange_center = {
  "code": 0,
  "data": {
    "bizCode": 0,
    "result": {
      // 头部...
      "canExchangeRedpack": 1, // 本周还能否兑换红包，1可以，0不行
      "canExchangeBeans": 1, //本周还能否兑换京豆，1可以，0不行
      "userMoney": "0.76", // 元  
      "headerBanner": ["aaaa", "bbbb"], // 头部轮播
      // 现金提现...
      "withdrawTips": "已攒0.76元", //或者还差多少钱
      "percentProgress": "0.76", //提现进度百分比
      "supportCashOut": 1, //是否支持现金提现标识 1：支持 ， 2 ：不支持
      "withdrawList": [{
        "node": 1,
        "moneyFen": 200, //int
        "moneyYuan": "2", //string yuan
        "status": 1 // 1 已提现  
      }, {
        "node": 2,
        "moneyFen": 1000, //int
        "moneyYuan": "10", //string
        "status": 2 // 0未提现  
      }, {
        "node": 3,
        "moneyFen": 3000, //int
        "moneyYuan": "30", //string
        "status": 2 // 2 可提现  
      }],
      // 奖励兑换
      "rewardExchangePanel": {
        // 场次list
        "roundList": [{
            "status": 1, // 场次状态，0：已经结束；1：抢购中；2：即将开始
            "beginTime": "06:00", // 开始时间
            "rewardList": [{ // 奖励列表
                "assignmentId": "", // 活动Id
                "rewardType": 0, // 奖励类型，0：红包；1：京豆；2：优惠券
                "cost": "1", //需要扣减的虚拟金（单位：元）
                "status": 1, // 0：未兑换，1：已兑换
                "redpackAmount": "3", // 红包面额
              }, {
                "assignmentId": "", // 活动Id
                "rewardType": 1, // 奖励类型，0：红包；1：京豆；2：优惠券
                "cost": "0.5", //需要扣减的虚拟金（单位：元）
                "status": 1, // 0：未兑换，1：已兑换
                "beanAmount": "", // 京豆面额
              }, {
                "assignmentId": "", // 活动Id，领券时需要透传
                "rewardType": 2, // 奖励类型，0：红包；1：京豆；2：优惠券
                "cost": "0.3", //需要扣减的虚拟金（单位：元）
                "status": 1, // 0：未兑换，1：已兑换
                "disCount": "3", // 优惠券面额
                "quota": "优惠券消费门槛", // 优惠券消费门槛
                "limitStr": "优惠券使用范围", // 优惠券使用范围
                "beginTime2EndTime": "", // 优惠券时间
                "couponRoundKey": "", // 优惠券round key，领券时需要透传
                "couponName": "5元水果券" // 优惠券名称
              },
              // ...
            ]
          },
          // ...
        ]
      }
    },
    "success": true
  },
  "msg": "调用成功"
}

module.exports = {
  cash_exchange_center
}
