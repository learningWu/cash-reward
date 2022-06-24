import React, {
    useEffect,
    useState,
    useCallback
} from 'react';
import styles from './style.module.scss';
import { connect } from 'react-redux'
import { getFetchAction } from '../../../action/createAction'
import { Link } from 'react-router-dom'

const NavigatorHeader = (props) => {
    return <div className={styles.container}>
        <Link to="/exchangerecord">
            <img src={require('./imgs/tippic.png')} className={styles.exchangeRecord} />
        </Link>
    </div>
}
export default NavigatorHeader