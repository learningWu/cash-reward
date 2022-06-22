import React, {
  useContext,
  useEffect
} from 'react';
import styles from './style.module.scss';

const AwardProgress = (props) => {

  const accessAward = [
    {
      percent: 10
    },
    {
      percent: 50
    }
  ]

  const disableAward = [
    {
      percent: 100
    }
  ]



  return (<div className={styles.progressContainer}>
    <div className={styles.amountProgress} />
    <div className={styles.progress} />
    {
      accessAward.map((item) => {
        return <img key={item.percent} src={require('./imgs/red_cycle.png')} style={{ left: `${item.percent}%` }} />
      })
    }
    {
      disableAward.map((item) => {
        return <img key={item.percent} src={require('./imgs/grey_cycle.png')} style={{ left: `${item.percent}%` }} />
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
        return <div className={styles.awardDescribe} style={{ left: `${item.percent}%` }} key={item.text}>
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