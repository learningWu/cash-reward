// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import React, {
  useEffect,
  useState,
  useCallback,
  useRef
} from 'react';
// Import Swiper styles
import 'swiper/css';
import styles from './style.module.scss';


const RedBagItem = (props) => {
  return (<div className={styles.redBagContainer}>
    <div className={styles.redBagInfo}>
      <span className={styles.unit}>¥</span>
      <span className={styles.money}>4</span>
    </div>
  </div>)
}

const CouponItem = (props) => {
  return (<div className={styles.couponItemContainer}>
    <div className={styles.quota}>满200元可用</div>
    <div className={styles.couponInfo}>
      <span className={styles.unit}>¥</span>
      <span className={styles.money}>30</span>
    </div>
    <div className={styles.limitStr}>全品类通用</div>
  </div>)
}

const AwardExchangeItem = (props) => {
  const { item } = props

  let ContentComponent;

  switch (item.rewardType) {
    case 0:
      ContentComponent = RedBagItem
      break
    case 2:
      ContentComponent = CouponItem
      break
    default:
      ContentComponent = RedBagItem
  }

  return (<div className={styles.awardContainer}>
    <ContentComponent />
    <div className={styles.exchangeConsume}>
      1元兑换
      </div>
  </div>)
}


const AwardExchangeList = (props) => {
  return (
    <div className={styles.listContainer}>
      {[{ // 奖励列表
        "assignmentId": "", // 活动Id
        "rewardType": 0, // 奖励类型，0：红包；1：京豆；2：优惠券
        "cost": "", //需要扣减的虚拟金（单位：元）
        "status": 1, // 0：未兑换，1：已兑换
        "redpackAmount": "", // 红包面额
      }, {
        "assignmentId": "", // 活动Id
        "rewardType": 1, // 奖励类型，0：红包；1：京豆；2：优惠券
        "cost": "", //需要扣减的虚拟金（单位：元）
        "status": 1, // 0：未兑换，1：已兑换
        "beanAmount": "", // 京豆面额
      }, {
        "assignmentId": "", // 活动Id，领券时需要透传
        "rewardType": 2, // 奖励类型，0：红包；1：京豆；2：优惠券
        "cost": "", //需要扣减的虚拟金（单位：元）
        "status": 1, // 0：未兑换，1：已兑换
        "disCount": "", // 优惠券面额
        "quota": "", // 优惠券消费门槛
        "limitStr": "", // 优惠券使用范围
        "beginTime2EndTime": "", // 优惠券时间
        "couponRoundKey": "", // 优惠券round key，领券时需要透传
        "couponName": "" // 优惠券名称
      }, {
        "assignmentId": "", // 活动Id
        "rewardType": 1, // 奖励类型，0：红包；1：京豆；2：优惠券
        "cost": "", //需要扣减的虚拟金（单位：元）
        "status": 1, // 0：未兑换，1：已兑换
        "beanAmount": "", // 京豆面额
      }, {
        "assignmentId": "", // 活动Id，领券时需要透传
        "rewardType": 2, // 奖励类型，0：红包；1：京豆；2：优惠券
        "cost": "", //需要扣减的虚拟金（单位：元）
        "status": 1, // 0：未兑换，1：已兑换
        "disCount": "", // 优惠券面额
        "quota": "", // 优惠券消费门槛
        "limitStr": "", // 优惠券使用范围
        "beginTime2EndTime": "", // 优惠券时间
        "couponRoundKey": "", // 优惠券round key，领券时需要透传
        "couponName": "" // 优惠券名称
      }
        // ...
      ].map((item) => {
        return <AwardExchangeItem item={item} />
      })
      }
    </div>
  )
}

export default (props) => {

  const { activeIndex, onSlideChangeListener } = props
  const swiperRef = useRef(null)
  if (swiperRef && swiperRef.current && swiperRef.current.activeIndex !== activeIndex) {
    swiperRef.current.slideTo(activeIndex)
  }

  return (
    <Swiper
      className="swiper-wrapper"
      onSlideChange={() => {
        console.log('slide change', "swiperRef.current.activeIndex:", swiperRef.current.activeIndex, "activeIndex", activeIndex)
        console.log(swiperRef.current, onSlideChangeListener)
        typeof onSlideChangeListener === 'function' && onSlideChangeListener(swiperRef.current.activeIndex)
      }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper
        console.log(swiper)
      }}
    >
      <SwiperSlide>
        <AwardExchangeList />
      </SwiperSlide>
      <SwiperSlide>
        <AwardExchangeList />
      </SwiperSlide>
      <SwiperSlide>
        <AwardExchangeList />
      </SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};