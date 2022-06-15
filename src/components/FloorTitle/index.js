import React, { useContext } from 'react';
import styles from './style.module.scss';
import { GuesslikeContext } from '../../context';

export default () => {
  const {
    remoteConfig: { floorTitleImg },
  } = useContext(GuesslikeContext);

  if (!floorTitleImg) {
    return null;
  }

  return (
    <div className={styles.floorTitle}>
      <img src={floorTitleImg} alt="" />
    </div>
  );
};
