/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  notes: [
    'Business Context',
    {
      type: 'category',
      label: 'test',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'Organisations',
      ],
    },
  ],
};

module.exports = sidebars;