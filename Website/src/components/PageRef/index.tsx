import React, { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

import styles from './styles.module.css';

export default function PageRef({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link to={href} className={clsx(styles.link)}>
      {children}
    </Link>
  );
}
