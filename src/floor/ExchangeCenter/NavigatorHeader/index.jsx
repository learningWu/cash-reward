import React, {
    useEffect,
    useState,
    useCallback
} from 'react';
import styles from './style.module.scss';
import { connect } from 'react-redux'
import { getFetchAction } from '../../../action/createAction'

const NavigatorHeader = (props) => {

    return <div className={styles.container}>
        <img src={require('./imgs/tippic.png')} className={styles.exchangeRecord} />
    </div>
}
export default NavigatorHeader