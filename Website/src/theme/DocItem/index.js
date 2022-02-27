/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 import React, { useEffect, useState } from "react";
 import Head from "@docusaurus/Head";
 import MDXComponents from "@theme/MDXComponents";
 import { MDXProvider } from "@mdx-js/react";
 import { useTitleFormatter } from "@docusaurus/theme-common";
 import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
 import useBaseUrl from "@docusaurus/useBaseUrl";
 import clsx from 'clsx';
 import DocPaginator from '@theme/DocPaginator';
 import DocVersionBanner from '@theme/DocVersionBanner';
 import DocVersionBadge from '@theme/DocVersionBadge';
 import Seo from '@theme/Seo';
 import DocItemFooter from '@theme/DocItemFooter';
 import TOC from '@theme/TOC';
 import DocBreadcrumbs from '@theme/DocBreadcrumbs';
 import TOCCollapsible from '@theme/TOCCollapsible';
 import { useActivePlugin, useVersions } from "@docusaurus/plugin-content-docs/client";
 import Heading from '@theme/Heading';
 import styles from './styles.module.css';
 import {ThemeClassNames, useWindowSize} from '@docusaurus/theme-common';
 import DocsInfo from "@site/src/theme/DocItem/DocsInfo";
 
 
 //Components
 import DocsRating from "./DocsRating";
 
 export default function DocItem(props) {
   const {content: DocContent} = props;
   const {metadata, frontMatter} = DocContent;
   const {
     image,
     keywords,
     hide_title: hideTitle,
     hide_table_of_contents: hideTableOfContents,
     toc_min_heading_level: tocMinHeadingLevel,
     toc_max_heading_level: tocMaxHeadingLevel,
   } = frontMatter;
   const {description, title, unversionedId, editUrl, lastUpdatedAt, lastUpdatedBy } = metadata; // We only add a title if:
   // - user asks to hide it with front matter
   // - the markdown content does not already contain a top-level h1 heading
 
   const shouldAddTitle =
     !hideTitle && typeof DocContent.contentTitle === 'undefined';
   const windowSize = useWindowSize();
   const canRenderTOC =
     !hideTableOfContents && DocContent.toc && DocContent.toc.length > 0;
   const renderTocDesktop =
     canRenderTOC && (windowSize === 'desktop' || windowSize === 'ssr');
   return (
     <>
       <Seo
         {...{
           title,
           description,
           keywords,
           image,
         }}
       />
 
       <div className="row">
         <div
           className={clsx('col', {
             [styles.docItemCol]: !hideTableOfContents,
           })}>
           <DocVersionBanner />
           <div className={styles.docItemContainer}>
             <article>
              <DocBreadcrumbs />
 
               {canRenderTOC && (
                 <TOCCollapsible
                   toc={DocContent.toc}
                   minHeadingLevel={tocMinHeadingLevel}
                   maxHeadingLevel={tocMaxHeadingLevel}
                   className={clsx(
                     ThemeClassNames.docs.docTocMobile,
                     styles.tocMobile,
                   )}
                 />
               )}
 
               <div
                 className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
                 {/*
                 Title can be declared inside md content or declared through front matter and added manually
                 To make both cases consistent, the added title is added under the same div.markdown block
                 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120
                 */}
                 {shouldAddTitle && (
                   <header>
                     <Heading as="h1">{title}</Heading>
                   </header>
                 )}
                 <DocContent />
               </div>
 
               <DocItemFooter {...props} />
             </article>
             <div className="margin-left--none margin-top--md text--center">
               <DocsRating label={unversionedId} />
                </div>
 
             <DocPaginator previous={metadata.previous} next={metadata.next} />
           </div>
         </div>
         {renderTocDesktop && (
           <div className="col col--3">
             <TOC
               toc={DocContent.toc}
               minHeadingLevel={tocMinHeadingLevel}
               maxHeadingLevel={tocMaxHeadingLevel}
               className={ThemeClassNames.docs.docTocDesktop}
             />
           </div>
         )}
       </div>
     </>
   );
 }
 