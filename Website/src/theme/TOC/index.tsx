import OriginalTOC from '@theme-original/TOC';
import EditThisPage from '@theme/EditThisPage';
import React from 'react';

export default function TOC({ toc, editUrl, ...props }) {
  const isEmpty = toc.length <= 0;

  if (isEmpty) return null;

  return (
    <div className="toc-wrapper">
      <p>Contents</p>
      <OriginalTOC toc={toc} {...props} />
      <EditThisPage editUrl="https://github.com/PatelN123/Digital-Support-Notes/edit/main/Website/" />
    </div>
  );
}
