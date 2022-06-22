import React, {
  useContext,
  useEffect
} from 'react';
import styles from './style.module.scss';

const AwardProgress = (props) => {
  if (!props) {
    return null
  }
  const {
    withdrawProgressMetaList = [],
    completedProgress = 0,
  } = props.withdrawProgressMeta || {}

  return (<div className={styles.progressContainer}>
    <div className={styles.amountProgress} />
    <div className={styles.progress} style={{ width: `${completedProgress}%` }} />
    {
      withdrawProgressMetaList.map((item) => {
        // 最后 return 使用 () 包裹返回值 ，避免换行出现问题
        return (<img key={item.percent}
          src={
            item.status === 'completed' ? require('./imgs/red_cycle.png') : require('./imgs/grey_cycle.png')
          }
          style={{ left: `${item.percent}%` }} />)
      })
    }
  </div>)
}

const DesProgress = (props) => {
  if (!props) {
    return null
  }
  const { withdrawProgressMetaList = [] } = props.withdrawProgressMeta || {}

  return (<div className={styles.desContainer}>
    {
      withdrawProgressMetaList.map((item) => {
        return <div className={styles.awardDescribe} style={{ left: `${item.percent}%` }} key={item.percent}>
          <span className={styles.moneyHighlight}>
            {item.moneyYuan}
            <span>元</span>
          </span>
          <span className={styles.des}>
            {item.des}
          </span>
        </div>
      })
    }
  </div>)
}

const Container = (props) => {
  const {
    withdrawProgressMeta
  } = props
  return (
    <div className={styles.container}>
      <AwardProgress withdrawProgressMeta={withdrawProgressMeta} />
      <DesProgress withdrawProgressMeta={withdrawProgressMeta} />
    </div>
  )
}

export default Container;