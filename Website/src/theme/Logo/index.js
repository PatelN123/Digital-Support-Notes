/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 import React from 'react';
 import Link from '@docusaurus/Link';
 import ThemedImage from '@theme/ThemedImage';
 import useBaseUrl from '@docusaurus/useBaseUrl';
 import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
 import {useThemeConfig} from '@docusaurus/theme-common';
 export default function Logo(props) {
   const {
     siteConfig: {title},
   } = useDocusaurusContext();
   const {
     navbar: {
       title: navbarTitle,
       logo = {
         src: '',
       },
       greydot = {
         src: 'img/dot.png',
       },
     },
   } = useThemeConfig();
   const {imageClassName, titleClassName, ...propsRest} = props;
   const dotClassName = "dot__class"
   const logoLink = useBaseUrl(logo.href || '/');
   const greydotLink = useBaseUrl(greydot.href || '/');
   const sources = {
     light: useBaseUrl(logo.src),
     dark: useBaseUrl(logo.srcDark || logo.src),
   };
   const sourcesdot = {
     light: useBaseUrl(greydot.src),
     dark: useBaseUrl(greydot.srcDark || greydot.src),
   };

   const themedImage = (
     <ThemedImage
       sources={sources}
       height={logo.height}
       width={logo.width}
       alt={logo.alt || navbarTitle || title}
     />
   );
   const themedot = (
     <ThemedImage
       sources={sourcesdot}
       height={logo.height}
       width={logo.width}
       alt={logo.alt || navbarTitle || title}
     />
   );

   return (
     <Link
       to={logoLink}
       {...propsRest}
       {...(logo.target && {
         target: logo.target,
       })}>
       {logo.src &&
         (imageClassName ? (
           <div className={imageClassName}>{themedImage}</div>
         ) : (
           themedImage
         ))}
         {greydot.src &&
         ("dot__class data-canny-changelog" ? (
           <div className={"dot__class data-canny-changelog"}>{themedot}</div>
         ) : (
           themedot
         ))}
       {navbarTitle != null && <b className={titleClassName}>{navbarTitle}</b>}
     </Link>
   );
 }
