import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './Card.module.css';

export type CardProps = {
  className?: string;
};

export const Card: FC<CardProps> = ({ className, children }) => {
  return <div className={classNames(className, styles.card)}>{children}</div>;
};
