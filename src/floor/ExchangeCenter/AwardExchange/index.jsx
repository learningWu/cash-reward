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
import AwardExchangeSwiper from '../../../components/AwardExchangeSwiper'

const AwardExchange = (props) => {
    console.log("AwardExchange", props.rewardExchangePanel)
    const { rewardExchangePanel } = props
    const [activeIndex, setActiveIndex] = useState(0)

    const onTabChange = (index) => {
        console.log("onTabChange", index)
        if (activeIndex !== index) {
            setActiveIndex(index)
        }
    }

    const tabs = rewardExchangePanel && rewardExchangePanel.roundList && rewardExchangePanel.roundList.map((item) => {
        return {
            status: item.status,
            beginTime: item.beginTime
        }
    })

    console.log("tabs", tabs)
    return <div className={styles.container}>
        <div className={styles.header}>
            <span className={styles.rewardChangeText}>奖励兑换</span>
            <Tabs onTabChange={onTabChange} activeIndex={activeIndex} tabs={tabs} />
        </div>
        <AwardExchangeSwiper
            activeIndex={activeIndex}
            onSlideChangeListener={onTabChange}
            rewardExchangePanel={rewardExchangePanel}
        />
    </div>
}
export default connect(({ homeData }) => ({ rewardExchangePanel: homeData.rewardExchangePanel })
)(AwardExchange)