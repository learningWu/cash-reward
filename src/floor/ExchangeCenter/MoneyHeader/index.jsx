import React, {
    useEffect,
    useState,
    useCallback
} from 'react';
import styles from './style.module.scss';
import { connect } from 'react-redux'
import { getFetchAction } from '../../../action/createAction'

const MoneyHeader = (props) => {

    return <div className={styles.container}>
        <div className={styles.tip}>可在京东APP搜“领京豆”参与活动</div>
        <span className={styles.des}>我的金额（元）</span>
        <div className={styles.money}><span>0.76</span>元</div>
    </div>
}
export default MoneyHeader