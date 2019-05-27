import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';

import { getSymbolMapperTypes, convertToSymbols } from 'utils/converter';

import styles from './SelectMapper.module.css';
import { Link } from 'react-router-dom';
import { PreviewItem } from 'components/preview-item';

const MAX_PREVIEW_TEXT_LENGTH = 30;

export type SelectMapperRouteParams = {
  text: string;
};

export const SelectMapper: FC<RouteComponentProps<SelectMapperRouteParams>> = ({
  match: {
    params: { text },
  },
}) => {
  let previewText = text.substr(0, MAX_PREVIEW_TEXT_LENGTH);

  return (
    <div className={styles.selectMapper}>
      <h1 className={styles.title}>Please select a kind of symbol:</h1>
      {getSymbolMapperTypes().map(type => {
        let convertedText = convertToSymbols(previewText, type);

        return (
          <Link
            key={type}
            className={styles.previewLink}
            to={`/select-decorator/${type}/${text}`}
          >
            <PreviewItem className={styles.previewItem}>
              {convertedText}
              <div className={styles.mapperType}>{type}</div>
            </PreviewItem>
          </Link>
        );
      })}
    </div>
  );
};
