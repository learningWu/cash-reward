import React, { useContext, useRef, useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import styles from './style.module.scss';

const CouponDisplayPop = ({ modalData, cancel, confirm, clickShadow }) => {
    const {
        disCount,
        quota,
        limitStr,
        beginTime2EndTime,
        couponName
    } = modalData || {}
    return (<div className={styles.shadowContainer} onClick={clickShadow}>
        <div className={styles.contentContainer}>
            <div className={styles.title}>{couponName}</div>
            <div className={styles.couponInfo}>
                <div className={styles.amount}>{disCount}</div>
                <div className={styles.detailInfo}>
                    <span className={styles.productLimit}>{limitStr}</span>
                    <span className={styles.costLimit}>{quota}</span>
                    <span className={styles.date}>{beginTime2EndTime}</span>
                </div>
            </div>
        </div>
    </div>)
}

export default CouponDisplayPop