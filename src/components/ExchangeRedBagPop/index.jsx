import React, { useContext, useRef, useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import styles from './style.module.scss';

const ExchangeRedBagPop = (props) => {
    console.log("ExchangeRedBagPop", props)
    const { modalData, cancel, confirm } = props
    return (<div className={styles.shadowContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.title}>当前可兑换{modalData && modalData.redpackAmount}元红包</div>
            <div className={styles.des}>兑换后红包请至我的-红包查看</div>
            <div className={styles.action}>
                <div className={styles.cancel} onClick={() => typeof cancel === 'function' && cancel()}>继续攒钱</div>
                <div className={styles.confirm} onClick={() => typeof confirm === 'function' && cancel()}>去兑换</div>
            </div>
        </div>
    </div>)
}

export default ExchangeRedBagPop