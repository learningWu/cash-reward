import React, { useContext, useRef, useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import styles from './style.module.scss';

const ExchangeRedBagPop = ({ modalData, cancel, confirm }) => {
    console.log("ExchangeRedBagPop", modalData)
    const { cost, rewardType, redpackAmount } = modalData || {}
    let title, tip
    switch (rewardType) {
        case 0:
            title = `当前可兑换${redpackAmount}元红包`
            tip = `兑换后红包请至我的-红包查看`
            break;
        case 2:
            title = `将消耗${cost}元兑换优惠券`
            tip = `兑换后请至我的-优惠券查看`
            break;
    }
    return (<div className={styles.shadowContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.title}>{title}</div>
            <div className={styles.des}>{tip}</div>
            <div className={styles.action}>
                <div className={styles.cancel} onClick={() => typeof cancel === 'function' && cancel()}>继续攒钱</div>
                <div className={styles.confirm} onClick={() => typeof confirm === 'function' && confirm(modalData)}>去兑换</div>
            </div>
        </div>
    </div>)
}

export default ExchangeRedBagPop