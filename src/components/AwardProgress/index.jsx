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

const DesProgress = () => {

  const awardText = [
    {
      percent: 10,
      text: 2,
      withdrawed: true
    },
    {
      percent: 50,
      text: 10,
      withdrawed: false
    },
    {
      percent: 100,
      text: 100,
      withdrawed: false
    }
  ]

  return (<div className={styles.desContainer}>
    {
      awardText.map((item) => {
        return <div className={styles.awardDescribe} style={{ left: `${item.percent}%` }} key={item.text}>
          <span className={styles.moneyHighlight}>
            {item.text}
            <span>元</span>
          </span>
          <span className={styles.des}>
            {item.withdrawed ? "提现" : "待解锁"}
          </span>
        </div>
      })
    }
  </div>)
}

const Container = (props) => {
  return (
    <div className={styles.container}>
      <AwardProgress />
      <DesProgress />
    </div>
  )
}

export default Container;