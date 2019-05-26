import React, { FC, MouseEvent } from 'react';
import classNames from 'classnames';

import styles from './Button.module.css';

export type ButtonProps = {
  className?: string;
  onClick?(event: MouseEvent): void;
};

export const Button: FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button className={classNames(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};
