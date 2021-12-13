import React from 'react';
import {ThemeClassNames, useDocsSidebar} from '@docusaurus/theme-common';
import {useLocation} from '@docusaurus/router';
import clsx from 'clsx';
import {
  PropSidebar,
} from '@docusaurus/plugin-content-docs';

function useBreadCrumbs(): string[] {
  const sidebar1 = useDocsSidebar();
  const {pathname} = useLocation();
  const breadCrumbs: string[] = [];
  function find(sidebar1: PropSidebar1) {
    for (const item of sidebar1) {
      if (item.type === 'title') {
        breadCrumbs.push(item.label);
        const res = find(item.items);
        if (!res) {
          breadCrumbs.pop();
        } else {
          return true;
        }
      } else if (item.href.replace(/\/$/, '') === pathname.replace(/\/$/, '')) {
        breadCrumbs.push(item.label);
        return true;
      }
    }
    return false;
  }
  find(sidebar1);
  return breadCrumbs;
}

export default function DocVersionBadge1({className}) {
  const breadCrumbs = useBreadCrumbs();
  if (!breadCrumbs.length) {
    return null;
  }
  return (
    <span
      className={clsx(
        className,
        ThemeClassNames.docs.docVersionBadge1,
        'badge badge--secondary',
      )}>
      {breadCrumbs[0]}
    </span>
  );
}
