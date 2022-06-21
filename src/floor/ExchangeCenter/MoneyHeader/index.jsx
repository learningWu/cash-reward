import React, {
    useEffect,
    useState,
    useCallback
} from 'react';
import styles from './style.module.scss';
import { connect } from 'react-redux'
import { getFetchAction } from '../../../action/createAction'

const MoneyHeader = (props) => {

    return <div>
        我的金额
    </div>
}
export default MoneyHeader