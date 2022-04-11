/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

import cannyScript from './cannyScript';
import clsx from 'clsx';
import styles from './styles.module.css';

const BOARD_TOKEN = 'bfa0a307-6361-68f3-9b03-32b0a754a950';

function FeatureRequests() {
  useEffect(() => {
    cannyScript();
    const Canny = (window as any).Canny;
    Canny('render', {
      boardToken: BOARD_TOKEN,
      basePath: '/feature-requests',
    });
  }, []);

  return (
    <Layout
      title="Feedback"
      description="Digital Support Services Notes Feature Requests page"
    >
      <main
        className={clsx('container', 'margin-vert--lg', styles.main)}
        data-canny
      />
    </Layout>
  );
}

export default FeatureRequests;
