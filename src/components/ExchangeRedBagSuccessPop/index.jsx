import React, { useContext, useRef, useEffect, useState } from 'react';
import styles from './style.module.scss';

const ExchangeRedBagSuccessPop = (props) => {
    console.log("ExchangeRedBagSuccessPop", props)
    const { modalData, confirm } = props
    return (<div className={styles.shadowContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.title}>恭喜你兑换成功</div>
            <img className={styles.icon} src={require('./imgs/red_bag_exchange_success.png')} />
            <div className={styles.toUse} onClick={() => {
                typeof confirm === 'function' && confirm()
            }}>
                立即使用
            </div>
            <div className={styles.tip}>可在「我的-优惠券」查看</div>
        </div>
    </div>)
}

export default ExchangeRedBagSuccessPop