import React, {
    useEffect,
    useState,
    useCallback
} from 'react';
import styles from './style.module.scss';
import { connect } from 'react-redux'
import { getFetchAction } from '../../../action/createAction'
import AwardProgress from '../../../components/AwardProgress'

const Withdraw = (props) => {

    const mapStateToBtnUrl = {
        geryAllWithdrawed: "https://m.360buyimg.com/mobilecal/jfs/t1/161474/20/24081/6925/6188bd55E8d2c5eba/f90d32c003617584.png!q70.jpg.webp",
        greyWithdraw: "https://m.360buyimg.com/mobilecal/jfs/t1/211452/4/4282/6224/61613753Ea7684b0c/84bb63f31ae05f12.png",
        redWithdraw: "https://m.360buyimg.com/mobilecal/jfs/t1/197967/14/12394/7119/61613753Eafb4ba7e/b7e334a996dce59f.png",
    }

    const getBtn = () => {
        // 判断按钮状态
        return mapStateToBtnUrl.redWithdraw
    }

    return <div className={styles.container}>
        <div className={styles.header}>
            <span className={styles.title}>现金提现</span>
            <span className={styles.des}>限时兑换 先到先得</span>
        </div>
        <div className={styles.nowMoney}>
            <span className={styles.limitMoney}>10</span>
            <span className={styles.unit}>元 提现</span>
            <div className={styles.splitLine} />
            <span className={styles.have}>已攒2.66元</span>
        </div>
        <AwardProgress />
        <img className={styles.withdrawToWX} src={getBtn()} />
    </div>
}
export default Withdraw