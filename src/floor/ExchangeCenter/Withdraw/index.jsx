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
    console.log("withdraw", props)

    const {
        withdrawTips,
        withdrawList,
        percentProgress
    } = props.homeData

    const mapStateToBtnUrl = {
        geryAllWithdrawed: "https://m.360buyimg.com/mobilecal/jfs/t1/161474/20/24081/6925/6188bd55E8d2c5eba/f90d32c003617584.png!q70.jpg.webp",
        greyWithdraw: "https://m.360buyimg.com/mobilecal/jfs/t1/211452/4/4282/6224/61613753Ea7684b0c/84bb63f31ae05f12.png",
        redWithdraw: "https://m.360buyimg.com/mobilecal/jfs/t1/197967/14/12394/7119/61613753Eafb4ba7e/b7e334a996dce59f.png",
    }

    const nodeToProgress = {
        0: 0,
        1: 12,
        2: 50,
        3: 100
    }

    const getNodeProgress = (node) => nodeToProgress[Math.max(Math.min(node, 3), 0)]

    let withdrawProgressMetaList, completedProgress, waitWithdraw, withdrawProgressMeta
    if (withdrawList) {
        withdrawProgressMetaList = withdrawList.map((item) => {
            if (item.status !== 1 && !waitWithdraw) {
                waitWithdraw = item
            }
            return {
                moneyYuan: item.moneyYuan,
                des: item.status === 1 ? "元提现" : "元待解锁",
                percent: getNodeProgress(item.node),
                progressStatus: item.status === 1 ? "completed" : "unCompleted",
            }
        })

        // 进度条数据源
        withdrawProgressMeta = {
            withdrawProgressMetaList,
            completedProgress:
                getNodeProgress(waitWithdraw.node - 1) + (getNodeProgress(waitWithdraw.node) - getNodeProgress(waitWithdraw.node - 1)) * parseFloat(percentProgress)
        }
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
            <span className={styles.limitMoney}>{waitWithdraw && waitWithdraw.moneyYuan}</span>
            <span className={styles.unit}>元 提现</span>
            <div className={styles.splitLine} />
            <span className={styles.have}>{withdrawTips}</span>
        </div>
        <AwardProgress withdrawProgressMeta={withdrawProgressMeta} />
        <img className={styles.withdrawToWX} src={getBtn()} />
    </div>
}


export default connect(({ homeData = {} }) => {
    return { homeData }
})(Withdraw)