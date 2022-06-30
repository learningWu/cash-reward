import React, { useContext, useRef, useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import styles from './style.module.scss';

const ExchangeCouponSuccessPop = (props) => {
    console.log("ExchangeCouponSuccessPop", props)
    const { modalData, cancel, confirm } = props
    const {
        disCount,
        quota,
        limitStr,
        beginTime2EndTime
    } = modalData || {}
    return (<div className={styles.shadowContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.title}>恭喜你兑换成功</div>
            <div className={styles.couponInfo}>
                <div className={styles.amount}>{disCount}</div>
                <div className={styles.detailInfo}>
                    <span className={styles.productLimit}>{limitStr}</span>
                    <span className={styles.costLimit}>{quota}</span>
                    <span className={styles.date}>{beginTime2EndTime}</span>
                </div>
            </div>
            <div className={styles.toUse} onClick={() => {
                typeof confirm === 'function' && confirm()
            }}>
                立即使用
            </div>
            <div className={styles.tip}>可在「我的-优惠券」查看</div>
        </div>
    </div>)
}

export default ExchangeCouponSuccessPop