import React, {
    useEffect,
    useState,
    useCallback
} from 'react';
import ExchangeRecordItem from '../../components/ExchangeRecordItem'
import styles from './style.module.scss';
import {
    getData
} from '../../common/util/network.js'
import { connect } from 'react-redux'
import { getFetchAction } from '../../action/createAction'

class ExchangeRecord extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchList && this.props.fetchList()
    }

    render() {
        return <div className={styles.container}>
            {
                this.props.exchangeAwardList && this.props.exchangeAwardList.map((item) => {
                    return <ExchangeRecordItem {...item} key={item.takeTime} />
                })
            }
            <div className={styles.tip}>展示近50条兑换记录</div>
        </div>
    }
}

const mapStateToProps = ({ exchangeAwardList }) => {
    console.log("mapStateToProps", exchangeAwardList)
    return {
        exchangeAwardList
    }
}

const mapDispatchToProps = dispatch => {
    console.log("mapDispatchToProps", dispatch)
    return {
        fetchList: (params) => dispatch(getFetchAction({
            functionId: "cash_exchange_awardList"
        }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeRecord)
