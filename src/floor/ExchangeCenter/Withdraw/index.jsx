import React, {
    useEffect,
    useState,
    useCallback
} from 'react';
import styles from './style.module.scss';
import { connect } from 'react-redux'
import { getFetchAction } from '../../../action/createAction'

const Withdraw = (props) => {

    return <div className={styles.container}>
        <div className={styles.header}>
            <span className={styles.title}>现金提现</span>
            <span className={styles.des}>限时兑换 先到先得</span>
        </div>
        <div className={styles.nowMoney}>
            <span className={styles.limitMoney}>10</span>
            <span className={styles.unit}>元 提现</span>
            <div className={styles.splitLine}/>
            <span className={styles.have}>已攒2.66元</span>
        </div>

    </div>
}
export default Withdraw