import React, { useContext, useRef, useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import styles from './style.module.scss';

const ExchangeRedBagPop = (props) => {
    return (<div className={styles.shadowContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.title}>当前可兑换2元红包</div>
            <div className={styles.des}>领取后24小时内有效 下单可抵现</div>
            <div className={styles.action}>
                <div className={styles.cancel} onClick={props.cancel}>取消</div>
                <div className={styles.confirm} onClick={props.confirm}>确定</div>
            </div>
        </div>
    </div>)
}

export default ExchangeRedBagPop