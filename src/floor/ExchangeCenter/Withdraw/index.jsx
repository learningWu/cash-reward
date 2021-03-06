import React, {
    useEffect,
    useState,
    useCallback
} from 'react';
import styles from './style.module.scss';
import { connect } from 'react-redux'
import { getFetchAction } from '../../../action/createAction'
import AwardProgress from '../../../components/AwardProgress'
import getCashWxCode from '../../../common/util/getWxCode.js'
import {
    getData
} from '../../../common/util/network.js'
import {
    isNotEmpty
} from '../../../common/util/util.js'

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
                des: item.status === 1 ? "提现" : "待解锁",
                percent: getNodeProgress(item.node),
                status: item.status === 1 ? "completed" : "unCompleted",
            }
        })
        completedProgress = waitWithdraw ?
            getNodeProgress(waitWithdraw.node - 1) + (getNodeProgress(waitWithdraw.node) - getNodeProgress(waitWithdraw.node - 1)) * parseFloat(percentProgress)
            : 100
        // 进度条数据源
        withdrawProgressMeta = {
            withdrawProgressMetaList,
            completedProgress
        }
    }

    const getBtn = () => {
        // 判断按钮状态
        console.log("waitWithdraw", waitWithdraw)
        if (withdrawList
            && withdrawList.length == 3
            && withdrawList[2].node == 3
            && withdrawList[2].status == 1) {
            // 全部提现完成
            return mapStateToBtnUrl.geryAllWithdrawed
        } else {
            return waitWithdraw && waitWithdraw.status == 0 ? mapStateToBtnUrl.greyWithdraw : mapStateToBtnUrl.redWithdraw
        }

        return mapStateToBtnUrl.redWithdraw
    }

    /**
     * 点击提现
     */
    async function onClickWithdraw() {
        if (getBtn() === mapStateToBtnUrl.redWithdraw) {
            // 可提现
            const { code } = await getCashWxCode()
            alert(code)
            console.log("wxcode", code)

            getData("cash_wx_withdraw", {
                amount: waitWithdraw.amount,
                code: code || "null"
            }).then((res) => {
                if (res && res.bizCode != '0' && isNotEmpty(res.bizMsg)) {
                    alert(res.bizMsg)
                }
                if (isNotEmpty(res && res.result && res.result.amountYuan)) {
                    // 提现成功
                    // 1.展现成功弹窗及ui
                    alert("提现成功")
                    // 2.刷新首页接口                    
                    dispatch({
                        ...getFetchAction({
                            functionId: "cash_exchange_center"
                        }),
                        mock: true
                    })
                }
                console.log("cash_wx_withdraw", JSON.stringify(res))
                // alert("cash_wx_withdraw" + JSON.stringify(res))
            }).catch((reason) => {
                const showMessage = isNotEmpty(reason.msg) ? reason.msg : "活动太火爆，请稍后再试~"
                console.log("cash_wx_withdraw catch", JSON.stringify(reason))
                alert(showMessage)
                // alert("cash_wx_withdraw catch" + JSON.stringify(reason))
            })
        }
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
        <img className={styles.withdrawToWX} src={getBtn()} onClick={onClickWithdraw} />
    </div>
}


export default connect(({ homeData = {} }) => {
    return { homeData }
})(Withdraw)