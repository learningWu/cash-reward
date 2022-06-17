import React, { useContext } from 'react';
import styles from './style.module.scss';

export default function (props) {
    console.log(props)

    const type2Icon = {
        // 红包
        1: "https://m.360buyimg.com/mobilecal/jfs/t1/108639/35/19822/1926/61613753E38af3791/b94fbfc293a8f193.png",
        // 京豆
        2: "https://m.360buyimg.com/mobilecal/jfs/t1/198615/21/12131/3304/61613753E52858fbd/7bef9fc0ead90a0a.png",
        // 优惠券
        3: "https://m.360buyimg.com/mobilecal/jfs/t1/209450/23/4334/1627/61613753Ecd6310ab/f7947946cd5abcf3.png",
        // 提现
        4: "https://m.360buyimg.com/mobilecal/jfs/t1/160840/7/26710/2900/61613753Eeabee163/c035a46b60c9c828.png",
    }

    const { type, awardName, takeTime } = props

    return <div className={styles.container}>
        <img src={type2Icon[type]} />
        <div className={styles.content}>
            <span className={styles.title}>
                {awardName}
            </span>
            <span className={styles.date}>
                {takeTime}
            </span>
        </div>
        <span className={styles.status}>
            已兑换
        </span>
    </div>
}