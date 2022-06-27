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
import ExchangeRedBagPop from '../../../components/ExchangeRedBagPop'
import ExchangeRedBagSuccessPop from '../../../components/ExchangeRedBagSuccessPop'
import Modal from '../../../components/Modal'
import {
    getData
} from '../../../common/util/network.js'


const AwardExchange = (props) => {
    // 兑换确认弹框
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(null)
    const cancel = () => {
        setShowModal(false)
    }
    const confirm = (data) => {
        setShowModal(false)
        getData("cash_exchange_sendHongbao", {
            assignmentId: data.assignmentId
        }).then((res) => {
            console.log("cash_exchange_sendHongbao", res)
        }).catch((reason) => {
            console.log("cash_exchange_sendHongbao catch", reason)
            // todo(wzx): 测试
            setshowSuccessModal(true)
        })
    }

    // 兑换成功弹框
    const [showSuccessModal, setshowSuccessModal] = useState(false)
    const toUse = () => {
        setshowSuccessModal(false)
    }

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
            onClickItem={(itemData) => {
                // 展示 modal
                !showModal && setShowModal(true)
                setModalData(itemData)
            }}
        />
        {showModal && <Modal>
            <ExchangeRedBagPop cancel={cancel} confirm={confirm} modalData={modalData} />
        </Modal>}
        {showSuccessModal && <Modal>
            <ExchangeRedBagSuccessPop confirm={toUse} />
        </Modal>}
    </div>
}
export default connect(({ homeData }) => ({ rewardExchangePanel: homeData.rewardExchangePanel })
)(AwardExchange)