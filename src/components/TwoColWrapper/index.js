import React from 'react';

import styles from './style.module.scss';

export default ({ list, card, placeholderCard }) => {
  const twoColList = list.reduce(
    (store, current, index) => {
      if (index % 2 === 1) {
        store.right.push(current);
      } else {
        store.left.push(current);
      }
      return store;
    },
    {
      left: [],
      right: [],
    },
  );

  return (
    <div className={styles.twoColWrapper}>
      <div>
        {twoColList.left.map((v) => {
          return card ? card(v) : null;
        })}
      </div>
      <div>
        {twoColList.right.map((v) => {
          return card ? card(v) : null;
        })}
        {list.length % 2 === 1 ? placeholderCard : null}
      </div>
    </div>
  );
};
