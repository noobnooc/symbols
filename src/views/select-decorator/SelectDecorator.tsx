import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';

import { convertToSymbols, SymbolMapperType } from 'utils/converter';
import { PreviewItem } from 'components/preview-item';

import styles from './SelectDecorator.module.css';
import { Link } from 'react-router-dom';
import { getDecorators, decorate } from 'utils/decorate';

const MAX_PREVIEW_TEXT_LENGTH = 30;

export type SelectDecoratorRouteParams = {
  text: string;
  symbolType: SymbolMapperType;
};

export const SelectDecorator: FC<
  RouteComponentProps<SelectDecoratorRouteParams>
> = ({
  match: {
    params: { text, symbolType },
  },
}) => {
  let previewText = text.substr(0, MAX_PREVIEW_TEXT_LENGTH);
  let transformedText = convertToSymbols(previewText, symbolType);

  return (
    <div className={styles.selectMapper}>
      <h1 className={styles.title}>Please select a kind of decorator:</h1>
      {getDecorators().map(decorator => {
        let convertedText = decorate(transformedText, decorator);

        return (
          <Link
            key={decorator}
            className={styles.previewLink}
            to={`/reactive/${symbolType}/${decorator}/${text}`}
          >
            <PreviewItem className={styles.previewItem}>
              {convertedText}
              <div className={styles.decorator}>#{decorator}</div>
            </PreviewItem>
          </Link>
        );
      })}
    </div>
  );
};
