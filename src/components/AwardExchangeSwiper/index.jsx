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

  const { // 奖励列表
    assignmentId, // 活动Id
    rewardType, // 奖励类型，0：红包；1：京豆；2：优惠券
    cost, //需要扣减的虚拟金（单位：元）
    status, // 0：未兑换，1：已兑换
    redpackAmount, // 红包面额
  } = props

  return (<div className={styles.redBagContainer}>
    <div className={styles.redBagInfo}>
      <span className={styles.unit}>¥</span>
      <span className={styles.money}>{redpackAmount}</span>
    </div>
  </div>)
}

const CouponItem = (props) => {

  const {
    assignmentId, // 活动Id，领券时需要透传
    rewardType, // 奖励类型，0：红包；1：京豆；2：优惠券
    cost, //需要扣减的虚拟金（单位：元）
    status, // 0：未兑换，1：已兑换
    disCount, // 优惠券面额
    quota, // 优惠券消费门槛
    limitStr, // 优惠券使用范围
    beginTime2EndTime, // 优惠券时间
    couponRoundKey, // 优惠券round key，领券时需要透传
    couponName // 优惠券名称
  } = props
  return (<div className={styles.couponItemContainer} id='couponItem'>
    <div className={styles.quota}>{quota}</div>
    <div className={styles.couponInfo}>
      <span className={styles.unit}>¥</span>
      <span className={styles.money}>{disCount}</span>
    </div>
    <div className={styles.limitStr}>{limitStr}</div>
  </div>)
}

const AwardExchangeItem = (props) => {
  const { item } = props
  let ContentComponent;

  switch (item.rewardType) {
    case 0:
      ContentComponent = <RedBagItem {...item} />
      break
    case 2:
      ContentComponent = <CouponItem {...item} />
      break
    default:
      ContentComponent = null
  }

  return (ContentComponent && <div className={styles.awardContainer} onClick={(e) => props.onClickItem(item, e)} >
    {ContentComponent}
    <div className={styles.exchangeConsume}>
      {item.cost}元兑换
      </div>
  </div>)
}


const AwardExchangeList = (props) => {
  const { awardExchangeList = [] } = props
  return (
    <div className={styles.listContainer}>
      {awardExchangeList.map((item) => {
        return <AwardExchangeItem item={item} key={item.assignmentId} onClickItem={props.onClickItem} />
      })}
    </div>
  )
}

export default (props) => {
  const { activeIndex, onSlideChangeListener, rewardExchangePanel } = props
  const swiperRef = useRef(null)
  if (swiperRef && swiperRef.current && swiperRef.current.activeIndex !== activeIndex) {
    swiperRef.current.slideTo(activeIndex)
  }
  console.log("rewardExchangePanel", rewardExchangePanel)
  const roundList = rewardExchangePanel && rewardExchangePanel.roundList || []

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
      {roundList.map((item) => {
        return <SwiperSlide key={item.beginTime}>
          <AwardExchangeList awardExchangeList={item.rewardList} onClickItem={props.onClickItem} />
        </SwiperSlide>
      })}
    </Swiper>
  );
};