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
    'introduction',
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
    {
      type: 'category',
      label: 'Advanced Guides',
      items: ['using-plugins', 'using-themes', 'presets'],
    },
    {
      type: 'category',
      label: 'Migrating from v1 to v2',
      items: [
        'migration/migration-overview',
        'migration/migration-automated',
        'migration/migration-manual',
        'migration/migration-versioned-sites',
        'migration/migration-translated-sites',
      ],
    },
  ],
};

module.exports = sidebars;