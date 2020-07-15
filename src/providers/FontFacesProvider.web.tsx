// import React, { FC } from 'react';
// import { FontFacesProviderProps } from './FontFacesProviderProps';
// import { createStyleTags } from '../utilityfunctions/createStyleTags';
// import { createLinkTags } from '../hooks/useLinkTags';

// export const FontFacesProvider: FC<FontFacesProviderProps> = props => {
//   const { children } = props;
//   createStyleTags(props.fontFaces).forEach(style => document.head.appendChild(style));
//   createLinkTags(props.fontFaces).forEach(link => document.head.appendChild(link));
//   return <>{children}</>;
// };
