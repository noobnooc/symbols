import React, { FC } from 'react';
import classNames from 'classnames';

import { Card } from 'components/card';

import styles from './Home.module.css';

export const Home: FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.main}>
        <Card className={classNames(styles.mainCard)}>
          <div className={styles.logo}>𝒮𝓎𝓂𝒷ℴ𝓁𝓈</div>
          <textarea
            className={styles.mainCardTextArea}
            placeholder="Input your text here..."
          />
        </Card>
      </div>
    </div>
  );
};
