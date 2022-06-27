import React, {
    useEffect,
    useState,
    useCallback
} from 'react';
import styles from './style.module.scss';
import { connect } from 'react-redux'
import { getFetchAction } from '../../../action/createAction'
import Banner from '../../../components/Banner'

const MoneyHeader = (props) => {

    const {
        canExchangeRedpack,
        canExchangeBeans,
        userMoney,
        headerBanner,
    } = props.headerData

    return <div className={styles.container}>
        <Banner />
        <div className={styles.tip}>{headerBanner && headerBanner[0]}</div>
        <span className={styles.des}>我的金额（元）</span>
        <div className={styles.money}><span>{userMoney}</span>元</div>
    </div>
}

export default connect(({ homeData = {} }) => {
    return {
        headerData: {
            canExchangeRedpack: homeData.canExchangeRedpack,
            canExchangeBeans: homeData.canExchangeBeans,
            userMoney: homeData.userMoney,
            headerBanner: homeData.headerBanner,
        }
    }
})(MoneyHeader)