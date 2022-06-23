import React, {
    useEffect,
    useState,
    useCallback
} from 'react';
import styles from './style.module.scss';
import { connect } from 'react-redux'
import { getFetchAction } from '../../../action/createAction'
// import Swiper from '../../../components/Swiper/index.jsx'
import Tabs from '../../../components/tabs/Tabs.jsx'

const AwardExchange = (props) => {

    return <div className={styles.container}>
        <div className={styles.header}>
            <span className={styles.rewardChangeText}>奖励兑换</span>
            <Tabs />
        </div>
    </div>
}
export default AwardExchange