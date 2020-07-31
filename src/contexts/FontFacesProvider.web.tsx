import React, { PropsWithChildren, useEffect } from 'react';
import { FontFacesProviderProps } from './FontFacesProvider';
import { Helmet } from 'react-helmet';
import { generateInlineStyleSheet } from '../utilities/generateInlineStyleSheet';

/** An implementation for the web that adds an inline style sheet */
export function FontFacesProvider(props: PropsWithChildren<FontFacesProviderProps>) {
  const onLoading = props.onLoading ?? (() => {});
  useEffect(() => onLoading(false), [onLoading]);

  return (
    <>
      <Helmet>
        <style>{generateInlineStyleSheet(props.fontFaces)}</style>
      </Helmet>
      {props.children}
    </>
  );
}
