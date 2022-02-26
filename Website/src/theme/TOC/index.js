import OriginalTOC from '@theme-original/TOC';
import EditThisPage from '@theme/EditThisPage';
import React from 'react';
import styles from './styles.module.css';

export default function TOC({ toc, editUrl, ...props }) {
  const isEmpty = toc.length <= 0;

  if (isEmpty) return null;

  return (
    <div className="toc-wrapper">
      <h3>Contents</h3>
      <OriginalTOC toc={toc} {...props} />
      <EditThisPage editUrl="https://github.com/PatelN123/Digital-Support-Notes/edit/main/Website/" />
    </div>
  );
}