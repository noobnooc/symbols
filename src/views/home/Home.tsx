import React, { FC } from 'react';
import classNames from 'classnames';

import logo from 'assets/logo.svg';
import { Card } from 'components/card';

import styles from './Home.module.css';

export const Home: FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.main}>
        <div className={styles.mainCardWrapper}>
          <Card className={classNames(styles.mainCard)}>
            <img className={styles.logo} alt="Symbols logo" src={logo} />
            hello
          </Card>
        </div>
      </div>
    </div>
  );
};
