import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';

import { getSymbolMapperTypes, convertToSymbols } from 'utils/converter';

import { PreviewItem } from './PreviewItem';
import styles from './SelectMapper.module.css';

const MAX_PREVIEW_TEXT_LENGTH = 30;

export type SelectMapperRouteParams = {
  text: string;
};

export const SelectMapper: FC<RouteComponentProps<SelectMapperRouteParams>> = ({
  match: {
    params: { text },
  },
}) => {
  let decodedText = decodeURIComponent(text);
  let previewText = decodedText.substr(0, MAX_PREVIEW_TEXT_LENGTH);

  return (
    <div className={styles.selectMapper}>
      <h1 className={styles.title}>Please select a kind of symbol:</h1>
      {getSymbolMapperTypes().map(type => {
        let convertedText = convertToSymbols(previewText, type);

        return (
          <PreviewItem key={type} className={styles.previewItem}>
            {convertedText}
          </PreviewItem>
        );
      })}
    </div>
  );
};
