import React, {
  FC,
  useState,
  useCallback,
  ChangeEvent,
  MouseEvent,
} from 'react';
import classNames from 'classnames';

import { Card } from 'components/card';

import styles from './Home.module.css';
import { Button } from 'components/button';
import { Link } from 'react-router-dom';

export const Home: FC = () => {
  let [text, setText] = useState('');

  let onTextAreaChange = useCallback(
    ({ currentTarget: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
      setText(value);
    },
    [],
  );

  let onLinkClick = useCallback(
    (event: MouseEvent) => {
      if (!text) {
        event.preventDefault();
      }
    },
    [text],
  );

  return (
    <div className={styles.home}>
      <div className={styles.main}>
        <Card className={classNames(styles.mainCard)}>
          <div className={styles.logo}>𝒮𝓎𝓂𝒷ℴ𝓁𝓈</div>
          <textarea
            className={styles.mainCardTextArea}
            value={text}
            onChange={onTextAreaChange}
            placeholder="Input your text here..."
          />
        </Card>
        <Link
          className={styles.transformLink}
          onClick={onLinkClick}
          to={`/select-mapper/${encodeURIComponent(text)}`}
        >
          <Button className={styles.transformButton}>
            Transform to symbols
          </Button>
        </Link>
      </div>
    </div>
  );
};
