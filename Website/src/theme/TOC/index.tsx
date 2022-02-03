import OriginalTOC from '@theme-original/TOC';
import EditThisPage from '@theme/EditThisPage';
import DocsInfo from "@theme/DocItem/DocsInfo";
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
import TOCCollapsible from '@theme/TOCCollapsible';
import { useActivePlugin, useVersions } from "@docusaurus/plugin-content-docs/client";
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {ThemeClassNames, useWindowSize} from '@docusaurus/theme-common';

 //Components
 import DocsRating from "@theme/DocItem/DocsRating";

export default function TOC({ toc, editUrl, ...props }) {

  return (
    <div className="toc-wrapper">
      <h3>Contents</h3>
      <OriginalTOC toc={toc} {...props} />
      <EditThisPage editUrl="https://github.com/PatelN123/Digital-Support-Notes/edit/main/Website/" />
      <DocsInfo/>
    </div>
  );
}
