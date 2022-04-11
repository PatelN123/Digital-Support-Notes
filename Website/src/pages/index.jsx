import React from 'react';
import { Redirect } from '@docusaurus/router';
import Head from '@docusaurus/Head';

export default function Homepage() {
  return (
    <>
      <Head>
        <meta title="Digital Support Services Notes" />
        <meta property="og:title" content="Digital Support Services Notes" />
        <meta
          property="og:description"
          content="An awesome textbook alternative, that you can contribute to! 🚀"
        />
        <meta
          property="description"
          content="An awesome textbook alternative, that you can contribute to! 🚀"
        />
        <link rel="canonical" href="https://notes.nayanpatel/net" />
      </Head>
      <Redirect to="/docs/home/introduction" />
    </>
  );
}
