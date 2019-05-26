import React, { FC, useState, useCallback, ChangeEvent } from 'react';
import { RouteComponentProps } from 'react-router';
import Clipboard from 'react-clipboard.js';

import { SymbolMapperType, convertToSymbols } from 'utils/converter';

import styles from './ReactiveEditor.module.css';
import { Card } from 'components/card';
import classNames from 'classnames';

const COPY_SUCCESS_NOTICE_TIMEOUT = 3000;

export type ReactiveEditorParams = {
  symbol: SymbolMapperType;
  text: string;
};

export const ReactiveEditor: FC<RouteComponentProps<ReactiveEditorParams>> = ({
  match: {
    params: { symbol: symbolType, text: originText },
  },
}) => {
  let decodedText = decodeURIComponent(originText);

  let [text, setText] = useState(decodedText);
  let [copySuccess, setCopySuccess] = useState(false);

  let onTextAreaChange = useCallback(
    ({ currentTarget: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
      setText(value);
    },
    [],
  );

  let onCopySuccess = useCallback(() => {
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, COPY_SUCCESS_NOTICE_TIMEOUT);
  }, []);

  let convertedText = convertToSymbols(text, symbolType);

  return (
    <div className={styles.reactiveEditor}>
      <Card className={classNames(styles.mainCard)}>
        <div className={styles.logo}>𝒮𝓎𝓂𝒷ℴ𝓁𝓈</div>
        <textarea
          className={styles.mainCardTextArea}
          id="textarea"
          placeholder="Input your text here."
          value={text}
          onChange={onTextAreaChange}
        />
      </Card>
      <Card className={styles.resultCard}>
        <div className={styles.resultWrapper}>{convertedText || '𝒮𝓎𝓂𝒷ℴ𝓁𝓈'}</div>
        <Clipboard
          className={classNames(styles.copyButton, {
            [styles.copySuccess]: copySuccess,
          })}
          onSuccess={onCopySuccess}
          data-clipboard-text={convertedText}
        >
          {copySuccess ? 'Copy Success' : 'Copy'}
        </Clipboard>
      </Card>
    </div>
  );
};
