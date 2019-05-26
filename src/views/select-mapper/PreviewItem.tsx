import React, { FC, MouseEvent } from 'react';
import classNames from 'classnames';

import styles from './PreviewItem.module.css';

export type PreviewItemProps = {
  className?: string;
  onClick?(event: MouseEvent): void;
};

export const PreviewItem: FC<PreviewItemProps> = ({
  className,
  children,
  onClick,
}) => {
  return (
    <div
      className={classNames(styles.previewItem, className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
