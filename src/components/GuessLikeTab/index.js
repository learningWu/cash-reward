import React from 'react';
import styles from './style.module.scss';
import classNames from 'classnames';

export default ({
  tabName,
  active,
  tabBgColor,
  activeTabBgColor,
  tabFontColor,
  activeTabFontColor,
  index,
  activeIndex,
}) => {
  return (
    <div
      className={classNames(styles.tabNav, {
        tabNavActive: active,
      })}
      style={{
        color: active ? activeTabFontColor : tabFontColor,
        background: active ? activeTabBgColor : tabBgColor,
      }}
    >
      <div className={styles.tabNavContent}>{tabName}</div>
      {index === 0 || index - 1 === activeIndex ? null : (
        <div
          className={styles.tabNavLine}
          style={{
            background: tabFontColor,
          }}
        />
      )}
    </div>
  );
};
